import { useState, useEffect } from 'react';

interface GeoLocation {
  country: string;
  countryCode: string;
  flag: string;
  isLoading: boolean;
}

const TIER_1_COUNTRIES = ['US', 'AU', 'UK', 'GB', 'CA'];

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocation>({
    country: '',
    countryCode: '',
    flag: '',
    isLoading: true,
  });

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        // Using ipapi.co for free geo detection
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        setLocation({
          country: data.country_name || 'Unknown',
          countryCode: data.country_code || 'XX',
          flag: data.country_code ? getFlagEmoji(data.country_code) : '🌍',
          isLoading: false,
        });
      } catch (error) {
        console.error('Error fetching geo location:', error);
        setLocation({
          country: 'Unknown',
          countryCode: 'XX',
          flag: '🌍',
          isLoading: false,
        });
      }
    };

    fetchGeoLocation();
  }, []);

  const isTier1Country = TIER_1_COUNTRIES.includes(location.countryCode);

  return { ...location, isTier1Country };
};

const getFlagEmoji = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
