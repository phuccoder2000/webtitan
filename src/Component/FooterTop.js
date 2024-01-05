import map from '../data/image/icons/map.svg'

function FooterTop() {
    return (
        <div className=" main-footer" id="main-footer">
            <div className='row1'>
              <div><a href="" className="uppercase">CONTACT US</a>
                </div>
                <div className='row1a'>
                    <a href="" className="uppercase-click">
                        <span>FIND OUT US ON GOOGLE MAP</span>
                        <img src={map} alt="map" height="20" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default FooterTop;