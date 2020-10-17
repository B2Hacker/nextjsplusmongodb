import faker from 'faker'
import Note from './models/Note' 

export const seedNote = async () => {
    try {
        const quantity = 10;
        let notes = [];

        for (let i = 0; i < quantity; i++) {
            notes.push(
                new Note({
                    title: faker.lorem.word(),
                    description: faker.lorem.sentence()
                })
            )
        }
        await Note.remove()
		
		notes.forEach(note => {
			Note.create(note)
		})
		console.log('Users Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

//seedNote();