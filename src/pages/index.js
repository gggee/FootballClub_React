import React from 'react';
import image from "./img/rlm.png"
import styled from 'styled-components';

const ClubInfoContainer = styled.div`
  background-color: ${(props) => props.theme.back_color};
  color: ${(props) => props.theme.txt_color};
  padding: 30px;
`;
const ImgStyle = styled.img`
    width: 250px;
    height: 250px;
    float: none;
    border-radius: 20px;
`;
const Info_text = styled.p`
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

class Club_info extends React.Component {
  render() {
    const { name, city, founded } = this.props.clubData;
    return (
      <ClubInfoContainer>
          <h1>{name}</h1>
          <ImgStyle src={image} alt="Club crest" />
          <Info_text>City: {city}</Info_text>
          <Info_text>Date of foundation: {founded}</Info_text>
      </ClubInfoContainer>
    );
  }
}
export default Club_info;
