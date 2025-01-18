// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {IplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamListApi()
  }

  getTeamListApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const UpdatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({IplTeamsList: UpdatedData, isLoading: false})
  }

  render() {
    const {IplTeamsList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="bg_container">
            <div className="heading_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo_img"
                alt="ipl logo"
              />
              <h1 className="ipl_head">IPL Dashboard</h1>
            </div>
            <div className="teamMain_container">
              <ul className="teamcard_container">
                {IplTeamsList.map(each => (
                  <TeamCard teamCardDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default Home
