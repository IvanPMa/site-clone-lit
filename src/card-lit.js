import { LitElement, html, css } from "lit";

export class CardLit extends LitElement{
    static get properties(){
        return{
            race:{ type: String },
            img:{type:String},
            gender:{type:String},
            date:{type:String}

        }
    }

    constructor(){
        super();
        this.race = "";
        this.img = "";
        this.gender = "";
        this.date = "";
    }

    render(){
        return html`
        <div class="main-card">
            <a class="card" href="card">
                <img class="card-img"  src=${this.img}>
                <div class="card-info">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-dog" class="card-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:1em" font-size="1.25rem" >
                        <path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"></path>
                    </svg>
                    <div class="card-description">
                        <p class="card-title">
                            ${this.race}
                        </p>
                        <span class="card-subtitle">${this.gender}<!-- --> - <!-- -->${this.date}</span>
                        <span class="card-more">Conoce más</span>
                    </div>
                </div>
            </a>
        </div>
        `;
    }

    static get styles(){
        return css`
            .main-card{
                transition: opacity 1000ms, transform 1000ms;
                opacity: 1;
                transform: translate(0px, 0%);
            }
            .card{
                width: 310px;
                border-radius: 0.625rem;
                border: 0.125rem solid transparent;
                display: block;
                overflow: hidden;
                transform: scale(1);
                color: inherit;
                cursor: pointer;
                text-decoration: none;
                transition: 0.2s, outline 1e-06s;
            }
            .main-card:hover .card  {
                border: 0.125rem solid #de6061;
            }
            .card-img{
                border-radius: 0.625rem;
                box-shadow: rgba(185, 185, 185, 0.4) 0px 0.1875rem 1.25rem;
                transition: border-radius 0.2s;
                height: auto;
                width: 100%;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
            .card-info{
                display: flex;
                align-items: baseline;
                gap: 0.625rem;
                padding: 1.25rem 1rem;
            }
            .card-svg{
                font-size: 1.25rem;
                color: #de6061;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
            .card-description{
                display: block;
                unicode-bidi: isolate;
            }
            .card-title{
                font-size: 1.125rem;
            }
            .card-subtitle{
                color: #81828A;
            }
            .card-more{
                transition: opacity 0.2s;
                opacity: 0;
                display: block;
                margin-top: 1rem;
                color: #de6061;
            }
            .main-card:hover .card-more{
                opacity:1;
            }
        `
    }
}

window.customElements.define('card-lit',CardLit);