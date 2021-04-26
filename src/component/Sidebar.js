import React from "react";
import {Container,WorkspaceContainer,Name,NewMessage,MainChannels,MainChannelItem,NewChannelContainer,ChannelsList,Channel,ChannesContainer} from '../css/Sidebar.css'
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import {useHistory} from 'react-router-dom'

function Sidebar(props) {
  // console.log(props)
  const history=useHistory()
  const goToChannel=(id)=>{
if(id){
  console.log(id)
history.push(`/room/${id}`)
}
  }
  const addChannel=()=>{
    const promptName=prompt('Enter channel name')
    if (promptName){
      db.collection('rooms').add({
        name:promptName
      })
    }
    //  console.log(promptName)
  }
  return (
    <Container>
      <WorkspaceContainer>
        <Name>My Program</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannesContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel}/>
        </NewChannelContainer>
        <ChannelsList>

        </ChannelsList>
          {
            props.rooms.map(item=>(
          <Channel onClick={()=>goToChannel(item.id)}>
            #{item.name}
          </Channel>
            ))
          }
      </ChannesContainer>
    </Container>
  );
}

export default Sidebar;

