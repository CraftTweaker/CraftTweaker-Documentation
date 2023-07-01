# ServerLevelAccessor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.ServerLevelAccessor;
```


## Implemented Interfaces
ServerLevelAccessor implements the following interfaces. That means all methods defined in these interfaces are also available in ServerLevelAccessor

- [LevelAccessor](/vanilla/api/world/LevelAccessor)

## Methods

:::group{name=addFreshEntityWithPassengers}

```zenscript
ServerLevelAccessor.addFreshEntityWithPassengers(entity as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::


## Properties

| Name  |                     Type                      | Has Getter | Has Setter |
|-------|-----------------------------------------------|------------|------------|
| level | [ServerLevel](/vanilla/api/world/ServerLevel) | true       | false      |

