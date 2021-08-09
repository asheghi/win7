<template>
  <div
    :class="$style.webAppRunner"
    class="no-border"
  >
    <iframe :src="file.module[1].url" />
  </div>
</template>

<script>
import icon from '../../../src/assets/icons/html.png';
import { rgba } from '../../../src/styles/utils';
import { props } from '../../../src/utils/vue';

export default {
  canHandle: (file) => {
    if (file.module && file.module[0] && file.module[0] === 'webapp') {
      return true;
    }
    return file.type === 'webapp';
  },
  windowProperties: (file) => ({
    icon: file && file.module[1].icon ? file.module[1].icon : icon,
    width: file && file.module[1].width ? file.module[1].width : 600,
    height: file && file.module[1].height ? file.module[1].height : 500,
  }),
  ...props({
    file: props.obj(null),
  }),
  style({ className }) {
    return [
      className('webAppRunner', {
        '& > iframe': {
          background: rgba(255, 1),
          width: '100%',
          height: '100%',
        },
      }),
    ];
  },
};
</script>
