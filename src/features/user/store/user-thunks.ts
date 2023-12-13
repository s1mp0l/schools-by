import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseApiUrl} from "../../../shared/lib/constants";
import {API} from "../../../shared/lib/api";

export const fetchUser = createAsyncThunk<
  UserUnionData,
  LoginData
>(
  'user/fetchUser', async (loginData: LoginData, thunkAPI) => {

    const response = await API.request({
      path: 'users/auth',
      method: 'GET',
      query: {
        login: loginData.login,
        password: loginData.password
      }
    });

    if (!response.ok || response.status === 400) {
      return thunkAPI.rejectWithValue(await response.text());
    }
    return (await response.json()) as UserUnionData;
  });

export const updateNoteSeenStatus = createAsyncThunk(
  'user/updateNoteSeenStatus', async (noteId: number) => {

    const response = await fetch(`${baseApiUrl}/note?id=${noteId}`, {method: 'PUT'});
    return (await response.json()) as NoteData;
  });