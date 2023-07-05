import { ResponsiveLine } from '@nivo/line';
import { Paper } from '@mui/material';

const data = [
    {
        id: 'Item Group 1',
        data: [
            { x: 'Item1', y: 12 },
            { x: 'Item2', y: 15 },
            { x: 'Item3', y: 21 },
        ],
    },
    {
        id: 'Item Group 2',
        data: [
            { x: 'Item1', y: 22 },
            { x: 'Item2', y: 14 },
            { x: 'Item3', y: 27 },
        ],
    }
];

export default function LineChart() {
    return(
        <>
            <Paper
                sx={{
                    m: '2rem',
                    height: '30rem',
                }}
            >
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'item',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                />
            </Paper>
        </>
    )
}

