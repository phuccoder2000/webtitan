import React from 'react'
import Manager from '../data/image/images/Project_Manager.png'

export default class CustomerTestimonials extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-1">
                    <div>
                        <h2><a href='#'> CUSTOMER TESTIMONIALS</a></h2>
                        <p> We deeply appreciate all feedbacks from our customers and keep those as realistic results of high-quality service in Titan</p>
                        <div>
                            <img src={Manager} alt=" " />
                            <a href=" ">
                                <h3>Hongwen Zhang, Ph.D</h3>
                                <h4 className='title-border'>CEO &amp; CTO (co-founder)</h4>
                            </a>
                            <div className='grey-color'>
                                “We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a  thousand internal users for several years.” 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
