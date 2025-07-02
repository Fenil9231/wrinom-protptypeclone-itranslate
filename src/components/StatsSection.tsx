import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "25+",
      label: "Years of Experience",
      description: "Delivering innovative software solutions since 1999"
    },
    {
      number: "1000+",
      label: "Skilled Developers",
      description: "Expert engineers across multiple technologies"
    },
    {
      number: "800+",
      label: "Projects Completed",
      description: "Successful deliveries across various industries"
    },
    {
      number: "30+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    }
  ];

  const clientStats = [
    {
      category: "Fortune 500",
      count: "50+",
      description: "Leading enterprises trust our solutions"
    },
    {
      category: "Startups",
      count: "200+",
      description: "Helping innovative companies scale"
    },
    {
      category: "Mid-market",
      count: "300+",
      description: "Growing businesses we've empowered"
    },
    {
      category: "Government",
      count: "25+",
      description: "Public sector digital transformation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Stats */}
        <div className="text-center mb-20">
          <h2 className="second-level-title mb-6">
            ITRANSITION AT A GLANCE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            With over two decades of experience, we&apos;ve built a reputation for delivering 
            exceptional software solutions that drive business growth and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="first-level-title text-blue-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="third-level-title mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Stats */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="second-level-title mb-6">
              CLIENTS SERVED
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with organizations of all sizes, from innovative startups to 
              Fortune 500 companies, helping them achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStats.map((client, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {client.count}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {client.category}
                </h3>
                <p className="text-gray-600 text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 text-center">
          <h3 className="second-level-title mb-12">
            SUCCESS METRICS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <h4 className="text-lg font-semibold mb-2">Client Satisfaction</h4>
              <p className="text-gray-600">Consistently high ratings from our clients</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <h4 className="text-lg font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-gray-600">Projects delivered within agreed timelines</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <h4 className="text-lg font-semibold mb-2">Long-term Partnerships</h4>
              <p className="text-gray-600">Clients who continue working with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;