import './rightBar.css'

// Components...........
import Message from '../message/Message'

export default function RightBar() {
  return (
    <div className="rightBar">
        <div className="rightBar-container">
            <Message/>
        </div>
    </div>
  )
}