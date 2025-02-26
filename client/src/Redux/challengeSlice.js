import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getchallenge = createAsyncThunk("challenge/get", (async) => {
  try {
    let result = axios.get("http://localhost:5000/challenge/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addchallenge = createAsyncThunk(
  "challenge/add",
  async (newchallenge) => {
    try {
      let result = axios.post(
        "http://localhost:5000/challenge/add",
        newchallenge
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletechallenge = createAsyncThunk(
  "challenge/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/challenge/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editchallenge = createAsyncThunk(
  "challenge/edit",
  async ({ id, newprog }) => {
    try {
      let result = axios.put(`http://localhost:5000/challenge/${id}`, newprog);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  challengeList: [],
  status: null,
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getchallenge.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getchallenge.fulfilled, (state, action) => {
        state.status = "success";
        state.challengeList = action.payload.data.challenges;
      })
      .addCase(getchallenge.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addchallenge.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addchallenge.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addchallenge.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deletechallenge.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletechallenge.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletechallenge.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editchallenge.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editchallenge.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editchallenge.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// export const { } = challengeSlice.actions;

export default challengeSlice.reducer;
