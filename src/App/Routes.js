export default () => ((
    <div>
        <Route exact path="/" component={CoursesView} />
        <Route exact path="/courses" component={CoursesView} />
        <Route exact path="/courses/:id" component={CourseDetailView} />
        <Route exact path="/students" component={StudentsView} />
        <Route exact path="/lecturers" component={LecturersView} />
        <Route exact path="/signin" component={SigninView} />
    </div>
    ));
