# Items:
Items is a Requirement-Type introduced by CompatSkills and allows you to gate things behind holding a specific Item/NBT-Value/Mod-Item in either your Main or Off-Hand.
The Item Syntax is as follows:
```
Example:
// Adds the requirement of you holding ANY item from the specified mod.
stack|modid

// Adds the requirement of you holding the specified item with Meta 0
stack|modid:item

// Adds the requirement of you holding the specified item with the specified Meta (* = Wildcard Metadata)
stack|modid:item:meta

// Adds the requirement of you holding ANY item with the specified NBT-data
stack||NBT as JSON

// Adds the requirement of you holding ANY item from the specified mod with the specified NBT-data.
stack|modid|NBT as JSON

// Adds the requirement of you holding the specified item with meta 0 and the specified NBT-data
stack|modid:item|NBT as JSON

// Adds the requirement of you holding the specified item with the specified Meta and the specified NBT-data
stack|modid:item:meta|NBT as JSON



// Working Examples:
stack|minecraft
stack|minecraft:iron_pickaxe
stack|minecraft:iron_pickaxe:*

//Needs a silk touch item
stack||{ench:[{id: 33s}]} 

//fortune tinkers tool
stack|tconstruct|{ench:[{id: 35s}]} 

stack|minecraft:iron_sword|{ench:[{id: 17s}]}
stack|minecraft:iron_sword:*|{ench:[{id: 17s}]}
```