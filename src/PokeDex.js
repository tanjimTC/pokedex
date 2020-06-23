import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  TextField,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  CardContainer: {
    maxWidth: 345,
    margin: "auto",
  },
  pokeDexContainer: {
    padding: "10px 50px",
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: "auto",
    marginRight: "auto",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    width : '300px',
    margin: "5px auto",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));
const PokeDex = (props) => {
  const [pokemonData, setPokemonData] = useState({});
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((details) => {
        const { results } = details;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.pokeDexContainer} spacing={2}>
        <React.Fragment>
          {Object.keys(pokemonData).map(
            (x) =>
              pokemonData[x].name.includes(filter) && (
                <Grid key={x} item xs={12} sm={3}>
                  <Link to={`pokemon/${x}`} style={{ textDecoration: "none" }}>
                    <Card className={classes.CardContainer}>
                      <CardActionArea>
                        <Avatar
                          className={classes.avatar}
                          src={`https://pokeres.bastionbot.org/images/pokemon/${x}.png`}
                          title="Contemplative Reptile"
                        />

                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="h3"
                            align="center"
                          >
                            {x} {pokemonData[x].name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              )
          )}
        </React.Fragment>
      </Grid>
    </div>
  );
};

export default PokeDex;
