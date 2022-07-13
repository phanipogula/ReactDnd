import Store from 'beedle';
import { get, post } from './requests';

let _saveUrl;
let _onPost;
let _onLoad;
let _data = [];

const store = new Store({
  actions: {
    saveForm(context,{issave,formName})
    {
      this.save(_data,issave,formName);
    },

    setData(context, data, saveData) {
      debugger
      context.commit('setData', data);
      if (saveData) this.save(data,false,'');
    },

    load(context, { loadUrl, saveUrl, data }) {
      debugger
      _saveUrl = saveUrl;
      if (_onLoad) {
        _onLoad().then(x => {
          if (data && data.length > 0 && x.length === 0) {
            data.forEach(y => x.push(y));
          }
          this.setData(context, x);
        });
      } else if (loadUrl) {
        get(loadUrl).then(x => {
          if (data && data.length > 0 && x.length === 0) {
            data.forEach(y => x.push(y));
          }
          this.setData(context, x);
        });
      } else {
        this.setData(context, data);
      }
    },

    create(context, element) {
      debugger
      const { data } = context.state;
      data.push(element);
      this.setData(context, data, true);
    },

    delete(context, element) {
      debugger
      const { data } = context.state;
      data.splice(data.indexOf(element), 1);
      this.setData(context, data, true);
    },

    updateOrder(context, elements) {
      debugger
      const newData = elements.filter(x => x && !x.parentId);
      elements.filter(x => x && x.parentId).forEach(x => newData.push(x));
      // console.log('setAsChild', newData);
      this.setData(context, newData, true);
    },

    save(data,issave,formName) {
      debugger
      if (_onPost) {
        _onPost({ task_data: data });
      } else if (_saveUrl) {
        // debugger
        // this.setState({data:data});
        //var formatedurl = _saveUrl + "?formName=" + formName;
        _data = data;
        post(_saveUrl, { task_data: data,form_name:formName},issave);
      }
    },
  },

  mutations: {
    setData(state, payload) {
      debugger
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
      return state;
    },
  },

  initialState: {
    data: [],
  },
  // state : {
  //   data: [],
  //   answer_data: {},
  // },
});

store.setExternalHandler = (onLoad, onPost) => {
  debugger
  _onLoad = onLoad;
  _onPost = onPost;
};

export default store;
