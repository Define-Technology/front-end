import ChartBlock from './components/ChartBlock';

/**
 * Adds two numbers together.
 * @param {object} Vue The object Vue.
 */
function plugins(Vue) {
  Vue.component('ChartBlock', ChartBlock);
}
export default plugins;
