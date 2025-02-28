import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getvote = createAsyncThunk("vote/get", (async) => {
  try {
    let result = axios.get("http://localhost:5000/vote/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addvote = createAsyncThunk("vote/add", async (newvote) => {
  try {
    let result = axios.post("http://localhost:5000/vote/add", newvote);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletevote = createAsyncThunk("vote/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/vote/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editvote = createAsyncThunk(
  "vote/edit",
  async ({ id, newprog }) => {
    try {
      let result = axios.put(`http://localhost:5000/vote/${id}`, newprog);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  voteList: [],
  status: null,
  error: null, 
};

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getvote.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getvote.fulfilled, (state, action) => {
        state.status = "success";
        state.voteList = action.payload.data.votes;
      })
      .addCase(getvote.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addvote.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addvote.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addvote.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deletevote.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletevote.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletevote.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editvote.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editvote.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editvote.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// export const { } = voteSlice.actions;

export default voteSlice.reducer;
