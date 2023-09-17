import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  try {
    const response = await fetch('foo/bar.html');
    const msg = response;
    console.log(elapsed(), 'fetchOnce:', msg);
  } catch (error) {
    console.error(error);
  }
}

async function fetchSeveral() {
  try {
    const response = await fetch('foo1/bar.html');
    const msg = response;
    console.log(elapsed(), 'fetchSeveral1:', msg);

    const response2 = await fetch('foo2/bar.html');
    const msg2 = response2;
    console.log(elapsed(), 'fetchSeveral2:', msg2);

    const response3 = await fetch('foo3/bar.html');
    const msg3 = response3;
    console.log(elapsed(), 'fetchSeveral3:', msg3);
  } catch (error) {
    console.error(error);
  }
}

async function fetchChained() {
  try {
    const response = await fetch('foo-chain/bar.html');
    const msg = response;
    console.log(elapsed(), 'fetchChained1:', msg);

    const response2 = await fetch('foo-chain/bar.html');
    const msg2 = response2;
    console.log(elapsed(), 'fetchChained2:', msg2);

    const response3 = await fetch('foo-chain/bar.html');
    const msg3 = response3;
    console.log(elapsed(), 'fetchChained3:', msg3);
  } catch (error) {
    console.error(error);
  }
}

await fetchOnce();
await fetchSeveral();
await fetchChained();