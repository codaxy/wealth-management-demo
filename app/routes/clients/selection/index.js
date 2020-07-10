import { Link, TextField, Grid, Button } from 'cx/widgets';
import data from '../data';

export default (
    <cx>
        <Link putInto="headernav" class="clientheader" href="~/clients">
            <div class="clientheader_module">Client Profile</div>
            <div text="Please select a client" class="clientheader_name" style="opacity: 0.5" />
        </Link>

        <div class="bordered toolbar flex-row" style="padding: 8px 16px">
            <TextField
                value-bind="$page.search"
                placeholder="Search..."
                style="max-width: 200px; flex-grow: 1; margin-right: 16px"
                mod="toolbar"
            />
            <Button mod={['primary']} icon="add" style="margin-left: auto">
                Add
            </Button>
        </div>

        <Grid
            records={data}
            class="white flex-1"
            border={false}
            showBorder={false}
            scrollable
            mod="nowrap"
            columns={[
                {
                    field: 'name',
                    header: 'Client',
                    style: 'min-width: 150px',
                    items: (
                        <cx>
                            <Link href-tpl="~/clients/{$record.id}" class="clientitem">
                                <span text-bind="$record.name" />
                            </Link>
                        </cx>
                    ),
                },
                {
                    field: 'city',
                    header: 'City',
                },
                {
                    field: 'country',
                    header: 'Country',
                },
                {
                    field: 'email',
                    header: 'Email',
                },
                {
                    field: 'phone',
                    header: 'Phone Number',
                },
            ]}
        />
    </cx>
);
