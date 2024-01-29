import React from 'react'
import { Modal, ModalBody } from "reactstrap"


function App(props) {

    const [modalOpen, setModalOpen] = React.useState(false);

    const toggle = () => setModalOpen(!modalOpen);



    return (
        <div>
            {/* <div class="nir-btn col-lg-12 py-1 btn_responsive" onClick={toggle} style={{ fontSize: props.labelSize, marginLeft: props.Left, marginRight: props.Right, top: props.top, width: props.width, marginTop: props.Top }}>{props.buttonLabel}</div> */}
            <img src={props.img} alt={props.alt} onClick={toggle} />

            <Modal size="sm" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header border-0">
                    <h4 className=" modal-title" id="exampleModalLabel">
                        {props.title}
                    </h4>
                    <button style={{ background: "transparent" }}
                        aria-label="Close"
                        className=" close"
                        type="buFly high anytime, to anywhere for anythingtton"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                    </button>
                </div>
                <ModalBody>
                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                        {props.offertitle}
                    </h5><br />
                    <p class="mx-4">{props.firstpara}</p>
                    <p class="mx-4">{props.secondpara}</p><br />
                    <div class="col-lg-12 text-center">
                        <a href="contact" class="nir-btn">Grab Deal</a>
                    </div>
                </ModalBody>
            </Modal>

        </div >
    );
}
export default App;
