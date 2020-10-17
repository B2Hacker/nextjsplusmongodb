import faker from 'faker'
import Note from './models/Note' 


// create array of notes then seed database

export const seedNote = async () => {
    try {
        //How many notes I want
        const quantity = 10;
        //Empty array of data to store new data
        let notes = [];

        for (let i = 0; i < quantity; i++) {
            notes.push(
                new Note({
                    title: faker.lorem.word(),
                    description: faker.lorem.sentence()
                })
            )
        }
        //removes notes from databse, before we add more
        await Note.remove()
        
        //creates new database entries for each note in the array
		notes.forEach(note => {
			Note.create(note)
		})
		console.log('Users Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

//seedNote();