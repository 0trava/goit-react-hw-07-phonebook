import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./tasksContacts";
import { filtersReducer } from "./filterContacts";


// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
