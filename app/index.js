import { Store } from 'cx/data';
import { History, startHotAppLoop, enableCultureSensitiveFormatting } from 'cx/ui';
import { enableTooltips, Icon } from 'cx/widgets';
import { Debug } from 'cx/util';
import Routes from './routes';
import { enableMaterialLabelPlacement } from 'cx-theme-material';

import './index.scss';

Icon.unregister('menu');

enableMaterialLabelPlacement();
enableCultureSensitiveFormatting();
enableTooltips();

//store will hold the application state
const store = new Store();

//setup client-side routing
History.connect(store, 'url');

//dump app state in the console
Debug.enable('app-data');

//start the application with hot module reloading
startHotAppLoop(module, document.getElementById('app'), store, Routes);

// service worker
if (location.protocol == 'https:' && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js');

    if (navigator.serviceWorker.controller)
        navigator.serviceWorker.controller.addEventListener('statechange', e => {
            if (e.target.state == 'redundant') History.reloadOnNextChange();
        });
}
