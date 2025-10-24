import { useGeoLocation } from '@/hooks/useGeoLocation';
import dollarIcon from '@/assets/dollar-icon.png';
import sLogo from '@/assets/s-logo.webp';
import instagramDm from '@/assets/instagram-dm.jpeg';
import sheinHaul from '@/assets/shein-haul.jpeg';
import { Button } from '@/components/ui/button';
import { Loader2, Lock } from 'lucide-react';

const LandingPage = () => {
  const { country, countryCode, flag, isLoading, isTier1Country } = useGeoLocation();

  const tier1OfferUrl = "https://uplevelrewarded.com/aff_c?offer_id=76&aff_id=159151";
  const worldOfferUrl = "https://rewardorbit.com/r/eyJ0Ijoic2hlaW4iLCJ1IjoiNjhlMDFmN2RlNjVlYzQ3MjM1OWY2NDcwIiwiYSI6Ijc1MCIsInRzIjoxNzYxMDM5MDQwNTAzfQ?amount=750";

  const handleOfferClick = () => {
    const offerUrl = isTier1Country ? tier1OfferUrl : worldOfferUrl;
    window.location.href = offerUrl;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 md:py-12">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <img src={dollarIcon} alt="Dollar" className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Claim Your Gift Card Now!
        </h1>

        {/* Subheading */}
        <p className="text-muted-foreground text-center mb-8 md:mb-10">
          Higher value deals = faster rewards!
        </p>

        {/* Steps */}
        <div className="w-full mb-8 space-y-3 text-center">
          <p className="text-foreground text-lg">
            1. Click The Link Below👇
          </p>
          <p className="text-foreground text-lg">
            2. Enter Your Email & Basic Info
          </p>
          <p className="text-foreground text-lg">
            3. Complete Recommended Deals
          </p>
          <p className="text-muted-foreground text-sm">
            (Higher value deals = faster rewards!)
          </p>
          <p className="text-foreground text-lg">
            4. Claim Your Gift Card!
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleOfferClick}
          className="w-full max-w-md h-auto py-6 px-8 mb-6 bg-gradient-to-r from-primary to-accent hover:from-secondary hover:to-primary transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center gap-4 w-full">
            <img src={sLogo} alt="SHEIN" className="w-10 h-10 bg-white rounded-full p-1" />
            <div className="flex flex-col items-start text-left">
              <span className="text-xl font-bold text-primary-foreground">
                $750 SHEIN Gift Card
              </span>
              <span className="text-sm text-primary-foreground/90">
                [Enter Email & Complete Deals]
              </span>
            </div>
          </div>
        </Button>

        {/* Eligibility Status */}
        <div className="mb-4">
          {isLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Checking eligibility...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-success">
              <span className="text-lg">✅</span>
              <span className="font-medium">
                You are eligible – {country} {flag}
              </span>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-12">
          <Lock className="w-4 h-4" />
          <span>256-bit Encryption – Powered by Trusted Partners</span>
        </div>

        {/* Proof Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Real Rewards. Real People. 👇
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={instagramDm}
              alt="Instagram proof"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src={sheinHaul}
              alt="SHEIN haul proof"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
