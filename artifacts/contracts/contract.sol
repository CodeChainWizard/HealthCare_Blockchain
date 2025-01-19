// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract HealthCare {
    enum Gender {Male, Female}
    address Owner;

    struct PatientDetails{
        string name;
        uint256 age;
        Gender gender;
        string bloodType;
        string Allergies;
        string Diagnosis;
        string Treatment;
        uint256 createdAt;
        uint256 updatedAt;
    }

    PatientDetails[] public patients;
    mapping(address => bool) public authorizedDoctors;

    event PatientsAdded(uint256 indexed  patientId, string name);
    event PatientsUpdate(uint256 indexed  patientId, string name);
    event DoctorAuthorized(address indexed doctor);
    event DoctorRevoked(address indexed doctor);


    modifier OnlyOwner{
        require(Owner == msg.sender, "You can Add the Patient Details");
        _;
    }

    modifier OnlyAuthorized{
        require(authorizedDoctors[msg.sender] || Owner == msg.sender, "You must be an authorized doctor or owner");
        _;
    }

    constructor() {
        Owner = msg.sender;    
    }

    function authorizeDoctor(address doctor) public OnlyOwner {
        authorizedDoctors[doctor] = true;
        emit DoctorAuthorized(doctor);
    }

    function revokeDoctor(address doctor) public OnlyOwner {
        authorizedDoctors[doctor] = false;
        emit DoctorRevoked(doctor);
    }


    function AddPatientDetails(string memory name, uint256 age, Gender gender, string memory bloodType, 
    string memory Allergies, string memory Diagnosis, string memory Treatment) public  OnlyOwner{
        PatientDetails memory newPatient = PatientDetails({
            name: name,
            age: age,
            gender: gender,
            bloodType:bloodType,
            Allergies: Allergies,
            Diagnosis: Diagnosis,
            Treatment: Treatment,
            createdAt: block.timestamp,
            updatedAt: block.timestamp
        });
        patients.push(newPatient);
    }

    function updatePatientDetails(
        uint256 id,
        string memory name,
        uint256 age,
        Gender gender,
        string memory bloodType,
        string memory Allergies,
        string memory Diagnosis,
        string memory Treatment
    ) 
        public 
        OnlyAuthorized 
    {
        require(id < patients.length, "Invalid patient ID");
        PatientDetails storage patient = patients[id];
        patient.name = name;
        patient.age = age;
        patient.gender = gender;
        patient.bloodType = bloodType;
        patient.Allergies = Allergies;
        patient.Diagnosis = Diagnosis;
        patient.Treatment = Treatment;
        patient.updatedAt = block.timestamp;

        emit PatientsUpdate(id, name);
    }


    function getPatientDetials() public view OnlyOwner returns(PatientDetails[] memory){
        return patients;
    }

    function getById(uint id) public view OnlyOwner returns(PatientDetails memory){
        require(id < patients.length, "Enter valid id");
        return patients[id];
    }
}