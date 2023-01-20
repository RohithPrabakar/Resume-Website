import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ResumePage from '../components/ResumePage';

describe('ResumePage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ResumePage />);
    expect(getByText('Rohith Prabakar')).toBeInTheDocument();
  });

  it('displays the correct information', () => {
    const { getByText } = render(<ResumePage />);
    expect(getByText('Recipe website')).toBeInTheDocument();
    expect(getByText('EC2, VPC, Lambda, ECS, IAM, RDS, DynamoDB, S3, Route 53, Cloudfront, API Gateway, SNS')).toBeInTheDocument();
    expect(getByText('Yercadu Electronics, Chennai, TN, India')).toBeInTheDocument();
  });
});