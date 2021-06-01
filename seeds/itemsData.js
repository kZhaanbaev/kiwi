const { Item } = require('../models');

const itemData = [
  {
    name: 'Faux Bow',
    description: 'Shoots Over 100 Feet - Foam Bow & Arrow Archery Set (Lizardite)',
    price: 34.99,
    image: 'faux-bow.jpg',
    rating: 4,
    department_id: 4,
    seller: 'John Wick',
    quantity: 50,
  },
  {
    name: 'Munchkin Fishing Bath Toy',
    description: `Bath toy set contains (1) magnetic fishing rod and (3) underwater bobbing characters
        Characters float with magnets on top for easy fishing
        Characters are air tight, helping to limit mold and mildew
        Magnetic bobbers help develop hand eye coordination
        Suitable for little boys and girls 24 months and up; Care and cleaning: Rinse with warm water, wipe clean, hand wash, air dry`,
    price: 7.73,
    image: 'fishing-bath-toy.jpg',
    rating: 4,
    department_id: 4,
    seller: 'Aquaman Jr Ocean',
    quantity: 124,
  },
  {
    name: 'Super Mario Party',
    description: `Outwit friends and family as you race across the board; whoever gets the most stars wins!
        Play the original 4-player Mario Party series board game mode locally* or online**
        Character-specific Dice Blocks with alternate numberings add another level to your strategy
        Dozens of exciting minigames packed with wildly different challenges—now with newly-added online*** play
        Pair two Nintendo Switch systems, lay them flat, and creatively combine both screens to enjoy a different, interactive style of tabletop gaming in Toad’s Rec Room mode`,
    price: 34.99,
    image: 'super-mario-party.jpg',
    rating: 5,
    department_id: 1,
    seller: 'Nintendo',
    quantity: 6,
  },
  {
    name: 'MOSTOP 3D & 2D Arcade Video Game Console',
    description: '2680 Games in 1 Pandora\'s Box 180 3D Games 1080P HD 2 Players Arcade Machine with Double Joystick Support Expand 6000+ Games',
    price: 235.99,
    image: 'mostop-3d.jpg',
    rating: 4,
    department_id: 1,
    seller: 'Jet Li',
    quantity: 1,
  },
  {
    name: 'Faux Bow',
    description: 'Shoots Over 100 Feet - Foam Bow & Arrow Archery Set (Lizardite)',
    price: 34.99,
    image: 'faux-bow.jpg',
    rating: 4,
    department_id: 2,
    seller: 'John Wick',
    quantity: 50,
  },
  {
    name: 'Faux Bow',
    description: 'Shoots Over 100 Feet - Foam Bow & Arrow Archery Set (Lizardite)',
    price: 34.99,
    image: 'faux-bow.jpg',
    rating: 4,
    department_id: 2,
    seller: 'John Wick',
    quantity: 50,
  },
  {
    name: 'Refactoring: Improving the Design of Existing Code (2nd Edition)',
    description: `"Whenever you read [Refactoring], it’s time to read it again. And if you haven’t read it yet, please do before writing another line of code."
        –David Heinemeier Hansson, Creator of Ruby on Rails, Founder & CTO at Basecamp`,
    price: 19.99,
    image: 'refactoring.jpg',
    rating: 4,
    department_id: 3,
    seller: 'Ben Carlson',
    quantity: 135,
  },
  {
    name: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    description: 'Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.',
    price: 34.99,
    image: 'the-clean-coder.jpg',
    rating: 4,
    department_id: 3,
    seller: 'Clara Wilson',
    quantity: 58,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;