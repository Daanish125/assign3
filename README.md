# Criminal Risk Assessment Form - Manitoba Families

This repository contains a **Criminal Risk Assessment Request Form** built using **PUG (formerly Jade)** templating. It is intended for use by the **Manitoba Families – Criminal Risk Assessment Unit**, to assist in gathering essential personal and consent information for criminal risk evaluations under the Child and Family Services Act.

## 📝 Purpose

The form facilitates:
- Consent collection for criminal background checks.
- Submission of personal identification and agency information.
- Structured data collection for Child Protection Branch staff.
- Use in compliance with section 18.4(1.1) of the CFS Act.

## 📁 Project Structure

/ ├── views/ │ └── criminal-risk-assessment-form.pug # Main PUG template ├── public/ │ └── styles.css # (Optional) Separate stylesheet ├── README.md # You're here!


> Note: All styling is currently embedded within the PUG file using inline `<style>` for simplicity.

## 🚀 Getting Started

To render and use this PUG file in a Node.js/Express environment:

### 1. Install Dependencies

```bash
npm init -y
npm install express pug


