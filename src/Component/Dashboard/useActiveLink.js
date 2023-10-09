// useActiveLink.js

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActiveLink = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard/addTeamMember":
        setActiveLink(1);
        break;
      case "/dashboard/addClientReview":
        setActiveLink(2);
        break;
      // Add more cases for other routes if needed
      default:
        setActiveLink(0); // Default to Overview link
        break;
    }
  }, [location.pathname]);

  return activeLink;
};

export default useActiveLink;
