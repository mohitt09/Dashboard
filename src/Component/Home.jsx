import React, { useState } from 'react';
import '../Style/Home.css';

function Home() {
  // Dummy data
  const [appointments, setAppointments] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      doctor: 'Dr. Smith',
      date: '2024-03-25',
      number: '1234567890',
      department: 'Cardiology',
      status: 'Pending',
      statusColor: '#fff',
      actionTaken: false // Flag to track if action has been taken
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      gender: 'Female',
      doctor: 'Dr. Johnson',
      date: '2024-03-26',
      number: '9876543210',
      department: 'Neurology',
      status: 'Pending',
      statusColor: '#fff',
      actionTaken: false // Flag to track if action has been taken
    }
    // Add more appointments as needed
  ]);

  // Function to handle status change
  const handleStatusChange = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = newStatus === 'Confirmed' ? 'Approved' : newStatus;
    updatedAppointments[index].statusColor = newStatus === 'Confirmed' ? '#5cb85c' : newStatus === 'Rejected' ? '#d9534f' : '';
    updatedAppointments[index].actionTaken = true; // Mark action as taken
    setAppointments(updatedAppointments);
  };

  return (
    <div>
      <div className="home-container">
        <div className="box">Doctor</div>
        <div className="box">Blog</div>
        <div className="box">Nurse</div>
        <div className="box">Appointment</div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Dr. Name</th>
              <th>Date</th>
              <th>Number</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th> {/* New table header for actions */}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} style={{ backgroundColor: appointment.statusColor }}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.number}</td>
                <td>{appointment.department}</td>
                <td>{appointment.status}</td>
                <td style={{display:'flex'}}> {/* Actions column */}
                  {appointment.actionTaken ? (
                    <span>Action Taken</span>
                  ) : (
                    <>
                      <button className="status-btn approve-btn" onClick={() => handleStatusChange(index, 'Confirmed')}>Approve</button>
                      <button className="status-btn reject-btn" onClick={() => handleStatusChange(index, 'Rejected')}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
