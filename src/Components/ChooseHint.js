import { FaAmazonPay, FaMoneyBill, FaShippingFast, FaTeamspeak } from "react-icons/fa";


const ChooseHint = () => {
  return (
    <div className='py-10 my-16'>
      <div className='flex items-center justify-between md:mx-24 '>
        <ChooseHintCard
          icon={<FaTeamspeak size={32} className='text-gray-500' />}
          title='24/7 Online Supports'
          caption='We provide secure payment systems'
        />
        <ChooseHintCard
          icon={<FaAmazonPay size={32} className='text-gray-500' />}
          title='Secure Payment'
          caption='We provide secure payment systems'
        />
        <ChooseHintCard
          icon={<FaMoneyBill size={32} className='text-gray-500' />}
          title='Moneyback geranty'
          caption='We provide secure payment systems'
        />
        <ChooseHintCard
          icon={<FaShippingFast size={32} className='text-gray-500' />}
          title='Free Delivery'
          caption='We provide secure payment systems'
        />
      </div>
    </div>
  );
};

const ChooseHintCard = ({ icon, title, caption }) => {
  return (
    <div>
      <div className='flex items-center  space-x-5'>
        <span className="text-blue-500">{icon}</span>
        <div className=''>
          <h2 className='text-lg font-medium'>{title}</h2>
          <p className='text-sm text-gray-500'>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseHint;
