import { Box } from "lucide-react";
import PackagesHero from "./packagesHero";
import FoodSelection from "./foodSelectionComponent";
import PackFeatures from "./PackFeatures";
import Map from "../Home/components/map";

export default function LazeezPackages() {
    return (
        <>
            <PackagesHero />
            <PackFeatures />
            <FoodSelection />
            <Map />
        </>
    )
}
