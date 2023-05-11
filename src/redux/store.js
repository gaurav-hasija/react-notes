import { configureStore } from '@reduxjs/toolkit'
import NoteSlice from './NoteSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['notes'],
}
const persistedReducer = persistReducer(persistConfig, NoteSlice)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
