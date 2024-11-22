const {username,password}= process.env;
 export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.siosv.mongodb.net/Task?retryWrites=true&w=majority&appName=Cluster0";