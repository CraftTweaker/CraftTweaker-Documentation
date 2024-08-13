# Sheep

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.animal.Sheep;
```


## Extending Animal

Sheep extends [Animal](/vanilla/api/entity/type/animal/Animal). That means all methods available in [Animal](/vanilla/api/entity/type/animal/Animal) are also available in Sheep

## Implemented Interfaces
Sheep implements the following interfaces. That means all methods defined in these interfaces are also available in Sheep

- [Shearable](/vanilla/api/entity/Shearable)

## Methods

:::group{name=getHeadEatAngleScale}

Return Type: float

```zenscript
Sheep.getHeadEatAngleScale(partialTick as float) as float
```

|  Parameter  | Type  |
|-------------|-------|
| partialTick | float |


:::

:::group{name=getHeadEatPositionScale}

Return Type: float

```zenscript
Sheep.getHeadEatPositionScale(partialTick as float) as float
```

|  Parameter  | Type  |
|-------------|-------|
| partialTick | float |


:::


## Properties

|  Name   |                       Type                       | Has Getter | Has Setter |
|---------|--------------------------------------------------|------------|------------|
| color   | [DyeColor](/vanilla/api/item/component/DyeColor) | true       | true       |
| sheared | boolean                                          | true       | true       |

