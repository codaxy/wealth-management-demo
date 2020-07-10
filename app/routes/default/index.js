import { Rescope, Button, Repeater, LookupField, Link } from 'cx/widgets';
import Controller from './Controller';
import { enableCultureSensitiveFormatting, computable } from 'cx/ui';
enableCultureSensitiveFormatting();

export default (
    <cx>
        <div putInto="module-name">Home</div>
        <div putInto="headernav" class="clientheader">
            <div class="clientheader_name" style="margin-top: 10px">
                Client Appointments
            </div>
        </div>
        <Rescope bind="$page" controller={Controller}>
            <div class="underline toolbar flex-row align-center">
                <Button mod="hollow" icon="keyboard_arrow_left" onClick="onSelectPrevMonth" />
                <div
                    text-tpl="{month:datetime;MMMMYYYY}"
                    style="margin: 4px; width: 100px; text-align: center"
                />
                <Button mod="hollow" icon="keyboard_arrow_right" onClick="onSelectNextMonth" />
                <LookupField
                    style="margin-left: auto; width: 100px;"
                    value-bind="mode"
                    options={[{ id: 'month', text: 'Month' }]}
                    mod="toolbar"
                    label="View"
                    required
                />
            </div>
            <div class="section white flex-1 overflow-auto">
                <table className="calendarview">
                    <thead>
                        <tr>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                            <th>SUN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Repeater records-bind="weeks" cached>
                            <tr>
                                <Repeater records-bind="$record.days">
                                    <td
                                        //onClick="onSelectDay"
                                        className={{
                                            selected: { expr: '{$record.date}=={month}' },
                                            today: { expr: '{$record.date}=={today}' },
                                        }}
                                    >
                                        <div visible-expr="{$record.active}" style="text-align: center">
                                            <div className="date" text-bind="$record.day" />
                                        </div>
                                        <Repeater
                                            records={computable(
                                                'appointments',
                                                '$record.date',
                                                (all, date) => all[date],
                                            )}
                                            recordAlias="$apt"
                                        >
                                            <Link class="apt" href-tpl="~/clients/{$apt.clientId}">
                                                <span text-tpl="{$apt.time:datetime;HHmmN}" />
                                                <strong
                                                    text-tpl="{$apt.text}"
                                                    style="font-weight: 500; margin-left: 10px"
                                                />
                                            </Link>
                                        </Repeater>
                                    </td>
                                </Repeater>
                            </tr>
                        </Repeater>
                    </tbody>
                </table>
            </div>
        </Rescope>
    </cx>
);
