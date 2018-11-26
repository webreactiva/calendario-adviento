<template>
  <span>
    <nav class="navbar is-danger">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img
            src="images/campanilla.png"
            alt="Calendario de Adviento del Código Libre"
            height="28"
          >
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHero">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navbarMenuHero" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" @click="openAbout">¿Qué es esto?</a>
          <a class="navbar-item" href="https://goo.gl/forms/4PcuSltEgihTkKxp1">¡Quiero participar!</a>
          <span class="navbar-item">
            <a href="https://www.danielprimo.io/podcast" class="button is-inverted">
              <span class="icon">
                <i class="fa fa-microphone"></i>
              </span>
              <span>Podcast Web Reactiva</span>
            </a>
          </span>
        </div>
      </div>
    </nav>
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Calendario de Adviento del Código Libre</h1>
          <h2 class="subtitle">Cada día, hasta Navidad, un nuevo recurso</h2>
        </div>
      </div>
    </section>
  </span>
</template>

<script>
export default {
	methods: {
		openAbout() {
			this.$modal.show("dialog", {
				title: "¿Qué es esto del Calendario de Adviento?",
				text:
					"Es una propuesta del podcast Web Reactiva para traer durante el mes de diciembre de 2018 una colección de recusos de software libre y <em>open source</em> para toda la comunidad de internet.<br/><br/>Pueden ser herramientas de desarrollo, software de escritorio, programas de gestión multimedia, aplicaciones móviles... Aquello que te es útil y te facilita la vida.<br/><br/>Nos gustaría compartir esos recursos para que otros los descubran, creéme que lo que usas tu, no tiene porque conocerlo tanta gente como crees.<br/><br/>Así apoyamos el código abierto. 😃<br/><br/>¡Gracias por participar!",
				buttons: [
					{
						title: "Cerrar",
					},
				],
			})
		},
	},
}
</script>