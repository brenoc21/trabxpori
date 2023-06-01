import React, { useState, useEffect } from "react";
import mqtt from "mqtt/dist/mqtt";
import TemperatureChart from "../../components/grafico";
import Card from "../../components/card";
import sun from "../../assets/sun.svg";
import drop from "../../assets/drop.svg";
import cloud from "../../assets/cloud.svg";
import mock from "../../mock.json";
import snow from "../../assets/snow.svg";
import wind from "../../assets/wind.svg";
import { getCurrentDate } from "../../utils/getCurrentDate";
import {
  Button,
  CardContainer,
  Container,
  TitleColumn,
  Title,
  ButtonRow,
  Header,
  HeaderTitle,
  HeaderSub,
} from "./styles";
import api from "../../services/api";
import Switch from "../../components/switch";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  const [lastMessage, setLastMessage] = useState("");
  const [umidStore, setUmidStore] = useState(localStorage.getItem("data") ? 
    JSON.parse(localStorage.getItem("data")).umid : []
  );
  const [tempStore, setTempStore] = useState(localStorage.getItem("data") ?
    JSON.parse(localStorage.getItem("data")).temp : []
  );
  const [tempMedia, setTempMedia] = useState(
    tempStore.length > 0
      ? tempStore.map((e)=> {return e.value}).reduce((total, valor) => total + valor, 0) / tempStore.length
      : 0
  );
  const [umidMedia, setUmidMedia] = useState(
    umidStore.length > 0
      ? umidStore.map((e)=> {return e.value}).reduce((total, valor) => total + valor, 0) / umidStore.length
      : 0
  );
  const [response, setResponse] = useState(mock);
  const teste = "aiaiai";
  function getMedia(temp, umid) {
    setTempMedia(
      temp.reduce((total, valor) => total + valor, 0) / tempStore.length
    );
    setUmidMedia(
      umid.reduce((total, valor) => total + valor, 0) / umidStore.length
    );
  }
  // useEffect(()=> {
  //   api.get().then((res)=> {setResponse(res.data)})
  // }, [])
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("data")));
  }, []);
  useEffect(() => {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    client.on("connect", () => {
      console.log("Conectado ao broker MQTT");
      client.subscribe("esp32/gabriel/temp");
      client.publish("esp32/gabriel/temp", JSON.stringify(teste));
    });

    client.on("message", (topic, message) => {
      if (JSON.parse(message).temp && JSON.parse(message).umid) {
        setLastMessage(JSON.parse(message));
        tempStore.push({value:JSON.parse(message).temp, time: getCurrentDate(" ")});
        umidStore.push({value:JSON.parse(message).umid, time: getCurrentDate(" ")});
        localStorage.setItem(
          "data",
          JSON.stringify({ temp: tempStore, umid: umidStore })
        );
        getMedia(tempStore.map((e)=> {return e.value}), umidStore.map((e)=> {return e.value}));
      }
    });

    client.on("close", () => {
      console.log("Connection closed by client");
    });

    client.on("reconnect", () => {
      console.log("Client trying a reconnection");
    });

    client.on("offline", () => {
      console.log("Client is currently offline");
    });

    return () => {
      client.end();
    };
  }, []);

  function turnOn() {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    client.on("connect", () => {
      client.publish("esp32/gabriel/temp", JSON.stringify(1));
    });
  }
  function turnOff() {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    client.on("connect", () => {
      client.publish("esp32/gabriel/temp", JSON.stringify(0));
    });
  }
  return (
    <Container>
      <Header>
        <HeaderTitle>
          {getCurrentDate(" ").split(" ")[1]}{" "}
          {getCurrentDate(" ").split(" ")[2]}
        </HeaderTitle>
        <HeaderSub>
          {getCurrentDate(" ").split(" ")[3]},{" "}
          {getCurrentDate(" ").split(" ")[1]}{" "}
          {getCurrentDate(" ").split(" ")[2]},{" "}
          {getCurrentDate(" ").split(" ")[0]}
        </HeaderSub>
      </Header>
      <TitleColumn>
        <Title>Visão Geral</Title>
        <Switch turnOn={turnOn} turnOff={turnOff} />
        <CardContainer>
          <Card
            icon={tempStore.length> 0 ? tempStore[tempStore.length - 1].value <= 30 ? snow : sun : snow}
            value={ tempStore.length> 0 ? tempStore[tempStore.length - 1].value : 0}
            media={tempMedia}
            title={"Temperatura"}
            medida={"°C"}
            onClick={()=> navigate("/temp")}
          />
          <Card
            icon={drop}
            value={umidStore.length> 0 ? umidStore[umidStore.length - 1].value : 0}
            media={umidMedia}
            title={"Umidade"}
            medida={"g/m³"}
            onClick={()=> navigate("/umid")}
          />
          <Card
            icon={cloud}
            value={response.results.forecast[0].rain}
            media={0}
            title={"Chuva"}
            medida={"mm"}
          />
          <Card
            icon={wind}
            value={parseFloat(
              response.results.forecast[0].wind_speedy.split(" ")[0]
            )}
            media={0}
            title={"Vento"}
            medida={"km/h"}
          />
        </CardContainer>
      </TitleColumn>

      <CardContainer>
        <TemperatureChart
          name={"Temperatura"}
          value={tempStore}
        ></TemperatureChart>
      </CardContainer>
      <CardContainer>
        <TemperatureChart name={"Umidade"} value={umidStore}></TemperatureChart>
      </CardContainer>
      {/* <ButtonRow>
      <Button id="liga" color='#41844C' onClick={()=> {turnOn()}}>On</Button>
      <Button id="desliga" color='#C14A4A' onClick={()=> {turnOff()}}>Off</Button>
      </ButtonRow> */}
      
    </Container>
  );
}

export default Home;
