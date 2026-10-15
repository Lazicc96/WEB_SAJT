import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import ContactPage from "./pages/Contact"
import RootLayout from "./pages/Root"
import WebAppTesting from "./Components/WebAppTesting"
import InternalNetworkPenTesting from "./Components/Interal_Netowork_Pen_Testing"
import ExternalNetworkPenTesting from "./Components/ExternalNetworkPenTesting"
import LLM_AI_Pen_Testing from "./Components/LLM_AI_Pen_Testing"
import ClaudAuditAssesment from "./Components/Cloud_Audit_Assesment"
import SocialEngineering from "./Components/SocialEngineering"
import RedTeamOps from "./Components/RedTeamOps"
import Iot_Hardware_Hack from "./Components/IoT_Hardware_Hacking"
import VulnerabilityAssesment from "./Components/VulnerabilityAssesment"
import Compliance_Advisory from "./Components/Compliance-Advisory"
import Sec_Awarenes_Training from "./Components/Security_Awarenes_Training"
import Incident_Response from "./Components/Incident_Response"
import Ditigal_Forensic from "./Components/Ditigal_Forensic"


// element that should be loaded when route is active
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {path:'/', element: <Homepage/>},
      {path:'/contact',element:<ContactPage/>},
    ]
  },
  {path:'/professional-services', element:'',children:[
       { path: "Web-Application-Pen-Testing", element: <WebAppTesting/> },
          { path: "External-Network-Pen-Testing", element:<ExternalNetworkPenTesting/> },
          { path: "Internal-Network-Pen-Testing", element: <InternalNetworkPenTesting/> },
          { path: "LLM-AI-Pen-Testing", element: <LLM_AI_Pen_Testing/> },
          { path: "Social-Engineering", element: <SocialEngineering/> },
          {path:"Red-Team-Ops",element:<RedTeamOps/>},
          {path:"Iot-Hardware-Hacking",element:<Iot_Hardware_Hack/>},
          // { path: "penetration-testing", element: <PenetrationTest/> },

          /* Strategic & Advisory */
          { path: "VulnerAbility-Assesment", element: <VulnerabilityAssesment/> },
          { path: "Cloud-Audit-Assesment", element: <ClaudAuditAssesment/> },

          /* Solution Implementation */
          { path: "Compliance-Advisory", element:<Compliance_Advisory/>},

          {path:"Sec-Awarenes-Training",element:<Sec_Awarenes_Training/>},

          /* Training Services */
          { path: "Incident-Response", element: <Incident_Response/> },
          { path: "Digital-Forensic", element: <Ditigal_Forensic/> },
          { path: "training-phishing-exercises", element: "" },

  ]},
  {path:'/managed-services',element:'',children:[
     { path: "template-pages", element: "" },
      { path: "template-pages", element: "" },
      { path: "template-pages", element: "" },
      { path: "template-pages", element: "" },
  ]},
  {},
  {},
])

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
