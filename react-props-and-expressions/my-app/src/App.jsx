import Button from './CustomButton';
import Foo from './FooBar';
import './App.css';
import './CustomButton.css';

const person = {
  name: 'Robert',
  rank: 'Very',
  serialNo: 'Secret',
};

const person2 = {
  name: 'Robert',
  rank: 'Very',
};

function App() {
  return (
    <>
      <Button color="red" text="I" />
      <Button color="green" text="know" />
      <Button color="blue" text="React!" />
      <Foo props={person} />
      <br />
      <Foo props={person2} />
    </>
  );
}

export default App;
