import { useState } from 'preact/hooks'
import { Searchbox } from './searchbox.jsx'
import Infobox from './infobox.jsx'

export default function App() {
  const [result, setResult] = useState(null)

  return (
    <>
      <h2>Weather App</h2>

      <Searchbox setResult={setResult} />
      {result && <Infobox result={result} />}

    </>
  )
}
