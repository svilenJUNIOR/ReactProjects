import ConceptCard from "../components/ConceptCard.jsx";
import { CORE_CONCEPTS } from "../assets/Data/data.js";

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <ConceptCard key={index} {...concept} />
        ))}
      </ul>
      <h2>Good Job!</h2>
    </section>
  );
};
 