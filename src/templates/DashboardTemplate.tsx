import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import { makeStyles, Theme } from '@material-ui/core/styles';

// useStyles を追加してスタイルをカスタマイズ
const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    fontWeight: 'bold',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <nav>
            <Link to="/" className={classes.link}>
              Top
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container>
        <h1>{title}</h1>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default DashboardTemplate;
