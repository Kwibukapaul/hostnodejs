const axios = require('axios');

// Define the base URL of your API server
const baseURL = 'http://localhost:3000';

// Function to fetch all students
async function getAllStudents() {
    try {
        const response = await axios.get(`${baseURL}/students`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all students:', error.response.data);
        throw error;
    }
}

// Function to fetch a student by ID
async function getStudentById(id) {
    try {
        const response = await axios.get(`${baseURL}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching student by ID:', error.response.data);
        throw error;
    }
}

// Example usage
(async () => {
    try {
        const allStudents = await getAllStudents();
        console.log('All students:', allStudents);

        const studentById = await getStudentById(1);
        console.log('Student by ID:', studentById);
    } catch (error) {
        console.error('Error:', error);
    }
})();
