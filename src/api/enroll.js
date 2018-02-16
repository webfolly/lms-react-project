import axios from 'axios';

export function enrollCourse (studentID,courseID) {
    return axios.post('/Enrolment',{studentID,courseID})
}