<template>
    <div class="poll-container">
        <h1>{{ poll.poll ? poll.poll.name : "Select poll" }}</h1>
        <form>
            <div v-for="option in poll.options" v-model="vote.poll_id">
                <input type="radio" :id="option.id" :value="option.id" v-model="vote.option_id" />
                {{ option.name }} ({{ option.votes }} votes)
            </div>
            <button v-if="poll.poll" @click="onSubmit($event, poll.poll.id, vote.option_id)">Submit</button>
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from "vuex";
    export default {
        name: "DisplayPoll",
        data: function() {
            return {
                vote: {
                    option_id: 0,
                },
            };
        },
        methods: {
            ...mapActions(["postVote"]),
            onSubmit(event, pollid, option) {
                event.preventDefault();
                let args = {
                    poll_id: pollid,
                    option_id: option,
                };
                this.postVote(args);
            },
        },
        computed: {
            ...mapGetters(["poll"]),
        },
    };
</script>

<style scoped>
    .poll-container {
        background: #fff;
        flex: 8;
        border-radius: 15px;
        padding: 8px 16px;
    }
</style>
