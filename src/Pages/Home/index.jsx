import React, { useState } from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomecatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';

const Home = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <HomeSlider />
            <HomecatSlider />

            <section className="bg-white !py-8 !mt-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className='text-[20px] font-[600] !pl-2'>Popular Product</h2>
                            <p className='text-[14px] font-[400] !pl-2'>Do not miss this current offers until the end of this month.</p>
                        </div>

                        <div className='rightSec w-[60%]'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Beauty" sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="skinCare" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Wellness" sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="Fitness" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Ayurvedic" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Herbal" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Cosmetics"sx={{ "&.Mui-selected": { color: "#ff5252" } }} />
                                <Tab label="HairCare" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                <Tab label="Fragrance" sx={{ "&.Mui-selected": { color: "#ff5252" } }}/>
                                
                            </Tabs>
                        </div>
                    </div>

                    <ProductsSlider items={5}/>



                </div>
            </section>

            <section className="!py-20 bg-white w-full min-h-[50px] !mt-0 !p-0">
                <div className="container !pt-3 !pb-3 !pr-4 !pl-4">
                    <div className="freeShipping w-[80%] !m-auto !py-3 !p-4 border-2 border-[#ff5252] flex items-center
                        justify-between rounded-md !mb-11">
                        <div className="col1 flex items-center gap-4">
                            <FaShippingFast className="text-[50px]" />
                            <span className="text-[20px] font-[600] uppercase">Affordable & Quick Shipping</span>
                        </div>

                        <div className="col2">
                            <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and Over $200</p>
                        </div>

                        <p className='font-bold text-[25px]'>- Only $200*</p>
                    </div>

                    <AdsBannerSlider items={4} />
                </div>
            </section>

            <br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Home;
