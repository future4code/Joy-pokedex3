import React from "react";
import error from "../../assets/error.png"

import { ErrorImage, ErrorPageContainer } from "./styled";
import Header from "../../components/header/Header";

const ErrorPage = () => {
  return (
  <div>
      <Header/>
    <ErrorPageContainer>
      <ErrorImage src={error}/>

          <p>Error 404 - PAGE NOT FOUND </p>

    </ErrorPageContainer>
    </div>
  );
}

export default ErrorPage;