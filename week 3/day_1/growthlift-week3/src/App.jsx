import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import QuoteBox from "./components/QuoteBox";
import SkillsList from "./components/SkillsList";

function App() {
  const interns = [
    { id: 1, name: "Ali", city: "Lahore" },
    { id: 2, name: "Sara", city: "Karachi" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <h2>My Cards</h2>
      <Card title="React" description="JS library for UIs" color="#A78BFA" />
      <Card title="Vite" description="Fast build tool" color="#00C864" />
      <Card title="Tailwind" description="Utility-first CSS" color="#00B4D8" />

      <h2>Interns List (Dynamic Mapping)</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {interns.map((intern) => (
          <Card key={intern.id} title={intern.name} description={intern.city} color="#6366F1" />
        ))}
      </div>

      <SkillsList />

      <h2>Interactive Elements</h2>
      <Counter />
      <Toggle />
      <QuoteBox />
    </div>
  );
}

export default App;
