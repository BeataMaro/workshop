import React from "react";
import "@voucherify/react-widget/dist/voucherify.css";
import { VoucherifyRedeem } from "@voucherify/react-widget";
import { useDispatch } from "react-redux";
import { redeemDicountVoucher } from "../actions/cartActions";

const VoucherifyRedeemComponent = () => {

	const dispatch = useDispatch();

	const handleDiscount = (discount) => {
		dispatch(redeemDicountVoucher(discount));
	  };

  const onRedeemResponse = (response) => {
    // console.log('Do something with response: ', response.voucher.discount.percent_off)
  handleDiscount(response.voucher.discount.percent_off)
};

  const onErrorResponse = (error) => {
    console.log("Do something with error: ", error);
  };

  return (
    <VoucherifyRedeem
      clientApplicationId={process.env.REACT_APP_VOUCHERIFY_CLIENT_ID}
      clientSecretKey={process.env.REACT_APP_VOUCHERIFY_CLIENT_SECRET_KEY}
      trackingId="gustav@purpleson.com"
      textPlaceholder="e.g. Testing7fjWdr"
      amount
      onRedeemed={onRedeemResponse}
      onError={onErrorResponse}
    />
  );
};

export default VoucherifyRedeemComponent;
