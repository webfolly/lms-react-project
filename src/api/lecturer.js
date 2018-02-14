import axios from 'axios';
//import index from 'index';

export function fetchLecturers() {
    return axios.get('/lecturer')
    //.then(response => response.data )
}

export function  fetchLecturersByID(id) {
    return axios.get(`/lecturer/${id}`)
    //.then(response => response.data.id )    
}

export function createLecturer() {
    return axios.post('/lecturer');
}

export function deleteLecturerByID(id) {
    return axios.delete(`/lecturer/${id}`);
}

export function updateLecturerByID(id,lecturer) {
    return axios.put(`/lecturer/${id}`,lecturer)
}