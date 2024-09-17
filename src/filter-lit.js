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
                                    <svg class="filter-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>
                        </form>
                        <form class="filter">
                            <div class="filter-elements">
                                <div class="filter-content">
                                    <label for="gender" class="filter-label"></label>
                                    <select class="filter-select" id="gender" name="gender" placeholder="">
                                        <option value="" disabled selected>Género</option>
                                        <option value="male">Macho</option>
                                        <option value="famale">Hembra</option>
                                    </select>
                                    <svg class="filter-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>
                        </form>
                        <form class="filter">
                            <div class="filter-elements">
                                <div class="filter-content">
                                    <label for="race" class="filter-label"></label>
                                    <select class="filter-select" id="race" name="race" placeholder="">
                                        <option value="" disabled selected>Raza</option>
                                        <option value="akita">akita</option>
                                        <option value="chihuahua">chihuahua</option>
                                    </select>
                                    <svg class="filter-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>
                        </form>
                        <form class="filter">
                            <div class="filter-elements">
                                <div class="filter-content">
                                    <label for="pet_type" class="filter-label"></label>
                                    <select class="filter-select" id="ubication" name="ubication" placeholder="">
                                        <option value="" disabled selected>Ubicación</option>
                                        <option value="cdmx">Ciudad de México</option>
                                        <option value="edmx">Estado de México</option>
                                    </select>
                                    <svg class="filter-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="galery-images">
                    <div class="galery-images-separator">
                        <card-lit race="Yorkshire Terrier" gender="Hembra" date="18/05/2024" img="https://petkey.blob.core.windows.net/resource/images/3260000/3265000/3265062_800.jpg"></card-lit>
                        <card-lit race="Pembroke Welsh Corgi" gender="Hembra" date="02/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3290000/3290193_800.jpg"></card-lit>
                        <card-lit race="Fluffy French Bulldog" gender="Macho" date="12/05/2024" img="https://petkey.blob.core.windows.net/resource/images/3250000/3255000/3255012_800.jpg"></card-lit>
                        <card-lit race="Shin Tzu" gender="Macho" date="15/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3290000/3290192_800.jpg"></card-lit>
                        <card-lit race="Poodle" gender="Macho" date="08/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3290000/3290187_800.jpg"></card-lit>
                        <card-lit race="Chow Chow" gender="Macho" date="29/04/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3290000/3290166_800.jpg"></card-lit>
                        <card-lit race="Pembroke Welsh Corgi" gender="Hembra" date="25/04/2024" img="https://petkey.blob.core.windows.net/resource/images/3240000/3244000/3244760_800.jpg"></card-lit>
                        <card-lit race="Border Collie" gender="Hembra" date="14/05/2024" img="https://petkey.blob.core.windows.net/resource/images/3240000/3244000/3244725_800.jpg"></card-lit>
                        <card-lit race="Pomeranian" gender="Macho" date="23/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3298000/3298297_800.jpg"></card-lit>
                        <card-lit race="Samoyed" gender="Hembra" date="15/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3298000/3298190_800.jpg"></card-lit>
                        <card-lit race="Wolfdog" gender="Hembra" date="21/06/2024" img="https://petkey.blob.core.windows.net/resource/images/3290000/3298000/3298267_800.jpg"></card-lit>
                        <card-lit race="Siberian Husky" gender="Macho" date="05/04/2024" img="https://petkey.blob.core.windows.net/resource/images/3250000/3254000/3254961_800.jpg"></card-lit>
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
                display: grid;
                -webkit-box-align: stretch;
                align-items: stretch;
                gap: 1.5rem;
                grid-template-columns: repeat(auto-fit, minmax(min(15.625rem, 100%), 1fr));
            }
            .filter{
                display: block;
                margin-top: 0em;
                unicode-bidi: isolate;
            }
            .filter-elements{
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
                appearance: none;
                cursor: pointer;
                padding-right: 3.5rem;
                appearance: none;
                background: transparent;
                border-radius: 62.5rem;
                border: 1px solid rgb(244, 244, 244);
                font-size: 1rem;
                padding: 1.5rem 3.5rem 1.5rem 2rem;
                position: relative;
                transition: outline 0.2s;
                user-select: none;
                width: 100%;
                z-index: 2;
                color: #81828A;
            }
            select:focus { 
                outline: 1px solid #de6061;
            
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
                color: #81828A;
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
            .galery-images{
                padding: 0.625rem;
            }
            .galery-images-separator{
                display: grid;
                align-items: stretch;
                gap: 2.5rem;
                grid-template-columns: repeat(auto-fit, minmax(min(15.625rem, 100%), 1fr));
            }
        `;
    }
}

window.customElements.define('filter-lit',FilterLit)