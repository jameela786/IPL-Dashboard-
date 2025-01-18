import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

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

  if (latestMatchDetails) {
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
    } = latestMatchDetails)
  }

  return (
    <div className="latestmatch_bgcontainer">
      <div className="match_container">
        <div className="displaytext_container">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div className="logo_container">
          <img
            src={competingTeamLogo}
            className="logo_img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>

      <div className="resultText_container">
        <p className="text_headers">First Innings</p>
        <p>{firstInnings}</p>
        <p className="text_headers">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="text_headers">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="text_headers">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
