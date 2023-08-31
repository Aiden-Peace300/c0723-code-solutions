import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleClick(text) {
    window.alert(`Button Text: ${text}`);
  }

  return (
    <div>
      <CustomButton text="Fancy" color="red" handleClick={handleClick} />
      <CustomButton text="Hello!" color="green" handleClick={handleClick} />
      <CustomButton
        text="Custom Button"
        color="purple"
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
