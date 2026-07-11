import {
    FaMobileAlt,
    FaServer,
    FaDatabase,
    FaShieldAlt,
    FaTools,
} from "react-icons/fa";
function TechStackSection(){

    return(

                           <section className="tech-section">
       
                               <div className="section-header">
       
                                   <span className="section-tag">
                                       Technology Stack
                                   </span>
       
                                   <h2>Technologies Used</h2>
       
                                   <p>
                                       BusTrackPlus was developed using modern technologies across the
                                       frontend, backend, database, authentication, and development tools.
                                       Each technology was selected to provide scalability,
                                       maintainability, and real-time communication between the three
                                       client applications and the backend services.
                                   </p>
       
                               </div>
       
                               <div className="tech-grid">
       
                                   {/* Frontend */}
       
                                   <div className="tech-card">
       
                                       <div className="tech-title">
       
                                           <FaMobileAlt className="tech-icon" />
       
                                           <h3>Frontend</h3>
       
                                       </div>
       
                                       <ul>
                                           <li>Flutter</li>
                                           <li>Dart</li>
                                       </ul>
       
                                   </div>
       
                                   {/* Backend */}
       
                                   <div className="tech-card">
       
                                       <div className="tech-title">
       
                                           <FaServer className="tech-icon" />
       
                                           <h3>Backend</h3>
       
                                       </div>
       
                                       <ul>
                                           <li>Spring Boot</li>
                                           <li>Spring Boot Microservices</li>
                                           <li>REST APIs</li>
                                           <li>Java</li>
                                       </ul>
       
                                   </div>
       
                                   {/* Database */}
       
                                   <div className="tech-card">
       
                                       <div className="tech-title">
       
                                           <FaDatabase className="tech-icon" />
       
                                           <h3>Database</h3>
       
                                       </div>
       
                                       <ul>
                                           <li>MySQL</li>
                                           <li>Firebase Firestore</li>
                                       </ul>
       
                                   </div>
       
                                   {/* Authentication */}
       
                                   <div className="tech-card">
       
                                       <div className="tech-title">
       
                                           <FaShieldAlt className="tech-icon" />
       
                                           <h3>Authentication</h3>
       
                                       </div>
       
                                       <ul>
                                           <li>JWT Authentication</li>
                                           <li>Spring Security</li>
                                       </ul>
       
                                   </div>
       
                                   {/* Development Tools */}
       
                                   <div className="tech-card">
       
                                       <div className="tech-title">
       
                                           <FaTools className="tech-icon" />
       
                                           <h3>Development Tools</h3>
       
                                       </div>
       
                                       <ul>
                                           <li>Git</li>
                                           <li>GitHub</li>
                                           <li>Postman</li>
                                           <li>Android Studio</li>
                                           <li>Visual Studio Code</li>
                                       </ul>
       
                                   </div>
       
                               </div>
       
                           </section>

    );

}

export default TechStackSection;