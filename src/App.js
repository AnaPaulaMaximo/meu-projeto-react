import './App.css';

function App() {
  const ritmosEFestas = [
    { id: 1, titulo: "Carnaval", desc: "A maior festa popular do mundo, repleta de desfiles, blocos de rua e alegria." },
    { id: 2, titulo: "Samba & Bossa Nova", desc: "Gêneros musicais reconhecidos internacionalmente como patrimônio da nossa identidade." },
    { id: 3, titulo: "Festa Junina", desc: "Celebração das tradições rurais com quadrilhas, fogueiras e comidas típicas de milho." },
    { id: 4, titulo: "Frevo e Maracatu", desc: "Ritmos e danças vibrantes marcantes no Nordeste brasileiro, especialmente em Pernambuco." }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Brasil Plural 🇧🇷</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Início</a></li>
            <li><a href="#festas">Festas & Ritmos</a></li>
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
    </div>
  );
}

export default App;