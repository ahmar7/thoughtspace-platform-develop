import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import './index.css'
import LineChartSelect from '../../Components/LineChartSelect'

function LineCharts (props) {
    return(
      <div className="linechartparent">
        <div className="linechart-select-sec">
          <LineChartSelect />
          <p>$ 96,879.35</p>
          </div>
        <div className="linechartcon">
        {/* <ResponsiveContainer width="50vw" height="50vw"> */}
          <LineChart
            width={607}
            height={330}
            data={props?.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
      </div>
    )
}
export default LineCharts