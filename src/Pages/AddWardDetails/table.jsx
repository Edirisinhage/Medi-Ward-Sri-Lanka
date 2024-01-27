import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// Example path correction:
import { getNurses } from './nursesService.js'; // Adjust the path accordingly




export default function NursesTable() {
  const [nurses, setNurses] = useState([]);
 

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const fetchedNurses = await getNurses();
        setNurses(fetchedNurses);
      } catch (error) {
        // Handle error
        console.error('Error fetching nurses:', error);
      }
    };
  

    fetchNurses();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const handleEdit = (id) => {
    console.log(`Edit clicked for ID ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for ID ${id}`);
    // Add your delete logic here
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Service ID</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nurses.map((nurse) => (
            <TableRow key={nurse.id}>
              <TableCell>{nurse.id}</TableCell>
              <TableCell>{nurse.name}</TableCell>
              <TableCell>{nurse.serviceId}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(nurse.id)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(nurse.id)} color="secondary" style={{ marginLeft: 8 }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
