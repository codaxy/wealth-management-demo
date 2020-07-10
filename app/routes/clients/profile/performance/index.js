import { LookupField, PureContainer } from 'cx/widgets';
import { bind, createFunctionalComponent } from 'cx/ui';
import { PerformanceGraph } from '../../../../components/performance';
import { KPIs } from './kpis';

export const ClientPerformance = createFunctionalComponent(() => {
    return (
        <cx>
            <div class="bordered toolbar white">
                <div class="subtitle">Performance Indicators</div>
            </div>

            <div class="section">
                <KPIs period="ytd" />
            </div>

            <PureContainer
                controller={{
                    onInit() {
                        this.store.init('view', 'monthly');
                        this.store.init('period', 'ytd');
                    },
                }}
            >
                <div class="underline toolbar flex-row white" style="flex-shrink: 0">
                    <div class="subtitle multiline">Performance Chart</div>
                    <LookupField
                        mod="toolbar"
                        value={bind('period', 'ytd')}
                        hideClear
                        label="Period"
                        style="width: 100px; margin-left: auto"
                        options={[
                            { id: 'ytd', text: 'YTD' },
                            { id: 'oneYear', text: '1 year' },
                            { id: 'threeYears', text: '3 years' },
                        ]}
                        dropdownOptions={{
                            style: 'height: auto',
                        }}
                    />
                    <LookupField
                        mod="toolbar"
                        value={bind('view', 'monthly')}
                        hideClear
                        label="Data Frequency"
                        style="width: 150px"
                        options={[
                            { id: 'monthly', text: 'Monthly' },
                            { id: 'quarterly', text: 'Quarterly' },
                            { id: 'semiAnnually', text: 'Semiannually' },
                            { id: 'yearly', text: 'Yearly' },
                        ]}
                    />
                </div>
                <div
                    class="section flex-1 overflow-x-auto"
                    style="position: relative; min-height: 300px; max-height: 800px;"
                >
                    <PerformanceGraph period-bind="period" view-bind="view" />
                </div>
            </PureContainer>
        </cx>
    );
});
