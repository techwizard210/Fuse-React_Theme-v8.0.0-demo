import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrders = createAsyncThunk('eCommerceApp/orders/getOrders', async () => {
  const response = await axios.get('/api/ecommerce/orders');
  const data = await response.data;

  return data;
});

export const removeOrders = createAsyncThunk(
  'eCommerceApp/orders/removeOrders',
  async (orderIds, { dispatch, getState }) => {
    await axios.delete('/api/ecommerce/orders', { data: orderIds });

    return orderIds;
  }
);

const ordersAdapter = createEntityAdapter({});

export const { selectAll: selectOrders, selectById: selectOrderById } = ordersAdapter.getSelectors(
  (state) => state.eCommerceApp.orders
);

const ordersSlice = createSlice({
  name: 'eCommerceApp/orders',
  initialState: ordersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setOrdersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getOrders.fulfilled]: ordersAdapter.setAll,
    [removeOrders.fulfilled]: (state, action) => ordersAdapter.removeMany(state, action.payload),
  },
});

export const { setOrdersSearchText } = ordersSlice.actions;

export const selectOrdersSearchText = ({ eCommerceApp }) => eCommerceApp.orders.searchText;

export default ordersSlice.reducer;
