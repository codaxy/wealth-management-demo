import {
    createFunctionalComponent,
    LabelsTopLayout,
    Repeater,
    Restate,
    UseParentLayout,
    bind,
    computable,
    Format,
} from 'cx/ui';
import { NumberField, PureContainer } from 'cx/widgets';
import getController from './Controller';

export const KPIs = createFunctionalComponent(({ period, clientId }) => {
    return (
        <cx>
            <Restate data={{ period, clientId }} controller={getController()}>
                <div class="flex-row flex-wrap">
                    <Repeater records-bind="performanceReportingData" layout={UseParentLayout}>
                        <div class="kpi">
                            <div class="kpi_value" text-tpl="{$record.value:n;2|-}" />
                            <div class="kpi_label" text-bind="$record.label" />
                        </div>
                    </Repeater>
                </div>
            </Restate>
        </cx>
    );
});
