import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Dashaboard = (props) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const routeChange = () => {
    props.history.push("/patient-details");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100%" }}
    >
      <Grid item xs={12}>
        <h1>{dateTime.toLocaleTimeString()}</h1>
        <h2>{dateTime.toLocaleDateString()}</h2>
      </Grid>

      <Grid item xs={12}>
        <Card className="patient-card">
          <CardActionArea>
            <CardMedia
              className=""
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent onClick={routeChange}>
              <Typography gutterBottom variant="h5" component="h2">
                Patient Details
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Click on this card to check patients details
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={routeChange}
              style={{ width: "100%" }}
            >
              Go!
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashaboard;
