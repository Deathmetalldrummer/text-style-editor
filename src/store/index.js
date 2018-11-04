import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {};
const actions = {};
const getters = {};


// default
const default_font = {
  fontSize: {
    min: 0,
    current: 18,
    max: 36
  },
  px: {
    list: ['px', '%', 'rem', 'em', 'pt'],
    value: 'px'
  },
  fontFamily: {
    options: ['Roboto', 'Song Myung', 'Open Sans', 'Lato', 'Montserrat'],
    value: 'Roboto'
  },
  fontWeight: 'bold',
  fontStyle: false,
  transform: 'none',
  textDecoration: [],
  color: {
    current: '#f00',
    predefineColors: [
      '#000'
    ]
  }
}
const default_interval = {
  line: {
    min: 0,
    current: 1,
    max: 20,
    px: {
      list: ['none', 'px'],
      value: 'none'
    }
  },
  letter: {
    min: 0,
    current: 1,
    max: 40
  },
  word: {
    min: 0,
    current: 1,
    max: 200
  }
};
const default_shadow = {
  disabled: true,
  x: {
    min: -100,
    current: 0,
    max: 100
  },
  y: {
    min: -100,
    current: 0,
    max: 100
  },
  blur: {
    min: 0,
    current: 0,
    max: 50
  },
  color: {
    current: '#000',
    predefineColors: []
  }
};
const default_position = {
  pos: 'justify'
};
const default_background = {
  upload: false,
  url: '',
  attachment: 'scroll',
  repeat: 'no-repeat',
  color: {
    current: '#fff',
    predefineColors: []
  },
  size: {
    value: 'auto',
    min: [0, 0],
    current: [100, 100],
    max: [200, 200]
  }
};
const default_transform = {
  origin: '',
  rotation: {
    preview: '',
    rotate: 0,
    rotate3d: '',
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    min: 0,
    max: 360
  },
  scaling: {
    preview: '',
    scale: 1,
    scale3d: '',
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    min: 0.1,
    max: 5
  },
  skewing: {
    preview: '',
    skew: 0,
    skewX: 0,
    skewY: 0,
    min: -180,
    max: 180
  },
  translation: {
    preview: '',
    translate: 0,
    translate3d: 0,
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    min: -100,
    max: 100
  },
  perspective: {
    preview: '',
    value: 0
  },
  matrix: {
    preview: '',
    matrix: 0,
    matrix3d: 0
  }
};
const default_style = {
  preview: {},
  font: _.cloneDeep(default_font),
  interval: _.cloneDeep(default_interval),
  position: _.cloneDeep(default_position),
  background: _.cloneDeep(default_background),
  transform: _.cloneDeep(default_transform),
  shadow: _.cloneDeep(default_shadow),
};


//getters
getters.get__font = state => id => _.cloneDeep(state.components[id].style.font);
getters.get__interval = state => id => _.cloneDeep(state.components[id].style.interval);
getters.get__shadow = state => id => _.cloneDeep(state.components[id].style.shadow);
getters.get__position = state => id => _.cloneDeep(state.components[id].style.position);
getters.get__background = state => id => _.cloneDeep(state.components[id].style.background);
getters.get__transform = state => id => _.cloneDeep(state.components[id].style.transform);
getters.get__style = state => id => _.cloneDeep(state.components[id].style);
getters.get__listComponents = state => _.cloneDeep(state.components);

//mutation
mutations.set__font = (state, data) => {
  state.components[data.id].style.font = data.value;
}
mutations.set__interval = (state, data) => {
  state.components[data.id].style.interval = data.value;
}
mutations.set__shadow = (state, data) => {
  state.components[data.id].style.shadow = data.value;
}
mutations.set__position = (state, data) => {
  state.components[data.id].style.position = data.value;
}
mutations.set__background = (state, data) => {
  state.components[data.id].style.background = data.value;
}
mutations.set__transform = (state, data) => {
  state.components[data.id].style.transform = data.value;
}
mutations.set__style_preview = (state, data) => {
  state.components[data.id].style.preview = data.value;
}
mutations.set__style_position = (state, data) => {
  state.components[data.id].position.pos = data.value;
}
mutations.set__style = (state, data) => {
  state.components[data.id].style_preview = _.cloneDeep(state.components[data.id].style.preview)
}

//action
actions.font = (state, data) => {
  state.commit('set__font', data);
}
actions.interval = (state, data) => {
  state.commit('set__interval', data);
}
actions.shadow = (state, data) => {
  state.commit('set__shadow', data);
}
actions.position = (state, data) => {
  state.commit('set__position', data);
}
actions.background = (state, data) => {
  state.commit('set__background', data);
}
actions.transform = (state, data) => {
  state.commit('set__transform', data);
}
actions.style = (state, data) => {
  state.commit('set__style', data);
}


const store = new Vuex.Store({
  modules: {

  },
  current_component: {

  },
  state: {
    components: [{
      name: 'component1',
      dialogVisible: false,
      position: {
        offset: [10, 0, 0, 20],
        pos: 2 // из 9
        /*[1,2,3]
         * [4,5,6]
         * [7,8,9]
         * */
      },
      style: _.cloneDeep(default_style),
      style_preview: {}
    },{
      name: 'component2',
      dialogVisible: false,
      position: {
        offset: [10, 0, 0, 20],
        pos: 2 // из 9
        /*[1,2,3]
         * [4,5,6]
         * [7,8,9]
         * */
      },
      style: _.clone(default_style, true),
      style_preview: {}
    }]
  },
  mutations,
  getters,
  actions
});

export default store;
