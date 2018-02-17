import axios from 'axios';

export function fetchCourses(){
    return axios.get('/course');
}
export function fetchCourse(id) {
    return axios.get(`/course/${id}`);
}
export function createCourse(course) {
    return axios.post('/course',course);
}
export function deleteCourse(id) {
    return axios.delete(`/course/${id}`);
}
export function updateCourse(id,course) {
    return axios.put(`/course/${id}`,course)
}

//export function fetchCourses() {
//    return axios.get('/course/list')
//    .then(response => {
        // process respond.data further
        // return processed result
//    })
//}