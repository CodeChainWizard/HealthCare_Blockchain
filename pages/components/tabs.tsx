import React, { useState } from "react";
import AddPatient from "./AddPatient";
import PatientList from "./PatientList";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("addPatient");

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="tabs flex justify-around bg-opacity-20 bg-white rounded-lg shadow-lg p-2">
          <button
            className={`px-4 py-2 rounded-lg focus:outline-none transition-all ${
              activeTab === "addPatient"
                ? "bg-indigo-600 text-white"
                : "bg-transparent hover:bg-indigo-500 hover:text-white"
            }`}
            onClick={() => setActiveTab("addPatient")}
          >
            Add Patient
          </button>
          <button
            className={`px-4 py-2 rounded-lg focus:outline-none transition-all ${
              activeTab === "patientList"
                ? "bg-indigo-600 text-white"
                : "bg-transparent hover:bg-indigo-500 hover:text-white"
            }`}
            onClick={() => setActiveTab("patientList")}
          >
            Patient List
          </button>
        </div>
        <div className="tab-content mt-6 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
          {activeTab === "addPatient" && <AddPatient />}
          {activeTab === "patientList" && <PatientList patients={[]} />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
