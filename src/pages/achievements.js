import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  background-color: ${(props) => props.theme.back_color};
  color: ${(props) => props.theme.txt_color};
  padding-top: 50px;
  padding-bottom:20px;
`;
const H2_stl = styled.h2`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const Achmts_text = styled.p`
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

class Achievements extends React.Component {
  render() {
    const { medals, cups, goals } = this.props.achievements;
    return (
      <AchievementsContainer>
        <H2_stl>Club achievements</H2_stl>
        <Achmts_text>Medals: {medals}</Achmts_text>
        <Achmts_text>Cups: {cups}</Achmts_text>
        <Achmts_text>Goals scored: {goals}</Achmts_text>
      </AchievementsContainer>
    );
  }
}
export default Achievements;
