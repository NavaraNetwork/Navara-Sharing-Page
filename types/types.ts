export type UserInfo = {
  domain?: string
  expired: string
}

export type TokenType = {
  tokenLogo?: any
  tokenNetworkLogo?: any
  token?: string
  symbol?: string
  address?: string
  isVerified?: boolean
  isDefault?: boolean
  tokenFrom?: string
}

export type tokenListType = {
  placeholder?: string
  className?: string
  tokens: TokenType[]
}

export type DomainType = {
  domainId: string
  domain: string
  expired: Date
  chains: any[]
}
