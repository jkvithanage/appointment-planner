import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="submit" value="Add Contact" />
        </form>
    );
};
