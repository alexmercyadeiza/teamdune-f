import React, { useEffect } from 'react';
import axios from 'axios';
const PayId = () => {
  useEffect(() => {
    getPaymentData();
  }, []);

  const getPaymentData = async () => {
    const payId = window.location.pathname.split('/')[2];
    const res = await axios.get(
      `https://api.teamdune.pro/v1/pay/get/${payId}`,
      {
        headers: {
          'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
        },
      }
    );
    console.log('response', res.data);
  };
  return <div>PayId</div>;
};

export default PayId;
