import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

export interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
}) => (
  <>
    <AppBar>
      <Toolbar>
        <nav>
          <Link to="/">Top</Link>
          <Link to="/about">About</Link>
        </nav>
      </Toolbar>
    </AppBar>
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  </>
);

export default DashboardTemplate;
