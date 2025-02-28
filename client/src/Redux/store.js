import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import suggestionSlice from "./suggestionSlice";
import participantSlice from "./participantSlice";
import challengeSlice from "./challengeSlice";
import voteSlice from "./voteSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    suggestion: suggestionSlice,
    participant: participantSlice,
    challenge: challengeSlice,
    vote: voteSlice,
  },
});
