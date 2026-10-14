function StudentCard({ student, onView }) {
  if (!student) return null;

  const { name, rollNo, photo, course = {} } = student;
  const handleView = onView ?? (() => {});

  return (
    <div className="card">
      <img src={photo} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p className="roll">{rollNo}</p>
      <p className="course">{course.name}</p>
      <div className="meta">
        <span>Year {course.year}</span>
        <span>CGPA {course.cgpa}</span>
      </div>
      <button onClick={() => handleView(student)}>View Profile</button>
    </div>
  );
}

export default StudentCard;