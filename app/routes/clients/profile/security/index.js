import { Button, Grid } from 'cx/widgets';
import { computable } from 'cx/ui';

const data = [
    {
        priority: 0,
        rule: 'deny',
        who: 'All Users',
        role: null,
        geo: 'Anywhere',
        geoInclude: 'Whole world',
        geoExclude: '-',
    },
    {
        priority: 1,
        rule: 'allow',
        who: 'Management',
        role: 'Read Access',
        geoInclude: 'Switzerland',
        geoExclude: '-',
    },
    {
        priority: 10,
        rule: 'allow',
        who: 'Inv. Manager #1',
        role: 'Full Access',
        geoInclude: 'Whole world',
        geoExclude: 'Asia',
    },
];

export default (
    <cx>
        <div class="bordered toolbar flex-row white" style="padding: 4px">
            <div class="subtitle">Access Control List</div>
            <Button mod="hollow" icon="add" style="margin-left: auto">
                Add Rule
            </Button>
        </div>
        <Grid
            records={data}
            border={false}
            showBorder={false}
            mod="nowrap"
            scrollable
            class="white flex-1"
            sortField="priority"
            sortDirection="DESC"
            columns={[
                {
                    header: 'Priority',
                    field: 'priority',
                    sortable: true,
                    style: 'width: 50px; white-space: nowrap',
                    align: 'right',
                },
                {
                    header: 'Rule',
                    field: 'rule',
                    format: 'uppercase',
                    style: {
                        color: computable('$record.rule', rule => (rule == 'allow' ? 'green' : 'red')),
                    },
                },
                {
                    header: 'User/Group',
                    field: 'who',
                },
                {
                    header: 'Roles',
                    field: 'role',
                },
                {
                    header: 'Geo. Location',
                    field: 'geoInclude',
                },
                {
                    header: 'Excluding',
                    field: 'geoExclude',
                },
                {
                    style: 'width: 100px; white-space: nowrap',
                    header: '',
                    items: (
                        <cx>
                            <Button mod="hollow" icon="create" style="color: #aaa" />
                            <Button mod="hollow" icon="delete" style="color: #aaa" />
                        </cx>
                    ),
                },
            ]}
        />
    </cx>
);
