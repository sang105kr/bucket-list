import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: orange;
  width:100%;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  padding:5px;
  font-weight: bold;
`;

const LineButton = ({text,onPressOut})=>{
  return (
    <StyledTouchableOpacity onPressOut={onPressOut}>
        <StyledText>{text}</StyledText>
    </StyledTouchableOpacity>
  );
}

LineButton.propTypes = {
  text:PropTypes.string.isRequired,
  onPressOut:PropTypes.func.isRequired
}

export default LineButton;