import React, { useState, useRef } from 'react';
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
  const [spinning, setSpinning] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState('');
  const [ideaList, setIdeaList] = useState([]);
  const wheelRef = useRef();

  const handleSpin = () => {
    if (!spinning) {
      setSpinning(true);
      const randomDegree = 3600 + Math.floor(Math.random() * 360);
      wheelRef.current.style.transition = '4s cubic-bezier(0.25, 1, 0.5, 1)';
      wheelRef.current.style.transform = `rotate(${randomDegree}deg)`;
      setTimeout(() => {
        const idea = ideas[Math.floor(Math.random() * ideas.length)];
        setSelectedIdea(idea);
        setIdeaList((prevList) => [...prevList, idea]);
        setSpinning(false);
      }, 4000);
    }
  };

  const handleClear = () => {
    setIdeaList([]);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-4'>
      <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center'>Ellens Firmen Ideen</h1>
      <div className='relative'>
        <div
          ref={wheelRef}
          className='w-72 h-72 md:w-96 md:h-96 border-4 border-gray-400 rounded-full overflow-hidden flex items-center justify-center'
          style={{ transition: '4s ease-out' }}
        >
          <img src='/images/wheel.png' alt='Glücksrad' className='w-full h-full object-cover' style={{ transformOrigin: 'center center' }} />
        </div>
        <div className='absolute top-[50%] left-[50%] w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-red-600 transform -translate-x-1/2 -translate-y-full'></div>
      </div>

      <div className='flex gap-2 mt-4'>
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
