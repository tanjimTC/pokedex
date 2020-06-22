import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Link } from "@material-ui/core";
import mockData from "./mockData";
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
  const PokemonDetails = mockData[pokemonId];
  const { name, sprites, species, height, weight , types } = PokemonDetails;
  return (
    <Grid container className={classes.gridCOntainer}>
      <Grid item className={classes.details}>
        <Typography variant="h3">
          {pokemonId}. {name}
          <img src={sprites.front_default} alt="" />
        </Typography>
        <Box component="div" style={{ width: "100%", margin: "20px 5px" }}>
          <img
            className={classes.images}
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
            alt=""
          />
        </Box>
        <Typography variant="h4">Pokemon Details</Typography>
        <Typography variant="subtitle2">
          Species : 
          <Link href={species.url}> {name}</Link>
        </Typography>
        <Typography>Height : {height}</Typography>
        <Typography>Weight : {weight}</Typography>
        <Typography variant='subtitle1'>Types:-</Typography>
        {types.map((x,y)=>(
            <Typography variant='subtitle2' key={y}>
                <ul style={{margin:'0'}}>
                    <li >{x.type.name}</li>
                </ul>
            </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Pokemon;
