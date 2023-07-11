import { Container } from "./styles";

import { Header } from "../../components/Header";
// import { useState, useEffect } from "react"

import { Footer } from "../../components/Footer";

export function SuccessfulPayment() {
  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <h1>CONGRATULATIONS</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
}
