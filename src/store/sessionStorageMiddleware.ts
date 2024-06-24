import { Middleware } from '@reduxjs/toolkit';
// import { RootState } from './store';

const sessionStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState();
    sessionStorage.setItem('reduxState', JSON.stringify(state));
    return result;
  };
  
  export default sessionStorageMiddleware;