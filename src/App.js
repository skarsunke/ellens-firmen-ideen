import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { RotateCcw } from 'lucide-react';

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
  const [selectedIdea, setSelectedIdea] = useState('');
  const [ideaList, setIdeaList] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSpin = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    setTimeout(() => {
      setSelectedIdea(idea);
      setIdeaList((prevList) => [...prevList, idea]);
      setIsAnimating(false);
    }, 500);
  };

  const handleClear = () => {
    setIdeaList([]);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-4'>
      <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center'>Ellens Firmen Ideen</h1>

      <motion.div
        className='w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 border-4 border-white shadow-lg cursor-pointer'
        animate={isAnimating ? { rotate: [0, 20, -20, 0], scale: [1, 1.05, 1.05, 1] } : {}}
        transition={{ duration: 0.5 }}
        onClick={handleSpin}
      >
        {selectedIdea || 'Kugel schütteln!'}
      </motion.div>

      <div className='flex gap-2 mt-4'>
        <Button
          onClick={handleClear}
          className='bg-red-500 hover:bg-red-600 text-sm md:text-base'
        >
          Tabelle leeren
        </Button>
      </div>

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
