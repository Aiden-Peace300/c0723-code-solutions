import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './AppDrawer.css';

export default function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIconClicked() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen == false && <GiHamburgerMenu onClick={handleIconClicked} />}
      {isOpen && <DisplayMenu isOpen={isOpen} />}
      <Background onClick={handleIconClicked} isDrawn={isOpen} />
    </>
  );
}

function DisplayMenu({ isOpen }) {
  return (
    <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
      <h1>Menu</h1>
      <p>About</p>
      <p>Get Stated</p>
      <p>Sign In</p>
    </div>
  );
}

function Background({ isDrawn, onClick }) {
  const className = isDrawn ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick}></div>;
}
