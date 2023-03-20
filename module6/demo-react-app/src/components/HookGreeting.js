

import React from "react";

function HookGreeting(){

  const [greeting, setGreeting] = useState('Hello World')
  const greetingName = () => {
    setGreeting('Hello, Amber')
  }

  return(
  <div class="componentBox">
    <p>{greeting}</p>
    <button onClick={() => greetingName()}>Name</button>
  </div>  
  );
}

export default HookGreeting
