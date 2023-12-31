import styled from 'styled-components';

export const CardWrapper = styled.div<{ isExpand: boolean }>`
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: ${({ isExpand }) => (isExpand ? '210px 360px 70px' : '210px 210px 60px')};
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 18px;
  box-shadow: 5px 5px 10px white;
  text-align: center;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: 100% 100%;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const Status = styled.span<{ isAlive: boolean }>`
  color: ${(props) => (props.isAlive ? '#00FF00' : '#FF0000')};
  font-size: 18px;
`;

export const CharacterName = styled.h3`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(110.78deg, rgb(118, 230, 80) 0%, rgb(249, 214, 73) 15%, rgb(98, 216, 249) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: red;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;
export const Value = styled.span`
  background: linear-gradient(to right, rgb(118, 230, 80) 0%, rgb(249, 214, 73) 15%, rgb(98, 216, 249) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const CharacterInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 5px;
  margin-top: 10px;
  font-size: 14px;
  color: white;
  p {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;

export const LabelValuePair = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  text-align: right;
`;

export const Label = styled.span`
  font-weight: bold;
  color: white;
  text-align: left;
`;
