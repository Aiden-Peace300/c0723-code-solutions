import Bulbasaur from './images/001.png';
import Charmander from './images/004.png';
import Squirtle from './images/007.png';
import Pikachu from './images/025.png';
import Jigglypuff from './images/039.png';

import Carousel from './carousel';
import './App.css';

const images = [Bulbasaur, Charmander, Squirtle, Pikachu, Jigglypuff];

function App() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
