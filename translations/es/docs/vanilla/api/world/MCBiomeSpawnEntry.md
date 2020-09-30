# MCBiomeSpawnEntry

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiomeSpawnEntry
```

## Constructors
```zenscript
new crafttweaker.api.world.MCBiomeSpawnEntry(entityType as crafttweaker.api.entity.MCEntityType, weight as int, minGroupCount as int, maxGroupCount as int);
```
| Parameter     | Type                                                                       | Description             |
| ------------- | -------------------------------------------------------------------------- | ----------------------- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | No description provided |
| weight        | int                                                                        | No description provided |
| minGroupCount | int                                                                        | No description provided |
| maxGroupCount | int                                                                        | No description provided |



## Properties

| Name          | Type                                                                       | Has Getter | Has Setter |
| ------------- | -------------------------------------------------------------------------- | ---------- | ---------- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | true       | false      |
| maxGroupCount | int                                                                        | true       | false      |
| minGroupCount | int                                                                        | true       | false      |
| weight        | int                                                                        | true       | false      |

