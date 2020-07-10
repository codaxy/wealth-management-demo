import { ColorMap, Legend, PieChart, PieSlice } from 'cx/charts';
import { Svg } from 'cx/svg';
import { createFunctionalComponent, Repeater, Restate } from 'cx/ui';

export const StructurePie = createFunctionalComponent(({ chartData, chartType }) => {
    let controller = {
        onInit() {
            this.addComputable('calculateChartData', ['chartData'], chartData => {
                let calculatedData = chartData.reduce((acc, item) => {
                    let typeObject = acc.find(o => o.type == item[chartType]);

                    if (typeObject) typeObject.value += item.pcomp_value_w_ai_pf_currency;
                    else {
                        acc.push({
                            type: item[chartType],
                            value: item.pcomp_value_w_ai_pf_currency,
                        });
                    }
                    return acc;
                }, []);
                this.store.set('calculatedData', calculatedData);
            });
        },
    };
    return (
        <cx>
            <Restate data={{ chartData }} controller={controller}>
                <div class="flex-col flex-1 structure_chart" style="min-width: 200px; padding: 0 20px">
                    <span
                        text={
                            chartType == 'assetType'
                                ? 'Asset Allocation'
                                : chartType == 'region'
                                ? 'Region'
                                : chartType == 'sector'
                                ? 'Sector'
                                : 'Currency'
                        }
                        class="chart_title"
                    />
                    <div class="flex-row align-center justify-center">
                        <Legend.Scope>
                            <ColorMap.Scope>
                                <Svg style="width: 120px; height: 120px">
                                    <PieChart angle={360}>
                                        <ColorMap />
                                        <Repeater
                                            records-bind="calculatedData"
                                            sortField="value"
                                            sortDirection="DESC"
                                        >
                                            <PieSlice
                                                value-bind="$record.value"
                                                colorMap="pie"
                                                r={80}
                                                r0={50}
                                                offset={1}
                                                tooltip={{
                                                    items: (
                                                        <cx>
                                                            <span
                                                                class="opaque"
                                                                text-tpl="{$record.type}: "
                                                            />
                                                            <span text-tpl="{$record.value:n;2}" />
                                                        </cx>
                                                    ),
                                                    trackMouse: true,
                                                }}
                                                innerPointRadius={80}
                                                outerPointRadius={96}
                                                name-bind="$record.type"
                                            />
                                        </Repeater>
                                    </PieChart>
                                </Svg>
                                <Legend svgSize={10} mod="small" vertical />
                            </ColorMap.Scope>
                        </Legend.Scope>
                    </div>
                </div>
            </Restate>
        </cx>
    );
});
