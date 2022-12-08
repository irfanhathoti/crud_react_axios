import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddData from './Components/AddData';
import DashBoard from './Components/DashBoard';
import Header from './Components/Header';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Router>
        <Header />
        <Switch>
          <Route path='/AddData' exact component={
            () => {
              return (<AddData />)
            }
          } />
          <Route path='/' exact strict component={() => {
            return (
              <DashBoard />
            )

          }} />
          {/* <Route path='/AddData' exact  strict component={
            () => {
              return (<AddData />)
            }
          } /> */}
          <Route path= '/Contact' exact strict component={() =>{
            return(
              <Contact />
            )
          } }  />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
