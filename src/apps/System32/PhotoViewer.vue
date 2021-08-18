<template>
  <div class="PhotoViewer">
    <div class="imageContainer">
      <img v-if="filePath && src" :src="src" alt="" :class="mode">
    </div>
  </div>
</template>

<script>
import { escapeShortcut, fetchFile } from '../../services/fs';
import { encode } from '../../utils/utils';
import { getFileType } from '../../services/apps';

export default {
  name:'PhotoViewer',
  props:{
    filePath:{},
  },
  mounted() {
    this.fetchImageFile()
  },
  methods: {
    async fetchImageFile() {
      if (!this.filePath) {
        return;
      }
      if (this.filePath.startsWith('/')) {
        const path = await escapeShortcut(this.filePath);
        const type = getFileType(path);
        if(type === 'image'){
          const buffer = await fetchFile(path);
          const bytes = new Uint8Array(buffer);
          this.src = 'data:image/png;base64,' + encode(bytes)
        }
      }
    }
  },
  data() {
    return {
      src: null,
      mode: '',
    }
  }
};
</script>

<style lang="scss">
.PhotoViewer{
  .imageContainer{
    height: 100%;
    text-align: center;
    background: white;
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
