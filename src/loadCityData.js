import Papa from 'papaparse';

export async function loadCityData() {
    const res = await fetch ("https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv");
    const text = await res.text();
    const countryData = Papa.parse(text).data;
    return countryData;
}