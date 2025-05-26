import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { MealProvider } from './context/MealContext';
import { MealSuggestion } from './components/MealSuggestion';
import { MealList } from './components/MealList';
import { TabPanel } from './components/TabPanel';
import MealHistory from './components/MealHistory';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#f57c00',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MealProvider>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          bgcolor: 'background.default' 
        }}>
          <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
              <RestaurantIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Meal Planner
              </Typography>
            </Toolbar>
          </AppBar>
          <Container 
            maxWidth="md" 
            sx={{ 
              mt: 4,
              mb: 4,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <Paper sx={{ width: '100%', mb: 4 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="primary"
                centered
                variant="scrollable"
                scrollButtons="auto"              
              >
                <Tab label="Today's Suggestions" />
                <Tab label="Manage Meals" />
                <Tab label="Meal History" />
              </Tabs>
            </Paper>

            <Box sx={{ flex: 1, overflow: 'hidden' }}>
              <TabPanel value={tabValue} index={0}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <MealSuggestion type="breakfast" />
                  <MealSuggestion type="lunch" />
                  <MealSuggestion type="dinner" />
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <MealList />
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <MealHistory />
              </TabPanel>
            </Box>
          </Container>
        </Box>
      </MealProvider>
    </ThemeProvider>
  );
}

export default App;
