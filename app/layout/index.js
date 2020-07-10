import { HtmlElement, ContentPlaceholder, Icon, Link } from 'cx/widgets';

let toggleBan = 0;

export default (
    <cx>
        <div
            class="app"
            onClickCapture={(e, { store }) => {
                if (store.get('module.menu')) {
                    store.delete('module.menu');
                    toggleBan = Date.now() + 50;
                }
            }}
        >
            <header class="app_header">
                <div class="app_brand phone-hide">
                    <img class="logo" src="~/assets/img/WealthCo.png" />
                </div>
                <div class="app_module">
                    <div
                        class="app_modulebutton"
                        onClick={(e, { store }) => {
                            if (Date.now() < toggleBan) return;
                            store.toggle('module.menu');
                        }}
                    >
                        <div class="app_modulename">
                            <ContentPlaceholder name="module-name" />
                        </div>
                        <Icon name="drop-down" class="phone-hide" />
                        <Icon name="menu" class="phone-show" />
                    </div>
                    <div class="app_modulemenu" visible-bind="module.menu">
                        <Link class="module" url-bind="url" href="~/">
                            <Icon name="dashboard" />
                            <div class="module_name">Home</div>
                            <div class="module_desc">Personal dashboard of the asset manager.</div>
                        </Link>
                        <Link class="module" url-bind="url" href="~/clients" match="subroute">
                            <Icon name="show_chart" />
                            <div class="module_name">Clients</div>
                            <div class="module_desc">Client profile, portfolio performance, positions.</div>
                        </Link>
                    </div>
                </div>
                <ContentPlaceholder name="headernav" />
            </header>
            <ContentPlaceholder />
        </div>
    </cx>
);
