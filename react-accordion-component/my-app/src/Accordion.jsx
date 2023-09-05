import { useState } from 'react';

export default function Accordion({ topics }) {
  const [toggle, setToggle] = useState();

  function handleTitleClicked(topic) {
    setToggle(topic === toggle ? undefined : topic);
  }

  return (
    <div>
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          isOpen={topic === toggle}
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
