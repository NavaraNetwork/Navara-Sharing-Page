export type UserInfo = {
	alias?: string
	domain?: string
	address?: string
	expired: string
	isValid?: boolean
	// avatar?: any
	logo?: any
	chains?: any
}

export type TokenType = {
	tokenLogo?: any
	tokenNetworkLogo?: any
	token?: string
	symbol?: string
	address?: string
	isVerified?: boolean
	isDefault?: boolean
}

export type tokenListType = { tokens: TokenType[] }
