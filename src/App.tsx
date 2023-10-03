import { useState } from "react";
import Select from "./components/Select";

const OPTIONS = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

function App() {
  const [value, setValue] = useState<typeof OPTIONS[0] | undefined>(OPTIONS[0]);
  return <><Select options={OPTIONS} value={value} onChange={(o) => setValue(o)}/></>
}
export default App
