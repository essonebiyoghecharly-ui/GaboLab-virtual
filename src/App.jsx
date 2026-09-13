import { useState } from 'react'

function Accueil() {
  return (
    <div>
      <h2>Page Accueil</h2>
      <p>Bienvenue sur LabGabon V6</p>
    </div>
  )
}

function TPAmidon() {
  const [resultat, setResultat] = useState("")
  const [materiel, setMateriel] = useState("Pomme de terre")

  const simuler = () => {
    alert("Le bouton marche!") // test
    const alimentsAvecAmidon = ["pomme de terre", "riz", "pain", "maïs", "banane", "farine"]
    const aAmidon = alimentsAvecAmidon.some(aliment => materiel.toLowerCase().includes(aliment))
    
    if(aAmidon) {
      setResultat("✅ RÉSULTAT : Bleu-Violet ! \nPrésence d'amidon détectée.")
    } else {
      setResultat("❌ RÉSULTAT : Reste marron-jaune. \nPas d'amidon.")
    }
  }

  return (
    <div>
      <h2>TP : Mise en évidence de l'amidon</h2>
      <select value={materiel} onChange={(e) => setMateriel(e.target.value)} style={{padding: '8px'}}>
        <option>Pomme de terre</option><option>Riz cuit</option><option>Pain</option>
        <option>Banane</option><option>Eau</option>
      </select>
      <br/><br/>
      <button onClick={simuler} style={{padding: '10px 20px', background: '#2e7d32', color: 'white', border: 'none'}}>Simuler</button>
      <h3>Mes résultats</h3>
      <div style={{border: '2px solid #2e7d32', padding: '15px', minHeight: '60px', background: '#e8f5e9', whiteSpace: 'pre-line'}}>
        {resultat || "Clique sur 'Simuler'"}
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("accueil")

  return (
    <div style={{padding: '20px', fontFamily: 'Arial', maxWidth: '700px', margin: 'auto'}}>
      <h1 style={{color: '#2e7d32'}}>LabGabon V6</h1>
      <div style={{marginBottom: '20px'}}>
        <button onClick={() => setPage("accueil")}>Accueil</button>
        <button onClick={() => setPage("tp")} style={{marginLeft: '10px'}}>TP Amidon</button>
      </div>
      {page === "accueil" ? <Accueil /> : <TPAmidon />}
    </div>
  )
}
