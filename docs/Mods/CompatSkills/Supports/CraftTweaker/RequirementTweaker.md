# Requirement Tweaker


## PSA:
As of 1.2.0 and forward, alot of changes are being done to improve the internals of Reskillable and CompatSkills.
This will show itself in more and more powerful locking capabilities being added over time.
One of the changes introduced in 1.2.0 was the idea of "Master Locks".
This has come with some impacts, one of the notable ones that does affect CrT support is the following!
Config Locks now are "Masters" over CrT Locks, meaning if you have add a non-nbt specific lock to an already established item in the configs.

```
Example:
Config: 
minecraft:diamond_pickaxe:*=reskillable:mining|16

VS

Crafttweaker: 
mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");

Then the lock returned for the item will be:
Mining: 16
```

So if you want to add a non-NBT lock for an item through CrT that already exists in the Configs.
**Please remove the config lock and it will work**


## Requirement-Locking:
Currently the main CrT support is for Requirement Locking.
This can also be accomplished through the config system.
However the Config System does **NOT** support NBT!


### Syntax:
```
// Blank Example:
mods.compatskills.Requirement.addRequirement(IItemStack item, String... locked)

Working Examples:

// Adds a lock for the Diamond Pickaxe with a Wildcard Metadata
mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");

// Adds a NBT Lock for Efficiency 5
mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");

// Adds a NBT Lock for Silk Touch
mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");

// Adds a NBT Lock for Unbreaking 3
mods.compatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
```

Example of the 3 Enchantment Locks being Combined into a single lock:

![Awesome Lock](https://i.imgur.com/gCfETAh.png)