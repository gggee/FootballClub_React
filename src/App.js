import React from 'react';
import Club_info from './pages';
import Achievements from './pages/achievements';
import LineUp from './pages/lineUp';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

const getRandomTheme = () => {
  const backColors = ['#74DBFF', '#92D4EC', '#03A6E1', '#03739C', '#E8EAEB'];
  const txtColors = ['#FFFFFF', '#000000', '#333333', '#FFE824'];

  const rnd_back_color = backColors[Math.floor(Math.random() * backColors.length)];
  const rnd_txt_color = txtColors[Math.floor(Math.random() * txtColors.length)];

  return {
    back_color: rnd_back_color,
    txt_color: rnd_txt_color,
  };
};

const AppContainer = styled.div`
margin: auto;
text-align: center;
`

class App extends React.Component {
  render() {
    const clubData = {
      name: 'Real Madrid',
      city: 'Madrid (Spain)',
      founded: 'March 6, 1902',
    };

    const achievements = {
      medals: 65,
      cups: 32,
      goals: 70000,
    };

    const squad = ['Andrey Lunin', 'Diego Pinheiro', 'Kepa Arrizabalaga',
      'Lucas Cañizares', 'Thibaut Courtois', 'Fran Gonzalez',
      'Lucas Vazquez', 'Daniel Carvajal', 'David Alaba',
      'Vinicius Tobias', 'Antonio Rudiger', 'Dani Ceballos',
      'Gonzalo', 'Vinicius Junior', 'Brahim Diaz',
      'Arda Guler', 'Eder Militao', 'Fran Garcia',
      'Ferland Mendy', 'Nacho', 'Jude Bellingham'];

    const theme = getRandomTheme();

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Club_info clubData={clubData} />
          <Achievements achievements={achievements} />
          <LineUp squad={squad} />
        </AppContainer>
      </ThemeProvider>
    );
  }
}
export default App;