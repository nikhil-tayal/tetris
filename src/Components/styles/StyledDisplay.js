import styled from "styled-components";
export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
`;

export const StyledButton = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  min-height: 30px;
  width: 100%;
  padding:20px;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  cursor: pointer;
`;
