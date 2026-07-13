import home from "../../../../assets/projects/driveledger/screenshots/home.png";
import reports from "../../../../assets/projects/driveledger/screenshots/reports.png";
import transactionDetails from "../../../../assets/projects/driveledger/screenshots/transaction-details.png";

import "../styles/FloatingPhones.css";

function FloatingPhones() {

  return (

    <div className="phones-container">

      <img
        src={reports}
        alt="Reports Screen"
        className="phone phone-left"
      />

      <img
        src={home}
        alt="Home Screen"
        className="phone phone-center"
      />

      <img
        src={transactionDetails}
        alt="Transaction Details Screen"
        className="phone phone-right"
      />

    </div>

  );

}

export default FloatingPhones;