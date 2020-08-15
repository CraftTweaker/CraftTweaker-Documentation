# EntityLivingSpawnEvent

The EntityLivingSpawn Event is fired whenever an entity tries to join or leave a world.  
It has one subclass, the EntityLivingExtendedSpawnEvent that also contains an [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) reference.

## Klasa wydarzenia

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingSpawnEvent`  
`crafttweaker.event.EntityLivingExtendedSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia

EntityLivingSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter                 | Typ                                                              |
| ------------------------- | ---------------------------------------------------------------- |
| `świat`                   | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                       | zmiennoprzecinkowe                                               |
| `y`                       | zmiennoprzecinkowe                                               |
| `z`                       | zmiennoprzecinkowe                                               |
|                           |                                                                  |
| `spawner` (Extended Only) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Event functions

The despawn event also offers three functions to change the event outcome:

| Metoda ZenMethod | Opis                                       |
| ---------------- | ------------------------------------------ |
| `allow`          | Forces the entity to (de)spawn             |
| `deny`           | Forces the entity not to (de)spawn         |
| `przejdź`        | Sets the event result to the default state |