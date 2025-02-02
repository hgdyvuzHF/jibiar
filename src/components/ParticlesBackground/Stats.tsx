import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [particleCount, setParticleCount] = useState('--');

  useEffect(() => {
    const updateParticleCount = () => {
      if (window.pJSDom?.[0]?.pJS?.particles?.array) {
        setParticleCount(window.pJSDom[0].pJS.particles.array.length.toString());
      }
      requestAnimationFrame(updateParticleCount);
    };

    requestAnimationFrame(updateParticleCount);
  }, []);

  return (
    <div className="count-particles">
      <span className="js-count-particles">{particleCount}</span> particles
    </div>
  );
};

export default Stats;