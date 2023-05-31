import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addNewContact }) => {
    /*
  Define state variables for
  contact info and duplicate check
  */

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isDuplicate, setIsDuplicate] = useState(false);

    useEffect(() => {
        contacts.some((contact) => contact.name === name) ? setIsDuplicate(true) : setIsDuplicate(false);
    }, [contacts, name]);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
        if (!isDuplicate) {
            addNewContact(name, phone, email);
            setName("");
            setPhone("");
            setEmail("");
        }
    };

    /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    phone={phone}
                    email={email}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList objects={contacts} />
            </section>
        </div>
    );
};
