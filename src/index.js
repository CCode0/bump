import React from "react";
import { render } from "react-dom";
import { ResponsiveBump } from "@nivo/bump";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "600px",
  height: "300px"
};

const data = [
  {
    "id": "China",
    "data": [
      {
        "x": 2015,
        "y": 1
      },
      {
        "x": 2016,
        "y": 1
      },
      {
        "x": 2017,
        "y": 1
      },
      {
        "x": 2018,
        "y": 1
      }
    ]
  },
  {
    "id": "US",
    "data": [
      {
        "x": 2015,
        "y": 2
      },
      {
        "x": 2016,
        "y": 2
      },
      {
        "x": 2017,
        "y": 2
      },
      {
        "x": 2018,
        "y": 2
      }
    ]
  },
  {
    "id": "Germany",
    "data": [
      {
        "x": 2015,
        "y": 5
      },
      {
        "x": 2016,
        "y": 5
      },
      {
        "x": 2017,
        "y": 5
      },
      {
        "x": 2018,
        "y": 5
      }
    ]
  },
  {
    "id": "Japan",
    "data": [
      {
        "x": 2015,
        "y": 3
      },
      {
        "x": 2016,
        "y": 3
      },
      {
        "x": 2017,
        "y": 3
      },
      {
        "x": 2018,
        "y": 3
      }
    ]
  },
  {
    "id": "South Korea",
    "data": [
      {
        "x": 2015,
        "y": 4
      },
      {
        "x": 2016,
        "y": 4
      },
      {
        "x": 2017,
        "y": 4
      },
      {
        "x": 2018,
        "y": 4
      }
    ]
  },
  {
    "id": "France",
    "data": [
      {
        "x": 2015,
        "y": 6
      },
      {
        "x": 2016,
        "y": 6
      },
      {
        "x": 2017,
        "y": 6
      },
      {
        "x": 2018,
        "y": 6
      }
    ]
  },
  {
    "id": "UK",
    "data": [
      {
        "x": 2015,
        "y": 7
      },
      {
        "x": 2016,
        "y": 7
      },
      {
        "x": 2017,
        "y": 7
      },
      {
        "x": 2018,
        "y": 7
      }
    ]
  },
  {
    "id": "Italy",
    "data": [
      {
        "x": 2015,
        "y": 11
      },
      {
        "x": 2016,
        "y": 11
      },
      {
        "x": 2017,
        "y": 10
      },
      {
        "x": 2018,
        "y": 10
      }
    ]
  },
  {
    "id": "Switzerland",
    "data": [
      {
        "x": 2015,
        "y": 8
      },
      {
        "x": 2016,
        "y": 8
      },
      {
        "x": 2017,
        "y": 8
      },
      {
        "x": 2018,
        "y": 8
      }
    ]
  },
  {
    "id": "India",
    "data": [
      {
        "x": 2015,
        "y": 14
      },
      {
        "x": 2016,
        "y": 12
      },
      {
        "x": 2017,
        "y": 11
      },
      {
        "x": 2018,
        "y": 12
      }
    ]
  },
  {
    "id": "Netherlands",
    "data": [
      {
        "x": 2015,
        "y": 9
      },
      {
        "x": 2016,
        "y": 9
      },
      {
        "x": 2017,
        "y": 9
      },
      {
        "x": 2018,
        "y": 9
      }
    ]
  },
  {
    "id": "Russia",
    "data": [
      {
        "x": 2015,
        "y": 10
      },
      {
        "x": 2016,
        "y": 10
      },
      {
        "x": 2017,
        "y": 12
      },
      {
        "x": 2018,
        "y": 11
      }
    ]
  },
  {
    "id": "Canada",
    "data": [
      {
        "x": 2015,
        "y": 12
      },
      {
        "x": 2016,
        "y": 13
      },
      {
        "x": 2017,
        "y": 13
      },
      {
        "x": 2018,
        "y": 14
      }
    ]
  },
  {
    "id": "Sweden",
    "data": [
      {
        "x": 2015,
        "y": 13
      },
      {
        "x": 2016,
        "y": 14
      },
      {
        "x": 2017,
        "y": 14
      },
      {
        "x": 2018,
        "y": 13
      }
    ]
  },
  {
    "id": "Israel",
    "data": [
      {
        "x": 2015,
        "y": 15
      },
      {
        "x": 2016,
        "y": 15
      },
      {
        "x": 2017,
        "y": 15
      },
      {
        "x": 2018,
        "y": 15
      }
    ]
  }
]

const App = () => (
  <div style={styles}>
    <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: 'spectral' }}
        endLabelTextColor="black"
		lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
		isInteractive={true}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Patents filed (resident and abroad)',
            legendPosition: 'middle',
            legendOffset: -40
        }}
		/>
  </div>
);

render(<App />, document.getElementById("root"));
