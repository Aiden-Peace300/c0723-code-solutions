import './CustomButton.css';

const CustomButton = ({ text, color, handleClick }) => {
  return (
    <button className={color} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

export default CustomButton;
