import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Link,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  details: {
    maxwidth: "300px",
    margin: "50px auto",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "20px",
  },
  images: {
    width: "250px",
    height: "250px",
  },
}));
const Pokemon = (props) => {
  const classes = useStyles();
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);
  // const { name, id, species, height, weight, types, sprites } = pokemon;
  //   const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  //   const { front_default } = sprites;
  return (
    <Grid container className={classes.gridCOntainer}>
      {pokemon !== undefined ? (
        <Grid item className={classes.details}>
          <Typography variant="h3">
            {pokemonId}. {pokemon.name}
            <img src={pokemon.sprites.front_default} alt="" />
          </Typography>
          <Box component="div" style={{ width: "100%", margin: "20px 5px" }}>
            <img
              className={classes.images}
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt=""
            />
          </Box>
          <Typography variant="h4">Pokemon Details</Typography>
          <Typography variant="subtitle2">
            Species :<Link href={pokemon.species.url}> {pokemon.name}</Link>
          </Typography>
          <Typography>Height : {pokemon.height}</Typography>
          <Typography>Weight : {pokemon.weight}</Typography>
          <Typography variant="subtitle1">Types:-</Typography>
          {pokemon.types.map((x, y) => (
            <Typography variant="subtitle2" key={y}>
              <ul style={{ margin: "0" }}>
                <li>{x.type.name}</li>
              </ul>
            </Typography>
          ))}
        </Grid>
      ) : (
        <Grid item className={classes.details}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default Pokemon;
