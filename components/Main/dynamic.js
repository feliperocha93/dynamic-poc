import dynamic from 'next/dynamic';

export const LoadableMain = dynamic(() =>
  import(/* webpackChunkName: "Body" */ './index')
);

LoadableMain.displayName = 'LoadableMain';
