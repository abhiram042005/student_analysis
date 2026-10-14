import { useState, useMemo } from "react";
import students from "./data/students";
import StudentCard from "./components/StudentCard";
import StudentDetails from "./components/StudentDetails";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("All");
  const [selected, setSelected] = useState(null);

  const courses = [...new Set(students.map((s) => s.course.name))];

  const filtered = useMemo(
    () =>
      students.filter((s) => {
        const q = query.toLowerCase();
        const matchesQuery =
          s.name.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q);
        const matchesCourse = course === "All" || s.course.name === course;
        return matchesQuery && matchesCourse;
      }),
    [query, course]
  );

  return (
    <div className="app">
      <header>
        <h1>Student Profile Directory</h1>
        <p>{filtered.length} of {students.length} students</p>
      </header>

      <SearchBar
        query={query}
        setQuery={setQuery}
        course={course}
        setCourse={setCourse}
        courses={courses}
      />

      <div className="grid">
        {filtered.length ? (
          filtered.map((s) => (
            <StudentCard key={s.id} student={s} onView={setSelected} />
          ))
        ) : (
          <p className="empty">No students found.</p>
        )}
      </div>

      <StudentDetails student={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;