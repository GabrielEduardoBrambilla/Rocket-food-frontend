import { Container } from "./styles";
import { FaHeart } from 'react-icons/fa'

import { Header } from "../../components/Header";
// import { useState, useEffect } from "react"

import { Footer } from "../../components/Footer";
import { useNavigate } from 'react-router-dom'
import { PiCaretLeftBold } from "react-icons/pi";

export function SuccessfulPayment() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/"); // Go back to the previous page in the history
  }
  return (
    <>
      <Header />
      <Container>
        <main>
          <div className="back-btn">{<PiCaretLeftBold onClick={handleBackButton} />} <span onClick={handleBackButton}>back</span></div>
          <div className="wrapper">
            <p>CONGRATULATIONS</p>
            <span>the payment was confirmed</span>
          </div>
          <div className="thanks">
            <p>Thanks for using my app <FaHeart /> </p>
            <span>
              <a target="blanc" href="https://github.com/GabrielEduardoBrambilla">@github </a>
              |  <a target="blanc" href="https://www.linkedin.com/in/gabriel-eduardo-brambilla/" >@linkedIn</a> </span>
          </div>
        </main>

      </Container>
      <Footer />
    </>
  );
}
