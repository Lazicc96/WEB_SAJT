import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Strelica from '../Components/Strelica.jsx'
import TiersSection from "./TierSection";
import MiddleComponent from "./middleComponent.jsx";

function IoT_Hardware_Hacking(){

    return (
    <>
            <HeaderComponent HeaderText={'IoT & Hardware Hacking'} pageHeaderText={`The attack surface doesn't end at your firewall. We target embedded firmware, hardware debug interfaces (UART, JTAG, SPI), and wireless protocols (BLE, Zigbee, Z-Wave). From factory-default credentials to extractable encryption keys, we find what software scanners never see.`}/>
            <TiersSection
  eyebrow="Hardware Exploitation Lifecycle"
  heading={["From Device Teardown", "to Engineering Guidance."]}
  tiers={[
    {
      title: "Device Reconnaissance",
      lead: "Teardown and attack surface analysis.",
      text: "Chip identification, communication port mapping, and full attack surface analysis of the physical device.",
      to: "/professional-services/iot-hardware-hacking",
    },
    {
      title: "Firmware Analysis",
      lead: "Unpacking for secrets and backdoors.",
      text: "Extraction, unpacking, and static analysis hunting for hardcoded secrets, backdoors, and vulnerable libraries.",
      to: "/professional-services/iot-hardware-hacking",
    },
    {
      title: "Live Interface Testing & Reporting",
      lead: "UART, JTAG, and hardware fixes.",
      text: "Debug access via UART/JTAG, interface fuzzing, and runtime memory inspection — with severity-rated findings for your engineering team.",
      to: "/professional-services/iot-hardware-hacking",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default IoT_Hardware_Hacking;