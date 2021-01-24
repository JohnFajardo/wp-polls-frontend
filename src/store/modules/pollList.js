import axios from 'axios';

const state = {
    polls: []
}

const getters = {
    allPolls: (state) => state.polls
}

const actions = {
    async fetchPolls({commit}) {
        const response = await axios.get('http://localhost/wordpress/wp-json/partnercomm/polls');
        commit('setPolls', response.data)
    }
}

const mutations = {
    setPolls: (state, polls) => (state.polls = polls)
}

export default {
    state,
    getters,
    actions,
    mutations
};