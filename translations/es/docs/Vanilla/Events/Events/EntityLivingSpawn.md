# EntityLivingSpawnEvent

The EntityLivingSpawn Event is fired whenever an entity tries to join or leave a world.  
It has one subclass, the EntityLivingExtendedSpawnEvent that also contains an [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) reference.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingSpawnEvent`  
`crafttweaker.event.EntityLivingExtendedSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

EntityLivingSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

The following information can be retrieved from the event:

| ZenGetter                 | Tipo                                                             |
| ------------------------- | ---------------------------------------------------------------- |
| `world`                   | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                       | flotante                                                         |
| `y`                       | flotante                                                         |
| `z`                       | flotante                                                         |
|                           |                                                                  |
| `spawner` (Extended Only) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Event functions

The despawn event also offers three functions to change the event outcome:

| Método  | Descripción                                |
| ------- | ------------------------------------------ |
| `allow` | Forces the entity to (de)spawn             |
| `deny`  | Forces the entity not to (de)spawn         |
| `pasar` | Sets the event result to the default state |