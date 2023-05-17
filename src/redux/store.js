import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksContacts";
import { filtersReducer } from "./filterContacts";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // це localStorage під капотом браузера

// налаштування для redux-persist
const contactsConfig = {
  key: 'contacts',
  storage,
  manualPersist: false,
};


// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, tasksReducer),
    filter: filtersReducer,
  },

  // це для того щоб не було помилки при записі в localStorage
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // створюємо persistor для нашого store