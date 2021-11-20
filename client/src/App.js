// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import "semantic-ui-css/semantic.min.css"
import Navigation from './components/Navigation/index';
import Hero from './components/Hero/index';
import Recipe from './components/Recipe/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <section className="top-section">
        <Navigation></Navigation>
        <Hero></Hero>
      </section>

      <main className="middle-section">
        <Recipe></Recipe>
      </main>

      <footer className="bottom-section">
        <Footer></Footer>
      </footer>
      
    </>
  );
}

export default App;
