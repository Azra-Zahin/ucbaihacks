import express from "express";
import mongooes from "mongoose";
import cors from "cors";
const {MongoClient} = require('mongodb')

// dbCard make module import
import Cards from "./dbCards.js";

// TODO: app config --->
const app = express();
const port = process.env.PORT || 8001;

const connection_url =
  "mongodb+srv://farouqalsalih:xANbYKCaDosb8jrQ@cluster0.kypk4dc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// TODO: middleware --->
app.use(express.json());
app.use(cors());

// TODO: db config --->
mongooes.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// TODO: api endpoint --->
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Sign up to the Database
app.post('/signup', async (req, res) => {
  const client = new MongoClient(connection_url)
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
          password: hashedPassword
      }

      const insertedUser = await users.insertOne(data)

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


app.post('/login', async (req, res) => {
  const client = new MongoClient(connection_url)
  const {email, password} = req.body

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const user = await users.findOne({email})

      // const correctPassword = await bcrypt.compare(password, user.hashed_password)

      if (user && user.password) {
          // const token = jwt.sign(user, email, {
          //     expiresIn: 60 * 24
          // })
          res.status(201).json({message: "Logged in successfully"})
      }

      res.status(400).json('Invalid Credentials')

  } catch (err) {
      console.log(err)
  } finally {
      await client.close()
  }
})


// Update a User in the Database
app.put('/user', async (req, res) => {
  const client = new MongoClient(connection_url)
  const formData = req.body.formData

  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('users')

      const query = {user_id: formData.user_id}

      const updateDocument = {
          $set: req.body
      }

      const insertedUser = await users.updateOne(query, updateDocument)

      res.json(insertedUser)

  } finally {
      await client.close()
  }
})

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// TODO: listener --->
app.listen(port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log(`Listening on localhost: http://localhost:${port}`);
  }
});
