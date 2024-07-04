import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachItem
  const coloring = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recentMatches-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeam-logo"
      />
      <p className="competingTeam-name a">{competingTeam}</p>
      <p className="result a">{result}</p>
      <p className={`matchStatus a ${coloring}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
