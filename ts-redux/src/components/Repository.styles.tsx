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
  margin: 1rem 0;
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
  
  backdrop-filter: blur( 11px );
  -webkit-backdrop-filter: blur( 11px );
  background: rgba( 94, 193, 127, 0.2 );
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
  
`
export const ItemContainer = styled.div`
  border-radius: .3rem;
  margin: 1rem 0rem;
  width: clamp(200px,60%,500px);
  
  padding: 1rem;
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  font-size: 1.6rem;
  color: ${colors.colorGrayLight};
`
export const ContentWrapper = styled.div`
  ${commonWrapper}
`
export const HeaderSecondaryContainer = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(2rem, 3rem, 6rem);
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  background-clip: text;
  -webkit-background-clip:text;
  color: transparent;
  letter-spacing: .3rem;
  font-weight: 900;
`

export const ErrorContainer = styled.p`
  font-size: 2rem;
  font-weight: 200;
  color: ${colors.colorWhite};
  background-color: red;
  text-align: center;
  border-radius: 0.3rem;
  letter-spacing: 0.1rem;
  

`