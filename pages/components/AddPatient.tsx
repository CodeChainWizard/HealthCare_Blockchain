import React, { useState } from "react";
import { addPatient } from "../lib/healthcare";

const AddPatient: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodType: "",
    allergies: "",
    diagnosis: "",
    treatment: "",
  });

  const [loading, setLoading] = useState(false); // Loading state during transaction

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true before the transaction
    try {
      console.log("Submitting patient data:", formData);

      // Call the addPatient function from contract interaction file
      const tx = await addPatient(
        formData.name,
        Number(formData.age),
        formData.gender,
        formData.bloodType,
        formData.allergies,
        formData.diagnosis,
        formData.treatment
      );

      // Wait for the transaction to be mined (optional)
      console.log("Transaction Hash:", tx.hash);

      // Reset the form after successful submission
      setFormData({
        name: "",
        age: "",
        gender: "",
        bloodType: "",
        allergies: "",
        diagnosis: "",
        treatment: "",
      });

      // Optionally handle post-submission actions like success messages here
      alert("Patient added successfully!");
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient. Please try again.");
    } finally {
      setLoading(false); // Set loading state back to false after the transaction completes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-black text-center font-sans">
        Add Patient
      </h2>
      <div className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="bloodType"
          placeholder="Blood Type"
          value={formData.bloodType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="allergies"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="diagnosis"
          placeholder="Diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          name="treatment"
          placeholder="Treatment"
          value={formData.treatment}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full mt-4 py-2 text-white rounded ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Submitting..." : "Add Patient"}
      </button>
    </form>
  );
};

export default AddPatient;
