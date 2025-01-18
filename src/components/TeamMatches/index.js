// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchList: {
      teamBannerUrl: '',
      latestMatchDetails: {},
      recentMatches: [],
    },
  }

  componentDidMount() {
    this.getTeamMatchApi()
  }

  getTeamMatchApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log('data=', data)
    // Update mapping based on the actual structure of the API response
    const UpdatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamMatchList: UpdatedData, isLoading: false})
  }

  render() {
    const {teamMatchList, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchList
    console.log(
      'temabannerul & latestMatchDetails',
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    )
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg_containerteamMatch">
            <div className="content_container">
              <img src={teamBannerUrl} className="head_img" alt="team banner" />
            </div>
            <div className="latestMatch_container">
              <p className="latestMatch_heading">Latest Matches</p>
              <ul>
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </ul>

              <ul className="matchcard_container">
                {recentMatches.map(each => (
                  <MatchCard
                    matchcardDetails={each}
                    key={each.id || each.date}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
