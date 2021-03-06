import styled from "styled-components";
import { typeColor } from "../../constants/typeColor";

export const CardPokemon = styled.div`
  background: ${(props) => typeColor[props.type]};
  display: flex;
  flex-direction: column;
  height: 50vh;

  img {
    align-self: center;
    width: 24%;
  }

  h1 {
    align-self: center;
    font-style: italic;
    font-size:3rem;
  }

  h4 {
    align-self: flex-end;
    margin-right: 4rem;
    cursor: pointer;
    color: #ffffff;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {

    width:100vw;

    img{
    width: 18rem;
    height: 18rem;
    }

    h1{
      font-size: 3rem;
      margin-top: 100px;
    }

} 

`;

export const TypeButton = styled.div`
  background: ${(props) => typeColor[props.type]};
  border-radius: 12px;
  width: 9rem;
  height: 2.2rem;
  margin-right: 0.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
margin: 5px;

  p {
    color: #ffffff;
  }
`;

export const StatsArea = styled.div`
  display: grid;
  grid-template-columns: 24% 10% 66%;
  grid-gap: 0.1rem;
  width: 37rem;
  align-content: end;
  p {
    margin: 0.6rem 0.5rem;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    p{
    width:100vw;
    }
   
    




  }  
`;

export const StatsItem = styled.div`
  width: 60%;
  background: #f0f0f0;
  height: 0.6rem;
  position: relative;
  top: 0.8rem;
  border-radius: 0.5rem;

  :after {
    content: "";
    height: 0.6rem;
    width: ${(props) => props.baseStat + "%"};
    background: ${(props) => typeColor[props.type]};
    position: absolute;
    border-radius: 0.5rem;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    width:20%;

`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    h1 {
      font-size: 1.4rem;
      font-weight: 400;
      text-align: center;
    }
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    flex-direction:column;
    width:100vw;

  }  
`;

export const TypesContainer = styled.div`
  margin-right: 50rem;
  div {
    display: flex;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100vw;
  }  
`;

export const MovesContainer = styled.div`
  margin-right: 50rem;

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100vw;
    padding-top:10px;
  }  
`;

export const StatsContainer = styled.div`
  position: absolute;
  left: 62vw;

  @media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content:center;
    left:0px;
    width:100vw;
    font-size:15px;
    padding:0px;
  }
`;

export const DivMaior = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    width:100vw;
} 
`

export const DivMoves = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 600px)  {
    padding-top:180px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    width:100vw;

} 
`
