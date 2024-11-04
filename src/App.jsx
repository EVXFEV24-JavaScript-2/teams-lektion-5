import "./App.css";

// HTTP, API:er
// fetch
// Promises, .then, .catch
// response objektet
// Trådar och async/await
// Varför await på fetch och .json?

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (res !== 200) {
    alert("Failure, try again.");
    return null;
  }

  const json = await res.json();
  return json;
}

function App() {
  // callback hell
  // syntax sugar
  fetchProducts().then((res) => {
    console.log(res);
  });

  fetch("https://dummyjson.com/products")
    .then((res) => {
      console.log(res);
      if (res.status != 200) {
        alert("Attempt failed, please try again.");
      }

      return res.json();
    })
    .then(console.log)
    .catch((err) => {});

  return (
    <>
      <button>Click Me!</button>
    </>
  );
}

export default App;
