import { useState } from 'react'

export default function App() {
  const [resultat, setResultat] = useState("")

  const simuler = () => {
    const materiel = document.querySelector('input').value
    if(materiel.toLowerCase().includes("amidon") || materiel.toLowerCase().includes("pomme") || materiel.toLowerCase().includes("riz")) {
      setResultat("✅ RÉSULTAT : Bleu-Violet ! Présence d'amidon détectée avec le Lugol.")
    } else {
      setResultat("❌ RÉSULTAT : Reste marron. Pas d'amidon détecté.")
    }
  }

  return (
    <div style={{padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto'}}>
      <h1>LabGabon V6</h1>
      <p>Construisez. Testez. Comprenez.</p>

      <h2>Catalogue</h2>
      <p>Des expériences prêtes à réaliser ou à personnaliser.</p>

      <h2>Construire un TP</h2>
      <p>Cliquez sur un élément ou glissez-le dans la paillasse.</p>
      
      <input type="text" placeholder="Ajoutez le matériel ici" defaultValue="Pommes de terre" style={{padding: '8px', width: '200px'}} />
      <br/><br/>
      
      <button onClick={simuler} style={{padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer'}}>
        Simuler
      </button>

      <h2>Mes résultats</h2>
      <div style={{border: '1px solid #ccc', padding: '15px', minHeight: '50px', background: '#f9f9f9'}}>
        {resultat || "Clique sur 'Simuler' pour voir le résultat"}
      </div>
    </div>
  )
}
