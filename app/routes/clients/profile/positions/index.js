import { createFunctionalComponent } from 'cx/ui';
import { PureContainer } from 'cx/widgets';
import getController from './Controller';
import { PositionsTable } from './positions-table';
import { PositionsStructure } from './positions-structure';

export const Positions = createFunctionalComponent(() => {
    return (
        <cx>
            <PureContainer controller={getController()}>
                <PositionsStructure positionsData-bind="positionsData" />
                <PositionsTable positionsData-bind="positionsData" />
            </PureContainer>
        </cx>
    );
});
