<template>
    <div id="app">
        <v-app>
            <v-toolbar dark color="primary" class="mb-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">jaredduncan</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer
                    temporary
                    v-model="drawer"
                    absolute
            >
                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile v-for="item in items" :key="item.title" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>

            <v-container grid-list-md text-xs-center>
                <v-subheader>Grid system</v-subheader>

                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card dark color="primary">
                            <v-card-text class="px-0">12</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 v-for="i in 2" :key="`6${i}`">
                        <v-card dark color="secondary">
                            <v-card-text class="px-0">6</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4 v-for="i in 3" :key="`4${i}`">
                        <v-card dark color="primary">
                            <v-card-text class="px-0">4</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs3 v-for="i in 4" :key="`3${i}`">
                        <v-card dark color="secondary">
                            <v-card-text class="px-0">3</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs2 v-for="i in 6" :key="`2${i}`">
                        <v-card dark color="primary">
                            <v-card-text class="px-0">2</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1 v-for="i in 12" :key="`1${i}`">
                        <v-card dark color="secondary">
                            <v-card-text class="px-0">1</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-divider class="mt-5 mb-0"></v-divider>

                <v-subheader>Buttons</v-subheader>

                <div class="text-xs-center">
                    <v-btn fab dark small color="primary">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="pink">
                        <v-icon dark>favorite</v-icon>
                    </v-btn>
                    <v-btn fab dark color="indigo">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="teal">
                        <v-icon>list</v-icon>
                    </v-btn>
                    <v-btn fab large color="cyan">
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn dark large color="purple">
                        <v-icon>android</v-icon>
                    </v-btn>
                </div>

                <v-divider class="mt-3 mb-0"></v-divider>
                <v-subheader>Chips</v-subheader>

                <div class="text-xs-center">
                    <v-chip color="indigo" text-color="white">
                        <v-avatar>
                            <v-icon>account_circle</v-icon>
                        </v-avatar>
                        Ranee
                    </v-chip>

                    <v-chip color="orange" text-color="white">
                        Premium
                        <v-icon right>star</v-icon>
                    </v-chip>

                    <v-chip color="primary" text-color="white">
                        1 Year
                        <v-icon right>cake</v-icon>
                    </v-chip>

                    <v-chip color="green" text-color="white">
                        <v-avatar class="green darken-4">1</v-avatar>
                        Years
                    </v-chip>

                    <v-chip close color="teal" text-color="white">
                        <v-avatar>
                            <v-icon>check_circle</v-icon>
                        </v-avatar>
                        Confirmed
                    </v-chip>
                </div>

                <v-divider class="mt-4 mb-1"></v-divider>
                <v-subheader class="mb-3">Forms & Form Elements</v-subheader>

                <v-container>
                <v-form v-model="valid" ref="form" lazy-validation style="mx-5">
                    <v-text-field
                            label="Name"
                            v-model="name"
                            :rules="nameRules"
                            :counter="10"
                            required
                    ></v-text-field>
                    <v-text-field
                            label="E-mail"
                            v-model="email"
                            :rules="emailRules"
                            required
                    ></v-text-field>
                    <v-select
                            label="Item"
                            v-model="select"
                            :items="formItems"
                            :rules="[v => !!v || 'Item is required']"
                            required
                    ></v-select>
                    <v-checkbox
                            label="Do you agree?"
                            v-model="checkbox"
                            :rules="[v => !!v || 'You must agree to continue!']"
                            required
                    ></v-checkbox>

                    <v-btn
                            @click="submit"
                            :disabled="!valid"
                    >
                        submit
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
                </v-container>

                <v-divider class="mt-4 mb-1"></v-divider>
                <v-subheader class="mb-3">Data Iterators</v-subheader>

                <v-container fluid grid-list-md>
                    <v-data-iterator
                            content-tag="v-layout"
                            row
                            wrap
                            :items="dataIteratorItems"
                            :rows-per-page-items="rowsPerPageItems"
                            :pagination.sync="pagination"
                    >
                        <v-flex
                                slot="item"
                                slot-scope="props"
                                xs12
                                sm6
                                md4
                                lg3
                        >
                            <v-card>
                                <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                                <v-divider></v-divider>
                                <v-list dense>
                                    <v-list-tile>
                                        <v-list-tile-content>Calories:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Fat:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Carbs:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Protein:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Sodium:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Calcium:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Iron:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-data-iterator>
                </v-container>

                <v-divider class="mt-4 mb-1"></v-divider>
                <v-subheader class="mb-3">Data Tables</v-subheader>

                <v-data-table
                        :headers="headers"
                        :items="dataTableItems"
                        hide-actions
                        class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.calories }}</td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                </v-data-table>

                <v-divider class="mt-5 mb-1"></v-divider>
                <v-subheader class="mb-3">Footer</v-subheader>

                <v-footer height="auto" class="grey darken-3">
                    <v-layout row wrap justify-center>
                        <v-btn
                                color="white"
                                flat
                                v-for="link in links"
                                :key="link"
                        >
                            {{ link }}
                        </v-btn>
                        <v-flex xs12 py-3 text-xs-center white--text>
                            &copy;2018 — <strong>Vuetify</strong>
                        </v-flex>
                    </v-layout>
                </v-footer>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                select: null,
                formItems: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4'
                ],
                checkbox: false,

                rowsPerPageItems: [4, 8, 12],
                pagination: {
                    rowsPerPage: 4
                },
                dataIteratorItems: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: '8%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    sodium: 337,
                    calcium: '6%',
                    iron: '7%'
                },
                {
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    sodium: 413,
                    calcium: '3%',
                    iron: '8%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    sodium: 327,
                    calcium: '7%',
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    sodium: 50,
                    calcium: '0%',
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    sodium: 38,
                    calcium: '0%',
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    sodium: 562,
                    calcium: '0%',
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    sodium: 326,
                    calcium: '2%',
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    sodium: 54,
                    calcium: '12%',
                    iron: '6%'
                }],
                    headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' }
                ],
                dataTableItems: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%'
                },
                {
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                }],

                links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
            } // end return obj
        }, // end data() fn

        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,
                        select: this.select,
                        checkbox: this.checkbox
                    })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }

    } // export default obj
</script>
