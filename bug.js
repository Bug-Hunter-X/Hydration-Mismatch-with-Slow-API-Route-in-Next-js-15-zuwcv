```javascript
// pages/index.js
export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/hello');
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
```
```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  res.status(200).json({ message: 'Hello' });
}
```