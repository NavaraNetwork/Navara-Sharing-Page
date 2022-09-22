export const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
export const shortenAddress = (address?: string, length?: number) => {
  if (!address) {
    return ''
  }
  const maxLength = length || 20
  if (address.length > maxLength) {
    return address.substring(0, maxLength / 2) + '...' + address.substring(address.length - maxLength / 2)
  } else {
    return address
  }
}

export const shortWalletName = (address: string, length?: number) => {
  if (!address) {
    return ''
  }
  const maxLength = length || 20
  if (address.length > maxLength) {
    return address.slice(-5)
  } else {
    return address
  }
}

export const shortenAddressForHistory = (address: string, length?: number) => {
  if (!address) {
    return ''
  }
  const maxLength = length || 10
  if (address.length > maxLength) {
    return address.substring(0, maxLength / 3) + '...' + address.substring(address.length - maxLength / 3)
  } else {
    return address
  }
}

export const getHostname = (url: string) => {
  if (!url) {
    return ''
  }

  const hostname = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  return hostname
}

export const checkDateIsToday = (timestamp: number) => {
  const today = new Date().setHours(0, 0, 0, 0)
  const thatDay = new Date(timestamp).setHours(0, 0, 0, 0)

  return today === thatDay
}
