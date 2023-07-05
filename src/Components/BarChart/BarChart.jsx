import { ResponsiveBar } from '@nivo/bar';
import { Paper } from '@mui/material';

const data = [
  { id: 'item_a', value: 4 },
  { id: 'item_b', value: 7 },
  // Add more items and counts as needed
];

export default function BarChart() {
    return(
        <>
            <Paper
                sx={{
                    m: '2rem',
                    height: '30rem',
                }}
            >
                <ResponsiveBar
                    data={data}
                    keys={['value']}
                    indexBy='id'
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                    padding={0.3}
                    colors={[ '#89CFF0' ]}
                    enableGridY={true}
                    axisBottom={{
                        tickRotation: -90,
                    }}
                />
            </Paper>
        </>
    )
}

