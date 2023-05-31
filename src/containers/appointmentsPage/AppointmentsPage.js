import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addNewAppointment }) => {
    const [title, setTitle] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    /*
  Define state variables for
  appointment info
  */

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
    Add contact info and clear data
    */
        addNewAppointment(title, contact, date, time);
        setTitle("");
        setContact("");
        setDate("");
        setTime("");
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    contacts={contacts}
                    name={title}
                    contact={contact}
                    date={date}
                    time={time}
                    setTitle={setTitle}
                    setContact={setContact}
                    setDate={setDate}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList objects={appointments} />
            </section>
        </div>
    );
};
