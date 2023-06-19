import Header from './Components/Header'
import Pages from './Components/Pages'
import "./App.css"

function App() {

  return (
    <div className="App">
      <Header />
      <div style={{
        width: '80%',
        margin: 'auto',
        textAlign: 'justify',
      }}>
        <h1 style={{
          textAlign: 'center',
          textDecoration: "underline #ff0000 8px",
          textDecorationSkipInk: "none",
          textUnderlineOffset: '-4px'
        }}>Queuing Model</h1>
        <p>Queuing models are essential tools in operations research that help analyze and optimize systems involving waiting lines or queues. These models provide mathematical frameworks to study the behavior of queues and predict key performance metrics. By understanding and optimizing customer arrival patterns, service times, and system capacities, queuing models contribute to improving system efficiency and customer satisfaction.<br /><br />
          In a queuing model, the arrival process represents the pattern or distribution of customer arrivals, which can being first-come-first-served (FCFS), last-come-first-served (LCFS), or priority-based ordering.
          <br /><br />

          Queuing models come in different types, such as M/M/1, M/M/c, M/M/∞, M/G/1, M/G/c, and M/D/1, where the notation represents the arrival and service distributions and the number of servers. Solving queuing models involves solving equations or using simulation techniques to obtain performance measures and optimize system parameters.
          <br /><br /></p>
      </div>
      <Pages />
    </div >

  );
}

export default App;
