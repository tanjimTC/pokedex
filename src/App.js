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
        <Route exact path='/'>
          <PokeDex/>
        </Route>
        <Route path='/:pokemonId'>
          <Pokemon/>
        </Route>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
