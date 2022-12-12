import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard() {

  return (
    <ImageList sx={{ width: 800, height: 600 }} gap = {14}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.summary}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href = {item.link}
                target="_blank" rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'src/images/modplanus.png',
    title: 'ModPlaNUS',
    summary: 'A web-app that assists with module planning',
    link: 'https://github.com/ModPlaNUS/ModPlaNUS',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src/images/dukeaemon.png',
    title: 'Duke Aemon',
    summary: 'A desktop app which that helps manage tasks',
    link:'https://github.com/Aishwarya-Hariharan-Iyer/ip',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src/images/devenable.png',
    title: 'DevEnable',
    summary: 'A desktop app that helps developers manage projects',
    link:'https://github.com/Aishwarya-Hariharan-Iyer/tp',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src/images/reportautomation.png',
    title: 'PRISM Report Automation',
    summary: 'A software that automates the generation of reports',
    link:'https://github.com/Aishwarya-Hariharan-Iyer/Automated-Report-Generation',
    rows: 2,
    cols: 2,
    featured: true,
  },
];