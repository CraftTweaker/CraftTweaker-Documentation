# ProjectileHitBlockEvent

The ProjectileHitBlockEvent is fired whenever an TiCon projectile hits a block.  
It cannot be canceled.

## Implementing EventClasses
The ProjectileHitBlockEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- NONE

## Event Class
You will need to cast the event in the function header as this class:  
`mods.tconstruct.ProjectileHitBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | Type                                       |
|----------------|--------------------------------------------|
| projectile     | [IEntity](/Vanilla/Entities/IEntity/)       |
| speed          | float                                      |
| blockPos       | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| blockState     | [IBlockState](/Vanilla/Blocks/IBlockState/) |