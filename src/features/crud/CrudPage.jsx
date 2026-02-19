import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addRecord, deleteRecord, updateRecord } from "./crudSlice";
import {  Link } from "react-router-dom";

function CrudPage() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.crud.records);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      dispatch(updateRecord(formData));
      setIsEdit(false);
    } else {
      dispatch(addRecord(formData));
    }

    setFormData({ id: "", name: "", email: "" });
  };

  const handleEdit = (record) => {
    setFormData(record);
    setIsEdit(true);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        CRUD Management
      </Typography>

      <Link to="/products">Products</Link>

      <Typography variant="subtitle1" gutterBottom>
        Total Records: {records.length}
      </Typography>

      {/* Form */}
      <Paper sx={{ padding: 3, marginBottom: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained">
            {isEdit ? "Update" : "Add"}
          </Button>
        </Box>
      </Paper>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id} hover>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={() => handleEdit(record)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="small"
                    color="error"
                    onClick={() =>
                      dispatch(deleteRecord(record.id))
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CrudPage;
