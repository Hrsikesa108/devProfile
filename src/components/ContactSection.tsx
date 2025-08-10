import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "c108aravind@gmail.com",
      href: "mailto:c108aravind@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94904 26426",
      href: "tel:+919490426426"
    }
  ];

  // const socialLinks = [
  //   { icon: Github, href: "https://github.com", label: "GitHub" },
  //   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  //   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  // ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="contact">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="section-title text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're a fellow developer 
              wanting to collaborate, don't hesitate to reach out.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center p-4 glass-card hover-lift">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-full mr-4">
                      <Icon className="w-5 h-5 text-pulse-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="text-gray-900 font-medium">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            {/* <div>
              <h4 className="text-lg font-display font-semibold text-gray-900 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-pulse-600 hover:border-pulse-500 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-card p-6">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Send a Message
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project discussion"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <Button type="submit" className="w-full button-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;