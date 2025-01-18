// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`} className="eachcard_btn">
      <li className="eachcard_container">
        <div>
          <img src={teamImageUrl} className="teamcard_img" alt={name} />
        </div>
        <p className="team_text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
