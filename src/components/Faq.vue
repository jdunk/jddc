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
                                    Quite a bit, actually. The overarching theme of my latest projects is “picking up and
                                    solidifying new skills,” particularly the most interesting, fun, and useful ones which
                                    will pay dividends for years to come. Thus, I now have a very serviceable proficiency with
                                    Vue, Vuetify, Webpack, ES6, and Chrome Extension authoring. I’ve learned how to create
                                    custom Amazon Alexa skills (using AWS Lambda) and beautiful &amp; fast charts with
                                    ChartJS.
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
                                What is your location exactly?
                            </template>
                            <template slot="answer">
                                At this very moment, I’m in Manila, though I was recently back in California for a few
                                months.
                                The Philippines is my favorite place on Earth and I’d love to live here longer, but I
                                also love to travel, ergo my location is flexible.
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Are you willing to relocate?
                            </template>
                            <template slot="answer">
                                <p>
                                It depends. First off, I’d be happy to relocate anywhere in the world for a training
                                period of up to 3 months or so.
                                </p>

                                <p>
                                Now, if we’re talking long-term (i.e. onsite-only indefinitely), then we’d have to rule out
                                SF and NYC (been there, done that, and while these areas have many nice things, they
                                also have many cultural and systemic problems that aren’t worth the extra pay IMO, no
                                offense to anyone). I’d love the chance to learn what it’s like to live in the Midwest
                                or in Austin or Colorado or the Southwest. Really any midsize area I think would be nice.
                                </p>

                                <p>
                                I’m a practical, down-to-earth guy (and a recovering consumerist) who prefers
                                communities of happy people, healthy lifestyles, and real human connections over trendy
                                rooftop bars and brunch options.
                                </p>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                How important is remote working to you? How much “freedom to work remotely” do you need?
                            </template>
                            <template slot="answer">
                                <p>
                                First, I will say that nothing is impossible. If we are a superbly great fit for each
                                other, and I like the area, then I might end up living near you and working onsite for
                                years.
                                </p>

                                <p>
                                That said, it is important to understand that “100% remote freedom” == “the freedom to
                                live anywhere in the world and to hop around as desired,” and that because of that,
                                it’s... kind of a big deal; the mother of all perks, once you give it a moment’s
                                thought, really. No other benefit can come close to it, not even pay. And it’s not a
                                wild fantasy anymore. Tens of thousands of people are already doing it.
                                </p>

                                <p>
                                So it’s nothing personal when I say that the ability for me to work fully-remotely
                                (at least eventually) needs to at least be something you would consider (and it would
                                greatly benefit you as well if you did). I’m even happy to work onsite at first and meet
                                everyone and get up-to-speed before switching over. Alternatively, we could simply begin
                                with a remote trial run of any length on a contract basis. I actually prefer this since
                                we can both then try each other out relatively risk-free.
                                </p>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Would you be ok with living and working anywhere <strong>within the US</strong> only?
                            </template>
                            <template slot="answer">
                                Sure! There are many areas of the US I’ve never been to and would love to try out. The
                                beauty of having remote freedom still applies here since I’m never “stuck” in any place
                                I end up not liking much. I can just swipe left and keep on truckin’. :)
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                If you were outside of the US, could you still work 9am-6pm US time?
                            </template>
                            <template slot="answer">
                                <p>If it’s actually important and you’re paying me enough, sure. I actually enjoy working
                                graveyard hours to be perfectly honest, since it’s absolutely the best time to focus
                                (since everyone else is asleep then).</p>

                                <p>That said, typically only a few hours of daily overlap are necessary. It’s software work
                                after all, so if it’s not just me and the code/app for 50% of my time or more, then
                                that’s probably a process inefficiency red flag anyway.</p>

                                <p>Now, if I sense that there’s a growing mutual benefit coming from close collaboration
                                with one or more of my peers, then my hours will naturally gravitate towards more
                                overlap. If I love my work and the way things are done, then we all produce better work
                                and more efficiently too. That’s a win-win.</p>
                            </template>
                        </Faq-item>
                        <Faq-item>
                            <template slot="question">
                                Who are your heroes?
                            </template>
                            <template slot="answer">
                                Without question: Neil deGrasse Tyson, DHH & Jason Fried, Kelly McGonigal, Dan Ariely,
                                Mikey Bustos, Jeffrey Way, Taylor Otwell, the folks at X-Team, and all the
                                inspirationally loving, strong, and supportive women in my family
                                (my sister <a href="https://www.linkedin.com/in/nicole-l-wilson/" target="_blank">Nicole</a>,
                                my <a href="http://songsbyjennifer.com/" target="_blank">mother</a>,
                                and my cousin <a href="https://www.linkedin.com/in/marilee-habenicht/" target="_blank">Marilee</a>).
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
