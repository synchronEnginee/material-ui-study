import React from 'react';

export interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
}) => (
  <>
    <h1>{title}</h1>
    <div>{children}</div>
  </>
);

export default DashboardTemplate;
