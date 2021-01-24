<template>
    <div class="container">
        <PollList />
        <DisplayPoll />
        <Footer />
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import PollList from "./components/PollList";
    import DisplayPoll from "./components/DisplayPoll";

    export default {
        name: "App",
        components: {
            PollList,
            DisplayPoll,
            Footer,
        },
    };
</script>

<style>
    html {
        height: 100%;
    }
    body {
        background-size: 100%;
        background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));
        background-image: -webkit-linear-gradient(135deg, #003073, #029797);
        background-image: -moz-linear-gradient(45deg, #003073, #029797);
        background-image: -ms-linear-gradient(45deg, #003073 0, #029797 100%);
        background-image: -o-linear-gradient(45deg, #003073, #029797);
        background-image: linear-gradient(135deg, #003073, #029797);
        display: flex;
        justify-content: center;
    }

    .container {
        display: flex;
        width: 60rem;
        gap: 32px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
