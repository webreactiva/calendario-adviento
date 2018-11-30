<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{event.originalEvent.tags}}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <h3>{{event.originalEvent.meta_title}}</h3>
        <p class="subtitle">
          <span v-html="event.originalEvent.description"></span>
        </p>
        <nav class="level">
          <div class="level-left">
            <a class="button level-item" :href="event.originalEvent.link" target="_blank">
              <i class="fas fa-link"></i>&nbsp;Enlace
            </a>
          </div>
        </nav>
      </div>
      <div class="media">
        <div class="media-content">
          <p class="subtitle">
            Enviado por
            <a
              :href="event.originalEvent.author_link"
              target="_blank"
            >{{event.originalEvent.author}}</a>
          </p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click="closeModal">
        <i class="fas fa-times"></i>&nbsp;
        <span>Cerrar</span>
      </a>
      <a
        :href="'https://twitter.com/intent/tweet?text=Descubriendo '+event.originalEvent.meta_title+' gracias a '+event.originalEvent.author_link+' desde el Calendario de Adviento de @webreactiva '+ event.site_url +''"
        class="card-footer-item"
        target="_blank"
      >
        <i class="fas fa-share-alt"></i>&nbsp;
        <span>Compartir</span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
	props: ["event"],
	methods: {
		closeModal() {
			this.$emit("close")
		},
	},
}
</script>
