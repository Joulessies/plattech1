import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f26b8a;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f26b8a;
  }
`;

export default function CustomButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
