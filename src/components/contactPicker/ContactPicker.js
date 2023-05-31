import React from "react";

export const ContactPicker = ({ onChange, contacts, value, name }) => {
    return (
        <select onChange={onChange} value={value} name={name}>
            <option value="" key={-1} selected="selected">
                No Contact Selected
            </option>
            {contacts.map((contact, i) => (
                <option value={contact.name} key={i}>
                    {contact.name}
                </option>
            ))}
        </select>
    );
};
