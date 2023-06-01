import React from "react";
import arrowup from "../../assets/arrowup.svg";
import minus from "../../assets/minus.svg";
import arrowdown from "../../assets/arrowdown.svg";
import {
  Container,
  Icon,
  TextColumn,
  Value,
  Title,
  TextRow,
  Media,
  DifferenceContainer,
  MinorIcon,
  Medida,
  Date,
} from "./styles";

function TimeCard({ icon, value, title, media, medida, onClick, time }) {
  const difference = value - media;
  function getIcon(dif) {
    switch (true) {
      case dif === 0:
        return minus;
      case dif > 0:
        return arrowup;
      case dif < 0:
        return arrowdown;
      default:
        return minus;
    }
  }
  const timeToFormat = time.split(" ")
  const formatTime = `${timeToFormat[4]} ${timeToFormat[0]}/${timeToFormat[1]}`
  return (
    <Container onClick={onClick}>
        <Date>{formatTime}</Date>
      <Icon src={icon} />
      <TextRow>
        <TextColumn>
          <Title>{title}</Title>
          <Value>
            {parseFloat(value).toFixed(1)} <Medida>{medida}</Medida>
          </Value>
        </TextColumn>
        <DifferenceContainer>
          <MinorIcon src={getIcon(difference)} />
          <Media>{difference.toFixed(1)}</Media>
        </DifferenceContainer>
      </TextRow>
    </Container>
  );
}

export default TimeCard;
