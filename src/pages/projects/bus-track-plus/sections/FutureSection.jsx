
import {
    FaWallet,
    FaBell,
    FaBrain,
    FaCloudDownloadAlt,
    FaMapMarkedAlt,
    FaChartLine,
} from "react-icons/fa";
function FutureSection(){

    return(

        
                            <section className="future-section">
        
                                <div className="section-header">
        
                                    <span className="section-tag">
                                        Future Improvements
                                    </span>
        
                                    <h2>
                                        Future Scope
                                    </h2>
        
                                    <p>
                                        BusTrackPlus has been designed with scalability in mind.
                                        The following enhancements can further improve the system
                                        and provide a smarter public transportation experience.
                                    </p>
        
                                </div>
        
                                <div className="future-grid">
        
                                    <div className="future-card">
        
                                        <FaMapMarkedAlt className="future-icon" />
        
                                        <h3>GPS Navigation</h3>
        
                                        <p>
                                            Integrate live GPS navigation to improve
                                            bus tracking accuracy and ETA prediction.
                                        </p>
        
                                    </div>
        
                                    <div className="future-card">
        
                                        <FaWallet className="future-icon" />
        
                                        <h3>Digital Payments</h3>
        
                                        <p>
                                            Support online ticket payments using
                                            UPI, cards and digital wallets.
                                        </p>
        
                                    </div>
        
                                    <div className="future-card">
        
                                        <FaBell className="future-icon" />
        
                                        <h3>Push Notifications</h3>
        
                                        <p>
                                            Notify passengers about bus arrivals,
                                            delays and pass expiry reminders.
                                        </p>
        
                                    </div>
        
                                    <div className="future-card">
        
                                        <FaBrain className="future-icon" />
        
                                        <h3>AI Crowd Prediction</h3>
        
                                        <p>
                                            Predict passenger crowd levels using
                                            historical travel patterns.
                                        </p>
        
                                    </div>
        
                                    <div className="future-card">
        
                                        <FaChartLine className="future-icon" />
        
                                        <h3>Analytics Dashboard</h3>
        
                                        <p>
                                            Generate operational reports for
                                            transport authorities.
                                        </p>
        
                                    </div>
        
                                    <div className="future-card">
        
                                        <FaCloudDownloadAlt className="future-icon" />
        
                                        <h3>Offline Support</h3>
        
                                        <p>
                                            Continue ticket issuing even when
                                            internet connectivity is unavailable.
                                        </p>
        
                                    </div>
        
                                </div>
        
                            </section>

    );

}

export default FutureSection;