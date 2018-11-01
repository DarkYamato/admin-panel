
import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUESTED_USER, REQUESTED_USER_SUCCEEDED, requestUserError } from '../actions';

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
}

function* workerSaga() {
  try {
    const response = yield call(fetchUsers);
    const users = response;

    yield put({ type: REQUESTED_USER_SUCCEEDED, users });
  } catch (error) {
    yield put(requestUserError());
  }
}

export default function* watchFetchUser() {
  yield takeEvery(REQUESTED_USER, workerSaga);
}
