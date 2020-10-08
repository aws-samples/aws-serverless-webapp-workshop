<template>
<div class="page-apply">

  <header class="site-header">
    <menus :extraHeader="true" :title="title" :content="content"  />
  </header>
 <section class="content">
    <div class="row column medium-10 large-7 xlarge-5">
      <p>Wild Rydes is on the hunt for the most mythical creature of all: talented software engineers! We’re seeking a technical dream team who will help us build a future where every person has a unicorn to ryde.</p>
      <p>From a technical standpoint, Wild Rydes believes in a future where there are no servers to provision, manage, or scale! Interested candidates can begin following the Serverless Way by exploring the following options:</p>
      <ul>
        <li>Enter our <a href="http://awschatbot.devpost.com" target="_blank">hackathon</a></li>
        <li>Train in the art of serverless</li>
      </ul>

      <h2>The Serverless Manifesto:</h2>
      <p>Functions are the unit of deployment and scaling.</p>
      <p>No machines, VMs, or containers visible in the programming model.</p>
      <p>Permanent storage lives elsewhere.</p>
      <p>Scales per request. Users cannot over- or under-provision capacity.</p>
      <p>Never pay for idle (no cold servers/containers or their costs).</p>
      <p>Implicitly fault tolerant because functions can run anywhere.</p>
      <p>BYOC - Bring your own code.</p>
      <p>Metrics and logging are a universal right.</p>
    </div>
  </section>
  <footers />
</div>

</template>

<script>
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'

export default {
  name: 'home',
  data(){
    return{
      title:"Apply Today"
    }
  },
  components: {
    footers: footers,
    menus: menu
  },
}
</script>

