# IExplosionEvent

This interface is extended by all explosion events.
That means you can use the getters below to access the position details.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:
| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `world`          |               | [IWorld](/Vanilla/World/IWorld/)                                  |
| `explosion`      |               | [IExplosion](/Vanilla/World/IExplosion)                            |
| `position`       |               | [IBlockPos](/Vanilla/World/IBlockPos/)                             |
| `x`              |               | double                                                             |
| `y`              |               | double                                                             |
| `z`              |               | double                                                             |
