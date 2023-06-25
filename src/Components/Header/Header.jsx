import Layout from './Layout';
import { Typography } from '@mui/material';

export default function Header(props) {
    return (
        <>
            <Layout>
                <Typography variant='logo' color='black' fontWeight='bold' sx={{ fontSize: '2rem'}}>
                    MEDVENT Data Analytics
                </Typography>
            </Layout>
        </>
    );
}

