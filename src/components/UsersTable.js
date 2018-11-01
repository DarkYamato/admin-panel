import React, { Component } from 'react';
import { Table, Menu, Sidebar } from 'semantic-ui-react';
import { Map, Marker } from 'yandex-map-react';
import styled from 'styled-components';

const Section = styled.section`
    transition: transform .5s ease;
`;

const Dimmed = styled.div`
    position: relative;
    z-index: 2;
    &::after {
        position: fixed;
        top: 0;
        right: 0;
        content: '';
        background-color: rgba(0,0,0,.4);
        width: ${props => (props.dimmed ? '100%' : 'auto')};
        height: ${props => (props.dimmed ? '100%' : 'auto')};
    };
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    border-bottom: 1px solid rgb(45, 47, 49);
    padding: .92857143em 1.14285714em;
`;

const Title = styled.h1`
    font-size: 16px;
`;

const Subtitle = styled.span`
    font-size: 15px;
    font-weight: 700;
`;

const Tr = styled.tr`
    cursor: pointer;
    &:hover {
        background: rgb(240, 242, 243);
    }
`;

const Th = styled.th`
    background: rgb(240, 242, 243)!important;
`;

class UsersTable extends Component {
    state = {
      visible: false,
      index: 0,
    }

    handleShowClick = (i) => {
      this.setState({ visible: true, index: i });
    }

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
      const { visible, index } = this.state;
      const { users } = this.props;
      const user = users[index];
      return (
        <div>
          <Section>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              style={{ width: '20%' }}
            >
              <MenuItem>
                <Title>Username</Title>
                {' '}
                <div>{user.username}</div>
              </MenuItem>
              <MenuItem>
                <Title>Name</Title>
                <div>{user.name}</div>
              </MenuItem>
              <MenuItem>
                <Title>Phone</Title>
                <div>
                  {' '}
                  {user.phone}
                </div>
              </MenuItem>
              <MenuItem>
                <Title>Website</Title>
                <div>
                  {' '}
                  {user.website}
                </div>
              </MenuItem>
              <MenuItem>
                <Title>Company</Title>
                <div>
                  <div>
                    <Subtitle>Name:</Subtitle>
                    {' '}
                    {user.company.name}
                  </div>
                  <div>
                    <Subtitle>Slogan:</Subtitle>
                    {' '}
                    {user.company.catchPhrase}
                  </div>
                  <div>
                    <Subtitle>BS:</Subtitle>
                    {' '}
                    {user.company.bs}
                  </div>
                </div>
              </MenuItem>
              <MenuItem>
                <Title>Address</Title>
                <div>
                  <div>
                    <Subtitle>Street:</Subtitle>
                    {' '}
                    {user.address.street}
                  </div>
                  <div>
                    <Subtitle>Suite:</Subtitle>
                    {' '}
                    {user.address.suite}
                  </div>
                  <div>
                    <Subtitle>City:</Subtitle>
                    {' '}
                    {user.address.city}
                  </div>
                  <div>
                    <Subtitle>Zipcode:</Subtitle>
                    {' '}
                    {user.address.zipcode}
                  </div>
                </div>
              </MenuItem>
              <MenuItem>
                <Map width={260} height={260} center={[+user.address.geo.lat, +user.address.geo.lng]} zoom={10}>
                  <Marker lat={+user.address.geo.lat} lon={+user.address.geo.lng} />
                </Map>
              </MenuItem>
            </Sidebar>
            <Dimmed dimmed={visible}>
              <Table style={{ borderRadius: 0 }} celled>
                <Table.Header>
                  <Table.Row>
                    <Th>Id</Th>
                    <Th>Name</Th>
                    <Th>Username</Th>
                    <Th>Email</Th>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.props.users.map((x, i) => (
                    <Tr disabled={visible} onClick={() => this.handleShowClick(i)} key={x.id}>
                      <Table.Cell>{x.id}</Table.Cell>
                      <Table.Cell>{x.name}</Table.Cell>
                      <Table.Cell>{x.username}</Table.Cell>
                      <Table.Cell>{x.email}</Table.Cell>
                    </Tr>
                  ))}
                </Table.Body>
              </Table>
            </Dimmed>
          </Section>
        </div>
      );
    }
}

export default UsersTable;
