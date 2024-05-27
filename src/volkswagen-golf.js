import { LitElement, css, html } from 'lit'




export class VolkswagenGolf extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo  de mi pagina 
      */
      title: { type: String },


      /**
       * Este es el titulo 1 de mi pagina 
      */
      title1: { type: String },

      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },

      /**
        * Este es el titulo 2  de mi pagina 
       */
      title2: { type: String },

      /**
       * Este es el parrafo 2
       */
      paragraph2: { type: String },

      /**
        * Este es el titulo 3  de mi pagina 
       */
      title3: { type: String },

      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },

      /**
         * Este es el titulo 4  de mi pagina 
        */
      title4: { type: String },

      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },

      /**
         * Este es el titulo 5  de mi pagina 
        */
      title5: { type: String },

      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },

      /**
         * Este es el titulo 6  de mi pagina 
        */
      title6: { type: String },

      /**
       * Este es el parrafo 6
       */
      paragraph6: { type: String },

      /**
         * Este es el titulo 7  de mi pagina 
        */
      title7: { type: String },

      /**
       * Este es el parrafo 7
       */
      paragraph7: { type: String },

      /**
         * Este es el titulo 8 de mi pagina 
        */
      title8: { type: String },

      /**
       * Este es el parrafo 8
       */
      paragraph8: { type: String },

      /**
         * Este es el titulo 9  de mi pagina 
        */
      title9: { type: String },

      /**
       * Este es el parrafo 9
       */
      paragraph9: { type: String },

      /**
         * Este es el titulo 10  de mi pagina 
        */
      title10: { type: String },

      /**
       * Este es el parrafo 10
       */
      paragraph10: { type: String },

      /**
       * Esta es la url de la image 1
       */
      Image1url: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'Golf'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = '   4 y 6 cilindros  '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = '  Varía según la generación y la especificación, pero típicamente está en el rango de 1.0 a 2.0 litros.   '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = ' Entre 85 y 310 caballos de fuerza (hp), o entre 63 y 231 kilovatios (kW), dependiendo del motor y la versión.   '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = ' Generalmente en el rango de 118 a 295 libras-pie, o aproximadamente 160 a 400 Newton metros.    '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = 'Por lo general, capacidad para 5 pasajeros.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = ' Puede variar entre tracción delantera (FWD) o tracción en todas las ruedas (AWD) dependiendo de la generación y la versión.  '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = 'Principalmente transmisiones manuales de varias velocidades, transmisiones automáticas de doble embrague (DSG), o transmisiones automáticas convencionales.     '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = 'El espacio de carga varía según la generación y la configuración, pero suele estar en el rango de 22 a 53 pies cúbicos con los asientos traseros abatidos.   '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = ' El Golf generalmente no está diseñado para remolcar cargas pesadas y generalmente no tiene capacidad de remolque significativa.    '

    this.title10 = 'Descripción de funcionalidades especiales:     '
    this.paragraph1 = ' Puede incluir sistemas de infoentretenimiento avanzados, asistente de estacionamiento, control de crucero adaptativo, frenado de emergencia automático, entre otros, dependiendo del modelo y nivel de equipamiento. '

    this.Image1url = 'https://1.bp.blogspot.com/-Uzzi5IB_NNQ/YOHMfwk3aEI/AAAAAAAAy9Q/gnU6YoHVqg4NqJghw7Y-IpwkyghWS65HQCLcBGAsYHQ/s2048/VW-Golf-R-mk8-ABT-Sportline%2B%25282%2529.jpg '
    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
        
        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        
        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        
        <h1>${this.title6}</h1>
        <p>${this.paragraph6}</p>
        
        <h1>${this.title7}</h1>
        <p>${this.paragraph7}</p>
        
        <h1>${this.title8}</h1>
        <p>${this.paragraph8}</p>
        
        <h1>${this.title9}</h1>
        <p>${this.paragraph9}</p>
        
        <h1>${this.title10}</h1>
        <p>${this.paragraph10}</p>

        <img src = "${this.Image1url}">

        
      </div>
    `
  }




  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      body{
        background-color: olivedrab
      }
      #parrafo {
        background-color: darkmagenta
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: beige  
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: cyan
      }
      img {
        width:20vw;
      }
      p {
        font-size:8vh;
      }
      h1{
        font-size:10vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;

      }





    `
  }
}

window.customElements.define('volkswagen-golf', VolkswagenGolf)
