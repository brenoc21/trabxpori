import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
align-items: center;
max-width: 600px;
width: 100%;
height: 100%;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
display: flex;
flex-direction: column;
gap: 2rem;

`
export const Button = styled.button`
width: 120px;
height: 40px;
background-color: ${Props => `${Props.color}`};
border: none;
outline: none;
color: white;
box-shadow: 2px 2px 0px rgba(0,0,0, 0.2);
:hover{
    cursor: pointer;
    filter: brightness(0.95);
}
`
export const CardContainer = styled.div`
gap: 20px;
display: flex;
width: 100%;
flex-wrap:wrap;
align-items: center;
justify-content: center;
`
export const TitleColumn = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
`
export const Title = styled.p`
color: #222E6A;
font-weight: 600;
`
export const ButtonRow = styled.div`
display: flex;
gap: 10px;

`
export const Header = styled.div`
width: 100%;
padding: 20px;
border-bottom: 1px solid rgba(0,0,0, 0.2);
display: flex;
flex-direction: column;
`
export const HeaderTitle = styled.h1`
color: #222E6A;
font-size: 30px;
font-weight: 600;
font-family: "Poppins";
`
export const HeaderSub = styled.h2`
color: #222E6A;
font-size: 16px;
font-weight: 400;
font-family: "Poppins";

`

export const Footer = styled.div`
width: 100%;
padding: 20px;
border-top: 1px solid rgba(0,0,0, 0.2);
display: flex;
flex-direction: row;
font-size: 12px;
align-items: center;
justify-content: center;
`
export const Bold = styled.div`
font-weight: bold;
`