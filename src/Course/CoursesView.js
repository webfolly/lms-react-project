import React from 'react';
import { fetchCourses } from '../api/course';
import CoursesCard from 'CoursesCard';
export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [{
                id: 1,
                name: 'React 101',
                description: 'Learn'
            },{

            }]
        }
    }

    componentWillMount() {
        fetchCourses()
        .then()
        .catch(error => {
            this.setState({error})
        })

    }

    loadCourses() {

    }

    render() {
        if(this.state.error) {
            return <span>Some error </span>
        }
        this.state.courses.map(course => <CoursesCard />)
    }
}
