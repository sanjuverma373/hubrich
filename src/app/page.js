"use cilent"
import Image from "next/image";
import Headersection from "./components/Headersection";
import Faultsection from "./components/Faultsection";
import Getsection from "./components/Getsection";
import Targetsection from "./components/Targetsection";
import Mindsetsection from "./components/Mindsetsection";
import Bindingsection from "./components/Bindingsection";
import Aboutsection from "./components/Aboutsection";
import Clientsection from "./components/Clientsection";
import Backtop from "./components/Backtop";
import Footersection from "./components/Footersection";
import Oversection from "./components/Oversection";
import Preloadersec from "./components/Preloadersec";


export default function Home() {
  return (   
   <>
   <Preloadersec/>
  <Headersection/>
  <Faultsection/>
  <Getsection/>
  <Targetsection/>
  <Mindsetsection/>
  <Oversection/>
  <Aboutsection/>
  <Clientsection/>
  <Bindingsection/>
  <Footersection/>
  <Backtop/>
   </>
  );
}
