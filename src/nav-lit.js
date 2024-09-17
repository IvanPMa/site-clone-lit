import { LitElement, css, html } from 'lit';

export class NavLit extends LitElement {
    static get properties() {
        return {
            name: {type:String}
        }
    }

    constructor() {
        super();
        this.name = "Ivan"
    }

    render(){
        return html`
            <div class="container">
                <div class="sub-container">
                    <div class="sub-container-body">
                        <div class="elements">
                            <a class="first-element" href="/">
                                <img class="logo" title="Petland" src="https://petlandmexico.com/_next/static/media/logo-white.2d8b986c.svg">
                            </a>

                            <div class="second-element">
                                <ul class="buttons">
                                    <li>
                                        <a href="/" class="button-link">
                                            Cachorros
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" class="button-link">
                                            Tienda
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="/" class="button-link">
                                            Sucursales
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" class="button-link">
                                            Petland
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" class="button-link">
                                            Contacto
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <span class="third-element">
                                <a href="/" class="contact">
                                    <img src="">
                                    (55) 9221 5810
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    static get styles(){
        return css`
        .container{
            height: 4.375rem;
            position: fixed;
            top: 0%;
            user-select: none;
            width: 100%;
            z-index: 999;
            backdrop-filter: blur(1rem);
        }
        .sub-container{
            display: block;
            margin: 0px auto;
            padding: 0rem 0.625rem;
            width: 100%;
            max-width: 85.375rem;
        }
        .sub-container-body{
            padding: 0.625rem;
        }
        .elements{
            align-items: center;
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr 2fr auto;
            justify-content: space-between;
        }
        .logo{
            max-width: 12.5rem;
            cursor:pointer;
        }
        .second-element{
            padding: 1rem 0px;
            position: relative;
        }
        .buttons{
            display: flex;
            gap: 1.25rem;
            -webkit-box-pack: end;
            justify-content: end;
            margin: 0px;
            padding: 0px;
            list-style:none;
        }
        .button-link{
            font-weight: 600;
            padding: 0.5rem;
            text-decoration:none;
            color: white;
        }
        .button-link:hover {
            color: #F0AF4A;
        }
        .contact{
            background: #de6061;
            color: white;
            padding: 0.5rem 0.8rem;
            text-decoration: none;
            transition: all 0.3s;
        }
        .contact:hover{
            background: #F0AF4A;
        }
        `
    }
}

window.customElements.define('nav-lit', NavLit);