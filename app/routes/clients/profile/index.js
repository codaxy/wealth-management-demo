import Controller from './Controller';
import { Link, Tab, PureContainer, Scroller } from 'cx/widgets';
import { ClientPerformance } from './performance';
import { Positions } from './positions';
import Profile from './profile';
import Security from './security';

export default (
    <cx>
        <PureContainer controller={Controller}>
            <Link putInto="headernav" class="clientheader" href="~/clients">
                <div class="clientheader_module">Client Profile</div>
                <div text-bind="$page.profile.name" class="clientheader_name" />
            </Link>
            <div class="toolbar underline justify-center">
                <Scroller mod="center">
                    <Tab mod="line" value-bind="$page.tab" tab="performance" default>
                        Performance
                    </Tab>
                    <Tab mod="line" value-bind="$page.tab" tab="positions">
                        Positions
                    </Tab>
                    <Tab mod="line" value-bind="$page.tab" tab="profile">
                        Profile
                    </Tab>
                    <Tab mod="line" value-bind="$page.tab" tab="security">
                        Security
                    </Tab>
                </Scroller>
            </div>

            <PureContainer visible-expr="{$page.tab} == 'profile'">
                <div class="flex-col overflow-y-auto flex-1">
                    <Profile />
                </div>
            </PureContainer>
            <PureContainer visible-expr="{$page.tab} == 'performance'">
                <div class="flex-col overflow-y-auto flex-1">
                    <ClientPerformance />
                </div>
            </PureContainer>
            <PureContainer visible-expr="{$page.tab} == 'positions'">
                <div class="flex-col overflow-y-auto flex-1">
                    <Positions />
                </div>
            </PureContainer>
            <PureContainer visible-expr="{$page.tab} == 'security'">
                <Security />
            </PureContainer>
        </PureContainer>
    </cx>
);
