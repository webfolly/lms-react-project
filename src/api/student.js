import axios from 'axios';

export function fetchStudents(){
    return axios.get('/student');
}
export function fetchStudent(id) {
    return axios.get(`/student/${id}`);
}
export function createStudent() {
    return axios.post('/student');
}
export function deleteStudent(id) {
    return axios.delete(`/student/${id}`);
}
export function updateStudent(id,student) {
    return axios.put(`/student/${id}`,student)
}