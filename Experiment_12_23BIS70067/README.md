# 🎟️ Concurrent Ticket Booking System Using Express.js

## 📌 Objective
Build a ticket booking API using **Node.js** and **Express.js** that safely handles concurrent seat reservations using a locking mechanism.  
This project helps you understand:
- In-memory state management  
- Concurrency control  
- Designing APIs that prevent race conditions  

---

## 🚀 Features
- View all available seats  
- Temporarily lock a seat for a user  
- Confirm a booking for a locked seat  
- Prevent double booking with a seat locking mechanism  
- Automatically expire locks after **1 minute**  
- Clear success and error messages for all scenarios  
- In-memory data structure for simplicity  
- RESTful API with proper HTTP methods and JSON responses  

---

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) installed  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

---

## ▶️ Getting Started

### Step 1: Run the Server
```bash
node index.js

<img width="546" height="115" alt="image" src="https://github.com/user-attachments/assets/797eea73-6f4e-4dc2-8aac-fd253f2ac756" />

### Step 2: Postman Screenshots:

<img width="707" height="623" alt="Screenshot 2025-09-27 225143" src="https://github.com/user-attachments/assets/1ca96fa3-7b7a-4518-8ed6-7f115dcc536c" />
<img width="605" height="773" alt="Screenshot 2025-09-27 225118" src="https://github.com/user-attachments/assets/cc645347-e61c-4417-a869-a93575a3ba60" />
<img width="591" height="605" alt="Screenshot 2025-09-27 225031" src="https://github.com/user-attachments/assets/3c5986dd-573f-455e-a7fb-5cbb066eeca9" />
<img width="593" height="715" alt="Screenshot 2025-09-27 224947" src="https://github.com/user-attachments/assets/890236f9-3bbb-46ba-980c-97e2dfcfac7a" />
<img width="562" height="836" alt="Screenshot 2025-09-27 224833" src="https://github.com/user-attachments/assets/83f0ae06-d378-4040-8e30-faaedeea8f59" />


