import { useRouter } from 'next/router';

const routeReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_ROUTE':
        return action.route;
      default:
        return state;
    }
  };

const useCustomRouter = () => {
  const router = useRouter();
  const route = useSelector((state) => state.route);

  const handleRouteChange = () => {
    store.dispatch({ type: 'SET_ROUTE', route: router.asPath });
  };

  router.events.on('routeChangeStart', handleRouteChange);

  return {
    router,
    handleRouteChange,
  };
};

export default useCustomRouter;