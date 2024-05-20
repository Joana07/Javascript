const PersonCard = (props) => {
  const {lastName,name,age,hairColor}=props

  return(
    <>
   <div>
   <h1>{lastName} {name}</h1>
   <p>Age:{age}</p>
   <p>Hair Color:{hairColor}</p>
   </div>
    </>
  );

}
export default PersonCard;