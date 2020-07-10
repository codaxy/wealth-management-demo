import { bind, createFunctionalComponent, Restate } from 'cx/ui';
import { Grid, LookupField } from 'cx/widgets';
import { positionsColumns } from './columns';
import { HScrollable } from '../../../../../components/HScrollable';

export const PositionsTable = createFunctionalComponent(({ positionsData, className }) => {
    return (
        <cx>
            <Restate data={{ positionsData }}>
                <div class="underline toolbar flex-row white" style="flex-shrink: 0">
                    <div class="subtitle">Positions</div>
                    <LookupField
                        mod="toolbar"
                        value={bind('groupBy', 'assetType')}
                        hideClear
                        label="Group by"
                        style="width: 150px; margin-left: auto"
                        options={[
                            { id: 'assetType', text: 'Asset allocation' },
                            { id: 'pcomp_currency', text: 'Currency' },
                            { id: 'region', text: 'Region' },
                            { id: 'sector', text: 'Sector' },
                        ]}
                    />
                </div>
                <HScrollable class="shrink-0">
                    <Grid
                        records-bind="positionsData"
                        cached
                        //class="flex-1"
                        border={false}
                        showBorder={false}
                        mod={['sticky', 'nowrap']}
                        //scrollable
                        columns={positionsColumns}
                        groupingParams-bind="groupBy"
                        onGetGrouping={getGrouping}
                    />
                </HScrollable>
            </Restate>
        </cx>
    );
});

function getGrouping(groupingKey) {
    return [
        {
            key: {
                keyConf: {
                    value: { bind: `$record.${groupingKey}` },
                    direction: 'ASC',
                },
            },
            caption: bind(`$group.keyConf`),
        },
    ];
}
