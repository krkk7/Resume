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

function Body() {
    const handleClick = (iconName) => {
        alert(`Clicked on ${iconName}`);
      };

    return (
        <Box sx={{ paddingRight: '75%' }}>
          <Timeline position="alternate" >
          <TimelineItem>
        <TimelineOppositeContent
        sx={{ m: 'auto 0', color: '#FFFFFF'}}
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
        <TimelineContent sx={{ py: '12px', px: 2 , color: '#FFFFFF'}}>
          <Typography variant="h6" component="span">
            10th
          </Typography>
          <Typography>Ruby school, palanganatham</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
       sx={{ m: 'auto 0', color: '#FFFFFF'}}
          variant="body2"
        >
          74%
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: '#009688' }}>
          <IconButton onClick={() => handleClick('BookIcon')}>
            <BookIcon sx={{ fontSize: 20 }}/>
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
          sx={{ m: 'auto 0', color: '#FFFFFF'}}
          variant="body2"
        >
          82%
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ backgroundColor: '#dd33fa' }}>
        <IconButton onClick={() => handleClick('BookIcon')}>
            <SchoolIcon sx={{ fontSize: 20 }}/>
            </IconButton>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
          <Typography variant="h6" component="span" >
            B.E CSE
          </Typography>
          <Typography>K.L.N College Of Engineering</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: '#FFFFFF'}}
          variant="body2"
        >
          6 months
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ backgroundColor: '#F5004F' }}>
        <IconButton onClick={() => handleClick('BookIcon')}>
            <LaptopMacIcon sx={{ fontSize: 20 }}/>
            </IconButton>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
          <Typography variant="h6" component="span" >
            CGI
          </Typography>
          <Typography>Full-stack developer internship</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: '#FFFFFF'}}
          variant="body2"
        >
          2Years(Current)
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ backgroundColor: '#7C00FE' }}>
        <IconButton onClick={() => handleClick('BookIcon')}>
            <WorkIcon sx={{ fontSize: 20 }}/>
            </IconButton>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#FFFFFF' }}>
          <Typography variant="h6" component="span" >
            ZOHO
          </Typography>
          <Typography>Back-end and fornt-end developer</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
    );
  }
  
  export default Body;