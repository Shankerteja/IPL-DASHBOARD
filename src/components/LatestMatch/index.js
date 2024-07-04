import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    date,
    result,
    secondInnings,
    umpires,
    venue,
    manOfTheMatch,
  } = matchDetails

  return (
    <div className="latestmatch-container">
      <div className="card1">
        <div className="competingDetails-container">
          <p className="competing-match-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competinglogo"
        />
      </div>
      <hr className="line" />
      <div className="innings-container">
        <p className="q">First Innings</p>
        <p className="p">{firstInnings}</p>
        <p className="q">Second Innings</p>
        <p className="p">{secondInnings}</p>
        <p className="m">Man Of The Match</p>
        <p className="p">{manOfTheMatch}</p>
        <p className="q">Umpires</p>
        <p className="p">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
