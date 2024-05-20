
import PersonCard from "./components/PersonCard.jsx";
function App (){

  return (
    <>
    <PersonCard lastName={'Doe'} name={'Jane'} age={'45'} hairColor={'Black'}/>
    <PersonCard lastName={'Smith'} name={'John'} age={'88'} hairColor={'Brown'}/>
    <PersonCard lastName={'Fillmore'} name={'Millard'} age={'50'} hairColor={'Brown'}/>
    <PersonCard lastName={'Smith'} name={'Maria'} age={'62'} hairColor={'Brown'}/>
    </>
  );
   
}

export default App