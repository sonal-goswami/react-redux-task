import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import crudReducer from "../features/crud/crudSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    crud: crudReducer,
  },
});
