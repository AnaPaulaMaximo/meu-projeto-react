import './App.css';

function App() {
  const ritmosEFestas = [
    { id: 1, titulo: "Carnaval", desc: "A maior festa popular do mundo, repleta de desfiles, blocos de rua e alegria." },
    { id: 2, titulo: "Samba & Bossa Nova", desc: "Gêneros musicais reconhecidos internacionalmente como patrimônio da nossa identidade." },
    { id: 3, titulo: "Festa Junina", desc: "Celebração das tradições rurais com quadrilhas, fogueiras e comidas típicas de milho." },
    { id: 4, titulo: "Frevo e Maracatu", desc: "Ritmos e danças vibrantes marcantes no Nordeste brasileiro, especialmente em Pernambuco." }
  ];

  const pratosTipicos = [
    { id: 1, nome: "Feijoada", regiao: "Nacional", desc: "Prato emblemático feito com feijão preto e carnes suínas." },
    { id: 2, nome: "Acarajé", regiao: "Nordeste", desc: "Bolinho de feijão-caupi frito no azeite de dendê e recheado com vatapá." },
    { id: 3, nome: "Pão de Queijo", regiao: "Sudeste", desc: "Tradição mineira à base de polvilho e queijo, famosa no país inteiro." },
    { id: 4, nome: "Tacacá", regiao: "Norte", desc: "Iguaria amazônica preparada com tucupi, goma de mandioca e jambu." }
  ];

  const folcloreEArte = [
    { id: 1, titulo: "Capoeira", desc: "Expressão cultural que mistura arte marcial, esporte, cultura popular, dança e música." },
    { id: 2, titulo: "Literatura de Cordel", desc: "Poesia popular impressa em folhetos ilustrados com xilogravura." },
    { id: 3, titulo: "Mitos e Lendas", desc: "Saci-Pererê, Curupira, Iara e Boto Cor-de-Rosa povoam o imaginário popular." }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Brasil Plural 🇧🇷</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Início</a></li>
            <li><a href="#festas">Festas & Ritmos</a></li>
            <li><a href="#gastronomia">Culinária</a></li>
            <li><a href="#folclore">Arte & Folclore</a></li>
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
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gastronomia" className="section gastronomia">
        <h2 className="section-title">Sabores do Brasil</h2>
        <div className="cards-grid">
          {pratosTipicos.map((prato) => (
            <div key={prato.id} className="card gastronomia-card">
              <h3>{prato.nome} <small>({prato.regiao})</small></h3>
              <p>{prato.desc}</p>
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
    </div>
  );
}

export default App;