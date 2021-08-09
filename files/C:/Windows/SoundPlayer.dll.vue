<template>
  <audio
    autoplay
    controls
    :class="$style.player"
    class="no-border"
    @ended="onEnd"
  >
    {{soundData}}
    <source :src="soundData">
  </audio>
</template>

<script>
import icon from '../../../src/assets/icons/mp3.png';
import { props, inject } from '../../../src/utils/vue';

export default {
  canHandle: (file) => file.type === 'sound',
  windowProperties: (file) => ({
    icon,
    hidden: file && file.extras ? file.extras.hidden : false,
    height: 100,
    resizable: false,
    maximizable: false,
  }),
  ...inject('$wm'),
  ...props({
    file: props.obj(null),
  }),
  computed: {
    soundData() {
      return this.file ? this.file.module : {};
    },
  },
  methods: {
    onEnd() {
      if (typeof this.file.extras.onEnd === 'function') {
        this.file.extras.onEnd();
      };
      if (this.file.extras.hidden) {
        this.$nextTick(() => {
          this.$wm.closeWindow(this.wmId);
        });
      }
    },
  },
  style({ className }) {
    return [
      className('player', {
        background: '#f1f3f4',
        width: '100%',
        padding: '15px 0',
      }),
    ];
  },
};
</script>
