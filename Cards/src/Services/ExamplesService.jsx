import { EXAMPLES } from "../assets/Data/data.js";
import TabButton from "../components/TabButton.jsx";

export function ExampleRender(selectedTab){
    let tabContent = "Ни ма чакай, ми слагай камилата в супата";

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }

  return tabContent;
};

export function ButtonsRender(selectedTab, setSelectedTab){
  return(
  Object.keys(EXAMPLES).map((exampleKey, index) => <TabButton key = {index} isSelected={selectedTab === exampleKey} onClick={() => setSelectedTab(exampleKey)}>{exampleKey}</TabButton>)
  );
}