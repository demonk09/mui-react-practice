import * as React from 'react';
import  {Grid}  from "@mui/material";
import Header from './Header';
import Content from './Content';




export default function App() {
  
  return (
    <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container={true} direction='row'>
      <Grid item xs={0} sm={2} />
      <Grid item xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  </Grid>
  );
}
