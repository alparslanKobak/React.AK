import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid fh5co_header_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 fh5co_mediya_center">
                             
                              
                             
                                <div className="d-inline-block fh5co_trading_posotion_relative">
                                    <a href="test" className="treding_btn fw-bold fsc-italic">  <i class="fa-solid fa-store"></i> U S T A B A K K A L</a>
                                    <div className="fh5co_treding_position_absolute"></div>
                                </div>
                                <a href="test" className="color_fff fh5co_mediya_setting"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;