# CraftTweaker

## Requirement Locking:
Currently the main CrT support is for Requirement Locking.
This can also be accomplished through the config system.
However the Config System does **NOT** support NBT!


### Syntax:
```
Blank Example:
mods.compatskills.Requirement.addRequirement(IItemStack item, String locked)

Working Example:
mods.compatskills.Requirement.addRequirement(<minecraft:wooden_pickaxe:*>, "reskillable:mining|5");

// With NBT for Silk Touch
mods.compatskills.Requirement.addRequirement(<minecraft:wooden_pickaxe:1>.withTag({ench: [{lvl: 1 as short, id: 33 as short}], RepairCost: 1}), "reskillable:mining|9");
```
