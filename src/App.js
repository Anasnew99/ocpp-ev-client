import './App.css';
import OCPPClient from './main/ocppClient';
function App() {
  const onConnect = ()=>{
    OCPPClient();
  }
  return (
  <>
   <div>Hello</div>
   <div>
     <button onClick={onConnect}>
       Connect
     </button>
   </div>
  </>
  );
}

export default App;
