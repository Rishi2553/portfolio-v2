import architectureImg from "../../../../assets/projects/bus-track-plus/system-architecture.png";

function ArchitectureSection() {

    return (

                           <section className="architecture-section">
       
                               <div className="section-header">
       
                                   <span className="section-tag">
                                       System Architecture
                                   </span>
       
                                   <h2>
                                       Overall System Architecture
                                   </h2>
       
                                   <p>
                                       The backend follows a Spring Boot Microservices
                                       architecture where each service is responsible
                                       for a specific business domain. The Authentication
                                       Service manages user authentication and authorization,
                                       the Passenger Service handles bus pass management,
                                       the Admin Service manages transport operations, and the
                                       Conductor Service is responsible for ticket validation
                                       and bus updates. The services use MySQL for persistent
                                       data storage and Firebase Firestore for real-time information
                                       such as bus locations and passenger counts.
                                   </p>
       
                               </div>
       
                               <div className="architecture-image">
       
                                   <img
                                       src={architectureImg}
                                       alt="System Architecture"
                                   />
       
                               </div>
       
                           </section>

    );

}

export default ArchitectureSection;