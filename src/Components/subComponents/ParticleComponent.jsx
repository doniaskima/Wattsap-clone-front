import styled, { keyframes, ThemeProvider } from 'styled-components'
import ConfigDark from "../../config/particlesjs-config.json";
import ConfigLight from "../../config/particlesjs-config-light.json";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const ParticlesComponent = (props) => {
  // This is new implementation where I have used react-tsparticles instead of react-particles-js
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? ConfigLight : ConfigDark}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;