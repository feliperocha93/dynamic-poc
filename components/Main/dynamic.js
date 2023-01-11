import dynamic from 'next/dynamic';

export const LoadableMain = dynamic(() =>
  import(/* webpackChunkName: "Main" */ './index')
)

LoadableMain.displayName = 'LoadableMain';