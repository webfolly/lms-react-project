/**
 * Created by Weiping on 18/11/17.
 */
export default function CourseCard(props) {
    const course = props.course;
    return (
        <p>{`This is a ${course.name}`}</p>
    )
}