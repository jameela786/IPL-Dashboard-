// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchcardDetails} = props
  console.log('matchcard', matchcardDetails, props)

  let umpires
  let result
  let manOfTheMatch
  let date
  let venue
  let competingTeam
  let competingTeamLogo
  let firstInnings
  let secondInnings
  let matchStatus

  if (matchcardDetails) {
    ;({
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = matchcardDetails)
  }
  return (
    <li className="card_container">
      <div>
        <img
          src={competingTeamLogo}
          className="logo_img"
          alt={`competing team ${competingTeam}`}
        />
      </div>
      <p className="main_head">{competingTeam}</p>
      <p className="sub_head">{result}</p>
      <p className={matchStatus === 'Won' ? 'status_won' : 'status_lose'}>
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard
