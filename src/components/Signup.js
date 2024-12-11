import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();

  const validatePasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[@$!%*?&]/.test(password);

    if (lengthCriteria && uppercaseCriteria && numberCriteria && specialCharCriteria) {
      setPasswordStrength("Strong");
    } else if (lengthCriteria && (uppercaseCriteria || numberCriteria || specialCharCriteria)) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") validatePasswordStrength(value);

    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const passwordRequirements =
      "Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.";

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.password) newErrors.password = passwordRequirements;
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:2003/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed.");
        return;
      }

      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {passwordStrength && (
            <span style={styles.passwordStrength[passwordStrength]}>
              Password strength: {passwordStrength}
            </span>
          )}
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmPassword && (
            <span style={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Admin">Admin</option>
            <option value="DataAnalyst">Data Analyst</option>
            <option value="FoodDonor">Food Donor</option>
            <option value="RecipientOrganization">
              Recipient Organization
            </option>
          </select>
        </div>
        <button
          type="submit"
          style={{ ...styles.button, ...(errors.name || errors.email ? styles.disabledButton : {}) }}
          disabled={Object.keys(errors).length > 0}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "450px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f4f6f8",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
  },
  disabledButton: {
    opacity: "0.7",
    cursor: "not-allowed",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  passwordStrength: {
    Strong: { color: "green", fontSize: "12px", marginTop: "5px" },
    Moderate: { color: "orange", fontSize: "12px", marginTop: "5px" },
    Weak: { color: "red", fontSize: "12px", marginTop: "5px" },
  },
};

export default Signup;
