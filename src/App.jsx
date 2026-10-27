
import "./App.css";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <h1>Understanding Props in React</h1>
      <p>
        Props are used to pass data from a parent component
        to a child component.
      </p>

      <Greeting name="Mahak" />
      <Greeting name="React Student" />
    </div>
  );
}
// Props
  //Props in react are used to pass data in component to another component
 // Immutable
  //<Greet name="Rohit" age={20}/> we can only pass string directly in props else we have to pass in {}
 // Attribute
 // React is a just a libary not a full framework which can only be used for frontend not backend.
 // Component Reusability	Applications are split into small, isolated, and reusable blocks of code. This speeds up development times and makes the codebase easier to maintain.
 // High Performance (Virtual DOM)	Instead of updating the browser's slow Real DOM directly, React updates a lightweight "Virtual DOM". It only re-renders the exact elements that changed, ensuring fast user experiences.
 // Stable One-Way Data Flow	Data flows strictly from parent components down to child components. This downward data binding ensures that modifying child elements won't accidentally break parent data, making the system predictable and easy to debug.
 // SEO Friendliness	Traditional JavaScript apps often face search engine indexing hurdles. Through Server-Side Rendering (SSR) tools like Next.js, React apps can execute on the server and deliver standard HTML to web crawlers.
 // React Native for Mobile	Learning React serves as a double investment. The exact same core architectural concepts can be used to build native iOS and Android apps using React Native.
 // Vast Ecosystem & Community	Backed by a massive developer network, you gain immediate access to endless third-party packages, custom developer tools, browser extensions, and comprehensive troubleshooting resources.
 // In React, rendering is the process where React calls your component function to figure out what the UI should look like based on the current state and props. It is essentially React "thinking" or taking a snapshot of the UI before making any physical changes to the screen
 //
export default App;
