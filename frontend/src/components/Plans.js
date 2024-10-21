import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const plans = [
  {
    title: 'Basic Voting Plan',
    price: '$0/poll',
    description: 'Essential tools for small-scale elections',
    benefits: [
        'Up to 20 voters',
        'Secure voting platform',
      'Basic candidate management',
      'Real-time voting results',
      'Voter registration management'
    ]
  },
  {
    title: 'Advanced Voting Plan',
    price: '$5/poll',
    description: 'Expanded features for larger elections',
    benefits: [
        'Up to 100 voters',
      'Secure voting platform',
      'Advanced analytics and reporting',
      'Enhanced voter registration and authentication',
      'Multiple election types supported',
      'Priority support'
    ]
  },
  {
    title: 'Enterprise Voting Plan',
    price: '$15/poll',
    description: 'Unlimited features for large-scale elections',
    benefits: [
      'Unlimited voters and candidates',
      'Advanced analytics and reporting',
      'Custom branding and white-label support',
      '24/7 customer support',
      'Multi-level access control for election managers',
      'Real-time monitoring of voting process'
    ]
  }
];

const Plans = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose Your Voting Plan
      </Typography>
      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Box sx={{ backgroundColor: '#87CEEB', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
                  <Typography gutterBottom variant="h5" component="div" align="center" sx={{ color: '#fff' }}>
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" align="center" sx={{ color: '#fff' }}>
                    {plan.price}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" align="center" sx={{ marginBottom: '16px' }}>
                  {plan.description}
                </Typography>
                <List>
                  {plan.benefits.map((benefit, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box sx={{ textAlign: 'center', padding: '16px' }}>
                <Button variant="contained" color="primary" style={{ borderRadius: '9999px' }}>
                  Choose Plan
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;
