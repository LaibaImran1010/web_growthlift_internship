function Projects() {
  return (
    <div style={{ lineHeight: "1.6" }}>
      <h2>My Projects & Technical Implementations</h2>
      <p>Below are the core technical projects and interface frameworks I have developed:</p>
      
      <div style={{ marginTop: "20px" }}>
        <h3>1. Mobile UI Layout Frameworks</h3>
        <p>Designed and built structured user interfaces optimizing performance and responsiveness across three major positioning systems:</p>
        <ul>
          <li><strong>Constraint Layout Modules:</strong> Built flat, highly responsive UI hierarchies to reduce nested view depths and optimize rendering paths.</li>
          <li><strong>Relative Positioning Layouts:</strong> Implemented interface components using interdependent element positioning where widgets align relative to parents or siblings.</li>
          <li><strong>Linear Stack Interfaces:</strong> Built clean, single-direction interface structures utilizing both horizontal and vertical component stacking.</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>2. Active Web Development Repositories</h3>
        <ul>
          <li><strong>growthlift-week3:</strong> This current Single Page Application (SPA) tracking platform utilizing React components, state hooks, and client-side routing.</li>
          <li><strong>AI_innovaist_internship_:</strong> Core repository dedicated to developing and integrating machine learning and automation task modules.</li>
          <li><strong>ContentStudio-InnoViast:</strong> Production-level frontend layout designs and module updates managed inside a collaborative studio workspace.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;