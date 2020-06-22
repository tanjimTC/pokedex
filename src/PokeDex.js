import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
} from "@material-ui/core";
import mockData from "./mockData";
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
}));
const PokeDex = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.pokeDexContainer} spacing={2}>
        {Object.keys(mockData).map((x) => (
          <Grid key={x} item xs={12} sm={3}>
            <Link to={`${x}`} style={{ textDecoration: "none" }}>
              <Card className={classes.CardContainer}>
                <CardActionArea>
                  <Avatar
                    className={classes.avatar}
                    src={mockData[x].sprites.front_shiny}
                    title="Contemplative Reptile"
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h3"
                      align="center"
                    >
                      {x} {mockData[x].name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokeDex;
