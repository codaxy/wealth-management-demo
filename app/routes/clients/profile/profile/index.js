import { TextField, DateField } from 'cx/widgets';

export default (
    <cx>
        <div class="section flex-row flex-wrap shrink-0" style="position: relative">
            <div class="flex-1 white" style="min-width: 300px">
                <div class="bordered toolbar">
                    <div class="subtitle">Info</div>
                </div>
                <section class="padded section flex-col" style="position: relative">
                    <div class="profile-placeholder">
                        <img src="~/assets/img/picture_placeholder.svg" style="width: 150px; height: 150px" />
                    </div>

                    <TextField label="Title" value="Mister" viewMode />

                    <TextField label="Name" value-bind="$page.profile.name" viewMode />

                    <TextField label="Gender" value="Male" viewMode />

                    <DateField label="Date of Birth" value="1972-12-01" viewMode />

                    <TextField label="Nationality" value="Swiss" viewMode />

                    <TextField label="Second Nationality" value="-" viewMode />
                </section>
            </div>
            <div class="flex-1 white" style="min-width: 300px">
                <div class="bordered toolbar">
                    <div class="subtitle">Contact</div>
                </div>
                <div class="padded section flex-col">
                    <TextField label="Phone Number" value-tpl="{$page.profile.phone|-}" viewMode />

                    <TextField label="Mobile Phone Number" value="-" viewMode />

                    <TextField label="Email" value-tpl="{$page.profile.email|-}" viewMode />

                    <TextField label="Address" value="-" viewMode />

                    <TextField label="Second Nationality" value="-" viewMode />
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="subtitle">Categorization</div>
            <div class="padded section flex-col">
                <TextField label="Classification" value="Fixed Income" viewMode />

                <TextField label="Risk Profile" value="Low Risk" viewMode />

                <TextField
                    label="Knowledge & Experience"
                    value="Equities, Bonds"
                    viewMode
                    style="width: 400px"
                />

                <TextField label="Reporting Currency" value="EUR" viewMode />
            </div>
        </div>
        <div />
    </cx>
);
