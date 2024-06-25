import { Actor, HttpAgent } from "@dfinity/agent";
import React, { useEffect, useState } from "react";
import { idlFactory } from "declarations/ICP_frontend";
import "./App.css"
import { Dashboard } from './components'

const agent = new HttpAgent();
const canisterId = "bnz7o-iuaaa-aaaaa-qaaaa-cai"; // Replace with your canister ID
const projectActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

const App = () => {
  return (
    <Dashboard />
  )
}

export default App

// function App() {
//   const [projects, setProjects] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [teamMembers, setTeamMembers] = useState("");
//   const [projectUrl, setProjectUrl] = useState("");
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     const projects = await projectActor.getProjects();
//     setProjects(projects);
//   };

//   const submitProject = async () => {
//     await projectActor.submitProject(title, description, teamMembers, projectUrl, file);
//     loadProjects();
//   };

//   const likeProject = async (id) => {
//     await projectActor.likeProject(id);
//     loadProjects();
//   };

//   return (
//     <div>
//       <h1>Project Submission</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Team Members"
//           value={teamMembers}
//           onChange={(e) => setTeamMembers(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Project URL"
//           value={projectUrl}
//           onChange={(e) => setProjectUrl(e.target.value)}
//         />
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button onClick={submitProject}>Submit Project</button>
//       </div>
//       <h2>Projects</h2>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>{project.teamMembers}</p>
//             <p>{project.projectUrl}</p>
//             <button onClick={() => likeProject(project.id)}>Like ({project.likes})</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
