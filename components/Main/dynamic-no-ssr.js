import dynamic from 'next/dynamic';

export const LoadableMain = dynamic(() =>
  import(/* webpackChunkName: "Main" */ './index'),
  { ssr: false }
)

LoadableMain.displayName = 'LoadableMain';