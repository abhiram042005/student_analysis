function SearchBar({ query, setQuery, course, setCourse, courses }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or roll number"
        aria-label="Search students"
      />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        aria-label="Filter by course"
      >
        <option value="All">All Courses</option>
        {courses.map((courseName) => (
          <option key={courseName} value={courseName}>
            {courseName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;