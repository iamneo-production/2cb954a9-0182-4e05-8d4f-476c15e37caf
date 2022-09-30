
import React, {Component} from  'react';


class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                 <section class="" >
            <footer class="text-center text-white" style={{'background-color': '#86198F'}}>

                <div class="container p-4 pb-0">

                    <section class="">
                        <p class="d-flex justify-content-center align-items-center">
                            <span class="me-3">Book a call!</span>
                            <a href='tel:7013908751'>
                            <button type="button" class="btn btn-outline-light btn-rounded"
                                
                            >
                              Call up!
                            </button>
                            </a>  
                        </p>
                    </section>

                </div>


                <div class="text-center p-3" style={{'background-color': 'rgba(0, 0, 0, 0.2)'}}>

                    copyright @ 2022 | virtusa
                </div>

            </footer>
        </section >

            </div>
        )
    }
}

export default FooterComponent;