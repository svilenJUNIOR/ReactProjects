import { useState } from "react";
import { ExampleRender , ButtonsRender} from "../Services/ExamplesService.jsx";

export default function ExamplesSection() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
      {ButtonsRender(selectedTab, setSelectedTab)}
      </menu>
      {ExampleRender(selectedTab)}
    </section>
  );
}