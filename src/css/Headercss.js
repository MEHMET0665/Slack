import styled from'styled-components'

export const Container=styled.div`
display:flex;
background:#350d36;
color:white;
align-items:center;
justify-content:center;
position:relative;
box-shadow:0 1px 0 0 rgb(255 255 255/10%);

`
export const Main=styled.div`
display:flex;
margin-left:16px;
margin-right:16px;

`
export const SearchContainer=styled.div`
min-width:  400px;
margin-left:16px;
margin-right:16px;
`
export const Search=styled.div`
box-shadow:inset 0 0 0 1px rgb(104 74 104);
width:100%;
border-radius:6px;
display:flex;
align-items:center;
input{
 background:transparent;
 border:none; 
 padding-left: 8px;
 padding-right: 8px;
 padding-top:4px;
 padding-bottom:4px;
 color:white;
}
input:focus{
  outline:none;
}
`
export const UserContainer=styled.div`
display:flex;
align-items:center;
padding-right: 16px;
position:absolute;
right:0;
` 
export const Name=styled.div`
padding-right: 16px;
`
export const UserImage=styled.div`
width:28px;
height:28px;
border:2px solid white;
border-radius:3px;
img{
  width:100%;
}
cursor:pointer;
`