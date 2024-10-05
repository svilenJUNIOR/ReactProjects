import Header from "./components/Header.jsx";
import CoreConceptsSection from "./containers/CoreConceptsSection.jsx";
import ExamplesSection from "./containers/ExamplesSection.jsx";

function App() {
  return (
    <div>
    <Header/>
      <main>
        <CoreConceptsSection/>
        <ExamplesSection/>
      </main>
    </div>
  );
}

export default App;