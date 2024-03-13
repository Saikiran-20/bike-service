import { createSlice } from "@reduxjs/toolkit";
import { InitialState, RoleType } from "./types";
const initialState: InitialState = {
  apiStatus: "none",
  bookingDetails: [
    {
      id: "",
      name: "New user",
      userId: "saikirankannemadugu@gmail.com",
      phoneNumber: 0,
      serviceIds: [],
      totalCost: 0,
      location: "",
      deliveryDate: "",
      status: "Pending",
    },
  ],
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setTotalCost: (state, action) => {
      const { id, totalCost } = action.payload;
      const bookingIndex = state.bookingDetails.findIndex((booking) => booking.id === id);
      if (bookingIndex !== -1) {
        state.bookingDetails[bookingIndex].totalCost = totalCost;
      }
    },
    saveBookingDetailsLoading: (state, action) => {},
    saveBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    saveBookingDetailsSuccess: (state, action) => {},
    setDeliveryStatusLoading: (state, payload) => {},

    setDeliveryStatus: (state, action) => {
      const { id, data } = action.payload;
      const bookingIndex = state.bookingDetails.findIndex((booking) => booking.id === id);
      if (bookingIndex !== -1) {
        state.bookingDetails[bookingIndex].status = data;
      }
    },
    setStatus: (state, action) => {
      state.apiStatus = action.payload;
    },
  },
});

export const {
  setTotalCost,
  saveBookingDetailsLoading,
  saveBookingDetails,
  saveBookingDetailsSuccess,
  setDeliveryStatusLoading,
  setDeliveryStatus,
  setStatus,
} = bookingSlice.actions;

export default bookingSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { InitialState, RoleType } from "./types";

// const initialState: InitialState = {
//   apiStatus: "none",
//   bookingDetails: [
//     {
//       id: "",
//       name: "New user",
//       userId: "saikirankannemadugu@gmail.com",
//       phoneNumber: 0,
//       serviceIds: [],
//       totalCost: 0,
//       location: "",
//       deliveryDate: "",
//       status: "Pending",
//     },
//   ],
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setTotalCost: (state, action) => {
//       const { id, totalCost } = action.payload;
//       const bookingIndex = state.bookingDetails.findIndex((booking) => booking.id === id);
//       if (bookingIndex !== -1) {
//         state.bookingDetails[bookingIndex].totalCost = totalCost;
//       }
//     },
//     saveBookingDetailsLoading: (state, action) => {
//       state.apiStatus = "loading";
//     },
//     saveBookingDetails: (state, action) => {
//       state.bookingDetails = action.payload;
//       state.apiStatus = "idle";
//     },
//     saveBookingDetailsSuccess: (state, action) => {
//       state.apiStatus = "success";
//     },
//     setDeliveryStatusLoading: (state, action) => {
//       state.apiStatus = "loading";
//     },
//     setDeliveryStatus: (state, action) => {
//       const { id, data } = action.payload;
//       const bookingIndex = state.bookingDetails.findIndex((booking) => booking.id === id);
//       if (bookingIndex !== -1) {
//         state.bookingDetails[bookingIndex].status = data;
//         state.apiStatus = "idle";
//       }
//     },
//     setStatus: (state, action) => {
//       state.apiStatus = action.payload;
//     },
//     deleteBooking: (state, action) => {
//       const idToDelete = action.payload;
//       state.bookingDetails = state.bookingDetails.filter(booking => booking.id !== idToDelete);
//     },
//   },
// });

// export const {
//   setTotalCost,
//   saveBookingDetailsLoading,
//   saveBookingDetails,
//   saveBookingDetailsSuccess,
//   setDeliveryStatusLoading,
//   setDeliveryStatus,
//   setStatus,
//   deleteBooking, // Add deleteBooking action
// } = bookingSlice.actions;

// export default bookingSlice.reducer;
