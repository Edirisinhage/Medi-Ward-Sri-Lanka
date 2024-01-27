// AddNurseForm.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddNurseForm (open, handleClose, handleAddNurse){
  const [fullName, setFullName] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [leaveNo, setLeaveNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [serviceStartDate, setServiceStartDate] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleServiceIdChange = (event) => {
    setServiceId(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleLeaveNoChange = (event) => {
    setLeaveNo(event.target.value);
  };

  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleServiceStartDateChange = (event) => {
    setServiceStartDate(event.target.value);
  };

  const handleAddNurseClick = () => {
    // Call the parent component's function to handle adding a nurse
    handleAddNurse({
      fullName,
      serviceId,
      birthdate,
      email,
      position,
      leaveNo,
      mobileNo,
      serviceStartDate,
    });

    // Close the form
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Nurse</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          margin="normal"
          label="Full Name"
          fullWidth
          value={fullName}
          onChange={handleFullNameChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Service ID"
          fullWidth
          value={serviceId}
          onChange={handleServiceIdChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Birthdate"
          fullWidth
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Position"
          fullWidth
          value={position}
          onChange={handlePositionChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Leave No"
          fullWidth
          value={leaveNo}
          onChange={handleLeaveNoChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Mobile No"
          fullWidth
          value={mobileNo}
          onChange={handleMobileNoChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Service Start Date"
          fullWidth
          type="date"
          value={serviceStartDate}
          onChange={handleServiceStartDateChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddNurseClick} color="primary" startIcon={<AddIcon />}>
          Add Nurse
        </Button>
      </DialogActions>
    </Dialog>
  );
};


