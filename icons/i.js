import names from './collection.js';

/**
 * 
 * @param {keyof typeof names} name 
 * @returns 
 */
export function i(name) {
  return /*html*/ `<span icon class="material-symbols-outlined">${name}</span>`;
};