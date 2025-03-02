function shoot(){
    console.log("Goal");
}

export default function Events(){
  return(
    <>
      <button type="button" onClick={(say)=>{alert("hello world")}}>GOAL</button>
      <button type="button" onClick={shoot}>SHOOT</button>
    </>
   
  )
}

//all eventhandlers are handled in camel case unlike html they take patterns like  ("onClick")  and the functions they are call should be in a constant or a seperate fumction and are put in braces e.g onClick={shoot}
//basically function based components doesnt necessarily mean there could be onlu one function in a component file the one being exported is the one being used functions are called in another function in a particular component by putting t in a curly braces
//u can write a function directly in the curly braces by by using the implicit method of declaring a function