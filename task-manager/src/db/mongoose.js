const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/task-manager-api');

const User = mongoose.model('User', { name: String,age:Number });

const mfa = new User({ name: 'MFA',age:24 });
mfa.save().then(() => console.log('Hi!'));