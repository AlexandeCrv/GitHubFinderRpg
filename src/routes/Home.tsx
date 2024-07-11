import { useState } from "react";
import { UserProps } from "../types/user";
import "./Home.css";
import logo from "../assets/logo.png";
import fundo from "../assets/fundo.png";
import "../components/Search";
import Search from "../components/Search";
import nuvem1 from "../assets/nuvem1.png";
import nuvem11 from "../assets/nuvem1-2.png";
import nuvem111 from "../assets/nuvem2-1.png";
import nuvem1111 from "../assets/nuvem2-2.png";
import axios from "axios";
import link from "../assets/link.png";
const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const getthub = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const { data } = response;
      console.log(data);
      setUser(data);
    } catch (error) {
      alert("Player inexistente!");
    }
  };
  return (
    <div className="home">
      <figure>
        <img className="logo" src={logo} alt="" />
      </figure>
      <div className="procura">
        <Search gethub={getthub} />
      </div>
      {user && (
        <div className="resphub">
          <figure>
            <img className="fotohub" src={user.avatar_url} alt="" />
          </figure>
          <div className="infoshub">
            <div className="nomehub">
              <h2>{user.login}</h2>
              <p>{user.bio}</p>
            </div>

            <div className="barra">
              <p>Nivel:{user.public_repos}</p>
              <div className="exphub">
                <div className="barraxp">
                  <div>10</div>
                  <div>20</div>
                  <div>30</div>
                  <div>40</div>
                  <div>50</div>
                  <div>60</div>
                  <div>70</div>
                  <div>80</div>
                  <div>90</div>
                </div>
              </div>
            </div>
            <div className="projetosdiv">
              <a
                target="_blank"
                href={`https://github.com/${user.login}?tab=repositories`}
              >
                Projetos! <img src={link} alt="" />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="nuvens">
        <img className="cloud-1-1" src={nuvem1111} alt="" />
        <img className="cloud-1-2" src={nuvem1111} alt="" />
        <img className="cloud-2-1" src={nuvem111} alt="" />
        <img className="cloud-2-2" src={nuvem111} alt="" />
        <img className="cloud-2-3" src={nuvem1} alt="" />
        <img className="cloud-2-4" src={nuvem1} alt="" />
        <img className="cloud-2-5" src={nuvem1} alt="" />
        <img className="cloud-3-1" src={nuvem1} alt="" />
        <img className="cloud-3-2" src={nuvem11} alt="" />
      </div>

      <div>
        <img className="fundo" src={fundo} alt="" />
      </div>
    </div>
  );
};

export default Home;
