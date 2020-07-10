import {PureContainer, Route, Sandbox} from 'cx/widgets';
import AppLayout from '../layout';
import Clients from './clients';
import Default from './default';

export default (
  <cx>
    <PureContainer outerLayout={AppLayout}>
      <Sandbox key-bind="url" storage-bind="pages">
        <Route url-bind="url" route="~/">
          <Default />
        </Route>
        <Route url-bind="url" route="~/clients(/:clientId)">
          <Clients />
        </Route>
      </Sandbox>
    </PureContainer>
  </cx>
);
