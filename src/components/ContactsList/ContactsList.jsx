import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку
import { useEffect } from 'react';
// import { useSelector } from "react-redux";

// Імпортуємо хук
import {  useDispatch, useSelector } from "react-redux";
import { getContacts, getStatusFilter } from "../../redux/selectors";
import { fetchContacts, deleteContact } from "../../redux/operetions";

export const ContactsList = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts()); // діспатчимо екшен
    }, [dispatch]);

    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);

    // Отримуємо посилання на функцію відправки екшенів
    // const contacts = useSelector(state => state.contacts.items);
    // ОТРИМАННЯ МАСИВУ 
    const filter = useSelector(state => state.filters);// ОТРИМАННЯ FILTER




    // FILTER - фільтруємо введені данні 

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
            <ul className={css.contacts__list}>
                {filteredContacts.map(contact => {
                return (<li>
                   <p>{contact.name}</p>
                   <p>{contact.phone}</p> 
                   <button onClick={e => dispatch(deleteContact(e.currentTarget.id))} id = {contact.id} className={css.contacts__btn} type="button">Delete</button>
                </li>)
                })}
            </ul>
    );
  }
  
  ContactsList.prototype = {
    onClickDelete: PropTypes.func.isRequired,// функція
    contacts: PropTypes.func.isRequired,// функція
  };
  

