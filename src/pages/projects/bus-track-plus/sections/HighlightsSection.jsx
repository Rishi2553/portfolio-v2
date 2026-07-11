import {
    FaBus,
    FaMobileAlt,
    FaTicketAlt,
    FaServer,
    FaDatabase,
    FaShieldAlt,
} from "react-icons/fa";
function DatabaseSection(){

    return(

       
                           <section className="highlights-section">
       
                               <div className="section-header">
       
                                   <span className="section-tag">
                                       Project Highlights
                                   </span>
       
                                   <h2>Key Features of BusTrackPlus</h2>
       
                                   <p>
                                       BusTrackPlus combines multiple applications, real-time data
                                       synchronization, and a scalable backend architecture into a
                                       single transportation management platform.
                                   </p>
       
                               </div>
       
                               <div className="highlights-grid">
       
                                   <div className="highlight-card">
                                       <FaMobileAlt className="highlight-icon" />
                                       <h3>3 Flutter Applications</h3>
                                       <p>
                                           Separate applications for Admin,
                                           Conductor and Passenger.
                                       </p>
                                   </div>
       
                                   <div className="highlight-card">
                                       <FaServer className="highlight-icon" />
                                       <h3>Microservices</h3>
                                       <p>
                                           Independent backend services for
                                           Authentication, Admin,
                                           Passenger and Conductor.
                                       </p>
                                   </div>
       
                                   <div className="highlight-card">
                                       <FaDatabase className="highlight-icon" />
                                       <h3>Hybrid Database</h3>
                                       <p>
                                           MySQL for business data and
                                           Firebase Firestore for
                                           real-time synchronization.
                                       </p>
                                   </div>
       
                                   <div className="highlight-card">
                                       <FaShieldAlt className="highlight-icon" />
                                       <h3>JWT Authentication</h3>
                                       <p>
                                           Secure authentication and
                                           authorization using JWT
                                           and Spring Security.
                                       </p>
                                   </div>
       
                                   <div className="highlight-card">
                                       <FaBus className="highlight-icon" />
                                       <h3>Real-Time Bus Tracking</h3>
                                       <p>
                                           Track buses, passenger count
                                           and occupancy updates
                                           in real time.
                                       </p>
                                   </div>
       
                                   <div className="highlight-card">
                                       <FaTicketAlt className="highlight-icon" />
                                       <h3>Digital Ticketing</h3>
                                       <p>
                                           Smart ticket issuing,
                                           digital passes and
                                           online renewals.
                                       </p>
                                   </div>
       
                               </div>
       
                           </section>

    );

}

export default DatabaseSection;