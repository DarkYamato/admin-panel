
export const REQUESTED_USER = 'REQUESTED_USER';
export const REQUESTED_USER_SUCCEEDED = 'REQUESTED_USER_SUCCEEDED';
export const REQUESTED_USER_FAILED = 'REQUESTED_USER_FAILED';

export const requestUser = () => ({ type: REQUESTED_USER });

export const requestUserSuccess = users => ({ type: REQUESTED_USER_SUCCEEDED, users });

export const requestUserError = () => ({ type: REQUESTED_USER_FAILED });
