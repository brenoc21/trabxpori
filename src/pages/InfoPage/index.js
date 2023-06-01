import React from 'react';
import { useParams } from 'react-router-dom';
import drop from "../../assets/drop.svg"
import sun from "../../assets/sun.svg"
import snow from "../../assets/snow.svg"
import { CardRow, Container, PageTitle } from './styles';
import Card from '../../components/card';
import TimeCard from '../../components/TimeCard';

function InfoPage() {
    const { data } = useParams();
    const dataArray = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data"))[data] : null
    
  return (
    <Container> 
        <PageTitle>{data === "umid" ? "Umidade" : "Temperatura"}</PageTitle>
        
        <CardRow>
         {dataArray ? dataArray.length > 0 ? dataArray.reverse().map((e)=> { return <TimeCard time={e.time} icon={data === "umid" ? drop : e.value >= 30 ? sun : snow} value={e.value} media={dataArray.map((e)=> {return e.value}).reduce((total, valor) => total + valor, 0) / dataArray.length} /> }) : null : <PageTitle>Nenhum dado.</PageTitle>}
         </CardRow>
    </Container>
  );
}

export default InfoPage;