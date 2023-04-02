const bcrypt = require('bcrypt');
const { error } = require('console');

const hashedPassword = await bcrypt.hash(req.body.password,12);
const user = { name: req.body.username, password:hashedPassword };
const result = await bcrypt.compare(password, user.password);

try {
    if(result == true){
        console.log(`Login successful! Welcome ${user.name}`);
    } else {
        console.log('Login Failed');
    }
} catch (error) {
    console.log("Something went wrong.", error)
}

// cookie code

const cookieSession = require('cookie-session')

appendFile.use(cookieSession({
    name: 'session',
    sameSite:'strict',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000
}))

app.use(cors({
    origin:`http:localhost:${process.env.PORT}`,
    credentials: true
}))