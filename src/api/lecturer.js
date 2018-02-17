import axios from 'axios';

export function fetchLecturers() {
    return axios.get('/lecturer')
}

export function  fetchLecturersByID(id) {
    return axios.get(`/lecturer/${id}`)   
}

export function createLecturer(lecturer) {
    return axios.post('/lecturer',lecturer);
}

export function deleteLecturerByID(id) {
    return axios.delete(`/lecturer/${id}`);
}

export function updateLecturerByID(id,lecturer) {
    return axios.put(`/lecturer/${id}`,lecturer)
}