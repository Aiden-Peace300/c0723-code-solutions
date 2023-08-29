import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const label = isOn ? 'On' : 'Off';
  const stateClass = isOn ? 'is-on' : '';

  return (
    <div className={`toggle-switch ${stateClass}`}>
      <div className="slider" onClick={() => setIsOn(!isOn)}>
        <div className="switch"></div>
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
