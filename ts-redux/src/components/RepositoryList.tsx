import React, {useState} from "react";
import {useTypeSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/userActions";
import styled, {css} from "styled-components";
import {colors} from './variables';
import {ContentWrapper, CustomButton, FormContainer, InputContainer, ItemContainer} from "./Repository.styles";


export const HeaderSecondaryContainer = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(2rem, 3rem, 6rem);
  background-image: linear-gradient(to right, ${colors.colorPrimaryDark}, ${colors.colorPrimaryLight});
  background-clip: text;
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
const RepositoryList = () => {
    const [term, setTerm] = useState("");
    const {searchRepositories} = useActions();
    const {data, error, loading} = useTypeSelector(
        (state) => state.repositories
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };


    return (
        <div>
            <FormContainer onSubmit={handleSubmit}>
                <InputContainer
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                />
                <CustomButton>Search</CustomButton>
            </FormContainer>

            <ContentWrapper>
                {data.length > 0 ? <HeaderSecondaryContainer>packages</HeaderSecondaryContainer> : !loading ?
                    <ErrorContainer>no packages found </ErrorContainer> : null}
                {error && <h3>{error}</h3>}
                {loading && <h3>Loading ...</h3>}
                {!error && !loading && data.map((name) => <ItemContainer key={name}>{name}</ItemContainer>)}
            </ContentWrapper>
        </div>
    );
};

export default RepositoryList;
