import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Background Elements - making them more subtle */}
      <div className="absolute inset-0 bg-grid-black/[0.015] -z-10" />
      <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-blue-500/[0.015] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/[0.015] rounded-full blur-3xl -z-10" />

      {/* Hero Section - improved typography and spacing */}
      <section className="pt-40 pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="inline-flex items-center text-[13px] text-blue-600 font-medium px-4 py-1.5 bg-blue-50 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                New Feature
              </span>
              <span className="inline-flex items-center text-[13px] text-purple-600 font-medium px-4 py-1.5 bg-purple-50 rounded-full">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                AI-Powered
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Transform Your Data Into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-3 leading-[1.15] pb-1">
                Actionable Insights
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-2xl mx-auto font-normal leading-relaxed">
            Make data-driven decisions faster than ever with our cutting-edge analytics platform.
          </p>
          <div className="flex gap-5 justify-center items-center flex-col sm:flex-row mb-20">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-14 text-[15px] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-[15px] transition-all duration-300 hover:scale-105 group border-2">
              <svg className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - improved card design */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-12 bg-blue-600/70"></span>
              <span className="text-blue-600 text-sm font-medium px-4 py-1.5 bg-blue-50 rounded-full">
                Features
              </span>
              <span className="h-px w-12 bg-blue-600/70"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6 leading-[1.15] pb-1">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you manage, analyze, and optimize your data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8">
                <CardHeader className="p-0">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Integration Logos */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-blue-50 rounded-full">
              Trusted Worldwide
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Trusted by industry leaders
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies using DataSense to transform their business
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
            <LogoSection />
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-blue-50 rounded-full">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Simple, yet powerful
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(100%_-_3rem)] w-[calc(100%_-_3rem)] h-px bg-gradient-to-r from-blue-100 to-purple-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - improved layout and emphasis */}
      <section className="py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-medium px-4 py-1.5 bg-blue-50 rounded-full">
              Testimonials
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] pb-1">
              Loved by businesses worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-blue-600">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-medium px-4 py-1.5 bg-blue-50 rounded-full">
              Pricing
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] pb-1">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`rounded-2xl p-10 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl scale-105 relative overflow-hidden' 
                  : 'bg-white text-gray-900 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300'
              }`}>
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-white/20 px-4 py-1.5 text-sm font-medium text-white rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`${plan.featured ? 'text-white/80' : 'text-gray-500'} text-lg`}>/month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className={`w-6 h-6 ${plan.featured ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${plan.featured ? 'text-white/90' : 'text-gray-600'} text-base`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-full h-14 text-[15px] ${
                    plan.featured 
                      ? 'bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-all duration-300 hover:scale-105`}
                >
                  {plan.featured ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-95" />
        <div className="absolute inset-0 bg-grid-white/[0.075]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-14 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.15] pb-1">
              Ready to transform your business?
            </h2>
            <p className="text-2xl text-white/90 mb-10 font-light">
              Join thousands of companies already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-[15px] bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Now
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-[15px] bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Table */}
      <section className="py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-medium px-4 py-1.5 bg-blue-50 rounded-full">
              Compare
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] pb-1">
              Full Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our plans
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-6 px-8 text-left text-lg font-semibold text-gray-900">Features</th>
                  {pricingPlans.map((plan, index) => (
                    <th key={index} className="py-6 px-8 text-left">
                      <span className="text-lg font-bold text-gray-900 block mb-1">
                        {plan.name}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        ${plan.price}/month
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-150">
                    <td className="py-6 px-8 text-gray-900 font-medium">{feature.name}</td>
                    {feature.availability.map((isAvailable, planIndex) => (
                      <td key={planIndex} className="py-6 px-8">
                        {isAvailable ? (
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">Yes</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-400">No</span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-28 px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-medium px-4 py-1.5 bg-blue-50 rounded-full">
              FAQ
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] pb-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed ml-10">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "100K+", label: "Users" },
  { value: "50M+", label: "Data Points" },
];

const steps = [
  {
    title: "Connect Your Data",
    description: "Easily integrate with your existing data sources and tools in minutes.",
  },
  {
    title: "Analyze & Learn",
    description: "Our AI automatically processes and analyzes your data for insights.",
  },
  {
    title: "Take Action",
    description: "Make informed decisions based on clear, actionable recommendations.",
  },
];

const features = [
  {
    title: "Real-time Analytics",
    description:
      "Get instant insights with our real-time data processing and analytics engine",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Predictions",
    description:
      "Leverage machine learning to predict trends and make informed decisions",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Custom Dashboards",
    description:
      "Create personalized dashboards that show the metrics that matter to you",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and platforms with just a few clicks",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Advanced Security",
    description:
      "Enterprise-grade security with end-to-end encryption and compliance",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Our expert support team is always available to help you succeed",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "DataSense has transformed how we analyze our data. The AI-powered insights have helped us make better decisions faster than ever before."
  },
  {
    author: "Michael Chen",
    role: "Data Scientist at Analytics Co",
    content: "The real-time analytics capabilities are incredible. We've seen a 40% improvement in our response time to market changes."
  },
  {
    author: "Emily Rodriguez",
    role: "CEO at StartupX",
    content: "The platform is intuitive yet powerful. It's helped us scale our data operations without scaling our team size."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "Up to 10,000 data points",
      "Basic analytics",
      "24/7 support",
      "1 team member"
    ]
  },
  {
    name: "Professional",
    price: "99",
    featured: true,
    features: [
      "Up to 100,000 data points",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom dashboards"
    ]
  },
  {
    name: "Enterprise",
    price: "249",
    features: [
      "Unlimited data points",
      "AI-powered insights",
      "Dedicated support",
      "Unlimited team members",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
];

const comparisonFeatures = [
  {
    name: "Real-time Analytics",
    availability: [true, true, true]
  },
  {
    name: "Custom Dashboards",
    availability: [false, true, true]
  },
  {
    name: "AI Predictions",
    availability: [false, false, true]
  },
  {
    name: "API Access",
    availability: [false, true, true]
  },
  {
    name: "Custom Integrations",
    availability: [false, false, true]
  },
  {
    name: "24/7 Support",
    availability: [true, true, true]
  }
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial includes all Professional plan features. No credit card required. Simply sign up and start exploring our platform."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate your billing."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 email support for all plans, with priority phone and video support for Professional and Enterprise plans."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use enterprise-grade encryption and follow strict security protocols. Your data is stored in SOC 2 compliant data centers."
  }
];

const LogoSection = () => (
  <>
    {/* Microsoft */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 24 24" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623" fill="#00A4EF"/>
        </svg>
      </div>
    </div>
    {/* Google */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 272 92" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
          <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
          <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
          <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
        </svg>
      </div>
    </div>
    {/* Slack */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 54 54" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <g fill="none" fillRule="evenodd">
            <path fill="#36C5F0" d="M19.712.133a5.381 5.381 0 0 0 0 10.76h5.381V5.512A5.381 5.381 0 0 0 19.712.133m0 14.347H5.382a5.381 5.381 0 0 0 0 10.76h14.33a5.381 5.381 0 0 0 0-10.76"/>
            <path fill="#2EB67D" d="M53.76 19.712a5.381 5.381 0 0 0-10.76 0v5.381h5.38a5.381 5.381 0 0 0 5.38-5.381m-14.33 0V5.382a5.381 5.381 0 0 0-10.76 0v14.33a5.381 5.381 0 0 0 10.76 0"/>
            <path fill="#ECB22E" d="M34.048 53.76a5.381 5.381 0 0 0 0-10.76h-5.381v5.38a5.381 5.381 0 0 0 5.381 5.38m0-14.33h14.33a5.381 5.381 0 0 0 0-10.76h-14.33a5.381 5.381 0 0 0 0 10.76"/>
            <path fill="#E01E5A" d="M.133 34.048a5.381 5.381 0 0 0 10.76 0v-5.381H5.512A5.381 5.381 0 0 0 .133 34.048m14.33 0v14.33a5.381 5.381 0 0 0 10.76 0v-14.33a5.381 5.381 0 0 0-10.76 0"/>
          </g>
        </svg>
      </div>
    </div>
    {/* Meta */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 36 36" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path fill="#0866FF" d="M18 0C8.059 0 0 8.059 0 18c0 8.997 6.584 16.46 15.197 17.802V23.25h-4.572V18h4.572v-3.969c0-4.509 2.688-7.031 6.844-7.031 1.969 0 4.031.35 4.031.35v4.438h-2.281c-2.25 0-2.953 1.397-2.953 2.828V18h5.031l-.797 5.25h-4.234v12.552C29.416 34.46 36 26.997 36 18c0-9.941-8.059-18-18-18z"/>
        </svg>
      </div>
    </div>
    {/* Apple */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 814 1000" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="#000000"/>
        </svg>
      </div>
    </div>
    {/* Amazon */}
    <div className="flex items-center justify-center w-full">
      <div className="w-32 h-12 relative">
        <svg viewBox="0 0 448 512" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path fill="#FF9900" d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/>
        </svg>
      </div>
    </div>
  </>
);

const metrics = [
  { value: "$2.5B+", label: "Data processed daily" },
  { value: "45+", label: "Countries supported" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24/7", label: "Enterprise support" }
];
