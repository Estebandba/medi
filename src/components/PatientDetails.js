import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import data from "../utils/data";
import AboutYou from "./AboutYou";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PatientDetails() {
  const classes = useStyles();
  const [description, setDescription] = useState("");

  const handlePatientInfo = (e) => {
    const patientId = e.target.id;
    setDescription(patientId);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="space-evenly"
        style={{ minHeight: "100%" }}
      >
        <Grid
          item
          xs={description !== "" ? 6 : 12}
          className="patient-details-container"
        >
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date of Birth</TableCell>
                  {description === "" && (
                    <TableCell align="center">Actions</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((patient) => (
                  <TableRow key={patient.id} onClick={handlePatientInfo}>
                    <TableCell align="center" id={patient.id}>
                      {patient.name}
                    </TableCell>
                    <TableCell align="center" id={patient.id}>
                      {patient.doB}
                    </TableCell>
                    {description === "" && (
                      <TableCell align="center" id={patient.id}></TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {description !== "" && (
          <AboutYou {...{ description, data, setDescription }} />
        )}
      </Grid>
    </>
  );
}
