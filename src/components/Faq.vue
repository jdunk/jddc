<template>
    <v-container
        id="faq"
        fluid
        class="pattern-bg"
        py-5
        :px-0="$vuetify.breakpoint.xs"
    >
        <Section-header>Let me answer all your questions...</Section-header>
        <v-container
            :fluid="$vuetify.breakpoint.xs"
            class="mt-4"
            :class="$vuetify.breakpoint.xs ? 'px-2' : 'px-3'"
        >
            <v-layout>
                <v-flex
                    xs12
                    sm10
                    offset-sm1
                    md8
                    offset-md2
                    xl6
                    offset-xl3
                    :px-5="$vuetify.breakpoint.xl"
                >
                    <v-expansion-panel
                        expand
                        class="elevation-6"
                    >
                        <Faq-item>
                            <template slot="question">
                                What have you been up to lately?
                            </template>
                            <template slot="answer">
                                <div class="p">
                                    Quite a bit, actually. The overarching theme of my latest projects is “expanding and
                                    strengthening my skill set,” particularly the most interesting, fun, and useful skills
                                    which
                                    will pay dividends for years to come. Thus, I now have a much more solid proficiency with
                                    Vue, Vuetify, Webpack, ES6, Jest, and Chrome Extension authoring.
                                    I’ve learned how to create
                                    custom Amazon Alexa skills (using AWS Lambda) and beautiful &amp; fast charts with
                                    ChartJS. I'm now checking out TensorFlow and GraphQL, and I'm using Node a lot more.
                                </div>

                                <div class="p">
                                    In January, I devoured Investopedia in a week and taught myself everything one needs
                                    to know to be a proficient day-trader (and
                                    <a href="https://github.com/jdunk/trading-bot" target="_blank">built a Laravel app to
                                    automate cryptocurrency day-trading</a> on Binance).
                                </div>

                                <div class="p">
                                    I’ve kept abreast of the latest versions of PHP and Laravel. I’ve attended Laravel
                                    meetups in San Francisco (where I once spoke directly with Taylor Otwell)...<br>

                                    <div class="img-center">
                                        <a href="https://youtu.be/DuImStVSxEo?t=56m40s" target="_blank">
                                            <img :src="require('@/assets/img/taylor-youtube-screenshot.png')"/>
                                        </a>
                                    </div>
                                </div>

                                <div class="p">
                                    ...and I’ve even presented at one in Manila:
                                    <div class="img-center">
                                        <img :src="require('@/assets/img/clean-n-clear-code-video-screenshot.png')"/>
                                    </div>
                                </div>

                                <div class="p">
                                    And last but certainly not least, I’ve been able to accomplish all of this within the
                                    last few months by caring deeply about my <strong>personal health:</strong>
                                </div>

                                <div class="p">
                                    I’ve been exercising daily, have been highly mindful of my diet, and under no circumstances
                                    have I been sacrificing any sleep. I started swimming regularly again for the first time in
                                    over a decade. And I’m making sure that I regularly challenge my brain in completely new
                                    ways (to keep it in the best possible shape) by doing things such as learning
                                    Tagalog and some Japanese, and some crazy-difficult Chopin songs on the piano.
                                </div>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Where are you currently located?
                            </template>
                            <template slot="answer">
                                <p>
                                Lately I've been bouncing between California and Manila. (I'm a US Citizen, and the
                                address on my tax returns is in California.)
                                </p>

                                <p>
                                Since I'm perfectly willing
                                to relocate very quickly for the right opportunity (see below), I hope that
                                wherever my current physical location is this week isn't a major factor in the much
                                bigger-picture decision of whether or not to allow me to join your company/team and
                                deliver great work for years to come.
                                </p>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Are you willing to relocate?
                            </template>
                            <template slot="answer">
                                <p>
                                If you require it and I've applied to you, then <strong>yes, absolutely.</strong>
                                </p>

                                <p>
                                I'm considering both
                                onsite and remote opportunities. I don't know which one will pan out first, but my bags
                                are packed just in case. I can start my first day with you just 1-2 weeks after
                                accepting an offer.
                                </p>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Would you be ok with living and working remotely <strong>within the US</strong>?
                            </template>
                            <template slot="answer">
                                Absolutely! I'd be quite happy with the freedom to see more of my home country. :)
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Who are your heroes?
                            </template>
                            <template slot="answer">
                                Without question: Neil deGrasse Tyson, DHH & Jason Fried, Kelly McGonigal, Dan Ariely,
                                Jay Shetty, Mikey Bustos, Jeffrey Way, Taylor Otwell, and the folks at X-Team &amp; all the other
                                companies out there right now who are blazing the trail for a better/healthy working life
                                for all tech employees (e.g. Lookback, Help Scout, Articulate, CleverTech, Knack, Knock,
                                Oddball, and Basecamp).
                            </template>
                        </Faq-item>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

import SectionHeader from './SectionHeader';
import FaqItem from './FaqItem';

export default {
    name: 'Faq',
    components: {
        SectionHeader,
        FaqItem,
    },
    data: () => ({
    }),
};

</script>

<style lang="scss" scoped>

div.p {
    margin-bottom: 16px;
}

p:last-child, div.p:last-of-type {
    margin-bottom: 0;
}

.img-center {
    text-align: center;

    img {
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
    }
}
</style>
