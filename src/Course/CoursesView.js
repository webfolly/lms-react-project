import React from 'react';

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

    }

    loadCourses() {

    }

    render() {
        this.state.courses.map(course => <CoursesCard />)
    }
}
