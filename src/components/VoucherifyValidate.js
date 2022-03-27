import React from 'react'
import '@voucherify/react-widget/dist/voucherify.css'
import { VoucherifyValidate } from '@voucherify/react-widget'

const VoucherifyValidateComponent = () => {

    const onValidatedResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}
  return (
    <VoucherifyValidate
			clientApplicationId={process.env.REACT_APP_VOUCHERIFY_CLIENT_ID}
			clientSecretKey={process.env.REACT_APP_VOUCHERIFY_CLIENT_SECRET_KEY}
			textPlaceholder="YOUR PROMO CODE"
			trackingId="gustav@purpleson.com"
			onValidated={onValidatedResponse}
			onError={onErrorResponse}
		/>
  )
}

export default VoucherifyValidateComponent;