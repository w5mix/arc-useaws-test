## Steps to reproduce

---

### **Setup**

clone repo and deploy the app: `npx arc deploy`

---

### **First**: Confirm Arc stores to Dynalite

- Set `useAWS` in prefs.arc set to `false`

- run `npm run start` and navigate to `http://localhost:3333/`

- Arc stores and retrieves dynamo record from local dynalite instance

---

### **Second**: Confirm Arc fails to store to AWS table

**WITHOUT RESTARTING ARC DEV MODE**

- Set `useAWS` in prefs.arc set to `true` and save.

- Navigate to `http://localhost:3333/`

- Arc fails to store dynamo record in AWS table with `ResourceNotFoundException`

---

### **Third**: Confirm setting useAWS to **false** allows Arc to store to AWS table

**WITHOUT RESTARTING ARC DEV MODE**

- Set `useAWS` in prefs.arc set to `false` and save.

- Navigate to `http://localhost:3333/`

- Arc stores and retrieves dynamo record from AWS table

- Verify by going to AWS Dynamo console and looking at items in the table
