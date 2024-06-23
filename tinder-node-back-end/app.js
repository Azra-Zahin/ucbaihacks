import express from "express";
import cors from "cors";
import { MongoClient , ObjectId } from 'mongodb';

// TODO: app config --->
const app = express();
const port = process.env.PORT || 8001;

// const connection_url =
  // "mongodb+srv://farouqalsalih:xANbYKCaDosb8jrQ@cluster0.kypk4dc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = "mongodb://localhost:27017"; // Specify the port only here if it's non-default
const client = new MongoClient(uri);
  

// TODO: middleware --->
app.use(express.json());
app.use(cors());


// TODO: api endpoint --->
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Sign up to the Database
app.post('/signup', async (req, res) => {
  // const client = new MongoClient(connection_url)
  const {name, email, password} = req.body

  // const generatedUserId = uuidv4()
  // const hashedPassword = await bcrypt.hash(password, 10)

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const existingUser = await users.findOne({email})

      if (existingUser) {
          return res.status(409).send('User already exists. Please login')
      }

      const sanitizedEmail = email.toLowerCase()

      const data = {
          name: name,
          email: sanitizedEmail,
          password: password
      }

      await users.insertOne(data)

      // const token = jwt.sign(insertedUser, sanitizedEmail, {
      //     expiresIn: 60 * 24
      // })
      res.status(201).json({message: "Successfully added user into database"})

  } catch (err) {
      console.log(err)
  } finally {
      await client.close()
  }
})


app.get('/matches', async (res) => {
  // const client = new MongoClient(connection_url)

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const user = await users.get({matches})

      const rl = []
      for (match in matches) {
        const query = {user_id: userId}
        const user = await users.findOne(query)

        rl.insertOne(
          {
            "match" : match,
            "name" : user.name,
            "email" : user.email
          }
        )
      }

      res.send(rl)

  } catch (err) {
      console.log(err)
  } finally {
      await client.close()
  }
})


app.post('/like', async (req, res) => {
  // const client = new MongoClient(connection_url)
  const {uID, uIDTwo, Decision} = req.body 

  try {
    await client.connect()
    const database = client.db('app-data')
    const interactions = database.collection('interactions')

    interactions.insertOne({
      "uID" : uID,
      "uIDTwo" : uIDTwo,
      "Decision" : Decision
    })

    const interaction = await interactions.findOne({"uID": uIDTwo, "uIDTwo": uID})
    if (interaction == null) {
      res.status(201).json({message: "Successful interaction"})
    } else {
      const users = database.collection("users")
      const query = {"_id": uID}
      const updateDocument = {
          $push: {matches: {"_id": uIDTwo}}
      }
      const user = await users.updateOne(query, updateDocument)
    }
  } catch (err) {
      console.log(err)
  } finally {
      await client.close()
  }
})


app.post('/login', async (req, res) => {
  // const client = new MongoClient(connection_url)
  const {email, password} = req.body

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const user = await users.findOne({email})

      // const correctPassword = await bcrypt.compare(password, user.hashed_password)

      if (password && user.password) {
          // const token = jwt.sign(user, email, {
          //     expiresIn: 60 * 24
          // })
          res.status(201).json({message: "Logged in successfully", user_id: user._id.toString()})
      } else {
        res.status(400).json('Invalid Credentials')

      }


  } catch (err) {

      console.log(err)
  } finally {
      await client.close()
  }
})

// Get individual user
app.get('/user', async (req, res) => {
  // const client = new MongoClient(uri)
  const userId = req.body._id

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const query = {"_id": new ObjectId(userId)}
      const user = await users.findOne(query)
      res.status(201).json(user)

  } finally {
      await client.close()
  }
})

// Update a User in the Database
app.put('/user', async (req, res) => {
  // const client = new MongoClient(connection_url)

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')
      print("here")

      const query = {_id: new ObjectId(req.body._id)}

      const updateDocument = {
          $set: req.body
      }

      const insertedUser = await users.updateOne(query, updateDocument)
      res.status(201).json(insertedUser)

  } finally {
      await client.close()
  }
})

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});