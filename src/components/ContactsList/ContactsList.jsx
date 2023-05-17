import PropTypes from 'prop-types';
import css from "./ContactsList.module.css"; // підключення стилів на картку

// Імпортуємо хук
import {  useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/tasksContacts";

export const ContactsList = () =>{
    const dispatch = useDispatch();// Отримуємо посилання на функцію відправки екшенів
    const contacts = useSelector(state => state.contacts.items);// ОТРИМАННЯ МАСИВУ 
    const filter = useSelector(state => state.filter);// ОТРИМАННЯ FILTER
    
    // FILTER - фільтруємо введені данні 
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    return (
            <ul className={css.contacts__list}>
                {filteredContacts.map(contact => {
                return (<li>
                   <p>{contact.name}</p>
                   <p>{contact.number}</p> 
                   <button onClick={e => dispatch(deleteContacts(e.currentTarget.id))} id = {contact.id} className={css.contacts__btn} type="button">Delete</button>
                </li>)
                })}
            </ul>
    );
  }
  
  ContactsList.prototype = {
    onClickDelete: PropTypes.func.isRequired,// функція
    contacts: PropTypes.func.isRequired,// функція
  };
  

