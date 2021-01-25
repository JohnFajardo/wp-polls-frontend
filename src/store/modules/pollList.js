import axios from 'axios';

const state = {
    polls: [],
    poll: {}
}

const getters = {
    allPolls: (state) => state.polls,
    poll: (state) => state.poll
}

const actions = {
    async fetchPolls({commit}) {
        const response = await axios.get('http://localhost/wordpress/wp-json/partnercomm/polls');
        commit('setPolls', response.data);
    },

    async fetchPoll({commit}, id) {
        const response = await axios.get(`http://localhost/wordpress/wp-json/partnercomm/polls/${id}`);
        commit('setPoll', response.data);
    },

    async postVote({commit}, args) {
        const response = await axios.post('http://localhost/wordpress/wp-json/partnercomm/polls/', args);
    }
}

const mutations = {
    setPolls: (state, polls) => (state.polls = polls),
    setPoll: (state, poll) => (state.poll = poll)
}

export default {
    state,
    getters,
    actions,
    mutations
};