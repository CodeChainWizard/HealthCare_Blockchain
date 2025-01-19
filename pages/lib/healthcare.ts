import { ethers } from "ethers";
import contractABI from "../../artifacts/contracts/HealthCare.json";

const provider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL || ""
);

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

if (!contractAddress) {
  throw new Error("Contract address is not defined in environment variables.");
}

// Function to get the contract instance with a connected signer
const getContract = async () => {
  try {
    if (typeof (window as any).ethereum !== "undefined") {
      // Request user to connect their wallet
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      // Use the browser's Ethereum provider
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner();

      console.log("Connected Signer Address:", await signer.getAddress());

      // Initialize and return the contract instance
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log("Contract instance:", contract);
      return contract;
    } else {
      console.error("No Ethereum provider found. Please install MetaMask.");
      throw new Error("Ethereum provider not available.");
    }
  } catch (error) {
    console.error("Error getting contract:", error);
    throw error;
  }
};

// Fetch the list of patients from the blockchain
export const getPatientList = async () => {
  try {
    const contract = await getContract();
    console.log("Contract Address:", contract.address);
    console.log("Using ABI:", contract.interface.fragments);

    const patients = await contract.getPatientDetials();
    console.log("Fetched Patients:", patients);
    return patients;
  } catch (error) {
    console.error("Error fetching patient list:", error);
    if (error.code === "CALL_EXCEPTION") {
      console.error(
        "CALL_EXCEPTION: Ensure the function exists and the contract is deployed correctly."
      );
    }
    throw error;
  }
};

// Add new patient to the blockchain
export const addPatient = async (
  name: string,
  age: number,
  gender: string,
  bloodType: string,
  allergies: string,
  diagnosis: string,
  treatment: string
) => {
  try {
    const contract = await getContract();
    const tx = await contract.AddPatientDetails(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment
    );
    console.log("Transaction Hash:", tx.hash);
    await tx.wait(); // Wait for the transaction to be mined
    console.log("Transaction confirmed.");
    return tx;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error;
  }
};
