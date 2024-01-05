import dynamic from 'next/dynamic';

export const LoadableFooter = dynamic(() =>
  import(/* webpackChunkName: "lazy_Footer" */ './index')
);

LoadableFooter.displayName = 'LoadableFooter';
