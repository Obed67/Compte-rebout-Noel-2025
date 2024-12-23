import { useState, useEffect } from 'react';

const citations = [
  "La magie de Noël commence par un sourire !",
  "Chaque jour nous rapproche d'un moment magique",
  "L'esprit de Noël, c'est le partage et la joie",
  "Un nouveau départ se prépare...",
  "La fin d'année nous réserve toujours des surprises"
];

const CountdownFestif = () => {
  const [countdown, setCountdown] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  });
  const [citation, setCitation] = useState('');
  const [messageFinal, setMessageFinal] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const noel = new Date(2024, 11, 25);  // Noël le 25 décembre 2024
      const now = new Date();  // Date actuelle
      const diff = noel - now;  // Calcul de la différence entre Noël et maintenant

      if (diff <= 0) {
        // Lorsque le décompte arrive à zéro, afficher un message spécial
        setMessageFinal("🎄 Obed AGBOHOUN vous souhaite un Joyeux Noël que DIEU vous comble de sa grâce ! 🎄");
        setCountdown({
          jours: 0,
          heures: 0,
          minutes: 0,
          secondes: 0
        });
      } else {
        // Mise à jour du décompte en jours, heures, minutes, secondes
        setCountdown({
          jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
          heures: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secondes: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }

      // Change de citation chaque jour
      const indexCitation = Math.floor(Math.random() * citations.length);
      setCitation(citations[indexCitation]);
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);  // On utilise une dépendance vide pour que l'effet ne s'exécute qu'une fois

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            🎄 Compte à rebours de Noël 🎄
          </h1>
          <p className="text-xl italic opacity-80">{citation}</p>
          
          {/* Affichage du message final si le décompte est terminé */}
          {messageFinal ? (
            <p className="text-3xl text-green-500 mt-4">{messageFinal}</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(countdown).map(([key, value]) => (
                <div key={key} className="bg-white/20 rounded-lg p-4 text-center transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-5xl font-bold animate-bounce">
                    {value}
                  </div>
                  <div className="text-sm uppercase tracking-wide">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Espace en bas pour afficher l'auteur */}
        <div className="mt-8 text-center text-sm text-white ">
          <p>Développé par <a href='https://github.com/Obed67' className='text-blue-900 bg-slate-100' >Obed AGBOHOUN</a> </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownFestif;
