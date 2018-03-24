# IEventManager

The IEventManager is what you're gonna need when dealing with event handlers.  

## Importing the class
It might be required for you to [import](/AdvancedFunctions/Import) the class if you encounter any issues.  
`import crafttweaker.events.IEventManager;`

## Calling the event manager
You can access the event manager using the [global `events` field](/Vanilla/Global_Functions)

## How do events work?
You can add a function that represents the event and from there on you can decide what you want CrT to do if such an event occurs.  
The most important thing to remember is that you need to **CAST THE EVENT TO IT'S TYPE!** as otherwise you will not be able to access any if it's ZenGetters.  
If you simply want to print something where you don't need to access the event, then it's fine.

```
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
	print(event.player.name);
	event.player.xp += 1;
});


events.onPlayerLoggedIn(function(event) {
	//event instanceof Object -> No way of accessing it, so better cast!
	print("SOMEONE HAS LOGGED IN!!!");
});
```

## What events are available?
The ZenMethods would be what you'll need to call on `events`, the Event Class would be what you need to cast the event as.

| ZenMethod                       | Event Class                                                                                              |
|---------------------------------|----------------------------------------------------------------------------------------------------------|
| onEnderTeleport                 | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleportEvent)                     |
| onEntityLivingUseItem           | [`crafttweaker.event.LivingEntityUseItemEvent`](/Vanilla/Events/Events/LivingEntityUseItemEvent)         |
| onEntityLivingUseItemFinish     | [`crafttweaker.event.LivingEntityUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItemEvent)  |
| onEntityLivingUseItemStart      | [`crafttweaker.event.LivingEntityUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItemEvent)   |
| onEntityLivingUseItemStop       | [`crafttweaker.event.LivingEntityUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItemEvent)    |
| onEntityLivingUseItemTick       | [`crafttweaker.event.LivingEntityUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItemEvent)    |
| onEntityStruckByLightning       | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightningEvent) |
| onPlayerAttackEntity            | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntityEvent)           |
| onPlayerBonemeal                | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemealEvent)                   |
| onPlayerChangedDimension        | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimensionEvent)   |
| onPlayerCrafted                 | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCraftedEvent)                     |
| onPlayerDeathDrops              | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDropsEvent)               |
| onPlayerFillBucket              | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucketEvent)               |
| onPlayerInteract                | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteractEvent)                   |
| onPlayerInteractEntity          | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntityEvent)       |
| onPlayerLoggedIn                | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedInEvent)                   |
| onPlayerLoggedOut               | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOutEvent)                 |
| onPlayerOpenContainer           | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainerEvent)         |
| onPlayerPickupItem              | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItemEvent)               |
| onPlayerPickupXp                | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXpEvent)                   |
| onPlayerRespawn                 | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawnEvent)                     |
| onPlayerSleepInBed              | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBedEvent)               |
| onPlayerSmelted                 | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmeltedEvent)                     |
| onPlayerUseHoe                  | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoeEvent)                       |


