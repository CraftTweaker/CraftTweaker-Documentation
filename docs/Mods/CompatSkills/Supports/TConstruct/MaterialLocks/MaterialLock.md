# Material Locks

## Material-Lock
With the implementation of TConstruct support in CompatSkills 1.5.0.
You now have the ability to lock:
	- Tool Crafting
	- Part Crafting
	- Part Replacement

For specific Tinker Construct's Materials.


### Syntax:
```
// Blank Example:
mods.compatskills.MaterialLock.addMaterialLock(String identifier, String... requirements);

// Example:
mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");
```
