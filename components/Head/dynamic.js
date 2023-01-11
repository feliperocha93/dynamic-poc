import dynamic from 'next/dynamic';

export const LoadableHead = dynamic(() =>
  import(/* webpackChunkName: "Head" */ './index')
)

LoadableHead.displayName = 'LoadableHead';