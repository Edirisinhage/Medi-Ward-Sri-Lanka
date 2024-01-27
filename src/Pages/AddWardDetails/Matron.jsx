import React, { useState } from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import NursesTable from './table';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
//import AddNurseForm from './addNurses';


export default function Matron() {
  const matronName = 'matron';
  const [matron, setMatron] = useState(matronName);
  const [ward, setWard] = useState('');
  const wards = ['', 'Accident ward', 'surgical ward-men', 'surgical ward-women'];
  const [sister, setSister] = useState('');
  const sisters = ['', 'W.G.Indrani', 'K.A. Vimala', 'R.M. Sujeewa'];
  //const [isAddNurseFormOpen, setIsAddNurseFormOpen] = useState(false);

  const handleChangeMatron = (event) => {
    setMatron(event.target.value);
  };

  const handleChangeWard = (event) => {
    setWard(event.target.value);
  };

  const handleChangeSister = (event) => {
    setSister(event.target.value);
  };



  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 3, m: 5 }}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                label="Matron Name"
                name="matronName"
                fullWidth
                value={matron}
                onChange={handleChangeMatron}
              />
              <TextField
                variant="outlined"
                fullWidth
                required
                value={ward}
                margin="normal"
                label="Select the ward"
                onChange={handleChangeWard}
                select
                SelectProps={{ native: true }}
              >
                {wards.map((ward) => (
                  <option value={ward} key={ward}>
                    {ward}
                  </option>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                fullWidth
                required
                value={sister}
                margin="normal"
                label="Select the sister"
                onChange={handleChangeSister}
                select
                SelectProps={{ native: true }}
              >
                {sisters.map((sister) => (
                  <option value={sister} key={sister}>
                    {sister}
                  </option>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                required
                margin="normal"
                label="Number of nurses in the ward"
                name="NumberOfNurses"
                fullWidth
              />
              <Button
                variant="outlined"
                size="medium"
                sx={{ margin: '12px' }}
                startIcon={<AddIcon />}
              >
                Add nurse
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ p: 3, m: 5 }}>
          <NursesTable />
        </Box>
      </Grid>
    </Grid>
  );
}
