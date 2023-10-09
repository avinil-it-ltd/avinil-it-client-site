import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Career from './Component/Career/Career';
import NotFound from './Component/Shared/NotFound';
import TermsCondition from './Component/TermsCondition/TermsCondition';
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy';
import Services from './Component/Services/Services';
import Dashboard from './Component/Dashboard/Dashboard';
import Overview from './Component/Dashboard/Overview';
import AddTeamMember from './Component/Dashboard/AddTeamMember';
import AddClientReview from './Component/Dashboard/AddClientReview';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "home", element: <Home></Home> },
    { path: "contact", element: <Contact></Contact> },
    { path: "services", element: <Services></Services> },
    { path: "career", element: <Career></Career> },
    { path: "about", element: <About></About> },
    { path: "*", element: <NotFound></NotFound> },
    { path: "termsCondition", element: <TermsCondition></TermsCondition> },
    { path: "privacyPolicy", element: <PrivacyPolicy></PrivacyPolicy> },


    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        { path: "/dashboard", element: <Overview></Overview> },
        { path: "/dashboard/addTeamMember", element: <AddTeamMember></AddTeamMember>, },
        { path: "/dashboard/addClientReview", element: <AddClientReview></AddClientReview>, },
       
        
      ],
    },



  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
