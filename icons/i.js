import names from './collection.js';

/**
 * 
 * @param {keyof names} name 
 * @returns 
 */
export function i(name) {
  return /*html*/ `<span icon class="material-symbols-outlined">${name}</span>`;
};