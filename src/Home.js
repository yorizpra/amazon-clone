import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                
                <div className="home__row">
                    <Product 
                        id="123123123"
                        title="The lean startup : How Constant Innovation Creates Radically Successful Business Paperback" 
                        price={11.99} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  
                    />
                    <Product 
                        id="234234234"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.99}
                        rating={4}
                        image="https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/02/best-stand-mixers-5-KMX754RD_-Hero-Image-e1519828493107.jpg"
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id="345345"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                        id="456456"
                        title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric "
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                        id="567567"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="data:image/jpeg;base64,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"
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id="73474378"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
