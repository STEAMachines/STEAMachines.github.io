import React from 'react';
import Highlights from './Highlights';

export default {
  title: 'Components/Highlights',
  component: Highlights,
  tags: ['autodocs'],
  decorators: [(Story) => (
    <div style={{ margin: '2em' }}>
      <Story />
    </div>
  )]
};

export const Default = () => <Highlights />;