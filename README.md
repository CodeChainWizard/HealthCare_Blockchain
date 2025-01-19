# HealthCare Project

This project is a decentralized healthcare management system built on the Ethereum blockchain using Solidity smart contracts, with a front-end implemented in Next.js and styled using Tailwind CSS. The project utilizes Alchemy for hosting the smart contract and Ether.js for interacting with the blockchain. The application is developed using TypeScript for enhanced type safety and maintainability.

## Features

- **Patient Management:**

  - Add patient details including name, age, gender, blood type, allergies, diagnosis, and treatment.
  - Update existing patient details.
  - Retrieve all patient records or specific records by ID.

- **Doctor Authorization:**

  - Only the contract owner can add patient details.
  - Authorized doctors can update patient details.
  - The owner can authorize or revoke doctors' permissions.

- **Event Emission:**
  - Emits events when patients are added, updated, and when doctors are authorized or revoked.

## Smart Contract

The smart contract is written in Solidity and includes the following key components:

- **Structs and Enums:**

  - `PatientDetails`: Stores patient information.
  - `Gender`: Enum to represent patient gender (Male/Female).

- **Modifiers:**

  - `OnlyOwner`: Restricts functions to the contract owner.
  - `OnlyAuthorized`: Restricts functions to authorized doctors or the owner.

- **Functions:**
  - `authorizeDoctor(address doctor)`: Authorizes a doctor.
  - `revokeDoctor(address doctor)`: Revokes a doctor's authorization.
  - `AddPatientDetails(...)`: Adds a new patient's details.
  - `updatePatientDetails(...)`: Updates an existing patient's details.
  - `getPatientDetails()`: Returns all patient records.
  - `getById(uint id)`: Returns patient details by ID.

## Front-End

The front-end is developed using Next.js and styled with Tailwind CSS. It provides a user-friendly interface for managing patient records and authorizing doctors.

- **Next.js:** Used for building the server-side rendered front-end.
- **Tailwind CSS:** Used for responsive and modern UI styling.
- **TypeScript:** Ensures type safety and better code quality.

## Blockchain Interaction

- **Ether.js:** Used for interacting with the Ethereum blockchain.
- **Alchemy:** Hosts the smart contract and provides API endpoints for blockchain interactions.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/healthcare-project.git
   cd healthcare-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file and add the following:

   ```env
   NEXT_PUBLIC_ALCHEMY_API_KEY=your-alchemy-api-key
   NEXT_PUBLIC_CONTRACT_ADDRESS=your-contract-address
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

1. **Deploy the smart contract:**
   - Use Hardhat or another deployment tool to deploy the smart contract to an Ethereum testnet.
2. **Authorize doctors:**

   - As the contract owner, authorize doctors to update patient records.

3. **Manage patient records:**
   - Add or update patient details through the front-end interface.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ethereum](https://ethereum.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Alchemy](https://www.alchemy.com/)
- [Ether.js](https://docs.ethers.io/)

## Contact

For any questions or suggestions, please reach out to [Shubham Danecha](mailto:shubhamdanecha789@gmail.com).
