import reactImg from "../assets/Images/react-core-concepts.png";

const reactDesctriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (  
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>imam kamila v supata</h1>
    <p>
      {reactDesctriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}