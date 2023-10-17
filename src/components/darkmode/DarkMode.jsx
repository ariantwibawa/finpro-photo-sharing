import './darkMode.css'

// FontAwesome Icon.............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
    const DarkHandle=()=>{
        document.querySelector('body').classList.toggle('darkmode');
    }

  return (
    <div className="dark-mode-icon">
        <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandle}/>
    </div>
  )
}
