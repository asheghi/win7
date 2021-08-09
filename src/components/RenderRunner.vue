<script>
import { h } from 'vue';
import SoundPlayer from '../components/File.vue';

export default {
  props: {
    window:{},
  },
  computed: {
    module(){
      return this.window.fsData.runner;
    },
    file(){
      return this.window.fsData.file;
    }
  },
  render(){
    let m = {...this.module};
    return h(m,{
      file:this.file,
    });
  }
};
</script>
