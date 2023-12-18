
import React, { useState } from 'react';
import coursesData from '../data/courses.json';
import styles from './CourseList.module.css'

const CourseList = () => {
  const [filter, setFilter] = useState('');
  const filteredCourses = coursesData.filter((course) =>
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.courseListContainer}>
      <h2>Course Lists  are as follows</h2>
      <input
        type="text"
        placeholder="Filter by Instructor"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.filterInput}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} className={styles.courseItem}>
            {course.name} =Instructor: {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
