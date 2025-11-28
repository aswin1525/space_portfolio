import { useState } from "react";
import SpaceDock from "./components/SpaceDock";
import ControlBoard from "./components/ControlBoard";
import TravelAnimation from "./components/TravelAnimation";
import PlanetLayout from "./components/PlanetLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Contact from "./pages/Contact";

function App() {
  const [gameState, setGameState] = useState<"dock" | "control" | "traveling" | "planet">("dock");
  const [currentPlanet, setCurrentPlanet] = useState<string>("home");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleEnterShip = () => {
    setGameState("control");
  };

  const handleSelectPlanet = (planetId: string) => {
    console.log("Traveling to:", planetId);
    setCurrentPlanet(planetId);
    setGameState("traveling");
    // Simulate travel time
    setTimeout(() => {
      setGameState("planet");
    }, 1000);
  };

  const handleExitShip = () => {
    setGameState("dock");
  };

  return (
    <main className="w-full h-screen bg-transparent text-white">
      {gameState === "dock" && <SpaceDock onEnter={handleEnterShip} />}

      {gameState === "control" && (
        <ControlBoard
          onSelectPlanet={handleSelectPlanet}
          onExit={handleExitShip}
          currentIndex={carouselIndex}
          onIndexChange={setCarouselIndex}
        />
      )}

      {gameState === "traveling" && (
        <TravelAnimation
          theme={
            currentPlanet === "home" ? "teal" :
              currentPlanet === "about" ? "purple" :
                currentPlanet === "skills" ? "blue" :
                  currentPlanet === "projects" ? "orange" :
                    currentPlanet === "social" ? "green" :
                      "pink"
          }
        />
      )}

      {gameState === "planet" && (
        <PlanetLayout
          planetName={currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)}
          onReturn={() => setGameState("control")}
          colorTheme={
            currentPlanet === "home" ? "teal" :
              currentPlanet === "about" ? "purple" :
                currentPlanet === "skills" ? "blue" :
                  currentPlanet === "projects" ? "orange" :
                    currentPlanet === "social" ? "green" :
                      "pink"
          }
        >
          {currentPlanet === "home" && <Home />}
          {currentPlanet === "about" && <About />}
          {currentPlanet === "skills" && <Skills />}
          {currentPlanet === "projects" && <Projects />}
          {currentPlanet === "social" && <Social />}
          {currentPlanet === "contact" && <Contact />}
        </PlanetLayout>
      )}
    </main>
  );
}

export default App;
