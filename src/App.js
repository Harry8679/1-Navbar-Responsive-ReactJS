import React from 'react';
import Navbar from './components/Navbar'; // Assure-toi du bon chemin selon ta structure

function App() {
  return (
    <div>
      <Navbar />
      {/* Contenu de démo pour tester la navbar */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Bienvenue sur MyBrand</h1>
        <p>Voici du contenu de démonstration sous la barre de navigation.</p>
      </section>
    </div>
  );
}

export default App;
