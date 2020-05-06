import React from 'react';
import './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Userform from './components/UserForm';
import Comments from './components/Comments';
import Graph from './components/Graph';
import RaisedButton from 'material-ui/RaisedButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

function App() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="App">
      <MuiThemeProvider>
        <Userform />
        <RaisedButton 
            label="See comments &amp; results"
            primary={false}
            style = {styles.button}
            onClick={toggleDrawer("left", true)}
        />          
        <SwipeableDrawer
              anchor='left'
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
            <div className="flex">
              <Comments />
              <Graph />
            </div>
        </SwipeableDrawer>  
      </MuiThemeProvider>        
    </div>
  );
}
const styles = {
  button: {
      margin: 15
  }
}
export default App;
