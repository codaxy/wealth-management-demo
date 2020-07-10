import { HtmlElement, PureContainer } from 'cx/widgets';

import Selection from './selection';
import Profile from './profile';

export default (
    <cx>
        <div putInto="module-name">Clients</div>
        <PureContainer visible-expr="{$route.clientId} == null">
            <Selection />
        </PureContainer>
        <PureContainer visible-expr="{$route.clientId} != null">
            <Profile />
        </PureContainer>
    </cx>
);
