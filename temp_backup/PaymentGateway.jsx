import React, { useState } from 'react';
import { CreditCard, Wallet, Banknote, Landmark, Check } from 'lucide-react';

const PaymentGateway = () => {
  const [selectedMethod, setSelectedMethod] = useState('card'); // 'card', 'stripe', 'paypal', 'westernUnion'
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });
  const [westernUnionDetails, setWesternUnionDetails] = useState({
    senderName: '',
    senderCountry: '',
    recipientName: '',
    recipientCountry: '',
    mtcn: '',
    amount: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleWesternUnionChange = (e) => {
    const { name, value } = e.target;
    setWesternUnionDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentSuccess(false);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      // In a real app, you'd send data to backend here
      console.log(`Processing ${selectedMethod} payment...`);
      if (selectedMethod === 'card') {
        console.log('Card Details:', cardDetails);
      } else if (selectedMethod === 'westernUnion') {
        console.log('Western Union Details:', westernUnionDetails);
      } else if (selectedMethod === 'stripe') {
        console.log('Stripe payment initiated');
      } else if (selectedMethod === 'paypal') {
        console.log('PayPal redirect initiated');
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-black min-h-screen text-white">
      <div className="bg-[#0a0606] rounded-2xl shadow-sm p-8 max-w-4xl w-full border border-ferrari/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Payment Method</h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            type="button"
            onClick={() => setSelectedMethod('card')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
              selectedMethod === 'card' ? 'bg-ferrari text-white border-ferrari' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            <CreditCard size={20} />
            <span>Credit/Debit Card</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedMethod('westernUnion')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
              selectedMethod === 'westernUnion' ? 'bg-ferrari text-white border-ferrari' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            <Banknote size={20} />
            <span>Western Union</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedMethod('stripe')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
              selectedMethod === 'stripe' ? 'bg-ferrari text-white border-ferrari' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            <Landmark size={20} />
            <span>Stripe</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedMethod('paypal')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
              selectedMethod === 'paypal' ? 'bg-ferrari text-white border-ferrari' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            <Wallet size={20} />
            <span>PayPal</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {selectedMethod === 'card' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              <div>
                <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-300 mb-1">Card Holder Name</label>
                <input
                  type="text"
                  id="cardHolderName"
                  name="cardHolderName"
                  value={cardDetails.cardHolderName}
                  onChange={handleCardChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'westernUnion' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-300 mb-1">Sender Name</label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={westernUnionDetails.senderName}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderCountry" className="block text-sm font-medium text-gray-300 mb-1">Sender Country</label>
                <input
                  type="text"
                  id="senderCountry"
                  name="senderCountry"
                  value={westernUnionDetails.senderCountry}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="recipientName" className="block text-sm font-medium text-gray-300 mb-1">Recipient Name</label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  value={westernUnionDetails.recipientName}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="recipientCountry" className="block text-sm font-medium text-gray-300 mb-1">Recipient Country</label>
                <input
                  type="text"
                  id="recipientCountry"
                  name="recipientCountry"
                  value={westernUnionDetails.recipientCountry}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="mtcn" className="block text-sm font-medium text-gray-300 mb-1">MTCN (Money Transfer Control Number)</label>
                <input
                  type="text"
                  id="mtcn"
                  name="mtcn"
                  value={westernUnionDetails.mtcn}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={westernUnionDetails.amount}
                  onChange={handleWesternUnionChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-ferrari/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ferrari focus:border-ferrari text-white"
                  step="0.01"
                  required
                />
              </div>
            </div>
          )}

          {selectedMethod === 'stripe' && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-300 mb-4">You will be redirected to Stripe to complete your payment.</p>
              <button
                type="submit"
                className="px-8 py-4 bg-ferrari text-white rounded-lg font-medium hover:bg-ferrari/90 transition-colors flex items-center justify-center mx-auto"
                disabled={isProcessing}
              >
                {isProcessing ? 'Redirecting to Stripe...' : 'Proceed to Stripe'}
              </button>
            </div>
          )}

          {selectedMethod === 'paypal' && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-300 mb-4">You will be redirected to PayPal to complete your payment.</p>
              <button
                type="submit"
                className="px-8 py-4 bg-ferrari text-white rounded-lg font-medium hover:bg-ferrari/90 transition-colors flex items-center justify-center mx-auto"
                disabled={isProcessing}
              >
                {isProcessing ? 'Redirecting to PayPal...' : 'Proceed to PayPal'}
              </button>
            </div>
          )}

          {!isProcessing && paymentSuccess && ( 
            <div className="mt-8 p-4 bg-green-900 text-green-200 rounded-lg flex items-center justify-center gap-2">
              <Check size={20} />
              Payment Successful!
            </div>
          )}

          {selectedMethod !== 'stripe' && selectedMethod !== 'paypal' && (
            <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-ferrari text-white rounded-lg hover:bg-ferrari/90 transition-colors flex items-center"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Complete Payment'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway; 