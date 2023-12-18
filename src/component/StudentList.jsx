
import React from 'react';
import studentsData from '../data/students.json';
import styles from '../StudentList.module.css'

const StudentList = () => {
    return (
        <div className={styles.studentListContainer}>
            <h2>Student Lists are as Follows</h2>
            <ul>
                {studentsData.map((student) => (
                    <li key={student.id} className={styles.studentItem}>
                        {student.name} ----{student.age} years old
                        <ul>
                            {student.courses.map((courseId) => (
                                <li key={courseId} className={styles.courseItem}>
                                    Course    {courseId}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
