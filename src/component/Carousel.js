import React, { Component } from 'react';
import "../styles/Styles.css";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

class Carousel extends Component {
    render() {
        return (
            <>
                <div className='carousel'>
                    <MDBCarousel showIndicators showControls>
                        <MDBCarouselItem
                           
                            className='w-100 d-block'
                            itemId={1}
                            style={{height:"75vh"}}
                            src='https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg'
                            alt='...'
                        >
                        </MDBCarouselItem>

                        <MDBCarouselItem
                           
                            className='w-100 d-block'
                            itemId={2}
                            style={{height:"75vh"}}
                            src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/MayART23/Hero/PC_Hero_1500x600_Electronics._CB590047274_.jpg'
                            alt='...'
                        >
                        </MDBCarouselItem>

                        <MDBCarouselItem
                           
                            className='w-100 d-block'
                            itemId={3}
                            style={{height:"75vh"}}
                            src='https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/SummerSale/GW/D81067155_WLD_SummerSale_Design_SIM_DesktopTallHero_3000x1200._CB589999476_.jpg'
                            alt='...'
                        >
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>

            </>
        )
    }
}

export default Carousel;