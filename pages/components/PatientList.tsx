import React from "react";

// Define the structure of a Patient object
interface Patient {
  name: string;
  age: number;
  diagnosis: string;
}

// Define the props to expect an array of patients
interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  if (!patients || patients.length === 0) {
    return <div>No patients found.</div>;
  }

  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} - {patient.age} - {patient.diagnosis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
