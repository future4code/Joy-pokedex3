import React from "react";
import error from "../../assets/error.png"
import { Typography } from "@material-ui/core";
import { ErrorImage, ErrorPageContainer } from "./styled";
import Header from "../../components/header/Header";

const ErrorPage = () => {
  return (
  <div>
      <Header/>
    <ErrorPageContainer>
      <ErrorImage src={error}/>
      <Typography 
        color={'primary'}
        variant={'h4'}
        align={'center'}
      >
          <p>Error 404 - PAGE NOT FOUND </p>
      </Typography>
    </ErrorPageContainer>
    </div>
  );
}

export default ErrorPage;