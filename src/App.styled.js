import styled from 'styled-components'
import { Nav } from './components/Navbar.styled';


export const AppContainer = styled.div`
  background-color: #F9F3DF;
  height : ${`${window.innerHeight}px`}; 
`;

export const ShowMore = styled(Nav)`
  text-align: center;
  background-color: #F9F3DF;
  padding-bottom: 30px;

  .btn {
    padding: 8px 20px;
    margin-top: 0px;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
  }
`;