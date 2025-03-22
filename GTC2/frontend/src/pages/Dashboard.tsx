import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

interface DashboardData {
  revenue: {
    current: number;
    previous: number;
    growth: number;
  };
  users: {
    current: number;
    previous: number;
    growth: number;
  };
  engagement: {
    current: number;
    previous: number;
    growth: number;
  };
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Growth Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Revenue Card */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Revenue
            </Typography>
            <Typography component="p" variant="h4">
              ${data?.revenue.current.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Growth: {data?.revenue.growth}%
            </Typography>
          </Paper>
        </Grid>

        {/* Users Card */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Users
            </Typography>
            <Typography component="p" variant="h4">
              {data?.users.current.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Growth: {data?.users.growth}%
            </Typography>
          </Paper>
        </Grid>

        {/* Engagement Card */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Engagement
            </Typography>
            <Typography component="p" variant="h4">
              {data?.engagement.current}%
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Growth: {data?.engagement.growth}%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 