import { createFunctionalComponent, Restate } from 'cx/ui';
import { StructurePie } from './StructurePie';

export const PositionsStructure = createFunctionalComponent(({ positionsData, className }) => {
    return (
        <cx>
            <Restate data={{ positionsData }}>
                <div class="underline toolbar flex-row white shrink-0">
                    <div class="subtitle">Structure Analysis</div>
                </div>
                {/* <div class='flex-row'>
                    <span text='Asset allocation' class='chart_title' />
                    <span text='Sector' class='chart_title' />
                    <span text='Region' class='chart_title' />
                    <span text='Currency' class='chart_title' />
                </div> */}
                <section class="section overflow-x-auto shrink-0">
                    <div class="flex-row structure_charts section white shrink-0">
                        <StructurePie chartData-bind="positionsData" chartType="assetType" />
                        <StructurePie chartData-bind="positionsData" chartType="sector" />
                        <StructurePie chartData-bind="positionsData" chartType="region" />
                        <StructurePie chartData-bind="positionsData" chartType="pcomp_currency" />
                    </div>
                </section>
            </Restate>
        </cx>
    );
});
