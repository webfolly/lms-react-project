import axios from 'axios';
//import index from 'index';

export function fetchLecturers() {
    return axios.get(axios.default.baseURL + '/lecturer')
    //.then(response => response.data )
}

export function  fetchLecturersByID(id) {
    return axios.get(axios.default.baseURL +`/lecturer/${id}`)
    //.then(response => response.data.id )    
}

export function createLecturer() {
    return axios.post(axios.default.baseURL +'/lecturer');
}

export function deleteLecturerByID(id) {
    return axios.delete(axios.default.baseURL + `/lecturer/${id}`);
}

export function updateLecturerByID(id,lecturer) {
    return axios.put(axios.default.baseURL + `/lecturer/${id}`,lecturer)
}