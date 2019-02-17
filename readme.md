# SEiR Wheel of Death

Getting up to speed to work on this:
1. npm install - install all dependencies (note, if you don't have nodemon globally installed you'll need to add it)
2. npm run seed - generate dummyData.json file for dev purposes
3. npm run build
4. npm run start
5. http://localhost:3000

I've set up 3 options so far, pick a random student, pick the least called on student, and view all students.
These functions are basic and will need to be retooled, they're largely placeholders till we build out the back end.

Server has one route set up, it fetches data from the generated dummyData.json file. See dummy.js in /server if you want to see how it works. I tried to simulate how I imagined the shape of the data would be when the DB is fully built out.

The fetch request on the client side sorts the data and stores it in state. From there you can explore the app.

## To Do:

#### Front End
1. All Students Page
- [x] Limit # of student cards rendered when loading
- [x] Implement pagination 
- [ ] Add sort/filter options
- [x] Build search component to search for specific students
- [ ] Modify fetch to check if ProfilePic is included, or else set a default pic
- [x] Convert to class component for modularity

2. General
- [ ] CSS Styling, general flair
- [ ] Write more tests! 
- [ ] Also fix tests I've broken by changing things.
- [ ] Set up CircleCI integration

3. Optional Front End To Do
- [ ] Add tap to confirm call on student (increment timesCalled counter)
- [ ] Wheel animation


#### Back End
- [ ] Build out DB (redis)
- [ ] Add API routes for patch/update
- [ ] Add method for uploading .csv/.tsv files to populate DB with new class

