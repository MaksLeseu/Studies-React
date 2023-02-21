import {
    addMoneyToBudget, createMessage,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouse,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03_02";
import {CityType} from "./03_02_01";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildeAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            }, {
                id: 2, buildeAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            }, {
                id: 3, buildeAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            }, {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
});

// Создать в отдельном файле функцию, чтобы тесты прошли

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test('House', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
});

test('staff', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test('staff plus', () => {
   toHireStaff(city.governmentBuildings[0], 20);

   expect(city.governmentBuildings[0].staffCount).toBe(220);
});

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
});

test('Buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});

test('List of streets titles of governments buildings', () => {
    let streetName = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetName.length).toBe(2);
    expect(streetName[0]).toBe('Central Str');
    expect(streetName[1]).toBe('South Str');
});

test('List of streets titles', () => {
    let streets = getStreetsTitlesOfHouse(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
});

test('create message', () => {
   let messages = createMessage(city.houses);

   expect(messages.length).toBe(3);
   expect(messages[0]).toBe('Hello guys from White street');
   expect(messages[1]).toBe('Hello guys from Happy street');
   expect(messages[2]).toBe('Hello guys from Happy street');
});


