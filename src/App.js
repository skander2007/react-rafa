import logo from './logo.svg';
import './App.css';
import FullName from './profile/fullName/FullName';
import Profession from './profile/profession/Profession';
import Bio from './profile/bio/Bio';



const Nadal = {
  name : "Rafael Nadal",
  biographie : "was born on June 3, 1986 in Manacor, Spain. Very early on, young Rafael developed a passion for sport, first for football (he was in awe of his uncle Miguel Ángel, defender at FC Barcelona) then for basketball, which he practiced for a short time, before starting in tennis from the age of 4.",
  professionality:"Tennis Pro player",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rafael_Nadal_%2819047517620%29.jpg/250px-Rafael_Nadal_%2819047517620%29.jpg"
}

const handleName = (name) => alert(`Hi im ${name}`)

function App() {
  return (
    <div className="App">
    <FullName player={Nadal} rafael={handleName}/>
    <Profession pro={Nadal}/>
    <Bio child={Nadal}/>
    </div>
  );
}

export default App;
