import React from 'react';

const MembershipSection = () => (
  <section id="membership" className="p-8 bg-gray-200">
    <div id="membership_heading" className="text-4xl font-bold mb-4 text-center">Membership</div>
    <div id="membership_quote" className="text-xl mb-8 text-center">It all starts from here...</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'Month to month', price: '₹2000', features: ['All Sessions', 'All member events', 'Full gym Access'] },
        // Add more membership plans here
      ].map((plan, index) => (
        <div key={index} className="membership_plans bg-white p-4 rounded shadow-lg hover-effect">
          <div className="membership_details text-center">
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-2xl text-green-600">{plan.price}<small className="text-black">/mo</small></p>
            <div className="mt-4">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="bullet flex items-center">
                  <img className="w-6 h-6 mr-2" src="bullet1.png" alt="" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="charges mt-4">
              Revives every month <br />
              unless you cancel
              <br />
              <a href="" className="text-yellow-500">7 days free trial</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MembershipSection;
