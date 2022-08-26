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
import "./index.css";
import LineChartSelect from "../../Components/LineChartSelect";

function LineChartMobile(props) {
  return (
    <div style={{ marginTop: "-40px" }}>
      <div className="linechart-select-sec">
        <LineChartSelect />
        <p>$ 96,879.35</p>
      </div>
      <div className="linechartmobile">
        {/* <ResponsiveContainer width="50vw" height="50vw"> */}
        <LineChart
          width={345}
          height={182}
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
  );
}
export default LineChartMobile;
