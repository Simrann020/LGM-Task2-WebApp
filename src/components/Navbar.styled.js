import styled from "styled-components";



export const Nav = styled.div`
  padding: 1rem 3rem;
  font-size: 20px;
  background-color: #F9F3DF;
  ${'' /* box-shadow: 0px 1px 10px ; */}

  

  .logo {
    font-weight: 700;
    font-family: 'Itim', cursive;
    font-size: 40px;
    color: grey;
    text-shadow: 2px 2px 2px #e5e7eb;
  }

  .btn {
    border: 1px solid #424874;
    color: #424874;
    background-color: white;
    border-radius: 500px;
    font-size: 20px;
    height: fit-content;
    cursor: pointer;
    font-family: 'Itim', cursive;
    
    &:hover {
      background-color: black;
      color: grey;

      
    }
  }
  .get-user-btn {
    vertical-align: middle;
    padding: 5px 12px;
    margin-top: 10px;
  }
`;