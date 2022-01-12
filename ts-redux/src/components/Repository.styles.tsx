import styled, {css} from "styled-components";
import {colors} from "./variables";

export const InputContainer = styled.input.attrs(({placeholder}) => {
    return {
        placeholder: placeholder || "enter a package name"
    }
})`
  display: block;
  padding: .5rem 2rem;
  font-size: 1.6rem;
  font-weight: 200;
  margin: 1rem 1rem;
  border-radius: .4rem;
  border: 1px solid ${colors.colorPrimary};

  &:focus {
    box-shadow: 0.1rem .1rem .3rem ${colors.colorPrimary};

  }
`

const commonWrapper = css`

  border: 1px solid ${colors.colorPrimary};
  border-radius: .3rem;
  padding: 4rem;
  width: 85vw;
  margin: 4rem auto;
  background-color: #ffffff;
`
export const FormContainer = styled.form`
  ${commonWrapper}
`

export const CustomButton = styled.button`

  border: none;
  padding: .6rem 2rem;
  display: inline-block;
  cursor: pointer;
  color: ${colors.colorGrayLight};
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  border-radius: .3rem;
  font-weight: 900;
  letter-spacing: .1rem;
  margin-left: 1rem;
`
export const ItemContainer = styled.div`
  border-radius: .3rem;
  margin: 1rem 1rem;
  padding: 1rem;
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  font-size: 1.6rem;
  color: ${colors.colorGrayLight};
`
export const ContentWrapper = styled.div`
  ${commonWrapper}
`