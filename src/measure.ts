import { join } from 'lodash'

const units: string[] = ['m', 'ft']
let currentUnit: string = 'm'

const getUnits = (): string[] => {
  return units
}

const getUnit = (): string => {
  return currentUnit
}

const unit = (newUnit?: string): string => {
  if (newUnit) {
    if (getUnits().includes(newUnit)) {
      currentUnit = newUnit
    } else {
      throw new Error('Locale "' + newUnit + '" is not supported, use one of: ' + join(getUnits(), ', '))
    }
  }
  return currentUnit
}

export { unit, getUnits, getUnit }
