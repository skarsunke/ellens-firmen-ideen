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
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-4'>
      <h1 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center'>Ellens Firmen Ideen</h1>
      <p className='text-center text-md md:text-lg text-gray-700 mb-6'>Willkommen in der Ideenschmiede für Ellens zukünftiges Unternehmen. Hier entstehen kreative Konzepte rund um Hunde- und Pferdephysiotherapie. Lass dich inspirieren und entdecke neue Möglichkeiten!</p>

      <button
        onClick={handleGenerateIdea}
        className='bg-green-600 hover:bg-green-700 text-lg md:text-xl mb-4 text-white px-4 py-2 rounded-lg shadow-lg'
      >
        Idee generieren
      </button>

      <button
        onClick={handleClear}
        className='bg-red-600 hover:bg-red-700 text-sm md:text-base mb-4 text-white px-4 py-2 rounded-lg shadow-lg'
      >
        Tabelle leeren
      </button>

      <div className='mt-8 w-full md:w-1/2 overflow-auto border-2 border-gray-500 rounded-lg shadow-lg'>
        <h2 className='text-xl md:text-2xl mb-4 text-center'>Bisherige Ideen:</h2>
        <table className='w-full border-collapse border-2 border-gray-500 rounded-lg'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>#</th>
              <th className='border border-gray-300 p-2'>Idee</th>
            </tr>
          </thead>
          <tbody>
            {ideaList.map((idea, index) => (
              <tr key={index}>
                <td className='border border-gray-300 p-2'>{index + 1}</td>
                <td className='border border-gray-300 p-2'>{idea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EllensFirmenIdeen;
