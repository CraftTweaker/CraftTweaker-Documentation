# Mod-Lock Tweaker


## Mod-Locking
This was added as a capability for configs in 1.2.0 and now has a CrT ZenMethod implemented to support it.
This can also be accomplished through the configs as previously mentioned.

Mod-Locks allow you to lock all ItemStacks from a specific mod behind a specific lock.


### Syntax:
```
// Blank Example
mods.compatskills.ModLock.addModLock(String modId, String... locked);

// Working Example:
mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");

The above lock will lock everything from the mod "minecraft" behind a lock of "building 4"
```
