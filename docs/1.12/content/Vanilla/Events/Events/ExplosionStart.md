# ExplosionStart

The ExplosionStart Event is fired shortly before an explosion starts. If canceled, the explosion will not happen.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
ExplosionStart Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `world`          |               | [IWorld](/Vanilla/World/IWorld/)                                   |
| `explosion`      |               | [IExplosion](/Vanilla/World/IExplosion)                            |
| `position`       |               | [IBlockPos](/Vanilla/World/IBlockPos/)                             |
| `x`              |               | double                                                             |
| `y`              |               | double                                                             |
| `z`              |               | double                                                             |
| `canceled`       | `canceled`    | bool                                                               |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening


