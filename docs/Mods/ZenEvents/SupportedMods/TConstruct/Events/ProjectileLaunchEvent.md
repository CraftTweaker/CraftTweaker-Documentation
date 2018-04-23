# ProjectileLaunchEvent

The ProjectileLaunchEvent is fired whenever an TiCon projectile is lauched.  
It can be canceled.

## Implementing EventClasses
The ProjectileLaunchEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.tconstruct.ProjectileLaunchEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!


| ZenGetter Name   | Type                                                                       |
|------------------|----------------------------------------------------------------------------|
| projectile       | [IEntity](/Vanilla/Entities/IEntity)                                       |
| launcher         | [IItemStack](/Vanilla/Items/IItemStack) (can return null)                  |
| shooter          | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) (can return null) |
| canceled         | bool                                                                       |