import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getparticipant = createAsyncThunk("participant/get", (async) => {
  try {
    let result = axios.get("http://localhost:5000/participant/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addparticipant = createAsyncThunk(
  "participant/add",
  async (newparticipant) => {
    try {
      let result = axios.post("http://localhost:5000/participant/add", newparticipant);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteparticipant = createAsyncThunk("participant/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/participant/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editparticipant = createAsyncThunk("participant/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/participant/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  participantList:[],
  status: null,
};

export const participantSlice = createSlice({
  name: "participant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getparticipant.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getparticipant.fulfilled, (state, action) => {
        state.status = "success";
        state.participantList = action.payload.data.participants;
      })
      .addCase(getparticipant.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addparticipant.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addparticipant.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addparticipant.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deleteparticipant.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteparticipant.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteparticipant.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editparticipant.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editparticipant.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editparticipant.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// export const { } = participantSlice.actions;

export default participantSlice.reducer;
