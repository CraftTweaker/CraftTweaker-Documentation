# ExplosionDetonate

The ExplosionDetonate Event is fired shortly before an explosion starts. It cannot be canceled.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
ExplosionDetonate Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter     | Type                                                               |
|----------------------|---------------|--------------------------------------------------------------------|
| `affectedEntities`   |               | [IEntity](/Vanilla/Entities/IEntity/)[]                            |
| `affectedPositions`  |               | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[]                     |


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `world`          |               | [IWorld](/Vanilla/World/IWorld/)                                  |
| `explosion`      |               | [IExplosion](/Vanilla/World/IExplosion)                            |
| `position`       |               | [IBlockPos](/Vanilla/World/IBlockPos/)                             |
| `x`              |               | double                                                             |
| `y`              |               | double                                                             |
| `z`              |               | double                                                             |
