const cities = [
    {name: 'Lilongwe', active: true},
    {name: 'Blantyre', active: false},
    {name: 'Mzuzu', active: false},
    {name: 'Zomba', active: false},
    {name: 'Mangochi', active: false},
];

export default function CityPills() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
            {cities.map((city, index) => (
                <div
                    key={city.name}
                    className={`rounded-lg py-1 px-3 text-sm font-semibold relative items-center justify-center border ${
                        city.active
                            ? 'border-green-900 bg-green-400 text-green-900'
                            : 'border-gray-200 text-gray-200 cursor-not-allowed'
                    }`}
                >
                    <span>{city.name}</span>
                    {!city.active && (
                        <span className="ml-2 text-xs font-normal text-yellow-800 absolute right-0 top-0 m-1 bg-yellow-50 rounded p-0.5">
              coming soon
            </span>
                    )}
                </div>
            ))}
        </div>
    );
}
