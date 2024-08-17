import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function Body() {
  const [showCard, setShowCard] = React.useState(false);
  const [cardContent, setCardContent] = React.useState('');
  const handleClick = (iconName) => {
    setCardContent(iconName);
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 10000); // Hide card after 10 seconds
  };

  
  const cardContentMap = {
    'BookIcon': (
      <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            10th
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2016
          </Typography>
          <Typography variant="body2">
            Ruby school, palanganatham
          </Typography>
        </CardContent>
      </React.Fragment>
    ),
    'CollectionsBookmarkIcon': (
        <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            12th
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2018
          </Typography>
          <Typography variant="body2">
            Ruby school, palanganatham
          </Typography>
        </CardContent>
      </React.Fragment>
    ),
    'SchoolIcon': (
        <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            B.E CSE
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2018 -2022
          </Typography>
          <Typography variant="body2">
            K.L.N College Of Engineering
          </Typography>
        </CardContent>
      </React.Fragment>
    ),
    'LaptopMacIcon': (
        <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            Internship
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2021
          </Typography>
          <Typography variant="body2">
            CGI
          </Typography>
        </CardContent>
      </React.Fragment>
    ),
    'WorkIcon': (
        <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            JOB
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2022
          </Typography>
          <Typography variant="body2">
            ZOHO
          </Typography>
        </CardContent>
      </React.Fragment>
    )
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ flex: 1, paddingRight: '30%' }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', color: '#FFFFFF' }}
              variant="body2"
            >
              83%
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#4caf50' }}>
                <IconButton onClick={() => handleClick('BookIcon')}>
                  <BookIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
              <Typography variant="h6" component="span">
                10th
              </Typography>
              <Typography>Ruby school, palanganatham</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', color: '#FFFFFF' }}
              variant="body2"
            >
              74%
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#009688' }}>
                <IconButton onClick={() => handleClick('CollectionsBookmarkIcon')}>
                  <CollectionsBookmarkIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
              <Typography variant="h6" component="span">
                12th
              </Typography>
              <Typography>Ruby school, palanganatham</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', color: '#FFFFFF' }}
              variant="body2"
            >
              82%
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#dd33fa' }}>
                <IconButton onClick={() => handleClick('SchoolIcon')}>
                  <SchoolIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
              <Typography variant="h6" component="span">
                B.E CSE
              </Typography>
              <Typography>K.L.N College Of Engineering</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', color: '#FFFFFF' }}
              variant="body2"
            >
              6 months
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#F5004F' }}>
                <IconButton onClick={() => handleClick('LaptopMacIcon')}>
                  <LaptopMacIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
              <Typography variant="h6" component="span">
                CGI
              </Typography>
              <Typography>Full-stack developer internship</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', color: '#FFFFFF' }}
              variant="body2"
            >
              2Years(Current)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#7C00FE' }}>
                <IconButton onClick={() => handleClick('WorkIcon')}>
                  <WorkIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
              <Typography variant="h6" component="span">
                ZOHO
              </Typography>
              <Typography>Back-end and front-end developer</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      {showCard && (
        <Box sx={{ display: 'flex', paddingRight: '15%', paddingTop: '2%'}}>
          <Card variant="outlined" sx={{ width: 500, height: 500 }}>
            {cardContentMap[cardContent] || 'No content available'}
          </Card>
        </Box>
      )}
    </Box>
  );
}

export default Body;
