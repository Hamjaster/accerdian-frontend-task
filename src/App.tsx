import "./App.css";
import Hero from "./comps/Hero";
import Navbar from "./comps/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="mt-8 flex mx-auto bg-[#e6f0fc]  py-3 rounded-full  items-center justify-evenly  w-2/5 font-medium">
        <span className="cursor-pointer text-blue-500">Refer</span>
        <span className="cursor-pointer">Benefits</span>
        <span className="cursor-pointer">FAQs</span>
        <span className="cursor-pointer">Support</span>
      </div>

      <Hero />
    </>
  );
}

export default App;
