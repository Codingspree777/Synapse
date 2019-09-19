# Synapse - Simple Banking
Welcome to Simple Banking.  This a full-stack demo APP with node.js on the backend. 

1) Fork this github
2) npm install
3) npm run start (starts up the local server)
4) npm run dev-client
5) Open up Chrome browser to localhost:8080 or if busy, then it's whatever your teminal assigns. 
6) Currently the feature to create new user is not available. Please login with the creditials below.

    Email: admin@example.com
    
    Password: admin


demo video:  https://youtu.be/HCFs9sp9BC0



Author's note -
I ran into a CORS issue while fetching for Synapse APIs from the client-side only. Thus, the server is now fetching Synapse API routes at ./server/routes/apiRoutes.js