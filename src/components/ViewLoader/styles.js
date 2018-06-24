import { css } from 'glamor';

const styles = {
  overlay: css({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    pointerEvents: 'none',

    '.is--loading': {
      pointerEvents: 'all',
    },
  }),

  spinner: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),

  view: css({
    padding: '1em',
    // for some reason, during a transition, if another `view` is added that has
    // scrollbars, and the content of the other view has center aligned items,
    // either with text-align or flex or margins - only the center aligned
    // content will shift to accomadate scrollbars (even if there are none
    // in that view). So for now, always show the scrollbar.
    overflowY: 'scroll',
    background: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
};

export default styles;
