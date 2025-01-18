import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const PieCHartComponent = props => {
  const {teamMatchList} = props
  const {recentMatches} = teamMatchList

  // Debugging: Log recentMatches to verify structure
  console.log('Recent Matches:', recentMatches)

  // Calculate the statistics
  const stats = {
    won: 0,
    lost: 0,
    drawn: 0,
  }

  recentMatches.forEach(match => {
    if (match.matchStatus.toLowerCase().includes('won')) {
      stats.won += 1
    } else if (match.matchStatus.toLowerCase().includes('lost')) {
      stats.lost += 1
    } else {
      stats.drawn += 1
    }
  })
  console.log('stats=', stats)
  const data = [
    {name: 'Won', count: stats.won, color: '#4CAF50'},
    {name: 'Lost', count: stats.lost, color: '#F44336'},
    {name: 'Drawn', count: stats.drawn, color: '#FFC107'},
  ]

  return (
    <div className="pie-chart-container">
      <h3>Match Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count" // Correct dataKey from "data"
          >
            {data.map(item => (
              <Cell key={item.name} name={item.name} fill={item.color} />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCHartComponent
