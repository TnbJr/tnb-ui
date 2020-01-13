import React from "react";
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

class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: [],
      chartColors: {
        others: "#40ee86",
        meat: "#67d6c0",
        pasta: "#127197",
        pizza: "#e96d8d"
      },
     
    };
  }

  handleClick = dataKey => {
    if (_.includes(this.state.disabled, dataKey)) {
      this.setState({
        disabled: this.state.disabled.filter(obj => obj !== dataKey)
      });
    } else {
      this.setState({ disabled: this.state.disabled.concat(dataKey) });
    }
  };

  renderCusomizedLegend = ({ payload }) => {
    return (
      <div className="customized-legend">
        {payload.map(entry => {
          const { dataKey, color } = entry;
          const active = _.includes(this.state.disabled, dataKey);
          const style = {
            marginRight: 10,
            color: active ? "#AAA" : "#000"
          };

          return (
            <span
              className="legend-item"s
              onClick={() => this.handleClick(dataKey)}
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

  render() {
    return (
      <div>
        <ResponsiveContainer height={400}>
          <Chart layout="vertical" data={this.props.chartData}>
            {_.toPairs(this.state.chartColors)
              .filter(pair => !_.includes(this.state.disabled, pair[0]))
              .map(pair => (
                <Bar
                  stackId="a"
                  key={pair[0]}
                  dataKey={pair[0]}
                  fill={pair[1]}
                />
              ))}
            <YAxis
              domain={[0, 23]}
              dataKey="hour"
              interval="preserveStartEnd"
              padding={{ top: 20, bottom: 20 }}
              tickCount={10}
            />
            <XAxis type="number" />
            <Legend
              verticalAlign="bottom"
              height={36}
              align="left"
              payload={_.toPairs(this.state.chartColors).map(pair => ({
                dataKey: pair[0],
                color: pair[1]
              }))}
              content={this.renderCusomizedLegend}
            />
            <Tooltip />
          </Chart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export const BarChart = ({chartData, chartConfig}) => {


    const renderBars = (chartConfig) => {
        return chartConfig.map((obj) => (
            <Bar
                key={obj.key}
                dataKey={obj.key}
                fill={obj.color}
            />
        ))
    const handleClick = dataKey => {
        if (_.includes(this.state.disabled, dataKey)) {
          this.setState({
            disabled: this.state.disabled.filter(obj => obj !== dataKey)
          });
        } else {
          this.setState({ disabled: this.state.disabled.concat(dataKey) });
        }
      };
    
      renderCusomizedLegend = ({ payload }) => {
        return (
          <div className="customized-legend">
            {payload.map(entry => {
              const { dataKey, color } = entry;
              const active = _.includes(this.state.disabled, dataKey);
              const style = {
                marginRight: 10,
                color: active ? "#AAA" : "#000"
              };
    
              return (
                <span
                  className="legend-item"s
                  onClick={() => this.handleClick(dataKey)}
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
    return(
        <ResponsiveContainer height={400}>
            <Chart data={chartData}>
                <Legend />
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
