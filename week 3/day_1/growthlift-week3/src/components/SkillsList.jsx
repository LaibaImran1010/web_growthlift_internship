function SkillsList() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>My Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;