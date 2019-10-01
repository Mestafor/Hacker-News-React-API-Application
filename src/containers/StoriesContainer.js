import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(setStoryIds);
  }, []);

  return storyIds.map(storyId => <Story storyId={storyId} key={storyId} />);
};
