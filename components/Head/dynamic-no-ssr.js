import dynamic from 'next/dynamic';

export const LoadableHead = dynamic(() =>
  import(/* webpackChunkName: "Head" */ './index'),
  { ssr: false }
)

LoadableHead.displayName = 'LoadableHead';