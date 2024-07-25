import "./App.css";
import BlogHero from "./components/BlogHero/BlogHero";
import BlogsPage from "./components/BlogsGrid";
import Header from "./components/Header";
import MostViewed from "./components/MostViewed";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <BlogHero />
        <div className="blogsWrapper">
          <BlogsPage />
          <MostViewed />
        </div>
      </main>
    </div>
  );
}

export default App;
