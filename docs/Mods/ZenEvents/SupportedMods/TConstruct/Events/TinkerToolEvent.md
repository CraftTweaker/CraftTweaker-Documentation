# TinkerToolEvent

The TinkerToolEvent is fired whenever a TiCon tool does something special.  
Now, since there are many types of special things tools can do, there are multiple Events and thus multiple event handlers as well.

## Implementing EventClasses
The TinkerToolEvents all implement the following EventClasses and thus are able to use all functionality they provide as well: 

| Class                                                       | ExtraBlockBreak | MattockHoe | ShovelPath | ScytheHarvest | BowShoot | Repair |
|-------------------------------------------------------------|:---------------:|:----------:|:----------:|:-------------:|:--------:|:------:|
| [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)         | ✔               | ✔          | ✔          | ✔             | ✔        |        |
| [IEventPositionable](/Vanilla/Events/IEventPositionable)    |                 | ✔          | ✔          | ✔             |          |        |
| [IBlockEvent](/Vanilla/Events/Events/IBlockEvent)           |                 |            |            | ✔             |          |        |
| [IEventCancelable](/Vanilla/Events/Events/IEventCancelable) | ✔               |            |            | ✔             |          |        |

## Event Class
You will need to cast the event in the function header as this class:  
```
//Superclass, probably not needed
mods.tconstruct.TinkerToolEvent

//Subclases
mods.tconstruct.ToolExtraBlockBreakEvent
mods.tconstruct.ToolRepairEvent
mods.tconstruct.ToolMattockHoeEvent
mods.tconstruct.ToolShovelMakePathEvent
mods.tconstruct.ToolScytheHarvestEvent
mods.tconstruct.ToolBowShootEvent
```  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!


| ZenGetter Name   | ZenSetter Name   | Type                                                                       |
|------------------|------------------|----------------------------------------------------------------------------|
| item             |                  | [IItemStack](/Vanilla/Items/IItemStack) (can return null)                  |

## SubEvent Getters/Setters

| Name                              | Getter | Setter | Type                                           | ExtraBlockBreak | MattockHoe | ShovelPath | ScytheHarvest | BowShoot | Repair |
|-----------------------------------|:------:|:------:|------------------------------------------------|:---------------:|:----------:|:----------:|:-------------:|:--------:|:------:|
| blockState                        | ✔      |        | [IBlockState](/Vanilla/Blocks/IBlockState)     | ✔               |            |            | ✔             |          |        |
| player                            | ✔      |        | [IPlayer](/Vanilla/Players/IPlayer)            | ✔               | ✔          | ✔          | ✔             | ✔        |        |
| position                          | ✔      |        | [IBlockPos](/Vanilla/World/IBlockPos)          |                 | ✔          | ✔          | ✔             |          |        |
| world                             | ✔      |        | [IWorld](/Vanilla/World/IWorld)                |                 | ✔          | ✔          | ✔             |          |        |
| canceled                          | ✔      | ✔      | boolean                                        | ✔               |            |            | ✔             |          |        |
| height                            | ✔      | ✔      | int                                            | ✔               |            |            |               |          |        |
| width                             | ✔      | ✔      | int                                            | ✔               |            |            |               |          |        |
| depth                             | ✔      | ✔      | int                                            | ✔               |            |            |               |          |        |
| distance                          | ✔      | ✔      | int                                            | ✔               |            |            |               |          |        |
| harvestable                       | ✔      |        | boolean                                        |                 |            |            | ✔             |          |        |
| repairAmount                      | ✔      |        | int                                            |                 |            |            |               |          | ✔      |
| ammoItem                          | ✔      |        | [IItemStack](Vanilla/Items/IItemStack)         |                 |            |            |               | ✔        |        |
| useTime                           | ✔      |        | int                                            |                 |            |            |               | ✔        |        |
| baseInaccuracy                    | ✔      | ✔      | float                                          |                 |            |            |               | ✔        |        |
| bonusInaccuracy                   | ✔      | ✔      | float                                          |                 |            |            |               | ✔        |        |
| projectileCount                   | ✔      | ✔      | int                                            |                 |            |            |               | ✔        |        |
| consumeAmmoPerProjectile          | ✔      | ✔      | boolean                                        |                 |            |            |               | ✔        |        |
| consumeDurabilityPerProjectile    | ✔      | ✔      | boolean                                        |                 |            |            |               | ✔        |        |