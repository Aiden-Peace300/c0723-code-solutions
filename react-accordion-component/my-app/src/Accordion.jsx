import { useState } from 'react';

export default function Accordion({ topics }) {
  const [isToggledOn, setToggle] = useState();

  function handleTitleClicked(topic) {
    setToggle(topic === isToggledOn ? undefined : topic);
  }

  return (
    <div>
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          isOpen={topic === isToggledOn}
          onTopicClick={() => handleTitleClicked(topic)}
        />
      ))}
    </div>
  );
}

function Topic({ topic, isOpen, onTopicClick }) {
  return (
    <>
      <div>
        <button onClick={onTopicClick}>{topic.title}</button>
        {isOpen && <button>{topic.content}</button>}
      </div>
    </>
  );
}
