import Background from "./components/Background"
import Foreground from "./components/Foreground"


function App() {
 
  return (
    <>
      <div className="relative dark:bg-zinc-800 bg-white w-full h-screen">
       <Background/>
        <Foreground/>
        
      </div>
    
    </>
  )
}

export default App
