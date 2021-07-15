//import logo from './logo.svg';
import './App.css';
import {GetAPI} from './components/API/GetAPI'
//import {ChildToParent} from './components/ChildToParent'
//import {useState} from 'react'
function App() {
  //var name ="react js"
 //const[name,setName] = useState("react js")
  
      //by help of hooks change props values..
      // function getInfo()
      // {
      //   alert('this is function porps')
      // }
   //child to parents data transfer in react
  //  function parentFun(info)
  //  {
  //    //alert('hello this is parents')
  //    console.log(info)
  //    alert(info.email,info.name)
  //  }

   



  return (
    <div className="App">
      <GetAPI />
      {/* <ChildToParent data ={parentFun}/> */}
      {/* <RanderClassComp name={name}/>
      <button onClick={()=>setName('done change success')}>update State</button> */}
      {/* <ReactLyf  name= "reactjs" email="abc@gmail.com"/> props send to parnts to childs*/}
     {/* <PropsFun name={name} other={{address:'ghaziabed',mobile:'0256'}}/>
     <button onClick={()=>setName('tom')}>update name</button> */}
     {/* <PropsClass name= "vinay"/> */}

    </div>
  );
}
// 
// function Demo()
// {
  // return(
    // <div>
      {/* <h3>this is same file components</h3> */}
    {/* </div> */}
  // )
// }

export default App;
/*

diff bt package.json and package.lock.json
agar app.js k anadr hi file ya components bna loge to import nahi karne ki jarurt ha for example..

pacage.json projects ki dependenci ko save karta hai..
but package.lock.json dependnci ki full details ko rakhta hai.
these are multiple componetes are available in react like functional components,class base components,HOC components
Controlled components Uncontrolled Compents..and many more..
kisi componets k anadr dusere componets ko use kar skate ha "yes"
jaha se data bheja ja raha ha voha pe data change kar sakte ha but jaha recive kiya ja raha hai voha nahi
change kar sakte..
React lifecycle k phase 3 hi hote ha 1.mount 2 update 3 unmount 
*/