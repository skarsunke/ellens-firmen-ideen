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

const getRandomIdea = () => ideas[Math.floor(Math.random() * ideas.length)];

const EllensFirmenIdeen = () => {
  const [selectedIdea, setSelectedIdea] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [ideaList, setIdeaList] = useState([]);

  const handleSpin = () => {
    if (!spinning) {
      setSpinning(true);
      setTimeout(() => {
        const idea = getRandomIdea();
        setSelectedIdea(idea);
        setIdeaList((prevList) => [...prevList, idea]);
        setSpinning(false);
      }, 2000);
    }
  };

  const handleClear = () => {
    setIdeaList([]);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-4'>
      <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center'>Ellens Firmen Ideen</h1>
      <Card className='w-72 h-72 md:w-96 md:h-96 flex items-center justify-center relative'>
        <motion.div
          animate={{ rotate: spinning ? 360 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='w-60 h-60 md:w-64 md:h-64 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center'
        >
          <span className='text-lg md:text-xl font-semibold'>{spinning ? 'Dreht sich...' : selectedIdea || 'Drücke den Hebel!'}</span>
        </motion.div>
        <div className='flex gap-2 md:gap-4 absolute bottom-[-3rem]'>
          <Button
            onClick={handleSpin}
            className='bg-green-500 hover:bg-green-600 text-sm md:text-base'
          >
            <RotateCcw className='mr-1 md:mr-2' /> Hebel ziehen
          </Button>
          <Button
            onClick={handleClear}
            className='bg-red-500 hover:bg-red-600 text-sm md:text-base'
          >
            Tabelle leeren
          </Button>
        </div>
      </Card>

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
