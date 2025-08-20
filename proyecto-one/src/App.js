import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>proyecto one react</h1>
      </header>
      <main>
        <h2>contenido principal</h2>
        <p>Un texto es un conjunto de frases ordenadas que tienen sentido y presentan coherencia y cohesión, lo que permite su correcta interpretación por parte del lector o oyente. En lingüística, se le llama texto a la configuración de lengua o habla organizada según reglas específicas. Además, los textos pueden clasificarse en diferentes tipos, como textos expositivos, instructivos y literarios, cada uno con características y propósitos distintos.</p>
        <img src='https://concepto.de/wp-content/uploads/2018/08/texto-min-e1534438897550.jpg'></img>
      </main>
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
