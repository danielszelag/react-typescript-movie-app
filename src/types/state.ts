import { IAppState } from '../store/reducers/appSlice/appSlice';
import { ICommonState } from '../store/reducers/commonSlice/commonSlice';

interface IState {
  app: IAppState;
  common: ICommonState;
}

export default IState;
