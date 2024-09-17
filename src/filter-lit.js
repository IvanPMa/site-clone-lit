import { LitElement, html, css } from "lit";

export class FilterLit extends LitElement{
    static get properties(){
        return { 
            filter : { type: String}
        }
    }

    constructor(){
        super();
        this.filter = "Tipo de mascota"
    }

    render(){
        return html`
            <div class="galery">
                <div class="galery-head">
                    <div class="galery-filters">
                        <form class="filter">
                            <div class="filter-elements">
                                <div class="filter-content">
                                    <label for="pet_type" class="filter-label"></label>
                                    <select class="filter-select" id="pet_type" name="pet_type" placeholder="">
                                        <option value="" disabled selected>Tipo de Mascota</option>
                                        <option value="dog">Perro</option>
                                        <option value="cat">Gato</option>
                                    </select>
                                    <svg class="filter-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down sc-iGgWBj ffxCYX" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles(){
        return css`
            .galery{
                display: block;
                margin: 0px auto;
                padding: 0rem 0.625rem;
                width: 100%;
                max-width: 85.375rem;
            }
            .galery-head{
                padding: 0.625rem;
                margin-bottom: 2.5rem;
            }
            .galery-filters{
                grid-template-columns: repeat(auto-fit, minmax(min(15.625rem, 100%), 1fr));
            }
            .filter{
                display: block;
                margin-top: 0em;
                unicode-bidi: isolate;
            }
            .filter-elements{
                -webkit-box-align: center;
                align-items: center;
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(1rem);
                border-radius: 62.5rem;
                position: relative;
                width: 100%;
            }
            .filter-content{
                position: relative;
            }
            .filter-label{
                border-radius: 0.625rem;
                left: 0%;
                padding: 0rem 2rem;
                position: absolute;
                top: 50%;
                transition: top 0.2s, transform 0.2s, background 0.2s;
                transform: translate(0px, -50%);
                z-index: 1;
                display: block;
                font-size: 1.125rem;
                max-width: 100%;
                overflow: hidden;
                text-align: left;
                text-overflow: ellipsis;
                user-select: none;
            }

            .filter-select{
                cursor: pointer;
                padding-right: 3.5rem;
                appearance: none;
                background: transparent;
                border-radius: 62.5rem;
                border: 1px solid rgb(244, 244, 244);
                color: var(--c-black);
                font-family: var(--main-font);
                font-size: 1rem;
                padding: 1.5rem 3.5rem 1.5rem 2rem;
                position: relative;
                transition: border-color 0.2s;
                user-select: none;
                width: 100%;
                z-index: 2;
            }
            .filter-svg{
                position: absolute;
                top: 50%;
                right: 1.5rem;
                transition: color 0.2s;
                transform: translate(-50%, -50%);
                z-index: 1;
                height: 1em;
                border: none;
                display: inline-block;
                outline: none;
                vertical-align: middle;
                user-select: none;
            }
            option{
                font-weight: normal;
                display: block;
                padding-block-start: 0px;
                padding-block-end: 1px;
                min-block-size: 1.2em;
                padding-inline: 2px;
                white-space: nowrap;
            }
        `;
    }
}

window.customElements.define('filter-lit',FilterLit)