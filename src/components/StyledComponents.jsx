import styled from "styled-components";

const StyledComponents = () => {
  return (
    <SContaienr>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContaienr>
  )
}

export default StyledComponents

const SContaienr = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const STitle = styled.p`
  margin: 0;
  color: #b14498;
`
const SButton = styled.button`
  background-color: #ec62d7;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #ab3f7f;
    color: #fff;
    cursor: pointer;
  }
`
