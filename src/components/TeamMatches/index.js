import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamUrl: '',
    teamMatches: {},
    recentMatchesPlayed: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFullDetailsaboutMatch()
  }

  getFullDetailsaboutMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const eachItem = data.latest_match_details
    const bannerImage = data.team_banner_url

    const updatedMatchDetails = {
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      manOfTheMatch: eachItem.man_of_the_match,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
      matchStatus: eachItem.match_status,
    }

    const recentMatches = data.recent_matches
    const recentMatchesList = recentMatches.map(eachItemCard => ({
      id: eachItem.id,
      competingTeam: eachItemCard.competing_team,
      competingTeamLogo: eachItemCard.competing_team_logo,
      date: eachItemCard.date,
      firstInnings: eachItemCard.first_innings,
      manOfTheMatch: eachItemCard.man_of_the_match,
      result: eachItemCard.result,
      secondInnings: eachItemCard.second_innings,
      umpires: eachItemCard.umpires,
      venue: eachItemCard.venue,
      matchStatus: eachItemCard.match_status,
    }))

    this.setState({
      teamUrl: bannerImage,
      teamMatches: updatedMatchDetails,
      recentMatchesPlayed: recentMatchesList,
      isLoading: false,
    })
  }

  render() {
    const {teamUrl, teamMatches, recentMatchesPlayed, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const backgroundColor = id
    return (
      <>
        {isLoading ? (
          <div
            className={`teamMatches-container loaderr ${backgroundColor}`}
            data-testid="loader"
          >
            <Loader type="Oval" color="white" height={50} />
          </div>
        ) : (
          <div className={`teamMatches-container ${backgroundColor}`}>
            <img src={teamUrl} className="banner-image" alt="team banner" />
            <h1 className="latest-heading">Latest Matches</h1>
            <LatestMatch matchDetails={teamMatches} />
            <ul className="recentmatchList">
              {recentMatchesPlayed.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
            )
          </div>
        )}
      </>
    )
  }
}
export default TeamMatches
