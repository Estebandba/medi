import React from "react";

import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AboutYou = ({ description, data, setDescription }) => {
  const patients = data.reduce((acc, current) => {
    if (current.id === description) {
      return current;
    }
    return acc;
  }, {});

  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper className="aboutYou-container">
          <List
            component="nav"
            aria-label="mailbox folders"
            className={classes.root}
          >
            <ListItem>
              <Typography gutterBottom variant="h5" component="h2">
                {patients.name}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem divider>
              <Typography variant="body2" color="textPrimary" component="label">
                Date of Birth:
              </Typography>
            </ListItem>

            <ListItem divider>
              <Typography variant="body2" color="textSecondary" component="p">
                {patients.doB}
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="body2" color="textPrimary" component="label">
                Phone Number:
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="body2" color="textSecondary" component="p">
                {patients.phoneNumber}
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="body2" color="textPrimary" component="label">
                Joined:
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography variant="body2" color="textSecondary" component="p">
                {patients.patientJoined}
              </Typography>
            </ListItem>

            <Button
              id="aboutYou-btn"
              variant="contained"
              color="primary"
              onClick={() => setDescription("")}
            >
              close
            </Button>
          </List>
        </Paper>
      </Slide>
    </Grid>
  );
};

export default AboutYou;
