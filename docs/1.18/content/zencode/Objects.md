# Objects in Programming

This page aims to orient the scripter that aims to work with features and concepts that require a bit more than just chaining crafting table calls. 
It will help you understand a bit of how Java and ZenCode programming actually works, which is crucial to understand and manage concepts where logic is necessary, such as Loot Modifiers, Events, or JEI Categories. 
Now, onto the explanation!

Most tangible things you manipulate and use as parameters are Objects. Objects have a type, properties and methods that you can use or access.

Kinds of objects you should have seen at this point: 
- String (Stores a sequence of letters), example: `"hello"`
- Int (Stores a numerical, whole value), example : `42`
- Double and Float (Store a numerical decimal value), examples:  `0.2` and `0.2f`
- IItemStack (Stores an Item), example: `<item:minecraft:pumpkin>`
- FluidStack (Stores a fluid with its amount), example: `<fluid:minecraft:water> * 100`

Doubles and floats are mostly interchangeable and the difference is that you need the "f" character in case it is a float. In most cases ZC will cast them for you.

Complex Objects in Java are basically made out of simpler objects. A proper Java program is basically the combination of existing libraries and new classes to create objects that contain properties you want to use.
Recipes, Items, Entities, NBT data are all examples of this. Due to this, most of this objects have more methods and properties than just their raw value.

An example of this is IItemStacks containing data such as, the amount, the Item that they come from, their NBT tag...


