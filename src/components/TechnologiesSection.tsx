import React from 'react';
import Link from 'next/link';

const TechnologiesSection = () => {
  const technologies = [
    {
      category: "Frontend",
      description: "Modern frontend frameworks and libraries for exceptional user experiences",
      techs: [
        { name: "React", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Vue.js", icon: "💚" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" }
      ]
    },
    {
      category: "Backend",
      description: "Robust server-side technologies for scalable applications",
      techs: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: ".NET", icon: "🔷" },
        { name: "PHP", icon: "🐘" },
        { name: "Go", icon: "🔵" }
      ]
    },
    {
      category: "Mobile",
      description: "Cross-platform and native mobile development solutions",
      techs: [
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "iOS", icon: "🍎" },
        { name: "Android", icon: "🤖" },
        { name: "Xamarin", icon: "🔧" },
        { name: "Ionic", icon: "⚡" }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Modern cloud infrastructure and deployment solutions",
      techs: [
        { name: "AWS", icon: "☁️" },
        { name: "Azure", icon: "🔷" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚙️" },
        { name: "Jenkins", icon: "🔧" },
        { name: "Terraform", icon: "🏗️" }
      ]
    },
    {
      category: "Databases",
      description: "Reliable data storage and management solutions",
      techs: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "Elasticsearch", icon: "🔍" },
        { name: "Oracle", icon: "🔶" }
      ]
    },
    {
      category: "AI & ML",
      description: "Artificial intelligence and machine learning technologies",
      techs: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "OpenAI", icon: "🤖" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="second-level-title mb-6">
            TECHNOLOGY EXPERTISE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver 
            innovative solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((category) => (
            <div key={category.category} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="third-level-title mb-4 text-blue-600">
                {category.category}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-2 p-2 bg-white rounded-md">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trending Technologies */}
        <div className="bg-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="second-level-title mb-6">
              TRENDING TECHNOLOGIES
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the curve with our expertise in emerging technologies 
              that are shaping the future of software development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Blockchain", icon: "⛓️" },
              { name: "IoT", icon: "🌐" },
              { name: "AR/VR", icon: "🥽" },
              { name: "Edge Computing", icon: "⚡" },
              { name: "Quantum", icon: "🔬" },
              { name: "5G", icon: "📡" }
            ].map((trend, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{trend.icon}</div>
                <div className="font-semibold text-gray-800">{trend.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="third-level-title mb-6">
            Ready to leverage the right technology stack for your project?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Our technology experts will help you choose the best tools and frameworks 
            to achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technologies" className="main-button main-button-blue">
              <span className="main-button-label">Explore Technologies</span>
            </Link>
            <Link href="/contact" className="main-button outlined">
              <span className="main-button-label text-blue-600">Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;