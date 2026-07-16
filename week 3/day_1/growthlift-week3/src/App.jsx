import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <h2>My Cards</h2>
      <Card title="React" description="JS library for UIs" color="#A78BFA" />
      <Card title="Vite" description="Fast build tool" color="#00C864" />
      <Card title="Tailwind" description="Utility-first CSS" color="#00B4D8" />

      <h2>Interactive Elements</h2>
      <Counter />
      <Toggle />
    </div>
  );
}

export default App;
