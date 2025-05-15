import React, { useState } from 'react';


const ideas = [
  'Mobile Physiotherapie für Hunde',
  'Reha-Programme für verletzte Pferde',
  'Online-Kurse für Hundephysio',
  'Physio-Workshops für ältere Hunde',
  'Hydrotherapie für Hunde und Pferde',
  'Massageangebote speziell für Pferde',
  'Ergonomische Pferde-Sattelunterlagen',
  'Therapiegurte für die Hunde-Rehabilitation',
  'Digitale Beratung für Pferdephysiotherapie',
  'Mobile Reha-Services für Turnierpferde',
  'Atemtherapie für Hunde mit Atemproblemen',
  'Tiermassage-Techniken für Pferdebesitzer',
  'Training für sportliche Höchstleistungen bei Pferden',
  'Aquatherapie für verletzte Hunde',
  'Bewegungsanalyse für Hunde mit Gelenkproblemen',
  'Trainingspläne zur Muskelstärkung bei Pferden',
  'Wellness-Programme für gestresste Pferde',
  'Pfoten-Massagezentren für Hunde',
  'Tierphysio-Workshops für Hundeschulen',
  'Vorbereitungskurse für Pferde-Turniere'
];

const EllensFirmenIdeen = () => {
  const [ideaList, setIdeaList] = useState([]);

  const handleGenerateIdea = () => {
    const remainingIdeas = ideas.filter(idea => !ideaList.includes(idea));
    if (remainingIdeas.length === 0) return;
    const newIdea = remainingIdeas[Math.floor(Math.random() * remainingIdeas.length)];
    setIdeaList((prevList) => [...prevList, newIdea]);
  };

  const handleClear = () => {
    setIdeaList([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #a8dadc, #457b9d)', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '10px', color: '#1d3557', textAlign: 'center' }}>Ellens Firmen Ideen</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#ffffff', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}> Willkommen in der Ideenschmiede für Ellens zukünftiges Unternehmen. Hier entstehen kreative Konzepte rund um Hunde- und Pferdephysiotherapie. Lass dich inspirieren und entdecke neue Möglichkeiten!</p>

      <button
        onClick={handleGenerateIdea}
        style={{ backgroundColor: '#2a9d8f', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontSize: '1.2em', marginBottom: '10px', cursor: 'pointer', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}
      >
        Idee generieren
      </button>

      <button
        onClick={handleClear}
        style={{ backgroundColor: '#e63946', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontSize: '1.2em', marginBottom: '20px', cursor: 'pointer', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}
      >
        Tabelle leeren
      </button>

      <div style={{ width: '100%', maxWidth: '600px', overflowX: 'auto', border: '2px solid #457b9d', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.5em', textAlign: 'center', color: '#1d3557', margin: '10px 0' }}>Bisherige Ideen:</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #457b9d', padding: '10px', backgroundColor: '#a8dadc', color: '#1d3557' }}>#</th>
              <th style={{ border: '1px solid #457b9d', padding: '10px', backgroundColor: '#a8dadc', color: '#1d3557' }}>Idee</th>
            </tr>
          </thead>
          <tbody>
            {ideaList.map((idea, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f1faee' : '#e9ecef' }}>
                <td style={{ border: '1px solid #457b9d', padding: '10px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #457b9d', padding: '10px' }}>{idea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EllensFirmenIdeen;
