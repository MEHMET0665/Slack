import React from 'react'
// import styled from'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import {Container,Main,SearchContainer,Search,UserContainer,Name,UserImage} from'../css/Headercss'
function header(props) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpIcon />
      </Main>
      <UserContainer>
        <Name>{props.user.name}</Name>
        <UserImage onClick={props.signOut}>
          <img src={props.user.photo ? props.user.photo:"https://i.imgur.com/6VBx3io.png"} />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default header

