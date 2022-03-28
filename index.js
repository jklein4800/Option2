import React, { createElement, Compenent, PureComponent} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Bar Graph // 

function BarGroup(props) {
  let barPadding = 2
  let barColour = '#0e731e'
  let widthScale = d => d * 10

  let width = widthScale(props.d.value)
  let yMid = props.barHeight * 0.5
  
  return <g className="bar-group">
    <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
    <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
    <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
  </g>
}

class BarChart extends React.Component {
  state = {
    data: [
      { name: 'Mon', value: 10 },
      { name: 'Tue', value: 37 },
      { name: 'Wed', value: 60 },
      { name: 'Thu', value: 12 },
      { name: 'Fri', value: 20 },
      { name: 'Sat', value: 36 },
      { name: 'Sun', value: 55 }
    ]
  }

  render() {
    let barHeight = 30
        
    let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
    <BarGroup d={d} barHeight={barHeight} />
      </g>)                         
    
    return <svg width="800" height="300" >
      <g className="container">
        <text className="title" x="10" y="30">How Many Mice My Cats Catch in a Week</text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  }
}

ReactDOM.render(
  <BarChart />,
  document.getElementById('app')
)


// Table Graph //

class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        students: [
           { id: 1, name: 'John Mayer Cat', age: 11, food: 'Bread' },
           { id: 2, name: 'Pistachio', age: 12, food: 'Ice Cream'},
           { id: 3, name: 'Slendy', age: 8, food: 'Fish'},
           { id: 4, name: 'Lilly', age: 6, food: 'Cheese' },
           {id: 5, name: 'Tub Tub Tub', age: 3, food: 'Chips' }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.students.map((students, index) => {
        const { id, name, age, food } = students //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{food}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>Cat Info</h1>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

ReactDOM.render(<Table />, document.getElementById('root'));


// Line Chart //


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
