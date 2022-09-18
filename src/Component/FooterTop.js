import map from '../data/image/icons/map.svg'

function FooterTop() {
    return (
        <div className="main-footer" id="main-footer">
            <a href="" className="uppercase">CONTACT US</a>
            <div className="find">
                <a href="" className="uppercase-click">
                    <span>FIND OUT US ON GOOGLE MAP</span>
                    <img src={map} alt="map" height="20" />
                </a>
            </div>
        </div>
    );
}
export default FooterTop;