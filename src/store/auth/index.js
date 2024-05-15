import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: 'enesyuvarlan',
    fullName: 'ns',
    avatar: 'https://pbs.twimg.com/profile_images/1781157386410991617/_V52QUYj_400x400.jpg',
  },
  accounts: [
    {
      id: 1,
      username: 'enesyuvarlan',
      fullName: 'ns',
      avatar: 'https://pbs.twimg.com/profile_images/1781157386410991617/_V52QUYj_400x400.jpg',
    },
    {
      id: 2,
      username: 'enesyvrln',
      fullName: 'Enes',
      avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    }
  ]
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    _addAccount: (state, action) => {
      state.accounts.push(action.payload)
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(account => account.id !== action.payload)
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false)
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload
    }
  }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer
