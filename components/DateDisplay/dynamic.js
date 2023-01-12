import dynamic from 'next/dynamic';

export const LoadableDateDisplay = dynamic(() =>
  import(/* webpackChunkName: "DateDisplay" */ './index'),
  { ssr: false }
)

LoadableDateDisplay.displayName = 'LoadableDateDisplay';