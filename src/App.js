import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const ritmosEFestas = [
    { id: 'f1', titulo: "Carnaval", desc: "A maior festa popular do mundo, repleta de desfiles, blocos de rua e alegria." },
    { id: 'f2', titulo: "Samba & Bossa Nova", desc: "Gêneros musicais reconhecidos internacionalmente como patrimônio da nossa identidade." },
    { id: 'f3', titulo: "Festa Junina", desc: "Celebração das tradições rurais com quadrilhas, fogueiras e comidas típicas de milho." },
    { id: 'f4', titulo: "Frevo e Maracatu", desc: "Ritmos e danças vibrantes marcantes no Nordeste brasileiro, especialmente em Pernambuco." }
  ];

  const pratosTipicos = [
    { id: 'g1', nome: "Feijoada", regiao: "Nacional", desc: "Prato emblemático feito com feijão preto e carnes suínas." },
    { id: 'g2', nome: "Acarajé", regiao: "Nordeste", desc: "Bolinho de feijão-caupi frito no azeite de dendê e recheado com vatapá." },
    { id: 'g3', nome: "Pão de Queijo", regiao: "Sudeste", desc: "Tradição mineira à base de polvilho e queijo, famosa no país inteiro." },
    { id: 'g4', nome: "Tacacá", regiao: "Norte", desc: "Iguaria amazônica preparada com tucupi, goma de mandioca e jambu." }
  ];

  const folcloreEArte = [
    { id: 'a1', titulo: "Capoeira", desc: "Expressão cultural que mistura arte marcial, esporte, cultura popular, dança e música." },
    { id: 'a2', titulo: "Literatura de Cordel", desc: "Poesia popular impressa em folhetos ilustrados com xilogravura." },
    { id: 'a3', titulo: "Mitos e Lendas", desc: "Saci-Pererê, Curupira, Iara e Boto Cor-de-Rosa povoam o imaginário popular." }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Brasil Plural 🇧🇷</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Início</a></li>
            <li><a href="#festas">Festas</a></li>
            <li><a href="#gastronomia">Culinária</a></li>
            <li><a href="#folclore">Arte</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>A Riqueza da Cultura Brasileira</h1>
        <p>Descubra a diversidade, as cores, os ritmos e os sabores que fazem do Brasil um país único no mundo.</p>
      </section>

      <section id="festas" className="section">
        <h2 className="section-title">Festas & Ritmos</h2>
        <div className="cards-grid">
          {ritmosEFestas.map((item) => (
            <div key={item.id} className="card">
              <div>
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
              <button className="like-button" onClick={() => handleLike(item.id)}>
                ❤️ {likes[item.id] || 0}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="gastronomia" className="section gastronomia">
        <h2 className="section-title">Sabores do Brasil</h2>
        <div className="cards-grid">
          {pratosTipicos.map((prato) => (
            <div key={prato.id} className="card gastronomia-card">
              <div>
                <h3>{prato.nome} <small>({prato.regiao})</small></h3>
                <p>{prato.desc}</p>
              </div>
              <button className="like-button" onClick={() => handleLike(prato.id)}>
                ❤️ {likes[prato.id] || 0}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="folclore" className="section">
        <h2 className="section-title">Arte, Lendas & Tradições</h2>
        <div className="folclore-list">
          {folcloreEArte.map((item) => (
            <div key={item.id} className="folclore-item">
              <h4>{item.titulo}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Desenvolvido em React puro • Celebrando a cultura do Brasil 🇧🇷</p>
      </footer>
    </div>
  );
}

export default App;