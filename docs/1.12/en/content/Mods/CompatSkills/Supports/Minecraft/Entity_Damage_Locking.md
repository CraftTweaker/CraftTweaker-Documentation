# Entity Damage Locking

## Entity-Damage Lock
This feature allows you to lock the ability to attack/damage specific entities.

### Syntax:
[Link to IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

```
# Blank Example:
mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);

# Working Example:
mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");
```