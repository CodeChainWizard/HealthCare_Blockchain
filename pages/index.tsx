import { useEffect, useState } from "react";
import { getPatientList } from "./lib/healthcare";
import PatientList from "./components/PatientList";
import Tabs from "./components/tabs";

const Home: React.FC = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const fetchedPatients = await getPatientList();
      setPatients(fetchedPatients);
    }
    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to the Healthcare DApp
        </h1>
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
