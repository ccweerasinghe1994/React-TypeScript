import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px solid rgba(245, 82, 7, 0.5);
  padding: 2rem;
  margin: 5rem;
  border-radius: 3px;
`;
export const Header = styled.h3`
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 3px;
  color: #1615159d;
`;

export const CustomInput = styled.input.attrs((props) => {
  return {
    placeholder: props.placeholder || "enter a value",
  };
})`
  display: block;
  padding: 0.5rem 2rem;
  border: 1px solid orange;
  font-family: inherit;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  width: 70%;
`;

export const CustomButton = styled.button`
  $primary-color: rgba(245, 82, 7, 0.5);
  border: none;
  background-color: aliceblue;
  border: 1px solid #0e9dd62f;
  color: #1615159d;
  cursor: pointer;
  transition: all 0.3s ease-out;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border-radius: 3px;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: 1px;
  &:hover {
    transform: scale(1.03) translateY(-1px);
    box-shadow: 0px 3px 10px rgba(245, 82, 7, 0.5);
  }
  &:active {
    transform: scale(1) translateY(0px);
    box-shadow: 0px 3px 5px rgba(245, 82, 7, 0.5);
  }
`;
export const ListContainer = styled.ul`
  list-style: decimal;
  margin-top: 1rem;
  li {
    background-color: rgba(22, 137, 238, 0.103);
    padding: 0.4rem 0rem;
    margin-bottom: 1rem;
    width: 70%;
  }
`;

export const ErrorContainer = styled.p`
  color: #fff;
  background-color: #ff0000b9;
  width: fit-content;
  margin: auto;
  padding: 0.5rem 9rem;
  border-radius: 3px;
  letter-spacing: 2px;
`;
