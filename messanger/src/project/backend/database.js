import mongodb, { ObjectID } from 'mongodb';

const CONNECTION_STRING = 'mongodb://192.168.1.4';


function getId() {
    const objectid = ObjectID();
    return objectid.toHexString();
}

class DataBase {
    async getDB() {
        if (this.db) {
            return this.db;
        }
        const connection = await mongodb.MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true });
        const db = connection.db('people_mohamadreza_db');
        this.db = {
            people: db.collection('people'),
            user: db.collection('user'),
        }
        return this.db;
    }

    async getPeople() {
        const db = await this.getDB();
        return db.people.find().toArray();
    }

    async insertPerson(person) {
        const db = await this.getDB();
        const newItem = { _id: getId(), ...person };
        db.people.insert(newItem);
        return newItem;
    }
}

export default DataBase;