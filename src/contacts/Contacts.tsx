import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.formContainer}>
                    <form className={s.form} action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols={60} rows={10}>
                        </textarea>
                    </form>
                </div>
                <div className={s.send}>Send</div>
            </div>
        </div>
    );
};
