// src/pages/HomePage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";
import { motion } from "framer-motion";
import { Button, Chip, Card, CardContent } from "@mui/material";
import { ShieldCheck, Users, CheckCircle } from "lucide-react";
import backgroundImage from "../assets/sports-car.png";

const HomePage: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav aria-label="Main navigation">
        <Navbar />
      </nav>

      <nav aria-label="main-content">
        {/* Hero Section */}
        <section
          id="hero"
          aria-hidden="true"
          className="relative pt-16 min-h-screen flex items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Chip
                label="Limited Time Offer"
                color="primary"
                className="!mb-6 !font-semibold !text-white"
              />
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Drive Your Dream Car Today
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Discover exclusive deals on premium vehicles. Join thousands of
                satisfied customers who found their perfect car with us.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    aria-label="Register for the DreamCars campaign"
                    variant="contained"
                    onClick={scrollToForm}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: "600",
                      bgcolor: "#2563eb",
                      "&:hover": { bgcolor: "#1d4ed8" },
                    }}
                  >
                    Register Now - Free
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#fff",
                      borderColor: "#fff",
                      "&:hover": { bgcolor: "#fff", color: "#1d4ed8" },
                    }}
                  >
                    View Inventory
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Why Choose DreamCars?
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide the best car buying experience with unmatched service
                and premium vehicles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Quality",
                  description:
                    "Every vehicle undergoes rigorous inspection and comes with our quality guarantee.",
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  description:
                    "Our experienced team guides you through every step of your car buying journey.",
                },
                {
                  icon: CheckCircle,
                  title: "Best Deals",
                  description:
                    "Competitive pricing and exclusive offers you won't find anywhere else.",
                },
              ].map((feature, index) => (
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <div
                    role="group"
                    aria-labelledby={`feature-${index}`}
                    className="px-4 pt-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4"
                    >
                      <feature.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h6 className="font-heading text-lg font-semibold">
                      {feature.title}
                    </h6>
                  </div>
                  <CardContent>
                    <p className="font-body text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section
          id="registration-form"
          aria-labelledby="registration-form-heading"
          className="bg-gray-100 py-20"
        >
          <div className="max-w-3xl mx-auto px-6">
            <RegistrationForm />
          </div>
        </section>
      </nav>

      {/* Footer */}
      {/* Footer */}
      <motion.footer
        role="contentinfo"
        aria-label="Website footer"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-primary text-primary-foreground py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">DreamCars</h3>
              <p className="font-body text-primary-foreground/80">
                Your trusted partner in finding the perfect vehicle.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <nav aria-label="Quick Links">
                <ul className="font-body space-y-2 text-primary-foreground/80">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Inventory
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Financing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Trade-In
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Support</h4>
              <nav aria-label="Support Links">
                <ul className="font-body space-y-2 text-primary-foreground/80">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
              <div className="font-body space-y-2 text-primary-foreground/80">
                <p>📞 1-800-DREAM-CAR</p>
                <p>✉️ info@dreamcars.com</p>
                <p>📍 123 Auto Plaza, Car City, CC 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-body text-primary-foreground/80">
              © 2025 DreamCars. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomePage;
