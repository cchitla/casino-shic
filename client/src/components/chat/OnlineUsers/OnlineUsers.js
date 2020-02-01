import React from 'react';
import { Card } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

const OnlineUsers = (props) => (
  <Card>
    <Card.Header>Online Users</Card.Header>
    <Scrollbars style={{ height: 275, backgroundColor: "#f1c876" }}>
      <Card.Body className="p-1">
        <div className="textContainer">
          {
            props.connectedUsers
              ? (
                <div>
                  <div className="">
                  
                      {props.connectedUsers.map(({ name }) => (
                        <p key={name} className="">
                          {name}
                          {/* <img alt="Online Icon" src={onlineIcon}/> */}
                        </p>
                      ))}
                   
                  </div>
                </div>
              )
              : null
          }
        </div>
      </Card.Body>
    </Scrollbars>

  </Card>
);


export default OnlineUsers;