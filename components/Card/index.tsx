import { CardType } from '../../Types';
import { CardWrapper, CardImage, CardTextWrapper, CharacterName, LabelValuePair, Label, Value } from './CardStyles';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import Accordion from '../Accordation';

const Card = (props: any) => {
  const labelValuePairs = [
    { label: 'Gender', value: props.gender },
    { label: 'Species', value: props.species },
    { label: 'Last Location', value: props.location.name },
    { label: 'First Episode', value: props?.episode[0].name },
  ];

  const [isExpand, setIsExpand] = useState(false);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const episodes = [props.episode[0], ...props.episode.slice(1)];

  return (
    <Tilt tiltEnable={!isExpand}>
      <CardWrapper isExpand={isExpand}>
        <CardImage background={props.image} />
        <CardTextWrapper>
          <CharacterName>{props.name}</CharacterName>
          {labelValuePairs.map((pair, index) => (
            <LabelValuePair key={index}>
              <Label>{pair.label}:</Label>
              <Value>{pair.value}</Value>
            </LabelValuePair>
          ))}
          <Accordion
            name="More Episodes"
            episodes={episodes.map((ep) => ep.name)}
            isExpand={isExpand}
            toggleExpand={toggleExpand}
          />
        </CardTextWrapper>
      </CardWrapper>
    </Tilt>
  );
};

export default Card;
