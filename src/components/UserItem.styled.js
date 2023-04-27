import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  height: 150px;
  /* border: 1px solid; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #DBD0C0;
  flex-wrap: nowrap;
  border: 3px solid #DBD0C0;
  font-family: 'Itim', cursive;

  & .avatar-img,
  & .avatar-img img {
    height: 150px;
    width: 150px;
    vertical-align: middle;
  }

  & .data {
    padding: 1rem;
    text-align: left;
    vertical-align: middle;
    line-height: 20px;
  }
  & .data .username {
    margin: 5px auto;
    color: grey;
  }
  & .data .useremail {
    margin: 5px auto;
    font-size: 18px;
    word-break: break-all;
    color: grey;
  }
`;