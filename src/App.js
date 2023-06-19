import Header from './Components/Header'
import Pages from './Components/Pages'
import "./App.css"

function App() {
  // const newLemda = 0.1;
  // const newMue = 0.125;

  // const ro = newLemda / newMue;
  // const theta = (9 - 7) ** 2 / 12;
  // console.log("setP",(ro));
  // console.log("setLq",(((((newLemda ** 2) * (theta ** 2)) + (ro ** 2))) / (2 * (1 - ro))));

  // console.log("setWq",(((((newLemda ** 2) * (theta ** 2)) + (ro ** 2))) / (2 * (1 - ro)) / newLemda));

  // console.log("setW",(
  //   ((((newLemda ** 2) * (theta ** 2)) + (ro ** 2))) / (2 * (1 - ro)) / newLemda +
  //   (1 / newMue)
  // ));
  // console.log("setL",(
  //   newLemda * ((((newLemda ** 2) * (theta ** 2)) + (ro ** 2))) / (2 * (1 - ro)) / newLemda +
  //   (1 / newMue)
  // ));
  function factorial(n) {
    // program to find the factorial of a number

    // take input from the user

    // checking if number is negative
    if (n < 0) {
      console.log('Error! Factorial for negative number does not exist.');
    }

    // if number is 0
    else if (n === 0) {
      console.log(`The factorial of ${n} is 1.`);
    }

    // if number is positive
    else {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact *= i;
      }
      console.log(`The factorial of ${n} is ${fact}.`);
      return fact;
    }
  }

  var lemda = 1 / 10;
  var miu = 1 / ((10 + 20) / 2);
  var server = 2;
  var ro = lemda / (miu * server);
  var po = 0.1453


  var varianceOfServiceTime = (20 - 10) ** 2 / 12;
  // var varianceOfInterArrival = lemda;
  // var CSquareA = varianceOfInterArrival / ((1 / lemda) ** 2);
  var CSquareA = 1;
  var CSquareS = varianceOfServiceTime / ((1 / miu) ** 2);
  var MMClistInQueue = (po * (((lemda / miu) ** server) * ro)) / (factorial(server) * ((1 - ro) ** 2))


  // (ro ** 2 * (1 + CSquareS) * (CSquareA + ro ** 2 * CSquareS)) /
  // (2 * (1 - ro) * (1 + ro ** 2) * CSquareS);
  var MMCwaitInQueue = MMClistInQueue / lemda;
  var GGCwaitInQueue = MMCwaitInQueue * ((CSquareA + CSquareS) / 2);
  var GGClistInQueue = GGCwaitInQueue * lemda;

  var waitInSystem = GGCwaitInQueue + (1 / miu);
  var listInSystem = lemda * waitInSystem;
  var serverUtilization = ro * 100;

  console.log("setLq", MMClistInQueue);
  console.log("setWq", MMCwaitInQueue);
  console.log(" setW", waitInSystem);
  console.log(" setL", listInSystem);
  console.log(" setP", serverUtilization)
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
