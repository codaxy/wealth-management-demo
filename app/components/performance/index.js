import {
    Chart,
    Column,
    Gridlines,
    LegendEntry,
    LineGraph,
    Marker,
    MarkerLine,
    MouseTracker,
    NumericAxis,
    SnapPointFinder,
    TimeAxis,
} from 'cx/charts';
import { ClipRect, Svg } from 'cx/svg';
import { computable, createFunctionalComponent, Repeater, tpl } from 'cx/ui';
import { Restate } from 'cx/widgets';
import getController from './Controller';

export const PerformanceGraph = createFunctionalComponent(({ records, view, period }) => {
    return (
        <cx>
            <Restate data={{ records, view, period }} controller={getController()}>
                <Svg class="full-width full-height" style="position: absolute; min-width: 500px">
                    <Chart
                        offset="20 -10 -40 60"
                        axes={{
                            x: { type: TimeAxis, snapToTicks: false },
                            y: { type: NumericAxis, vertical: true, format: 'p;1' },
                        }}
                    >
                        <MouseTracker
                            x-bind="cursor.x"
                            tooltip={{
                                placement: 'up',
                                mod: 'glass',
                                items: (
                                    <cx>
                                        <div
                                            text={tpl('{cursor.snapX:datetime;DDD, MMM dd, YYYY}')}
                                            class="graphtooltip_header"
                                        />
                                        <LegendEntry
                                            colorIndex={8}
                                            class="block"
                                            items={
                                                <cx>
                                                    <span
                                                        class="graphtooltip_label"
                                                        text-tpl="Cum. Return: "
                                                    />
                                                    <span
                                                        mod={computable('cursor.data', record => {
                                                            if (!record) return;
                                                            return record.y1 === 0
                                                                ? null
                                                                : record.y1 < 0
                                                                ? 'negative-value'
                                                                : 'positive-value';
                                                        })}
                                                        text-tpl="{cursor.data.y1:p;0;2|-}"
                                                    />
                                                </cx>
                                            }
                                            size={8}
                                            shape="line"
                                        />
                                        <LegendEntry
                                            colorIndex={8}
                                            class="block"
                                            items={
                                                <cx>
                                                    <span
                                                        text-tpl="Abs. Return: "
                                                        class="graphtooltip_label"
                                                    />
                                                    <span
                                                        mod={computable(
                                                            'cursor.data',
                                                            'cursor',
                                                            'cursor.snapX',
                                                            record => {
                                                                if (!record) return;
                                                                return record.h === 0
                                                                    ? null
                                                                    : record.h < 0
                                                                    ? 'negative-value'
                                                                    : 'positive-value';
                                                            },
                                                        )}
                                                        text-tpl="{cursor.data.h:p;0;2|-}"
                                                    />
                                                </cx>
                                            }
                                            size={8}
                                            shape="bar"
                                        />
                                    </cx>
                                ),
                                trackMouse: true,
                            }}
                        >
                            <Gridlines />
                            <SnapPointFinder
                                cursorX-bind="cursor.x"
                                snapX-bind="cursor.snapX"
                                maxDistance={null}
                            >
                                <LineGraph
                                    area
                                    name="Line 1"
                                    areaStyle="opacity: 0.1"
                                    data-bind="performanceGraphData"
                                    yField="y1"
                                />
                                <Marker
                                    colorIndex={0}
                                    x-bind="cursor.snapX"
                                    y-bind="cursor.data.y1"
                                    size={3}
                                />

                                <MarkerLine x-bind="cursor.snapX" style="stroke: rgba(0, 0, 0, 0.2)" />
                                <ClipRect>
                                    <Repeater records-bind="performanceGraphData">
                                        <Column
                                            width={3 * 24 * 60 * 60 * 1000}
                                            x-bind="$record.x"
                                            y-bind="$record.h"
                                            // tooltip={{
                                            //     placement: 'up',
                                            //     items: <cx>
                                            //         <span
                                            //             text={tpl("{$record.x:datetime;DDD, MMM dd, YYYY}")}
                                            //             class="cxe-graph-tooltip-header"
                                            //         />
                                            //         <div
                                            //             text-tpl='Abs. Return: {$record.h:p;0;2|-}'
                                            //             style='line-height: 2;'
                                            //             class="text-align-right"
                                            //         />
                                            //     </cx>
                                            // }}
                                            colorIndex-expr="{$record.h} > 0 ? 8 : 0"
                                        />
                                    </Repeater>
                                </ClipRect>
                            </SnapPointFinder>
                        </MouseTracker>
                    </Chart>
                </Svg>
            </Restate>
        </cx>
    );
});
