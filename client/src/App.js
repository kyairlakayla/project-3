// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import Navigation from './components/Navigation/index';
import Hero from './components/Hero/index';
import Recipe from './components/Recipe/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div>
      <section className="top-section">
        <Navigation></Navigation>
        <Hero></Hero>
      </section>

      <main className="middle-section">
        <Recipe></Recipe>
      </main>

      <footer className="bottum-section">
        <Footer></Footer>
      </footer>
      
    </div>
  );
}

export default App;
