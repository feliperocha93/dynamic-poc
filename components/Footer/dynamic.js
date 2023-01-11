import dynamic from 'next/dynamic';

export const LoadableFooter = dynamic(() =>
  import(/* webpackChunkName: "Footer" */ './index')
)

LoadableFooter.displayName = 'LoadableFooter';