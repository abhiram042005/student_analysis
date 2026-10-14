function StudentDetails({ student, onClose }) {
  if (!student) return null;
  const { name, rollNo, email, phone, dob, gender, address, photo, course, skills, bio } = student;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>

        <div className="modal-header">
          <img src={photo} alt={name} className="avatar large" />
          <div>
            <h2>{name}</h2>
            <p>{rollNo}</p>
            <p className="bio">{bio}</p>
          </div>
        </div>

        <section>
          <h4>Profile Information</h4>
          <table>
            <tbody>
              <tr><td>Email</td><td>{email}</td></tr>
              <tr><td>Phone</td><td>{phone}</td></tr>
              <tr><td>Date of Birth</td><td>{dob}</td></tr>
              <tr><td>Gender</td><td>{gender}</td></tr>
              <tr><td>Address</td><td>{address}</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h4>Course Details</h4>
          <table>
            <tbody>
              <tr><td>Course</td><td>{course.name}</td></tr>
              <tr><td>Department</td><td>{course.department}</td></tr>
              <tr><td>Year / Semester</td><td>{course.year} / {course.semester}</td></tr>
              <tr><td>CGPA</td><td>{course.cgpa}</td></tr>
            </tbody>
          </table>
          <p><strong>Subjects:</strong></p>
          <div className="tags">
            {course.subjects.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </section>

        <section>
          <h4>Skills</h4>
          <div className="tags">
            {skills.map((s) => <span key={s} className="tag skill">{s}</span>)}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDetails;