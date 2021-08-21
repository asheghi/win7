<template>
  <div class="MediaPlayer" :style="mediaPlayerStyle">
    <div class="loading" v-if="loading">

    </div>
    <div class="media-container">
      <img class="coverImage" v-if="coverImage" :src="coverImage" alt="">
      <video name="media" controls="controls" ref="audio"></video>
    </div>
    <div class="shadow-controls">

    </div>
    <div class="controls">
      <div class="progress">
        <input type="range"
               demo="colors"
               min="0"
               value="0"
               :max="duration"
               ref="progress"
               @change="seekTo($event)"
               @mousedown="seeking = true"
               @mouseup="seeking = false"
               @mouseleave="seeking = false"
        >
      </div>
      <div class="rounded-left">
        {{ this.formattedCurrentTime }}
      </div>
      <div class="rounded">
        <div class="left">
          <div class="shuffle" :class="{active:shuffle}" @click="shuffle = !shuffle">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M 37.978516 4.9804688 A 2.0002 2.0002 0 0 0 36.585938 8.4140625 L 39.171875 11 L 35.484375 11 C 33.363729 11 31.327803 11.842739 29.828125 13.34375 L 12.34375 30.828125 C 11.591958 31.57925 10.576979 32 9.515625 32 L 4 32 A 2.0002 2.0002 0 1 0 4 36 L 9.515625 36 C 11.636271 36 13.671667 35.157078 15.171875 33.658203 A 2.0002 2.0002 0 0 0 15.171875 33.65625 L 32.65625 16.171875 A 2.0002 2.0002 0 0 0 32.658203 16.171875 C 33.408478 15.420886 34.423021 15 35.484375 15 L 39.171875 15 L 36.585938 17.585938 A 2.0002 2.0002 0 1 0 39.414062 20.414062 L 45.414062 14.414062 A 2.0002 2.0002 0 0 0 45.414062 11.585938 L 39.414062 5.5859375 A 2.0002 2.0002 0 0 0 37.978516 4.9804688 z M 4 11 C 2.9 11 2 11.9 2 13 C 2 14.1 2.9 15 4 15 L 9.4296875 15 C 10.519688 15 11.580078 15.450234 12.330078 16.240234 L 17.390625 21.539062 L 20.220703 18.710938 L 15.220703 13.480469 C 13.720703 11.900469 11.609687 11 9.4296875 11 L 4 11 z M 27.119141 25.949219 L 24.300781 28.769531 L 29.779297 34.519531 C 31.279297 36.099531 33.390313 37 35.570312 37 L 39.171875 37 L 36.585938 39.585938 A 2.0002 2.0002 0 1 0 39.414062 42.414062 L 45.414062 36.414062 A 2.0002 2.0002 0 0 0 45.414062 33.585938 L 39.414062 27.585938 A 2.0002 2.0002 0 0 0 37.978516 26.980469 A 2.0002 2.0002 0 0 0 36.585938 30.414062 L 39.171875 33 L 35.570312 33 C 34.480312 33 33.419922 32.549766 32.669922 31.759766 L 27.119141 25.949219 z"
              ></path>
            </svg>
          </div>
          <div class="repeat" :class="{active : repeat}" @click="repeat = !repeat">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"
            >
              <path
                d="M 13 0 C 5.839844 0 0 5.839844 0 13 C 0 20.164063 5.839844 26 13 26 C 19.554688 26 25 21.113281 25.875 14.78125 C 25.976563 14.238281 25.773438 13.679688 25.339844 13.332031 C 24.90625 12.984375 24.320313 12.90625 23.808594 13.125 C 23.300781 13.339844 22.953125 13.824219 22.90625 14.375 C 22.234375 19.246094 18.070313 23 13 23 C 7.460938 23 3 18.542969 3 13 C 3 7.460938 7.460938 3 13 3 C 16.234375 3 19.109375 4.535156 20.9375 6.90625 L 19.15625 8.6875 C 19.003906 8.839844 18.96875 9.078125 19.03125 9.28125 C 19.089844 9.484375 19.257813 9.613281 19.46875 9.65625 C 22.164063 10.1875 25.277344 9.953125 25.40625 9.9375 C 25.539063 9.921875 25.660156 9.839844 25.75 9.75 C 25.839844 9.660156 25.917969 9.570313 25.9375 9.4375 C 25.953125 9.308594 26.1875 6.167969 25.65625 3.46875 C 25.617188 3.261719 25.480469 3.09375 25.28125 3.03125 C 25.078125 2.96875 24.835938 3.007813 24.6875 3.15625 L 23.0625 4.78125 C 20.679688 1.871094 17.046875 0 13 0 Z"
              ></path>
            </svg>
          </div>
          <!--          <div class="divider">

                    </div>-->
          <div class="stop">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path
                d="M22,6H8C6.895,6,6,6.895,6,8v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V8C24,6.895,23.105,6,22,6z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="center">
          <div class="previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M 4 6 C 3.448 6 3 6.448 3 7 L 3 17 C 3 17.552 3.448 18 4 18 C 4.552 18 5 17.552 5 17 L 5 7 C 5 6.448 4.552 6 4 6 z M 11.949219 6.9296875 C 11.770297 6.9383906 11.589578 6.9962813 11.423828 7.1132812 L 5.65625 11.183594 C 5.09225 11.581594 5.09225 12.418406 5.65625 12.816406 L 11.423828 16.886719 C 12.086828 17.354719 13 16.881312 13 16.070312 L 13 7.9296875 C 13 7.3214375 12.485984 6.9035781 11.949219 6.9296875 z M 19.949219 6.9296875 C 19.770297 6.9383906 19.589578 6.9962813 19.423828 7.1132812 L 13.65625 11.183594 C 13.09225 11.581594 13.09225 12.418406 13.65625 12.816406 L 19.423828 16.886719 C 20.086828 17.354719 21 16.881312 21 16.070312 L 21 7.9296875 C 21 7.3214375 20.485984 6.9035781 19.949219 6.9296875 z"
              ></path>
            </svg>
          </div>
          <div class="play" @click="togglePlayPause">
            <div class="image" alt="">
              <img class="idle" :src="playing ? Pause : PlayIdle" alt="">
              <img class="hover" :src="playing ? Pause : PlayIdle" alt="">
              <img class="active" :src="playing ? Pause : PlayIdle" alt="">
            </div>
          </div>
          <div class="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                 height="24"
            >
              <path
                d="M 20 6 C 19.448 6 19 6.448 19 7 L 19 17 C 19 17.552 19.448 18 20 18 C 20.552 18 21 17.552 21 17 L 21 7 C 21 6.448 20.552 6 20 6 z M 4.0507812 6.9296875 C 3.5140156 6.9035781 3 7.3214375 3 7.9296875 L 3 16.070312 C 3 16.881312 3.9131719 17.354719 4.5761719 16.886719 L 10.34375 12.816406 C 10.90775 12.418406 10.90775 11.581594 10.34375 11.183594 L 4.5761719 7.1132812 C 4.4104219 6.9962813 4.2297031 6.9383906 4.0507812 6.9296875 z M 12.050781 6.9296875 C 11.514016 6.9035781 11 7.3214375 11 7.9296875 L 11 16.070312 C 11 16.881312 11.913172 17.354719 12.576172 16.886719 L 18.34375 12.816406 C 18.90775 12.418406 18.90775 11.581594 18.34375 11.183594 L 12.576172 7.1132812 C 12.410422 6.9962813 12.229703 6.9383906 12.050781 6.9296875 z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="right">
          <div class="volume" @wheel="onVolumeWheelMove">
            <div @click="toggleMute" class="mute" v-if="volume === 0">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.609375 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.761719 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 31.90625 18.96875 C 31.863281 18.976563 31.820313 18.988281 31.78125 19 C 31.40625 19.066406 31.105469 19.339844 31 19.703125 C 30.894531 20.070313 31.003906 20.460938 31.28125 20.71875 L 35.5625 25 L 31.28125 29.28125 C 30.882813 29.679688 30.882813 30.320313 31.28125 30.71875 C 31.679688 31.117188 32.320313 31.117188 32.71875 30.71875 L 37 26.4375 L 41.28125 30.71875 C 41.679688 31.117188 42.320313 31.117188 42.71875 30.71875 C 43.117188 30.320313 43.117188 29.679688 42.71875 29.28125 L 38.4375 25 L 42.71875 20.71875 C 43.042969 20.417969 43.128906 19.941406 42.933594 19.546875 C 42.742188 19.148438 42.308594 18.929688 41.875 19 C 41.652344 19.023438 41.441406 19.125 41.28125 19.28125 L 37 23.5625 L 32.71875 19.28125 C 32.511719 19.058594 32.210938 18.945313 31.90625 18.96875 Z"
                ></path>
              </svg>
            </div>
            <div @click="toggleMute" class="low" v-if="volume > 0 && volume < .3">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"
                ></path>
              </svg>
            </div>
            <div @click="toggleMute" class="medium" v-if="volume >= .3 && volume <= .6">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 34.71875 12.125 C 34.273438 12.179688 33.917969 12.527344 33.855469 12.972656 C 33.789063 13.414063 34.027344 13.847656 34.4375 14.03125 C 38.339844 16.136719 41 20.246094 41 25 C 41 29.738281 38.351563 33.859375 34.46875 35.96875 C 33.984375 36.234375 33.808594 36.84375 34.078125 37.328125 C 34.34375 37.8125 34.953125 37.988281 35.4375 37.71875 C 39.945313 35.269531 43 30.484375 43 25 C 43 19.5 39.9375 14.695313 35.40625 12.25 C 35.226563 12.148438 35.019531 12.105469 34.8125 12.125 C 34.78125 12.125 34.75 12.125 34.71875 12.125 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"
                ></path>
              </svg>
            </div>
            <div @click="toggleMute" class="high" v-if="volume > .6">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 38.28125 6.8125 C 37.84375 6.886719 37.507813 7.242188 37.457031 7.683594 C 37.410156 8.125 37.652344 8.546875 38.0625 8.71875 C 44.011719 11.71875 48.0625 17.871094 48.0625 25 C 48.0625 32.128906 44.011719 38.28125 38.0625 41.28125 C 37.695313 41.40625 37.4375 41.734375 37.394531 42.117188 C 37.351563 42.503906 37.535156 42.878906 37.867188 43.082031 C 38.195313 43.28125 38.613281 43.273438 38.9375 43.0625 C 45.539063 39.730469 50.0625 32.894531 50.0625 25 C 50.0625 17.105469 45.539063 10.269531 38.9375 6.9375 C 38.765625 6.839844 38.570313 6.796875 38.375 6.8125 C 38.34375 6.8125 38.3125 6.8125 38.28125 6.8125 Z M 34.71875 12.125 C 34.273438 12.179688 33.917969 12.527344 33.855469 12.972656 C 33.789063 13.414063 34.027344 13.847656 34.4375 14.03125 C 38.339844 16.136719 41 20.246094 41 25 C 41 29.738281 38.351563 33.859375 34.46875 35.96875 C 33.984375 36.234375 33.808594 36.84375 34.078125 37.328125 C 34.34375 37.8125 34.953125 37.988281 35.4375 37.71875 C 39.945313 35.269531 43 30.484375 43 25 C 43 19.5 39.9375 14.695313 35.40625 12.25 C 35.226563 12.148438 35.019531 12.105469 34.8125 12.125 C 34.78125 12.125 34.75 12.125 34.71875 12.125 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"
                ></path>
              </svg>
            </div>
          </div>
          <input class="volume-range" type="range" min="0" max="1" step="0.05" v-model="volume"
                 @change="onVolumeChange"
          >
        </div>
      </div>
      <div class="rounded-right">
        <div class="full-screen" v-if="!fullScreen">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="M 8.5 7 C 5.4802259 7 3 9.4802259 3 12.5 L 3 35.5 C 3 38.519774 5.4802259 41 8.5 41 L 39.5 41 C 42.519774 41 45 38.519774 45 35.5 L 45 12.5 C 45 9.4802259 42.519774 7 39.5 7 L 8.5 7 z M 8.5 10 L 39.5 10 C 40.898226 10 42 11.101774 42 12.5 L 42 35.5 C 42 36.898226 40.898226 38 39.5 38 L 28 38 L 28 29.5 C 28 26.480763 25.519237 24 22.5 24 L 6 24 L 6 12.5 C 6 11.101774 7.1017741 10 8.5 10 z M 37.470703 12.986328 A 1.50015 1.50015 0 0 0 37.310547 13 L 32.5 13 A 1.50015 1.50015 0 1 0 32.5 16 L 33.878906 16 L 28.439453 21.439453 A 1.50015 1.50015 0 1 0 30.560547 23.560547 L 36 18.121094 L 36 19.5 A 1.50015 1.50015 0 1 0 39 19.5 L 39 14.673828 A 1.50015 1.50015 0 0 0 37.470703 12.986328 z M 6 27 L 22.5 27 C 23.892763 27 25 28.107237 25 29.5 L 25 38 L 8.5 38 C 7.1017741 38 6 36.898226 6 35.5 L 6 27 z"
            ></path>
          </svg>
        </div>
        <div class="exit-full-screen" v-if="fullScreen">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              d="M 8.5 7 C 5.4802259 7 3 9.4802259 3 12.5 L 3 35.5 C 3 38.519774 5.4802259 41 8.5 41 L 39.5 41 C 42.519774 41 45 38.519774 45 35.5 L 45 12.5 C 45 9.4802259 42.519774 7 39.5 7 L 8.5 7 z M 8.5 10 L 39.5 10 C 40.898226 10 42 11.101774 42 12.5 L 42 35.5 C 42 36.898226 40.898226 38 39.5 38 L 28 38 L 28 29.5 C 28 26.480763 25.519237 24 22.5 24 L 6 24 L 6 12.5 C 6 11.101774 7.1017741 10 8.5 10 z M 37.470703 12.986328 A 1.50015 1.50015 0 0 0 36.439453 13.439453 L 31 18.878906 L 31 17.5 A 1.50015 1.50015 0 0 0 29.476562 15.978516 A 1.50015 1.50015 0 0 0 28 17.5 L 28 22.277344 A 1.50015 1.50015 0 0 0 29.720703 24 L 34.5 24 A 1.50015 1.50015 0 1 0 34.5 21 L 33.121094 21 L 38.560547 15.560547 A 1.50015 1.50015 0 0 0 37.470703 12.986328 z M 6 27 L 22.5 27 C 23.892763 27 25 28.107237 25 29.5 L 25 38 L 8.5 38 C 7.1017741 38 6 36.898226 6 35.5 L 6 27 z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { props } from '../../utils/vue';
import { escapeShortcut, fetchFile, } from '../../services/fs';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import PlayNormal from '../../assets/icons/media-player/play-normal.png';
import PlayIdle from '../../assets/icons/media-player/play-idle.png';
import PlayHover from '../../assets/icons/media-player/play-hover.png';
import PlayMuted from '../../assets/icons/media-player/play-muted.png';
import WallPaper from '../../assets/images/wmp_12_wallpaper.jpg';
import Pause from '../../assets/icons/media-player/pause.png';
import debounce from 'lodash.debounce';
import { parseBuffer as metaDataParseBuffer } from 'music-metadata';
import { formatSeconds } from '../../utils/utils';

const ffmpeg = createFFmpeg({ log: false });

export default {
  inject: ['$wm', '$cnf', '$fs'],
  ...props({
    filePath: props.obj(null),
    wmId: props.any(),
  }),
  mounted() {
    this.fetchMediaFile();
  },
  data() {
    return {
      src: null,
      currentFile: this.filePath,
      loading: false,
      images: [],
      imageHasListener: false,
      PlayNormal,
      PlayIdle,
      PlayHover,
      PlayMuted,
      Pause,
      volume: 1,
      fullScreen: false,
      media: {},
      currentTime: 0,
      playing: false,
      seeking: false,
      duration: 1800,
      coverImage: null,
      lastVolume: null,
      formattedCurrentTime: '00:00',
      repeat: true,
      shuffle: false,
    };
  },
  async created() {
    if (this.filePath) {
      this.loading = true;
      try {
        this.data = await this.$fs.fetchTextFile(this.filePath);
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  },
  methods: {
    onEnd() {

    },
    async fetchMediaFile() {
      if (true) {
        this.loading = true;
        this.src = null;
        try {
          const path = await escapeShortcut(this.currentFile);
          //todo check weather file can be opened
          const buffer = await fetchFile(path, { encode: 'unit8array' });
          const video = this.$refs.audio;
          video.src = URL.createObjectURL(new Blob([buffer],));

          this.initMedia();

          this.getMetaData(buffer);

          try {
            await video.play();
          } catch (e) {
            console.error(e);
          }
        } catch (e) {
        } finally {
          this.loading = false;
        }
      }
    },
    initMedia() {
      this.media = this.$refs.audio;
      this.volume = this.media.volume;

      const updateProgress = () => {
        if (!this.seeking) {
          this.$refs.progress.value = this.media.currentTime;
        }
        this.formattedCurrentTime = formatSeconds(this.media.currentTime);
      };
      this.media.ontimeupdate = debounce(updateProgress, 500, { maxWait: 500 });
      this.media.addEventListener('play', (val1, val2) => {
        this.playing = true;
      });
      this.media.addEventListener('pause', () => {
        this.playing = false;
      });

      this.$refs.audio.onended = () =>{
        this.media.currentTime = 0;
        if (this.repeat) {
          this.media.play();
        }
      }

      this.media.addEventListener('durationchange', () => {
        this.duration = this.$refs.audio.duration;
      });
    },
    seekTo(event) {
      const time = +event.target.value;
      if (this.media.seekable) {
        this.media.currentTime = time;
      } else {
        console.error('cannot seek');
      }
    },

    togglePlayPause() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    async getMetaData(buffer) {
      const data = await metaDataParseBuffer(new Uint8Array(buffer));
      const common = data.common || {};
      const pictures = common.picture || [];
      if (pictures[0]) {

        const cover = pictures[0];
        this.coverImage = URL.createObjectURL(new Blob([cover.data],));
      }
    },
    onVolumeChange($event) {
      this.$refs.audio.volume = +$event.target.value;
      this.volume = this.$refs.audio.volume;
    },
    onVolumeWheelMove(e) {
      e.preventDefault();
      const vol = this.$refs.audio.volume;
      let newVal = this.$refs.audio.volume;
      if (e.deltaY < 0) {
        //go up
        newVal = vol + .1;
      } else if (e.deltaY > 0) {
        //go down
        newVal = vol - .1;
      }
      if (newVal > 1) {
        newVal = 1;
      } else if (newVal < 0) {
        newVal = 0;
      }
      this.$refs.audio.volume = newVal;
      this.volume = this.$refs.audio.volume;
    },
    toggleMute() {
      const media = this.$refs.audio;
      if (this.lastVolume === null) {
        this.lastVolume = 1;
      }
      if (media.volume !== 0) {
        this.lastVolume = media.volume;
      }
      media.volume = media.volume > 0 ? 0 : this.lastVolume;
      this.volume = media.volume;
    }
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
  computed: {
    durationSeconds() {
      return this.media.duration;
    },
    mediaPlayerStyle() {
      return {
        backgroundImage: `url("${WallPaper}")`,
        '--play-hover': `url("${PlayHover}")`,
        '--play-click': `url("${PlayNormal}")`,
        '--play-idle': `url("${PlayIdle}")`,
      };
    }
  }
};
</script>
<style lang="scss">
.MediaPlayer {
  position: relative;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .media-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 300px;

    .coverImage {
      max-width: 100%;
      max-height: 100%;
      min-width: 300px;
      min-height: 300px;
    }

    video {
      display: none;
      background: red;
      width: 100%;
    }
  }

  &:hover {
    .controls, .shadow-controls {
      opacity: 1;
    }
  }

  .controls {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;

    transition: opacity ease-in 360ms;
    opacity: 0;

    display: flex;
    justify-content: center;

    .rounded-left, .rounded-right {
      display: flex;
      align-items: center;
      height: 24px;
      margin-top: 2px;
    }

    .rounded {
      margin: 0 12px;
      background: rgba(white, .15);
      border-radius: 32px;
      height: 36px;
      display: flex;

      min-width: 320px;

      display: flex;
      justify-content: center;

      .left {
        padding: 0 12px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          fill: white;
        }

        .shuffle,.repeat,.stop{
          padding: 4px;
          background: transparent;
          transition: background ease-in 360ms;
        }

        .shuffle {
          transform: rotate(-90deg);

          svg {
            width: 20px;
            height: 20px;
            transform: scaleY(1.2);
          }

          &.active{
            background: radial-gradient(circle,
              rgba(255,255,255,0.5212270329507549) 0%,
              rgba(0, 115, 203, 0.51) 32%,
              rgba(255,255,255,0) 70%);
          }
        }

        .stop{
          svg{
            margin-top: 4px;
          }
        }

        .repeat {
          svg {
            margin-top: 4px;
            width: 20px;
            height: 20px;
          }
          &.active{
            background: radial-gradient(circle,
              rgba(255,255,255,0.5212270329507549) 0%,
              rgba(0, 115, 203, 0.51) 22%,
              rgba(255,255,255,0) 70%);
          }
        }
      }

      .center {
        display: flex;
        align-items: center;
        justify-content: center;

        .previous, .next {
          display: flex;
          align-items: center;
          padding: 0 18px;

          svg {
            fill: white;
          }
        }

        .play {
          .image {
            clip-path: circle(40% at 50% 50%);
            width: 54px;
            height: 54px;
            background-image: var(--play-idle);
            position: relative;

            img {
              width: 54px;
              height: 54px;
              position: absolute;
              transition: opacity ease-in 100ms;
            }

            &:hover {
              .idle {
                opacity: 0.01;
              }

              .hover {
                opacity: 1;
              }
            }

            &:active {
              .idle {
                opacity: 0.01;
              }

              .active {
                opacity: 1;
              }
            }

            .hover {
              opacity: .01;
            }

            .active {
              opacity: .01;
            }
          }
        }

        .previous {
          margin-right: -6px;
          border-top-left-radius: 32px;
          border-bottom-left-radius: 32px;

          border: 1px solid rgba(white, .2);
          border-right: 0;

          &:hover {
            background: linear-gradient(270deg,
              rgba(white, 0) 0%,
              rgba(white, .1) 10%,
              rgba(white, .2) 100%
            );
          }
        }

        .next {
          margin-left: -6px;
          border-top-right-radius: 32px;
          border-bottom-right-radius: 32px;

          border: 1px solid rgba(white, .2);
          border-left: 0;

          &:hover {
            background: linear-gradient(90deg,
              rgba(white, 0) 0%,
              rgba(white, .1) 10%,
              rgba(white, .2) 100%
            );
          }
        }
      }

      .right {
        width: 120px;
        padding: 0 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .volume {
          margin-right: 12px;
          display: flex;
          min-width: 24px;

          svg {
            fill: white;
            width: 18px;
            height: 18px;
          }
        }

        .volume-range {
          width: 70px;
        }
      }
    }

    .rounded-right {
      display: flex;
      justify-content: end;
      margin-left: 12px;

      svg {
        fill: white;
      }
    }
  }

  .progress {
    position: absolute;
    bottom: 54px;
    left: 0;
    right: 0;
    padding: 4px 16px;

    input {
      width: 100%;
    }
  }

  .shadow-controls {
    transition: opacity ease-in 360ms;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(0,
      rgba(black, .95) 0%,
      rgba(black, 0) 100%
    );
  }
}
</style>
