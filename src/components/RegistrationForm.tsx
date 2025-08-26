import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { RegistrationFormValues } from "../types/form"
import { motion } from "framer-motion"
// import { Card, CardHeader } from "@mui/material"

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<RegistrationFormValues>({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Partial<RegistrationFormValues>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[0-9][\d]{0,15}$/.test(form.phone.replace(/[\s\-$$$$]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!validateForm()) return
  
    setIsSubmitting(true)
  
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
  
    // Get existing array or start with an empty one
    const existingData = JSON.parse(localStorage.getItem("registrationData") || "[]")
  
    const updatedData = Array.isArray(existingData) ? existingData : []
  
    updatedData.push(form)
  
    // Save the updated array back
    localStorage.setItem("registrationData", JSON.stringify(updatedData))
  
    navigate("/success")
  }
  

  return (
    // {/* Registration Form Section */}
    <>
    {/* Registration Form Section */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    > 
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
        Start Your Journey Today
      </h2>
      <p className="font-body text-lg text-muted-foreground">
        Register now to get exclusive access to our premium inventory and special offers.
      </p>
    </motion.div>
  
    {/* Form Card */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto"
    >
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="font-heading text-center text-xl font-semibold mb-2">
          Get Exclusive Access
        </h3>
        <p className="font-body text-center text-muted-foreground mb-6">
          Join over 10,000 satisfied customers who found their perfect car with us.
        </p>
  
        <form onSubmit={handleSubmit} id="registration-form" className="space-y-6">
          {/* Name */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <label className="font-body block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full border p-3 rounded font-body ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 font-body">{errors.name}</p>
            )}
          </motion.div>
  
          {/* Email */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <label className="font-body block">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full border p-3 rounded font-body ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 font-body">{errors.email}</p>
            )}
          </motion.div>
  
          {/* Phone */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <label className="font-body block">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`w-full border p-3 rounded font-body ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 font-body">{errors.phone}</p>
            )}
          </motion.div>
  
          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent bg-blue-500 hover:bg-accent/90 text-white text-accent-foreground font-semibold py-3 rounded-lg text-lg transition"
            >
              {isSubmitting ? "Registering..." : "Register Now - It's Free!"}
            </button>
          </motion.div>
  
          <p className="text-sm text-muted-foreground text-center font-body">
            By registering, you agree to our Terms of Service and Privacy Policy.  
            No spam, unsubscribe anytime.
          </p>
        </form>
      </div>
    </motion.div>
  </>
  
  )
}

export default RegistrationForm
