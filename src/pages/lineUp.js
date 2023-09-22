import React from 'react';
import styled from 'styled-components';

const LineUpContainer = styled.div`
  background-color: ${(props) => props.theme.back_color};
  color: ${(props) => props.theme.txt_color};
  padding-top: 60px;
`;
const H2_stl= styled.h2`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const List_stl =styled.li`
  list-style: none;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
class LineUp extends React.Component {
  render() {
    const { squad } = this.props;
    return (
      <LineUpContainer>
        <H2_stl>Current team composition</H2_stl>
        <ul>
          {squad.map((player, index) => (
            <List_stl key={index}>{player}</List_stl>
          ))}
        </ul>
      </LineUpContainer>
    );
  }
}

export default LineUp;
