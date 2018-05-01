# NBT-Lock Tweaker


## NBT-Locking
The NBT-Locks are specific to CompatSkills 1.4.0 and are by far the currently most powerful feature.
This means that you will either be able to lock specific NBT-Tags on a per mod-basis or on a overall basis.

This means that any item found to contain that NBT-tag will have the lock applied to it.


### Syntax:
```
// Blank Example:
mods.compatskills.NBTLock.addGenericNBTLock(IData tag, String... locked)
mods.compatskills.NBTLock.addModNBTLock(String modId, IData tag, String... locked)

//// Working Example:
// Locks Silk-Touch
addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");

// Locks Unbreaking (No Level-Specified)
addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:gathering|6");
```

This has some powerful implications.
This means for example that you as a pack-maker can lock:
- Tinker Materials
- Tinker Modifiers
- Enchantments
- Energy-Values

And much more, as long as you know the NBT-tag it uses!