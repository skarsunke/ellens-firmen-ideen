import React, { useState } from 'react';
import { Button } from './components/ui/button';

const ideas = [
  'Mobile Tierphysio',
  'Online-Kurse für Tierhalter',
  'Physio-Workshops für Hunde',
  'Reha-Zentrum für Pferde',
  'Ergonomische Tiermöbel',
  'Aquatherapie für Haustiere',
  'Tiermassage und Entspannung',
  'Gesundheits-Coaching für Tierhalter',
  'Therapiezentren für Kleintiere',
  'Mobile Reha-Services für Haustiere',
  'Physiotherapeutische Geräte für den Heimgebrauch',
  'Digitale Physiotherapie-Beratung',
  'Pfoten-Massagezentren',
  'Physiotherapie für ältere Tiere',
  'Physio-Workshops speziell für Welpen',
  'Kursangebote für Tierärzte',
  'Zusatzversicherungen für Tierphysiotherapie',
  'Wellness-Programme für Haustiere',
  'Hydrotherapie für Katzen',
  'Individuelle Trainingspläne für Tiere',
  'Fitnesskurse für übergewichtige Haustiere'
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
      <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center'>Ellens Firmen Ideen</h1>

      <Button
        onClick={handleGenerateIdea}
        className='bg-green-500 hover:bg-green-600 text-lg md:text-xl mb-4'
      >
        Idee generieren
      </Button>

      <Button
        onClick={handleClear}
        className='bg-red-500 hover:bg-red-600 text-sm md:text-base mb-4'
      >
        Tabelle leeren
      </Button>

      <div className='mt-8 w-full md:w-1/2 overflow-auto'>
        <h2 className='text-xl md:text-2xl mb-4 text-center'>Bisherige Ideen:</h2>
        <table className='w-full border-collapse border border-gray-400'>
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
