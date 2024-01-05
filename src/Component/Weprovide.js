import React from 'react'
import service1 from '../data/image/images/service1.png'
import service2 from '../data/image/images/service2.png'
import service3 from '../data/image/images/service3.png'

export default class Weprovide extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-1">
                    <h2> <a href='#'> WE PROVIDE</a></h2>
                    <div> <p>
                        Professional and trusted services with cost-effective and
                        exceptional expertise to deal with any complexities in scalable
                        projects</p>
                    </div>
                    <div className="items">
                        <div className="item">
                            <img src={service1} alt="#" />
                            <h3><a href='#'> SOFTWARE DEVELOPMENT</a></h3>
                            
                                <p>
                                    Develop software applications from business ideas to deployment,
                                    develop based on product definition, the initial designs, or
                                    develop modules with multiple teams for concurrent development
                                    thus reducing time to market.
                                </p>
                           

                        </div>
                        <div className="item">
                            <img src={service2} alt="#" />
                            <h3><a href='#'>SOFTWARE DEVELOPMENT</a></h3>
                             <p>
                                Maintain, enhance, and develop new features of existing software applications. We also provide services to migrate from the legacy systems to new technologies to help improve performance and add benefits to the client's businesses.
                            </p>
                        </div>
                        <div className="item">
                            <img src={service3} alt="#" />
                            <h3><a href='#'>SOFTWARE DEVELOPMENT</a></h3>
                        
                                <p>
                                    Provide all kind of testing services including automation tool development, enhancement and execution to assure the quality of our client’s products.
                                </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
