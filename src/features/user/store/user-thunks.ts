import { createAsyncThunk } from '@reduxjs/toolkit';
import {baseApiUrl} from "../../../shared/lib/constants";

export const fetchUser = createAsyncThunk('user/fetchUsers', async (userId: number) => {
  const response = await fetch(`${baseApiUrl}/users?id=${userId}`);
  return (await response.json()) as UserData;
});

export const updateNoteSeenStatus = createAsyncThunk('user/updateNoteSeenStatus', async (noteId: number) => {
  const response = await fetch(`${baseApiUrl}/note?id=${noteId}`, { method: 'PUT' });
  return (await response.json()) as NoteData;
});