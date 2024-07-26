import nuvem1 from "../assets/nuvem1.png";
import nuvem11 from "../assets/nuvem1-2.png";
import nuvem111 from "../assets/nuvem2-1.png";
import nuvem1111 from "../assets/nuvem2-2.png";
import logo from "../assets/logo.png";
import { useGitHub } from "../context/GitHubContext";
import { RxCode } from "react-icons/rx";
import "./Projs.css";
import explore from "../assets/Explore-o-reposit-rio-de-22-07-2024.png";
import { Link } from "react-router-dom";
import estrela from "../assets/estrela (3).png";
import comp from "../assets/compartilhar.png";
import { useState } from "react";
const Projs = () => {
  const { repos } = useGitHub();
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [selectedRepo2, setSelectedRepo2] = useState<string | null>(null);
  const [showInitialContent, setShowInitialContent] = useState(true);
  const handleStarClick = (repoName: string) => {
    setSelectedRepo(repoName === selectedRepo ? null : repoName);
    setSelectedRepo2(null);
    setShowInitialContent(false);
    console.log(repoName);
  };

  const handleShareClick = (repoName: string) => {
    setSelectedRepo2(repoName === selectedRepo2 ? null : repoName);
    setSelectedRepo(null);
    setShowInitialContent(false);
    console.log(`Share clicked for ${repoName}`);
  };
  if (!repos || repos.length === 0) {
    return <h1>LOADING</h1>;
  }
  const handleBackClick = () => {
    setSelectedRepo(null);
    setSelectedRepo2(null);
    setShowInitialContent(true);
  };

  return (
    <div className="projsroute">
      <Link id="voltar" className="buttonproj" to="/GitHubFinderRpg">
        <label htmlFor="">voltar</label>
      </Link>
      <figure className="logos">
        <img className="logoprojs" src={logo} alt="" />
        <div className="nomeexplore">
          <img className="explore" src={explore} alt="" />
          <h1 style={{ color: "white", fontWeight: "900" }}>
            <p className="nomeproj">{repos[0]?.owner?.login || "LOADING"}</p>
          </h1>
        </div>
      </figure>
      <div className="abaDeProjetos">
        <div className="todasabas">
          {repos.map((repo) => (
            <div className="abaindividual" key={repo.id}>
              <div className="divnameproj">
                <h3>{repo.name}</h3>
              </div>
              {showInitialContent ? (
                <>
                  <div className="divlanguage">
                    <p>S.atack</p>
                    <p className="language">
                      <RxCode className="lenguageproj" />
                      {repo.language}
                    </p>
                    <p>For.deff</p>
                  </div>
                  <div className="estrelaefork">
                    <div
                      className="buttonabaindiv"
                      onClick={() => handleStarClick(repo.name)}
                    >
                      <p className="estrela">
                        {repo.stargazers_count} <img src={estrela} alt="" />
                      </p>
                    </div>
                    <div className="buttonabaindiv">
                      <a
                        className="acode"
                        target="_blank"
                        href={repo.html_url}
                        rel="noopener noreferrer"
                      >
                        <RxCode className="code" /> Code
                      </a>
                    </div>

                    <div
                      className="buttonabaindiv"
                      onClick={() => handleShareClick(repo.name)}
                    >
                      <p className="compartilhar">
                        {repo.forks_count} <img src={comp} alt="" />
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="abaestrela">
                  <div>
                    <div className="btnestrela" onClick={handleBackClick}>
                      <p className="">voltar</p>
                    </div>
                  </div>

                  {selectedRepo ? (
                    <div className="staratack">
                      <p>
                        Star atack <img src={estrela} alt="" />
                        <br />
                        são as estrelas no seu projeto, aqui no app são seu dano
                        mágico!
                      </p>
                    </div>
                  ) : selectedRepo2 ? (
                    <div className="staratack">
                      <p>
                        Fork deff
                        <img src={comp} alt="" />
                        <br />
                        São os Forks do seu projeto, aqui no app são sua defesa
                        mágica!
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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
      <div className="fundoprojs"></div>
    </div>
  );
};

export default Projs;
