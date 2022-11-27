import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App mix-blend-difference lg:px-10 md:px-8 sm:px-5 px-3 py-5 flex flex-col justify-between pb-28 text-white h-screen">
        <Navbar />
        <div className="space-y-2">
          <div className="title">
            <img src="/pheonix_2.svg" className="" alt="" />
          </div>
          <div className="text-center desc">
            <div className="mx-auto xl:text-3xl md:text-2xl text-[24px] leading-[1] md:w-[90%]">
              A FULL-SERVICE AGENCY THAT EXISTS AT THE INTERSECTION OF
              CREATIVITY AND MARKETING , BUILT EXCLUSIVELY TO HELP FAST MOVING
              COMPANIES ACHIEVE THEIR GOALS.
            </div>
          </div>
        </div>
      </div>
      <video loop muted autoPlay playsInline id="myVideo">
        <source src="/8f70714b.mp4" />
      </video>
    </>
  );
}

export default App;
