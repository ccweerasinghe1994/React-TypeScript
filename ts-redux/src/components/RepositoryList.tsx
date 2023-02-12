import React, { useState } from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/userActions';

import {
  ContentWrapper,
  CustomButton,
  ErrorContainer,
  FormContainer,
  HeaderSecondaryContainer,
  InputContainer,
  ItemContainer,
} from './Repository.styles';

const RepositoryList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading, firstRender } = useTypeSelector(
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
          type='text'
        />
        <CustomButton>Search</CustomButton>
      </FormContainer>

      <ContentWrapper>
        {data.length > 0 ? (
          <HeaderSecondaryContainer>packages</HeaderSecondaryContainer>
        ) : null}
        {firstRender && data.length === 0 && (
          <ErrorContainer>Cannot find the mentioned repository</ErrorContainer>
        )}
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading ...</h3>}
        {!error &&
          !loading &&
          data.map((name) => <ItemContainer key={name}>{name}</ItemContainer>)}
      </ContentWrapper>
    </div>
  );
};

export default RepositoryList;
