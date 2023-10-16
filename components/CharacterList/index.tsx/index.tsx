import Card from '../../Card';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const characterInfo: object = {
  species: 'Alien',
  type: 'Cat-Person',
  gender: 'Male',
  lastLocation: "Mr. Goldenfold's dream",
  firstEpisode: 'Episode 1',
};

export default function CharacterList() {
  const characterData = {
    name: 'Beth Smith',
    gender: 'Female',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    type: '',
    location: {
      name: 'Earth (Replacement Dimension)',
      id: '20',
    },
    episode: [
      {
        id: '6',
        name: 'Rick Potion #9',
      },
      {
        id: '7',
        name: 'Raising Gazorpazorp',
      },
      {
        id: '8',
        name: 'Rixty Minutes',
      },
      {
        id: '9',
        name: 'Something Ricked This Way Comes',
      },
      {
        id: '10',
        name: 'Close Rick-counters of the Rick Kind',
      },
      {
        id: '11',
        name: 'Ricksy Business',
      },
      {
        id: '12',
        name: 'A Rickle in Time',
      },
      {
        id: '14',
        name: 'Auto Erotic Assimilation',
      },
      {
        id: '15',
        name: 'Total Rickall',
      },
      {
        id: '16',
        name: 'Get Schwifty',
      },
      {
        id: '18',
        name: 'Big Trouble in Little Sanchez',
      },
      {
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate',
      },
      {
        id: '20',
        name: "Look Who's Purging Now",
      },
      {
        id: '21',
        name: 'The Wedding Squanchers',
      },
      {
        id: '22',
        name: 'The Rickshank Rickdemption',
      },
      {
        id: '23',
        name: 'Rickmancing the Stone',
      },
      {
        id: '24',
        name: 'Pickle Rick',
      },
      {
        id: '25',
        name: 'Vindicators 3: The Return of Worldender',
      },
      {
        id: '26',
        name: 'The Whirly Dirly Conspiracy',
      },
      {
        id: '27',
        name: 'Rest and Ricklaxation',
      },
      {
        id: '28',
        name: 'The Ricklantis Mixup',
      },
      {
        id: '29',
        name: "Morty's Mind Blowers",
      },
      {
        id: '30',
        name: "The ABC's of Beth",
      },
      {
        id: '31',
        name: 'The Rickchurian Mortydate',
      },
      {
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat',
      },
      {
        id: '33',
        name: 'The Old Man and the Seat',
      },
      {
        id: '34',
        name: "One Crew Over the Crewcoo's Morty",
      },
      {
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty",
      },
      {
        id: '36',
        name: 'Rattlestar Ricklactica',
      },
      {
        id: '38',
        name: 'Promortyus',
      },
      {
        id: '39',
        name: 'The Vat of Acid Episode',
      },
      {
        id: '40',
        name: 'Childrick of Mort',
      },
      {
        id: '41',
        name: 'Star Mort: Rickturn of the Jerri',
      },
      {
        id: '42',
        name: 'Mort Dinner Rick Andre',
      },
      {
        id: '43',
        name: 'Mortyplicity',
      },
      {
        id: '44',
        name: 'A Rickconvenient Mort',
      },
      {
        id: '45',
        name: 'Rickdependence Spray',
      },
      {
        id: '46',
        name: 'Amortycan Grickfitti',
      },
      {
        id: '47',
        name: "Rick & Morty's Thanksploitation Spectacular",
      },
      {
        id: '48',
        name: 'Gotron Jerrysis Rickvangelion',
      },
      {
        id: '49',
        name: 'Rickternal Friendshine of the Spotless Mort',
      },
      {
        id: '51',
        name: 'Rickmurai Jack',
      },
    ],
  };
  return (
    <div className="App">
      <h2>Character List</h2>
      <CardContainer>
        <Card {...characterData} />
      </CardContainer>
    </div>
  );
}
