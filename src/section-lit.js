import { LitElement, html, css } from "lit";

export class SectionLit extends LitElement{
    static get properties(){
        return { 
            title : {type: String}, 
            description: {type: String},
            img: {type: String }
        }
    }

    constructor(){
        super();
        this.title = "";
        this.description = "";
        this.img = "";
    }

    render() {
        return html`
            <div class="principal">
                <section class="principal-info">
                    <div class="card">
                        <div class="card-info">
                            <div class="elements">
                                <div class="text">
                                    <div class="text-title">
                                        <h1 class="text-title-content">
                                            En petland podrás encontrar <span class="featured">gran variedad</span> de razas de cachorros
                                        </h1>
                                    </div>
                                    <div class="text-description">
                                        <p class="text-description-content">Nosotros te ayudamos a encontrar la más adecuada para ti, contamos con asesores especializados.</p>
                                    </div>
                                </div>
                                <div class="picture">
                                    <div class="picture-body">
                                        <img class="picture-img"src="https://petlandmexico.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-cachorros.c230f05e.jpg&w=2048&q=75">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
    }

    static get styles(){
        return css`
            div {
                display: block;
                unicode-bidi: isolate;
            }
            .principal{
                position: relative;
                padding-top: 2.5rem;
            }
            .principal-info{
                padding-top: clamp(2.5rem, 1.7352rem + 3.8241vw, 5rem);
            }
            .card{
                display: block;
                margin: 0px auto;
                padding: 0rem 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .card-info{
                padding: 0.625rem;
            }
            .elements{
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                gap: 2.5rem;
                justify-content: space-between;
                flex-wrap: nowrap;
            }
            .text{
                flex: 0 1 38rem;
            }
            .text-title{
                opacity: 1;
            }
            .text-title-content{
                color: #275972;
                font-size: clamp(1.875rem, 1.6073rem + 1.3384vw, 2.75rem);
                font-weight: 700;
                line-height: 1.2;
                padding: 0px;
                position: relative;
                unicode-bidi: isolate;
            }
            .featured {
                background: #f0af4a;
                color: white;
                padding: 0rem 0.3125rem;
            }
            .text-description{
                opacity: 1;
            }
            .text-description-content{
                font-size: 1.25rem;
                margin-top: 1rem;
                margin: 0px;
                padding: 0.3125rem 0px;
                white-space: pre-line;
            }
            .picture{
                flex: 0 1 38rem;
            }
            .picture-body{
                opacity: 1;
            }
            .picture-img{
                box-shadow: rgba(0, 0, 0, 0.14) 0rem 0.1875rem 1.25rem;
                border-radius: 3.125rem;
                height: auto;
                width: 100%;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
        `
    }
}

window.customElements.define('section-lit',SectionLit);