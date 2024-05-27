import { LitElement, css, html } from 'lit'




export class VolkswagenTiguan extends LitElement {
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
       * Esta es la url de la image 1
       */
      Image1url: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'Tiguan'

    this.title1 = 'Número y configuración de cilindros:   '
    this.paragraph1 = ' Motor de 4 cilindros en línea.   '

    this.title2 = 'Desplazamiento del motor:  '
    this.paragraph2 = ' Varía según la generación y la especificación, pero típicamente está en el rango de 1.4 a 2.0 litros.    '

    this.title3 = 'Potencia del motor:  '
    this.paragraph3 = 'Entre 150 y 316 caballos de fuerza (hp), o entre 112 y 236 kilovatios (kW), dependiendo del motor y la versión.   '

    this.title4 = 'Torque del motor:   '
    this.paragraph4 = '  Generalmente en el rango de 184 a 295 libras-pie, o aproximadamente 250 a 400 Newton metros.  '

    this.title5 = 'Capacidad de ocupantes:  '
    this.paragraph5 = '   Por lo general, capacidad para 5 pasajeros, aunque pueden existir versiones con configuración de asientos para 7 pasajeros dependiendo de la generación.   '

    this.title6 = 'Tipo de tracción:    '
    this.paragraph6 = '  Mayormente tracción delantera (FWD) o tracción en todas las ruedas (AWD) dependiendo de la generación y la especificación.    '

    this.title7 = 'Tipo de transmisión:  '
    this.paragraph7 = ' Puede variar entre transmisiones manuales de varias velocidades, transmisiones automáticas convencionales o automáticas de doble embrague (DSG).  '

    this.title8 = 'Capacidad de carga:     '
    this.paragraph8 = ' El espacio de carga en el Tiguan varía según la generación y la configuración, pero suele estar en el rango de 23 a 73 pies cúbicos con los asientos traseros abatidos.    '

    this.title9 = 'Capacidad de remolque: '
    this.paragraph9 = '  El Tiguan generalmente tiene una capacidad de remolque moderada, variando entre 1500 y 2000 libras (aproximadamente 680 a 907 kg)    '

   
    this.Image1url = ' https://1.bp.blogspot.com/-xK5Z0tiS0B0/X30L3IcGhhI/AAAAAAAAj84/ANI-5962BIQPMdnfCPIuwnBnJd0ksVshwCLcBGAsYHQ/s2048/Volkswagen-Tiguan-R-2020%2B%25285%2529.jpg  '
    



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
        background-color: khaki
      }
      #parrafo {
        background-color: blue
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: peachpuff
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: lightgreen
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

window.customElements.define('volkswagen-tiguan', VolkswagenTiguan)
