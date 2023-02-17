import { useState } from 'react';
import App from './App'

import { loadValidGuesses } from './lib/words'

function SplashScreen() {
  const [isValidGuessesLoad, setValidGuessesLoaded] = useState(false);
  
  loadValidGuesses().then(() => {
    setValidGuessesLoaded(true);
  });

  return <>{isValidGuessesLoad ? <App /> : <div>Loading...</div>}</>;
}

export default SplashScreen
