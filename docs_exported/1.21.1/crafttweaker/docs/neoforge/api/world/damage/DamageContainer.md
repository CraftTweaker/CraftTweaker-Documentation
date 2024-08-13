# DamageContainer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.world.damage.DamageContainer;
```


## Static Methods

:::group{name=of}

Return Type: [DamageContainer](/neoforge/api/world/damage/DamageContainer)

```zenscript
DamageContainer.of(source as DamageSource, originalDamage as float) as DamageContainer
```

|   Parameter    |                          Type                          |
|----------------|--------------------------------------------------------|
| source         | [DamageSource](/vanilla/api/world/damage/DamageSource) |
| originalDamage | float                                                  |


:::

## Methods

:::group{name=addModifier}

```zenscript
DamageContainer.addModifier(type as DamageContainerReduction, reductionFunction as IReductionFunction)
```

|     Parameter     |                                      Type                                       |
|-------------------|---------------------------------------------------------------------------------|
| type              | [DamageContainerReduction](/neoforge/api/world/damage/DamageContainerReduction) |
| reductionFunction | [IReductionFunction](/neoforge/api/world/damage/IReductionFunction)             |


:::

:::group{name=getReduction}

Return Type: float

```zenscript
DamageContainer.getReduction(type as DamageContainerReduction) as float
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| type      | [DamageContainerReduction](/neoforge/api/world/damage/DamageContainerReduction) |


:::


## Properties

|              Name              |                          Type                          | Has Getter | Has Setter |
|--------------------------------|--------------------------------------------------------|------------|------------|
| blockedDamage                  | float                                                  | true       | false      |
| newDamage                      | float                                                  | true       | true       |
| originalDamage                 | float                                                  | true       | false      |
| postAttackInvulnerabilityTicks | int                                                    | true       | true       |
| shieldDamage                   | float                                                  | true       | false      |
| source                         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |

