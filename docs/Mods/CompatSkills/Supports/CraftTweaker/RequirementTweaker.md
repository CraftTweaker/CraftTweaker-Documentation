# Requirement Tweaker


## PSA:
As of 1.2.0 and forward, Reskillable is being actively developed to improve on the internals of Reskillable and CompatSkill's Locking Systems. 
This is in an effort to allow for more powerful locking mechanisms in the future.


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
