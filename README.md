## Steps to reproduce

---

### **Setup**

clone repo and deploy the app: `npx arc deploy`

---

### **First**: Confirm Arc fails to store to AWS table

- Set `useAWS` in prefs.arc to `true`

- run `npm run start` and navigate to `http://localhost:3333/`

- Arc fails to store dynamo record in AWS table with `ResourceNotFoundException`

---

### **Second**: Confirm setting useAWS to **false** allows Arc to store to AWS table

**WITHOUT RESTARTING ARC DEV MODE**

- Set `useAWS` in prefs.arc to `false` and save. (Sandbox reloads)

- Navigate to `http://localhost:3333/`

- Arc stores and retrieves dynamo record from AWS table

- Verify by going to AWS Dynamo console and looking at items in the table
