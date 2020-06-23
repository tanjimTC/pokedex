import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokeDex from './PokeDex';
import Pokemon from './Pokemon';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL +'/'}>
          <PokeDex/>
        </Route>
        <Route path={process.env.PUBLIC_URL +'/pokemon/:pokemonId'}>
          <Pokemon/>
        </Route>
        <Route path='*'> 
          <center>
            <h3>
              page not found
            </h3>
          </center>
        </Route>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
