<template>
    <v-card
            class="grey lighten-5"
            :class="$vuetify.breakpoint.xs ? 'elevation-5' : 'elevation-8'"
    >
        <v-card-text>
            <blockquote :class="$vuetify.breakpoint.name">
                <p v-html="quote">
                </p>
            </blockquote>
            <footer :class="$vuetify.breakpoint.name">
                — {{ by }}
            </footer>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'Testimonial-item',
    props: {
        quote: {
            type: String,
        },
        by: {
            type: String,
        },
    },
};

</script>

<style lang="scss" scoped>

blockquote {
    quotes:"\201C""\201D";
    font-size: 1.57em;
    text-align: left;

    a {
        text-decoration: none !important;
        color: inherit;
    }
}

blockquote:before, blockquote :last-child:after {
    color: #bbb;
    font-family: Helvetica, Georgia, Abril, serif;
    font-size: 4em;
    line-height: 1em;
    font-weight: bold;
}

blockquote:before {
    position: absolute;
    content: open-quote;
    top: 5px;
}

blockquote > :last-child:after {
    display: inline;
    content: close-quote;
    font-size: 2.5em;
    line-height: .1em;
    vertical-align: -17px;
    position: relative;
    left: 5px;
}

blockquote > :first-child {
    margin: 5px 20px 0 55px;
    display: block;
}

blockquote.sm, blockquote.xs {
    font-size: 1.3em;

    &:before {
        font-size: 3em;
        margin-left: -5px;
    }

    > :first-child {
        margin: 0 10px 0 32px;
    }

    > :last-child:after {
        font-size: 2.3em;
        vertical-align: -15px;
    }
}

footer {
    text-align: left;
    margin-left: 60px;
    margin-top: 20px;
    font-size: 14px;
    color: #777;

    &.sm, &.xs {
        margin-left: 35px;
    }
}

</style>
