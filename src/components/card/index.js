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
} from "./styles";

function Card({ icon, value, title, media, medida, onClick }) {
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
  return (
    <Container onClick={onClick}>
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

export default Card;
