import databaseImg from "../../../../assets/projects/bus-track-plus/database-design.png";

function DatabaseSection(){

    return(

                           <section className="database-section">

                        <div className="section-header">

                            <span className="section-tag">
                                Database Design
                            </span>

                            <h2>
                                Database Architecture
                            </h2>

                            <p>
                                The backend combines MySQL for structured transactional
                                data with Firebase Firestore for real-time synchronization.
                                This hybrid architecture provides reliable data storage
                                while enabling instant updates for live bus locations,
                                passenger counts and crowd estimation.
                            </p>

                        </div>

                        <div className="database-image">

                            <img
                                src={databaseImg}
                                alt="Database Design"
                            />

                        </div>

                    </section>

    );

}

export default DatabaseSection;