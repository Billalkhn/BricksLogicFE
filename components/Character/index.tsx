import { CardType } from '../../Types';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  Status,
  CharacterName,
  LabelValuePair,
  Label,
  Value,
} from './CardStyles';
import Tilt from 'react-parallax-tilt';
import Accordion from '../Accordtion';

export const Card = ({ title, date, imgUrl, status, info }: CardType) => {
  const isAlive: boolean = status.toLowerCase() === 'alive';

  const labelValuePairs = [
    { label: 'Species', value: info.species },
    { label: 'Type', value: info.type },
    { label: 'Gender', value: info.gender },
    { label: 'Last Location', value: info.lastLocation },
    { label: 'First Episode', value: info.firstEpisode },
  ];

  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CharacterName>{title}</CharacterName>
          <Status isAlive={isAlive}>{status}</Status>
          {labelValuePairs.map((pair, index) => (
            <LabelValuePair key={index}>
              <Label>{pair.label}:</Label>
              <Value>{pair.value}</Value>
            </LabelValuePair>
          ))}
          <Accordion
            name="More Episodes"
            episodes={['Episode 1', 'Episode 2', 'Episode 3', 'Episode 1', 'Episode 2', 'Episode 3']}
          />
        </CardTextWrapper>
      </CardWrapper>
    </Tilt>
  );
};
