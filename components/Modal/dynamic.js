import dynamic from 'next/dynamic';

export const LoadableModal = dynamic(() =>
  import(/* webpackChunkName: "lazy_modal" */ './index')
);

LoadableModal.displayName = 'LoadableModal';
