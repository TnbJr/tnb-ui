import React, { useState } from "react";
import {
  BarChart as Chart,
  Tooltip,
  Bar,
  XAxis,
  Legend,
  YAxis,
  ResponsiveContainer,
  Surface,
  Symbols,
  CartesianGrid
} from "recharts";
import _ from "lodash";

export const BarChart = ({chartData, chartConfig}) => {

    const [disabled, setDisabled] = useState([])
    const handleClick = dataKey => {
        if (_.includes(disabled, dataKey)) {
          setDisabled(disabled.filter(obj => obj !== dataKey));
        } else {
            setDisabled(disabled.concat(dataKey));
        }
      };

      const renderCusomizedLegend = ({ payload }) => {
        return (
          <div className="customized-legend">
            {payload.map(entry => {
              const { dataKey, color } = entry;
              const active = _.includes(disabled, dataKey);
              const style = {
                marginRight: 10,
                color: active ? "#AAA" : "#000"
              };
    
              return (
                <span
                  className="legend-item"s
                  onClick={() => handleClick(dataKey)}
                  style={style}
                >
                  <Surface width={10} height={10} viewBox="0 0 10 10">
                    <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
                    {active && (
                      <Symbols
                        cx={5}
                        cy={5}
                        type="circle"
                        size={25}
                        fill={"#FFF"}
                      />
                    )}
                  </Surface>
                  <span>{dataKey}</span>
                </span>
              );
            })}
          </div>
        );
      };

    const renderBars = (chartConfig) => {
        return chartConfig.map((obj) => obj)
        .filter(pair => !_.includes(disabled, pair.key))
        .map((obj) => (
            <Bar
                key={obj.key}
                dataKey={obj.key}
                fill={obj.color}
            />
        ))
    }
    return(
        <ResponsiveContainer height={400}>
            <Chart data={chartData}>
                <Legend 
                payload={chartConfig.map(pair => ({
                    dataKey: pair.key,
                    color: pair.color
                }))}
                content={renderCusomizedLegend}
              />
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis/>
                <XAxis dataKey="name" />    
                {renderBars(chartConfig)}
            </Chart>
        </ResponsiveContainer>
    )
}

// export BarChar
export default BarChart;
