import "./styles.css";

// components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeadlineCards />
    </div>
  );
}
