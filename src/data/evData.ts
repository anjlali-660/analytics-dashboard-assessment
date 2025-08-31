// EV Dataset - Sample data for dashboard
export interface EVRecord {
  vin: string;
  county: string;
  city: string;
  state: string;
  postalCode: string;
  modelYear: number;
  make: string;
  model: string;
  electricVehicleType: string;
  cafvEligibility: string;
  electricRange: number;
  baseMSRP: number;
  legislativeDistrict: number;
  dolVehicleId: string;
  vehicleLocation: string;
  electricUtility: string;
  censusTract: string;
}

export const evData: EVRecord[] = [
  {
    vin: "5YJYGDEE1L",
    county: "King",
    city: "Seattle",
    state: "WA",
    postalCode: "98122",
    modelYear: 2020,
    make: "TESLA",
    model: "MODEL Y",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 291,
    baseMSRP: 0,
    legislativeDistrict: 37,
    dolVehicleId: "125701579",
    vehicleLocation: "POINT (-122.30839 47.610365)",
    electricUtility: "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
    censusTract: "53033007800"
  },
  {
    vin: "7SAYGDEE9P",
    county: "Snohomish",
    city: "Bothell",
    state: "WA",
    postalCode: "98021",
    modelYear: 2023,
    make: "TESLA",
    model: "MODEL Y",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Eligibility unknown as battery range has not been researched",
    electricRange: 0,
    baseMSRP: 0,
    legislativeDistrict: 1,
    dolVehicleId: "244285107",
    vehicleLocation: "POINT (-122.179458 47.802589)",
    electricUtility: "PUGET SOUND ENERGY INC",
    censusTract: "53061051938"
  },
  {
    vin: "5YJSA1E4XK",
    county: "King",
    city: "Seattle",
    state: "WA",
    postalCode: "98109",
    modelYear: 2019,
    make: "TESLA",
    model: "MODEL S",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 270,
    baseMSRP: 0,
    legislativeDistrict: 36,
    dolVehicleId: "156773144",
    vehicleLocation: "POINT (-122.34848 47.632405)",
    electricUtility: "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
    censusTract: "53033006800"
  },
  {
    vin: "1N4AZ0CP2D",
    county: "Yakima",
    city: "Yakima",
    state: "WA",
    postalCode: "98903",
    modelYear: 2013,
    make: "NISSAN",
    model: "LEAF",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 75,
    baseMSRP: 0,
    legislativeDistrict: 14,
    dolVehicleId: "150126840",
    vehicleLocation: "POINT (-120.477805 46.553505)",
    electricUtility: "PACIFICORP",
    censusTract: "53077003003"
  },
  {
    vin: "5YJ3E1EB4L",
    county: "King",
    city: "Seattle",
    state: "WA",
    postalCode: "98126",
    modelYear: 2020,
    make: "TESLA",
    model: "MODEL 3",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 322,
    baseMSRP: 0,
    legislativeDistrict: 34,
    dolVehicleId: "121690915",
    vehicleLocation: "POINT (-122.374105 47.54468)",
    electricUtility: "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
    censusTract: "53033009900"
  },
  {
    vin: "1G1FZ6S07M",
    county: "Yakima",
    city: "Yakima",
    state: "WA",
    postalCode: "98908",
    modelYear: 2021,
    make: "CHEVROLET",
    model: "BOLT EV",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Eligibility unknown as battery range has not been researched",
    electricRange: 0,
    baseMSRP: 0,
    legislativeDistrict: 14,
    dolVehicleId: "156686106",
    vehicleLocation: "POINT (-120.6027202 46.5965625)",
    electricUtility: "PACIFICORP",
    censusTract: "53077000903"
  },
  {
    vin: "WBY8P8C53K",
    county: "Kitsap",
    city: "Bainbridge Island",
    state: "WA",
    postalCode: "98110",
    modelYear: 2019,
    make: "BMW",
    model: "I3",
    electricVehicleType: "Plug-in Hybrid Electric Vehicle (PHEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 126,
    baseMSRP: 0,
    legislativeDistrict: 23,
    dolVehicleId: "228846642",
    vehicleLocation: "POINT (-122.5235781 47.6293323)",
    electricUtility: "PUGET SOUND ENERGY INC",
    censusTract: "53035091002"
  },
  {
    vin: "3FA6P0SU8H",
    county: "Thurston",
    city: "Yelm",
    state: "WA",
    postalCode: "98597",
    modelYear: 2017,
    make: "FORD",
    model: "FUSION",
    electricVehicleType: "Plug-in Hybrid Electric Vehicle (PHEV)",
    cafvEligibility: "Not eligible due to low battery range",
    electricRange: 21,
    baseMSRP: 0,
    legislativeDistrict: 2,
    dolVehicleId: "122057736",
    vehicleLocation: "POINT (-122.61023 46.94126)",
    electricUtility: "PUGET SOUND ENERGY INC",
    censusTract: "53067012532"
  },
  {
    vin: "5UXTA6C03N",
    county: "King",
    city: "Auburn",
    state: "WA",
    postalCode: "98001",
    modelYear: 2022,
    make: "BMW",
    model: "X5",
    electricVehicleType: "Plug-in Hybrid Electric Vehicle (PHEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 30,
    baseMSRP: 0,
    legislativeDistrict: 47,
    dolVehicleId: "240226332",
    vehicleLocation: "POINT (-122.2849393 47.3384055)",
    electricUtility: "PUGET SOUND ENERGY INC||CITY OF TACOMA - (WA)",
    censusTract: "53033029902"
  },
  {
    vin: "KNDJX3AE9H",
    county: "Thurston",
    city: "Olympia",
    state: "WA",
    postalCode: "98502",
    modelYear: 2017,
    make: "KIA",
    model: "SOUL EV",
    electricVehicleType: "Battery Electric Vehicle (BEV)",
    cafvEligibility: "Clean Alternative Fuel Vehicle Eligible",
    electricRange: 93,
    baseMSRP: 32250,
    legislativeDistrict: 22,
    dolVehicleId: "140569600",
    vehicleLocation: "POINT (-122.92145 47.045935)",
    electricUtility: "PUGET SOUND ENERGY INC",
    censusTract: "53067012002"
  }
];

// Analytics helpers
export const getAnalytics = () => {
  const totalVehicles = evData.length;
  const bevCount = evData.filter(v => v.electricVehicleType.includes('BEV')).length;
  const phevCount = evData.filter(v => v.electricVehicleType.includes('PHEV')).length;
  
  const makeStats = evData.reduce((acc, vehicle) => {
    acc[vehicle.make] = (acc[vehicle.make] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const yearStats = evData.reduce((acc, vehicle) => {
    acc[vehicle.modelYear] = (acc[vehicle.modelYear] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const avgRange = Math.round(
    evData.filter(v => v.electricRange > 0)
      .reduce((sum, v) => sum + v.electricRange, 0) / 
    evData.filter(v => v.electricRange > 0).length
  );

  const countyStats = evData.reduce((acc, vehicle) => {
    acc[vehicle.county] = (acc[vehicle.county] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalVehicles,
    bevCount,
    phevCount,
    makeStats,
    yearStats,
    avgRange,
    countyStats
  };
};