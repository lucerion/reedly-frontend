import { AppContext } from '../contexts';

const AppConsumer = ({ children }) => (
  <AppContext.Consumer>
    {children}
  </AppContext.Consumer>
);

export default AppConsumer;
