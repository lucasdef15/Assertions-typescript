# Exercises Of class

1. Define an interface Person with the following properties:

- firstName (string)
- lastName (string)
- age (number)
- email (string)

2. Create a function getFullName that takes a Person object as input and returns the person's full name as a string (i.e. first name and last name concatenated together).

3. Define a type alias RGBColor that represents a color as an array of three numbers (red, green, and blue) between 0 and 255.

4. Create a function convertToHex that takes an RGBColor object as input and returns a string representing the color in hexadecimal format. For example, [255, 128, 0] should be converted to "ff8000".

5. Define an interface Animal with the following properties:

- species (string)
- name (string)
- age (number)
- isPet (boolean)

6. Create a function makeSound that takes an Animal object as input and logs the sound that the animal makes to the console. If the animal is a pet (i.e. isPet is true), the sound should be "meow" for cats and "woof" for dogs. Otherwise, the sound should be "roar" for any other species.

7. Define a type alias Task that represents a task object with the following properties:

- title (string)
- description (string)
- dueDate (Date)
- isComplete (boolean)

8. Create a function filterCompletedTasks that takes an array of type Task[] as input and returns a new array containing only the tasks that are marked as complete (i.e. isComplete is true).
