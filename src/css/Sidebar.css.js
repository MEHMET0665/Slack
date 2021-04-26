import styled from'styled-components'

export const Container = styled.div`
background: #3f0e40;
`;
export const WorkspaceContainer = styled.div`
color: white;
height: 64px;
display: flex;
align-items: center;
padding-left: 19px;
justify-content: space-between;
border-bottom: 1px solid #532753;
`;
export const Name = styled.div``;
export const NewMessage = styled.div`
width: 36px;
height: 36px;
background: white;
border-radius: 50%;
color: #3f0e40;
fill: #3f0e40;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`;
export const MainChannels = styled.div`
padding-top: 20px;
`;
export const MainChannelItem = styled.div`
color: rgb(188, 171, 188);
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover{
  background:#350D36;
}
`;
export const ChannesContainer = styled.div`
color: rgb(188, 171, 188);
margin-tap: 10px;
`;
export const NewChannelContainer = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
height: 28px;
padding-left: 19px;
`;
export const ChannelsList = styled.div`
`
export const Channel = styled.div`
height: 28px;
padding-left: 19px;
padding-right: 12px;
display: flex;
align-items: center;
cursor: pointer;
:hover{
background:#350D36;
}
`
