import React from 'react'
import { tokenListType } from '../types/types'
import Token from './Token'

const TokenList: React.FC<tokenListType> = ({ tokens }) => {
	return (
		<React.Fragment>
			{tokens.map((token, index) => {
				return (
					<div className='flex flex-col gap-2'>
						<Token
							{...token}
							key={index}
						/>
					</div>
				)
			})}
		</React.Fragment>
	)
}

export default TokenList
