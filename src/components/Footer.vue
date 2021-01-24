<template>
    <div class="footer">
        <p>Made with ❤️ by <a href="https://johnfajardo.dev">John Fajardo</a> for</p>
        <a href="https://www.partnercomm.net/"><img src="../assets/logo.svg" alt=""/></a>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    };
</script>

<style scoped>
    .footer {
        background: #fff;
        position: absolute;
        width: 250px;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        font-size: 10px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        -webkit-box-shadow: 0px -5px 15px 2px rgba(0, 0, 0, 0.32);
        -moz-box-shadow: 0px -5px 15px 2px rgba(0, 0, 0, 0.32);
        box-shadow: 0px -5px 15px 2px rgba(0, 0, 0, 0.32);
    }

    .footer a {
        text-decoration: none;
        color: #49b2fc;
    }

    .footer a:hover {
        text-decoration: underline;
    }
</style>
