import React from 'react';
import VendorHero from './vendorHero';
import WhoCanJoin from './whoCanJoin';
import RegistrationProcess from './registrationProcess';
import ListFoodMenuSection from './listMenuSection';
import MouSigningSection from './MOUsection';
import LazeezVendor from './lazeezVendor';
import VendorPerks from '../Home/components/vendor';

export default function VendorPage() {
    return (
        <>
        <br />
        <br />
            <VendorHero />
            <WhoCanJoin />
            <RegistrationProcess />
            <ListFoodMenuSection />
            <MouSigningSection />
            <LazeezVendor />
            <VendorPerks />
        </>
    )
}