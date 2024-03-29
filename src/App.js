import { createContext, useEffect, useRef, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Nav } from "./components/Nav";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Connect } from "./components/Connect";
import { DronesBuy } from "./components/DronesBuy";
import { DroneProject } from "./components/DroneProject";
import { Subscribe } from "./components/Subscribe";
import { Map } from "./components/Map";
import { Footer } from "./components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const AppContextProvider = createContext()
function App() {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()   
  const [showSideBar, setShowSideBar] = useState(false)
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  const values = {setShowSideBar, showSideBar, myRef, executeScroll}
  return (
    <AppContextProvider.Provider value={values}>
      <div>
        <Nav/>
        <Banner/>
        <About/>
        <Connect/>
        <DronesBuy/>
        <DroneProject/>
        <Subscribe/>
        <Map/>
        <Footer/>
        <Sidebar/>
      </div>
    </AppContextProvider.Provider>
  );
}

export default App;
