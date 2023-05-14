/*
 * @Description: 
 * @Author: Ran junlin
 * @Date: 2023-05-12 22:30:48
 * @LastEditTime: 2023-05-14 15:32:12
 * @LastEditors: Ran junlin
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); //全部引入icon
export { default as Button } from './components/Button';
export { default as Icon } from './components/Icon';
export { default as Menu } from './components/Menu';
export { default as Upload } from './components/Upload';

