<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
  </Layout>
</template>

<script>

export default {

        mounted() {
            let metricsScript = document.createElement('script');
            metricsScript.async = true;
            metricsScript.defer = true;
            metricsScript.setAttribute('data-website-id', 'f69654e6-6d2f-4f4e-a9de-200410655b88')
            metricsScript.setAttribute('data-auto-track', 'false')
            metricsScript.setAttribute('src', 'https://umami-murex-five.vercel.app/umami.js')
            metricsScript.onload = function(){
                umami.trackView('/');
            };
            document.head.appendChild(metricsScript)
        }
    }


</script>