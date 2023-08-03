import { combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productslice from './slices/productslice'

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootreducer = combineReducers({
    
      product: productslice

  })

const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = createStore(persistedReducer)
export const  persistor = persistStore(store)

