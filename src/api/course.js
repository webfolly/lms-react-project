import axios from 'axios';

export function fetchCourses() {
    return axios.get('/course/list')
    .then(response => {
        // process respond.data further
        // return processed result
    })
}

export function  fetchCourses(id) {
    
}

