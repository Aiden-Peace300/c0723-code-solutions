/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    async function fetchData() {
      try {
        // fetching the items using readItems
        const data = await readItems();

        // Updating the state with the fetched items
        setItems(data);
        setIsLoading(false);
      } catch (err) {
        // Handle any errors that occur during the fetch
        setError(err);
        setIsLoading(false);
      }
    }

    fetchData(); // Call the async function
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
