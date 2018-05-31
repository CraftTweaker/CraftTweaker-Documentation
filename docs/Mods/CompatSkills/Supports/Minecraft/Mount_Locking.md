# Mount Locking

## Mount Locks
This feature allows you to add a requirement lock to Mounting specific entities!

### Syntax
[Link to IEntityDefinition](/Vanilla/Entities/IEntityDefinition)

```
# Blank Example:
mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)

# Working Example:
mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")
```