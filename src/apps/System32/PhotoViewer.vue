<template>
  <div class="PhotoViewer">
    <div class="imageContainer">
      <div class="white">
        <div class="loading" v-if="loading">
          Loading ...
        </div>
        <div
          @contextmenu="openContextMenu"
          class="image-container" ref="imageContainer" :class="{realSize:realSize,zoomMode,}">
          <img ref="image" v-if="!loading &&  src" :src="src" alt="" :style="imageStyleObj">
        </div>
      </div>
    </div>
    <div class="controls">
      <div class="rounded">
        <div class="left">
          <div class="zoom">
            <img @click="switchZoom" width="24" :src="IconZoomIn" alt="">
            <div v-if="zoomMode" class="zoom-slider">
              <input v-model="zoom" type="range" orient="vertical" min="1" max="100">
            </div>
          </div>
          <div class="size" @click="switchMode">
            <img width="24" :src="IconZoomFit" alt="">
          </div>
        </div>
        <div class="center">
          <div class="previous" @click="showPrev" :class="!prevImage ? 'disable' : ''">
            <svg xmlns="http://www.w3.org/2000/svg"
                 style="transform: rotate(180deg)"
                 width="24"
                 height="24"
                 viewBox="0 0 30 30"
            >
              <path
                d="M 7 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 6 7.0039062 L 6 15 L 6 22.996094 A 1 1 0 0 0 6 23 A 1 1 0 0 0 7 24 A 1 1 0 0 0 7.5917969 23.804688 L 7.59375 23.804688 A 1 1 0 0 0 7.6210938 23.783203 L 18.541016 15.841797 A 1 1 0 0 0 19 15 A 1 1 0 0 0 18.556641 14.169922 L 7.59375 6.1953125 A 1 1 0 0 0 7 6 z M 22.5 6 C 21.672 6 21 6.672 21 7.5 L 21 22.5 C 21 23.328 21.672 24 22.5 24 C 23.328 24 24 23.328 24 22.5 L 24 7.5 C 24 6.672 23.328 6 22.5 6 z"
              ></path>
            </svg>
          </div>
          <div @click="showSlide" class="playSlide">
            <div class="buttonPlay">
              <img width="32" :src="IconImage" alt="">
            </div>
          </div>
          <div class="next" @click="showNext" :class="!nextImage ? 'disable' : ''">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 30 30"
            >
              <path
                d="M 7 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 6 7.0039062 L 6 15 L 6 22.996094 A 1 1 0 0 0 6 23 A 1 1 0 0 0 7 24 A 1 1 0 0 0 7.5917969 23.804688 L 7.59375 23.804688 A 1 1 0 0 0 7.6210938 23.783203 L 18.541016 15.841797 A 1 1 0 0 0 19 15 A 1 1 0 0 0 18.556641 14.169922 L 7.59375 6.1953125 A 1 1 0 0 0 7 6 z M 22.5 6 C 21.672 6 21 6.672 21 7.5 L 21 22.5 C 21 23.328 21.672 24 22.5 24 C 23.328 24 24 23.328 24 22.5 L 24 7.5 C 24 6.672 23.328 6 22.5 6 z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="right">
          <div @click="rotateLeft" class="rotate-left">
            <img width="24" :src="IconRotateLeft" alt="">
          </div>
          <div @click="rotateRight" class="rotate-right">
            <img width="24" :src="IconRotateRight" alt="">
          </div>
          <div class="divider"></div>
          <div @click="showDeleteDialog" class="delete">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <linearGradient id="hbE9Evnj3wAjjA2RX0We2a" x1="7.534" x2="27.557" y1="7.534" y2="27.557"
                              gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5a"></stop>
                <stop offset=".443" stop-color="#ee3d4a"></stop>
                <stop offset="1" stop-color="#e52030"></stop>
              </linearGradient>
              <path fill="url(#hbE9Evnj3wAjjA2RX0We2a)"
                    d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
              ></path>
              <linearGradient id="hbE9Evnj3wAjjA2RX0We2b" x1="27.373" x2="40.507" y1="27.373" y2="40.507"
                              gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#a8142e"></stop>
                <stop offset=".179" stop-color="#ba1632"></stop>
                <stop offset=".243" stop-color="#c21734"></stop>
              </linearGradient>
              <path fill="url(#hbE9Evnj3wAjjA2RX0We2b)"
                    d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <teleport v-if="slideShowMode" to="body">
      <div class="PhotoViewer_slide-show" @click="showNext">
        <img ref="imageSlideShow" v-if="!loading &&  src" :src="src" alt="" :class="realSize">
      </div>
    </teleport>
  </div>
</template>

<script>
import { deleteFile, escapeShortcut, fetchFile, readDirectory, writeBuffer } from '../../services/fs';
import { getFileType } from '../../services/apps';
import { dirname, basename ,} from 'path-browserify';
import IconZoomIn from '../../assets/icons/zoom-in.png';
import IconZoomFit from '../../assets/icons/zoom-fit-best.png';
import IconImage from '../../assets/icons/jpg.png';
import IconRotateLeft from '../../assets/icons/object-rotate-left.png';
import IconRotateRight from '../../assets/icons/object-rotate-right.png';
import Image from 'image-js';
import { closeWindow, openDialog, updateToolbarTitle } from '../../services/wm';
import IconRecycleBin from '../../assets/icons/trashcan_full.png';

export default {
  name: 'PhotoViewer',
  props: {
    filePath: {},
    wmId: {},
  },
  inject:['$wm','$cnf','$fs'],
  mounted() {
    this.fetchImageFile();
    this.fetchSiblingFiles();
    this.updateWindowTitle();
    document.addEventListener('keydown', this.onKeyboardKeyDown);
  },
  data() {
    return {
      src: null,
      realSize: null,
      currentFile: this.filePath,
      IconZoomIn,
      IconZoomFit,
      IconImage,
      IconRotateLeft,
      IconRotateRight,
      loading: false,
      images: [],
      slideShowMode: false,
      zoomMode: false,
      zoom: 10,
      imageHasListener: false,
    };
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyboardKeyDown);
  },
  watch: {
    currentFile(n, o) {
      this.updateWindowTitle()
      if (n && n !== o) {
        this.fetchImageFile();
      }
    },
  },
  methods: {
    async fetchImageFile() {
      if (!this.currentFile) {
        return;
      }
      if (this.currentFile.startsWith('/')) {
        this.loading = true;
        this.src = null;
        try {
          const path = await escapeShortcut(this.currentFile);
          const type = getFileType(path);
          if (type === 'image') {
            const buffer = await fetchFile(path, { encode: 'unit8array' });
            this.src = URL.createObjectURL(new Blob([buffer],));
          }
          //image scroll
          if (!this.imageHasListener) {
            this.imageHasListener = true;
            this.registerImageDrag();
          }
        } catch (e) {
        } finally {
          this.loading = false;
        }
      }
    },
    async fetchSiblingFiles() {
      const files = await readDirectory(dirname(this.filePath));
      this.images = [];
      for (let file of files) {
        const type = await getFileType(file);
        if (type === 'image') {
          this.images.push(file);
        }
      }
    },
    showNext() {
      if (this.nextImage) {
        this.currentFile = this.nextImage;
      } else {
        this.currentFile = this.images[0];
      }
    },
    showPrev() {
      if (this.prevImage) {
        this.currentFile = this.prevImage;
      }
    },
    async rotateRight() {
      this.loading = true;
      const data = await fetchFile(this.currentFile);
      const image = await Image.load(data);
      const rotated = image.rotate(90)
        .toBuffer();
      await writeBuffer(this.currentFile, rotated);
      await this.fetchImageFile();
    },
    async rotateLeft() {
      this.loading = true;
      const data = await fetchFile(this.currentFile);
      const image = await Image.load(data);
      const rotated = image.rotate(-90)
        .toBuffer();
      await writeBuffer(this.currentFile, rotated);
      await this.fetchImageFile();
    },
    showDeleteDialog(image) {
      //todo implement recycle bin
      openDialog({
        title: 'Delete File',
        content: 'Are you sure you want to delete this file?',
        buttons: ['Yes', 'No'],
        onClick: (btn) => {
          if (btn === 'Yes') {
            this.deleteImage();
          }
        },
        icon: IconRecycleBin,
        type: 'delete'
      });
    },
    async deleteImage() {
      await deleteFile(this.currentFile);
      if (this.nextImage) {
        this.showNext();
      } else if (this.prevImage) {
        this.showPrev();
      } else {
        closeWindow(this.wmId);
      }
    },
    requestFullscreen() {
      const elem = this.$refs.image;
      const method = elem.requestFullscreen
        || elem.webkitRequestFullscreen
        || elem.msRequestFullscreen;
      if (method) {
        method.call(elem);
      }
    },
    showSlide() {
      this.slideShowMode = true;
    },
    exitSlideShow() {
      this.slideShowMode = false;
    },
    onKeyboardKeyDown(event) {
      const name = event.key;
      const code = event.code;

      if (code === 'ArrowLeft') {
        this.showPrev();
      }
      if (code === 'ArrowRight') {
        this.showNext();
      }
      if (code === 'Space') {
        this.slideShowMode = true;
      }
      if (code === 'Escape') {
        this.slideShowMode = false;
      }
    },
    switchMode() {
      this.realSize = Boolean(!this.realSize);
      this.$forceUpdate();
    },
    switchZoom() {
      this.zoomMode = Boolean(!this.zoomMode);
    },
    registerImageDrag() {
      const imageContainerEl = this.$refs.imageContainer;

      let pos = {
        top: 0,
        left: 0,
        x: 0,
        y: 0
      };
      let mouseIsDown = false;
      const mouseUpHandler = function () {
        mouseIsDown = false;
        imageContainerEl.style.cursor = 'auto';
        imageContainerEl.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };
      imageContainerEl.addEventListener('mouseleave', function () {
        mouseIsDown = false;
        imageContainerEl.style.cursor = 'auto';
        imageContainerEl.style.removeProperty('user-select');
      });
      const mouseDownHandler = function (e) {
        mouseIsDown = true;
        pos = {
          // The current scroll
          left: imageContainerEl.scrollLeft,
          top: imageContainerEl.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        };

        imageContainerEl.style.cursor = 'grabbing';
        imageContainerEl.addEventListener('mousemove', mouseMoveHandler);
        imageContainerEl.addEventListener('mouseup', mouseUpHandler);
      };
      const mouseMoveHandler = function (e) {
        e.preventDefault();
        if (!mouseIsDown) {
          return;
        }
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        imageContainerEl.scrollTop = pos.top - dy;
        imageContainerEl.scrollLeft = pos.left - dx;
      };
      imageContainerEl.addEventListener('mousedown', mouseDownHandler);
      imageContainerEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
          this.zoom = Math.min(100, this.zoom + this.zoom / 10);
        }else if(e.deltaY < 0){
          this.zoom = Math.max(1, this.zoom - this.zoom / 10);
        }
      });
    },
    updateWindowTitle() {
      this.$wm.updateTitle(this.wmId,basename(this.currentFile) + '  - Photo Viewer');
      this.$wm.updateToolbarTitle(this.wmId,this.currentFile ? basename(this.currentFile) : 'Photo Viewer');
    },
    openContextMenu(e) {
      const CHANGE_WALLPAPER = 'Set as Wallpaper';
      const items = [CHANGE_WALLPAPER];
      const handler = async (item) => {
        if (item === CHANGE_WALLPAPER) {
          //instant change
          this.$cnf.setConfig({
            wallpaperPath: this.currentFile,
          });
          //then copy after change so user won't notice any lag
          const copied = await this.$fs.copyFile(this.currentFile, '/C:/Windows/Wallpapers',true);
          this.$cnf.setConfig({
            wallpaperPath: copied,
          });
        }
      }
      this.$wm.openContextMenu(e,items,handler)
    }
  },
  computed: {
    indexInSiblings() {
      let current = this.currentFile;
      return this.images.findIndex(f => basename(f) === basename(current));
    },
    nextImage() {
      if (!this.images || !this.images.length) return null;
      if (this.indexInSiblings !== this.images.length - 1) {
        return this.images[this.indexInSiblings + 1];
      } else {
        return this.images[0];
      }
    },
    prevImage() {
      if (!this.images || !this.images.length) return null;
      if (this.indexInSiblings !== 0) {
        return this.images[this.indexInSiblings - 1];
      } else {
        return this.images[this.images.length - 1];
      }
    },
    imageStyleObj() {
      let style = {};
      if (this.zoomMode) {
        let scale = this.zoom / 10;
        const img = this.$refs.image;
        const realWidth = img.naturalWidth;
        const realHeight = img.naturalHeight;
        style.width = parseInt(realWidth * scale) + 'px';
        style.height = parseInt(realHeight * scale) + 'px';
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
.PhotoViewer {
  $controlsHeight: 60px;
  position: relative;

  .imageContainer {
    height: 100%;
    text-align: center;
    padding-bottom: $controlsHeight;

    .white {
      height: 100%;
      background: white;
    }

    .image-container {
      width: 100%;
      height: 100%;

      &.realSize {
        overflow: auto;

        img {
          width: unset;
          height: unset;
          object-fit: unset;
        }
      }

      &.zoomMode {
        overflow: scroll;

        & {
          display: block;
          justify-content: center;
          align-items: center;
        }

        img {
          margin:0!important;
          width: unset;
          height: unset;
          object-fit: unset;
        }
      }
    }

    img {
      transition: all ease-out 400ms;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  .controls {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: $controlsHeight;

    display: flex;
    justify-content: center;
    align-items: center;

    .rounded {
      background: rgba(white, .1);
      height: 36px;
      min-width: 400px;
      color: white;
      border: 1px solid rgba(black, .2);
      border-radius: 4rem;
      backdrop-filter: blur(1px) brightness(2);

      display: flex;

      .center, .left, .right {
        flex: 1;
        display: flex;
        align-items: center;
      }

      .left, .right {
        justify-content: space-around;
      }

      .left {
        .zoom, .size {
          transition: background-color ease-in 360ms;
          padding: 4px 6px;
          border-radius: 4px;
          background: transparent;

          &:hover {
            background: linear-gradient(180deg,
              rgba(250, 255, 255, 0.4) 0%,
              rgba(241, 255, 246, 0.3) 40%,
              rgba(165, 175, 175, 0.5) 55%,
              rgba(198, 198, 204, 0.3) 80%,
              rgba(229, 234, 255, 0.4) 100%
            );
          }
        }

        .zoom {
          margin-right: -26px;
          position: relative;

          .zoom-slider {
            background: rgba(white, .8);
            border-radius: 8px;
            padding: 4px;
            position: absolute;
            left: -160px;
            top: 4px;
          }
        }
      }

      .center {
        .previous, .next {
          padding: 0 4px;

          svg {
            fill: #1963b2;
          }
        }

        .playSlide {
          text-align: center;
          width: 34px;
          height: 34px;

          position: relative;

          .buttonPlay {
            position: absolute;
            top: -4px;
            left: -5px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(black, .3);

            background: linear-gradient(180deg,
              rgba(209, 236, 255, 0.8) 0%,
              rgba(0, 62, 255, 0.7) 40%,
              rgba(0, 21, 175, 0.9) 55%,
              rgba(107, 223, 255, 0.7) 90%,
              rgba(0, 210, 255, 0.9) 100%
            );

            transition: 200ms;

            &:hover {
              filter: brightness(1.2);
            }

            img {
              width: 24px;
              height: 24px;
              margin-bottom: 8px;
            }
          }
        }

        .previous, .next {
          padding: 0 16px;

          border: 1px solid rgba(black, .3);
          background: linear-gradient(180deg,
            rgba(250, 255, 255, 0.4) 0%,
            rgba(241, 255, 246, 0.3) 40%,
            rgba(165, 175, 175, 0.5) 55%,
            rgba(198, 198, 204, 0.3) 80%,
            rgba(229, 234, 255, 0.4) 100%
          );


          transition: 200ms;

          &:hover {
            background: linear-gradient(180deg,
              rgba(250, 255, 255, 0.8) 0%,
              rgba(241, 255, 246, 0.7) 40%,
              rgba(165, 175, 175, 0.9) 55%,
              rgba(198, 198, 204, 0.7) 80%,
              rgba(229, 234, 255, 0.8) 100%
            );
          }

          &.disable:hover {
            background: linear-gradient(180deg,
              rgba(250, 255, 255, 0.4) 0%,
              rgba(241, 255, 246, 0.3) 40%,
              rgba(165, 175, 175, 0.5) 55%,
              rgba(198, 198, 204, 0.3) 80%,
              rgba(229, 234, 255, 0.4) 100%
            );
          }
        }

        .next {
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
          border-left: 0;
        }

        .previous {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          border-right: 0;
        }
      }

      .right {
        margin: 0 16px;

        .divider {
          width: 1px;
          background: rgba(black, .5);
          height: 22px;
          margin-right: 10px;
        }
      }

      .right {
        .rotate-left, .rotate-right {
          img {
            margin: 0;
            width: 24px;
            height: 24px;
          }
        }

        .rotate-right, .rotate-left, .delete {
          transition: background-color ease-in 360ms;
          border-radius: 4px;
          padding: 4px 6px;

          &:hover {
            background: linear-gradient(180deg,
              rgba(250, 255, 255, 0.4) 0%,
              rgba(241, 255, 246, 0.3) 40%,
              rgba(165, 175, 175, 0.5) 55%,
              rgba(198, 198, 204, 0.3) 80%,
              rgba(229, 234, 255, 0.4) 100%
            );
          }
        }
      }
    }
  }
}

.PhotoViewer_slide-show {
  background: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
