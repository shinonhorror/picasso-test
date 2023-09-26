import { withRouter } from './withRouter';
import { withStyles } from './withStyles';
import { withStore } from './withStore';
import compose from '../../shared/utils/compose';

export const withProviders = compose(withRouter, withStore, withStyles);
