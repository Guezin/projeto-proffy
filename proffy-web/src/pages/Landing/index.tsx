import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import ladingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

interface IResponse {
  total: number;
}

const Home: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    const loadConnections = async () => {
      const { data } = await api.get<IResponse>("/connections");

      setTotalConnections(data.total);
    };

    loadConnections();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proff" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={ladingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Home;
