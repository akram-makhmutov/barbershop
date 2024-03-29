import 'bootstrap/dist/css/bootstrap.min.css';
import '..//..//..//modal';

interface Props {
    masterImage: string;
}

const BestHaircutImage = ({masterImage}: Props) => {

    return (
        <div>
            <img src={masterImage} alt="master" data-bs-toggle="modal" className="w-25 h-25" data-bs-target="#masterImg"/>
            <div className="modal fade" id="masterImg" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BestHaircutImage;