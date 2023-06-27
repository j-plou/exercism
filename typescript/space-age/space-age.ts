const earthYearSeconds: number = 31557600

const orbitalPeriod: Map<string, number> = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1.0], //365.25 Earth days, or 31557600 seconds
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132],
]);

function planetSecondsToEarthSeconds(planet: string, seconds: number){
  return seconds/Number(orbitalPeriod.get(planet))
}

function secondsToYearsInEarth(seconds: number) {
  return Number(
    (seconds/earthYearSeconds).toFixed(2)
  )
}

export function age(planet: string, seconds: number): any {
  return secondsToYearsInEarth(planetSecondsToEarthSeconds(planet, seconds))
}