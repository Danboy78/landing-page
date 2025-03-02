import './App.css'
import Car from './Props.jsx'
import Events from './Events.jsx';
import Cars from './conditionalrendering.jsx';
import Lists from './list.jsx';

//props in react is same as properties can be used to assign properties from react component to anotther
function App() {
   return(
    <>
      <Car name="Benz"/>
      <Events />
      <Cars />
      <Lists />
    </>
   );
}

export default App
// all about components
//component would only be rendered if they have been imported and their name starts with Caps letter
//to return multiple component all have to be wrapped inside one div as return can only be used ones "<></>" is a better way of wrapping them