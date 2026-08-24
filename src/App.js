import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Brasil plural 🇧🇷</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Início</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>A Riqueza da Cultura Brasileira</h1>
        <p>
          Descubra a diversidade, as cores, os ritmos e os sabores que fazem do Brasil um país único no mundo.
        </p>
      </section>
    </div>
  );
}

export default App;