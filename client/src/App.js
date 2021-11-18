import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import Navigation from './components/Navigation/index';
import Hero from './components/Hero/index';
import Recipe from './components/Recipe/index'
import Single from "./components/Single";
import Saved from "./components/Saved";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <Recipe></Recipe>
      <Single></Single>
      <Saved></Saved>
    </div>
  );
}

export default App;
