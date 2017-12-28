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

| ZenMethod                | Event Class                                                                     | Already Implemented? |
|--------------------------|---------------------------------------------------------------------------------|----------------------|
| onPlayerLoggedIn         | [crafttweaker.event.PlayerLoggedInEvent](events/PlayerLoggedIn)                 | ✔                    |
| onPlayerLoggedOut        | [crafttweaker.event.PlayerLoggedOutEvent](events/PlayerLoggedOut)               | ✔                    |
| onPlayerCrafted          | [crafttweaker.event.PlayerCraftedEvent](events/PlayerCrafted)                   | ✔                    |
| onPlayerSmelted          | [crafttweaker.event.PlayerSmeltedEvent](events/PlayerSmelted)                   | ✔                    |
| onPlayerChangedDimension | [crafttweaker.event.PlayerChangedDimensionEvent](events/PlayerChangedDimension) | ✘                    |
| onPlayerRespawn          | [crafttweaker.event.PlayerRespawnEvent](events/PlayerRespawn)                   | ✘                    |
| onPlayerAttackEntity     | [crafttweaker.event.PlayerAttackEntityEvent](events/PlayerAttackEntity)         | ✘                    |
| onPlayerBonemeal         | [crafttweaker.event.PlayerBonemealEvent](events/PlayerBonemeal)                 | ✘                    |
| onPlayerInteractEntity   | [crafttweaker.event.PlayerInteractEntityEvent](events/PlayerInteractEntity)     | ✘                    |
| onPlayerPickup           | [crafttweaker.event.PlayerPickupEvent](events/PlayerPickup)                     | ✘                    |
| onPlayerPickupItem       | [crafttweaker.event.PlayerPickupItemEvent](events/PlayerPickupItem)             | ✘                    |
| onPlayerFillBucket       | [crafttweaker.event.PlayerFillBucketEvent](events/PlayerFillBucket)             | ✘                    |
| onPlayerDeathDrops       | [crafttweaker.event.PlayerDeathDropsEvent](events/PlayerDeathDrops)             | ✘                    |
| onPlayerInteract         | [crafttweaker.event.PlayerInteractEvent](events/PlayerInteract)                 | ✘                    |
| onPlayerOpenContainer    | [crafttweaker.event.PlayerOpenContainerEvent](events/PlayerOpenContainer)       | ✘                    |
| onPlayerPickupXp         | [crafttweaker.event.PlayerPickupXpEvent](events/PlayerPickupXp)                 | ✘                    |
| onPlayerSleepInBed       | [crafttweaker.event.PlayerSleepInBedEvent](events/PlayerSleepInBed)             | ✘                    |
| onPlayerUseHoe           | [crafttweaker.event.PlayerUseHoeEvent](events/PlayerUseHoe)                     | ✘                    |
| onPlayerUseItemStart     | [crafttweaker.event.PlayerUseItemStartEvent](events/PlayerUseItemStart)         | ✘                    |
| onPlayerUseItemTick      | [crafttweaker.event.PlayerUseItemTickEvent](events/PlayerUseItemTick)           | ✘                    |