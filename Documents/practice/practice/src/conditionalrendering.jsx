import Events from "./Events"
export default function Cars(props){
   const number=6
   if(number===3){
    return <>
    <Events />
    </>
   }
   else{
    return <h1>HELLO WORLD</h1>
   }
}
//this is a typical example of how conditionrendering should like in a react code