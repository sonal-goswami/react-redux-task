import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import {  Link } from "react-router-dom";


const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Typography variant="h6" >
      <Link to="/crud">Crud Management</Link>
      </Typography>
  

      {loading && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error">
          {error}
        </Typography>
      )}

      {!loading && !error && (
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1976d2" }}>
                  <TableCell sx={{ color: "white" }}>ID</TableCell>
                  <TableCell sx={{ color: "white" }}>Title</TableCell>
                  <TableCell sx={{ color: "white" }}>Category</TableCell>
                  <TableCell sx={{ color: "white" }}>Price</TableCell>
                  <TableCell sx={{ color: "white" }}>Stock</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((product) => (
                  <TableRow key={product.id} hover>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
};

export default ProductList;
