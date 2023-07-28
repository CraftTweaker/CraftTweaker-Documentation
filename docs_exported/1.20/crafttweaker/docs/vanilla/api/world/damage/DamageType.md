# DamageType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.damage.DamageType;
```


## Extending Record

DamageType extends Record. That means all methods available in Record are also available in DamageType

## Constructors

Creates a new DamageType using the provided values
```zenscript
new DamageType(msgId as string, exhaustion as float) as DamageType
new DamageType(inIce, 0.1);
```
| Parameter  |  Type  |               Description                |
|------------|--------|------------------------------------------|
| msgId      | string | The unlocalized name of this type        |
| exhaustion | float  | How much exhaustion does this type cause |


Creates a new DamageType using the provided values
```zenscript
new DamageType(msgId as string, scaling as DamageScaling, exhaustion as float) as DamageType
new DamageType(inIce, <constant:minecraft:damage/damage_scaling:always>, 0.1);
```
| Parameter  |                           Type                           |               Description                |
|------------|----------------------------------------------------------|------------------------------------------|
| msgId      | string                                                   | The unlocalized name of this type        |
| scaling    | [DamageScaling](/vanilla/api/world/damage/DamageScaling) | The damage scaling used by this type     |
| exhaustion | float                                                    | How much exhaustion does this type cause |


Creates a new DamageType using the provided values
```zenscript
new DamageType(msgId as string, scaling as DamageScaling, exhaustion as float, effects as DamageEffects) as DamageType
new DamageType(inIce, <constant:minecraft:damage/damage_scaling:always>, 0.1, <constant:minecraft:damage/damage_effects:freezing>);
```
| Parameter  |                           Type                           |               Description                |
|------------|----------------------------------------------------------|------------------------------------------|
| msgId      | string                                                   | The unlocalized name of this type        |
| scaling    | [DamageScaling](/vanilla/api/world/damage/DamageScaling) | The damage scaling used by this type     |
| exhaustion | float                                                    | How much exhaustion does this type cause |
| effects    | [DamageEffects](/vanilla/api/world/damage/DamageEffects) | The effect of this type                  |


Creates a new DamageType using the provided values
```zenscript
new DamageType(msgId as string, scaling as DamageScaling, exhaustion as float, effects as DamageEffects, deathMessageType as DeathMessageType) as DamageType
new DamageType(inIce, <constant:minecraft:damage/damage_scaling:always>, 0.1, <constant:minecraft:damage/damage_effects:freezing>, <constant:minecraft:damage/death_message_type:default>);
```
|    Parameter     |                              Type                              |               Description                |
|------------------|----------------------------------------------------------------|------------------------------------------|
| msgId            | string                                                         | The unlocalized name of this type        |
| scaling          | [DamageScaling](/vanilla/api/world/damage/DamageScaling)       | The damage scaling used by this type     |
| exhaustion       | float                                                          | How much exhaustion does this type cause |
| effects          | [DamageEffects](/vanilla/api/world/damage/DamageEffects)       | The effect of this type                  |
| deathMessageType | [DeathMessageType](/vanilla/api/world/damage/DeathMessageType) | The type of death message to send        |



## Properties

|       Name       |                              Type                              | Has Getter | Has Setter |
|------------------|----------------------------------------------------------------|------------|------------|
| deathMessageType | [DeathMessageType](/vanilla/api/world/damage/DeathMessageType) | true       | false      |
| effects          | [DamageEffects](/vanilla/api/world/damage/DamageEffects)       | true       | false      |
| exhaustion       | float                                                          | true       | false      |
| msgId            | string                                                         | true       | false      |
| scaling          | [DamageScaling](/vanilla/api/world/damage/DamageScaling)       | true       | false      |

