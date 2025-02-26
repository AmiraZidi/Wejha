import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getsuggestion = createAsyncThunk("suggestion/get", (async) => {
  try {
    let result = axios.get("http://localhost:5000/suggestion/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addsuggestion = createAsyncThunk(
  "suggestion/add",
  async (newtrip) => {
    try {
      let result = axios.post("http://localhost:5000/suggestion/add", newtrip);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletesuggestion = createAsyncThunk(
  "suggestion/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/suggestion/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editsuggestion = createAsyncThunk(
  "suggestion/edit",
  async ({ id, editedsugg }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/suggestion/${id}`,
        editedsugg
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  suggestionList: [],
  status: null,
};

export const suggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsuggestion.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getsuggestion.fulfilled, (state, action) => {
        state.status = "success";
        state.suggestionList = action.payload.data.suggestions;
      })
      .addCase(getsuggestion.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addsuggestion.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addsuggestion.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addsuggestion.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deletesuggestion.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletesuggestion.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletesuggestion.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editsuggestion.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editsuggestion.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editsuggestion.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// export const { } = suggestionSlice.actions;

export default suggestionSlice.reducer;
