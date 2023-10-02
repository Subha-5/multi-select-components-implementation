import Select from "./components/Select";

const OPTIONS = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

function App() {

  return <><Select options={OPTIONS} /></>
}
export default App
