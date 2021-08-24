import { addLines, addSeries, findMatches } from '../actions/index'
import { connect } from "react-redux"
import { csv } from 'd3'
import DataOfficeLines from '../../data/the-office-lines-scripts.csv'
import DataOfficeSeries from '../../data/the-office-series.csv'
import LineSearch from './LineSearch'

const mapStateToProps = (state, ownProps) => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addLines: payload => dispatch(addLines(payload)),
    addSeries: payload => dispatch(addSeries(payload)),
    findMatches: payload => dispatch(findMatches(payload))
  }
}

const ConnectedApp = function ({ addLines, addSeries, findMatches }) {

  csv(DataOfficeLines).then(d=>{
    console.log('csv lines done', d.length)
    addLines(d)
    csv(DataOfficeSeries).then(d=>{
      addSeries(d)
      findMatches()
    })  
  })

  return (
    <LineSearch/>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App