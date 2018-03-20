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
| onPlayerLoggedIn         | [crafttweaker.event.PlayerLoggedInEvent](Events/PlayerLoggedIn)                 | ✔                    |
| onPlayerLoggedOut        | [crafttweaker.event.PlayerLoggedOutEvent](Events/PlayerLoggedOut)               | ✔                    |
| onPlayerCrafted          | [crafttweaker.event.PlayerCraftedEvent](Events/PlayerCrafted)                   | ✔                    |
| onPlayerSmelted          | [crafttweaker.event.PlayerSmeltedEvent](Events/PlayerSmelted)                   | ✔                    |
| onPlayerChangedDimension | [crafttweaker.event.PlayerChangedDimensionEvent](Events/PlayerChangedDimension) | ✔                    |
| onPlayerRespawn          | [crafttweaker.event.PlayerRespawnEvent](Events/PlayerRespawn)                   | ✔                    |
| onPlayerAttackEntity     | [crafttweaker.event.PlayerAttackEntityEvent](Events/PlayerAttackEntity)         | ✘                    |
| onPlayerBonemeal         | [crafttweaker.event.PlayerBonemealEvent](Events/PlayerBonemeal)                 | ✔                    |
| onPlayerInteractEntity   | [crafttweaker.event.PlayerInteractEntityEvent](Events/PlayerInteractEntity)     | ✘                    |
| onPlayerPickup           | [crafttweaker.event.PlayerPickupEvent](Events/PlayerPickupEntity)               | ✘                    |
| onPlayerPickupItem       | [crafttweaker.event.PlayerPickupItemEvent](Events/PlayerPickupItem)             | ✔                    |
| onPlayerFillBucket       | [crafttweaker.event.PlayerFillBucketEvent](Events/PlayerFillBucket)             | ✔                    |
| onPlayerDeathDrops       | [crafttweaker.event.PlayerDeathDropsEvent](Events/PlayerDeathDrops)             | ✔                    |
| onPlayerInteract         | [crafttweaker.event.PlayerInteractEvent](Events/PlayerInteract)                 | ✔                    |
| onPlayerOpenContainer    | [crafttweaker.event.PlayerOpenContainerEvent](Events/PlayerOpenContainer)       | ✔                    |
| onPlayerPickupXp         | [crafttweaker.event.PlayerPickupXpEvent](Events/PlayerPickupXp)                 | ✘                    |
| onPlayerSleepInBed       | [crafttweaker.event.PlayerSleepInBedEvent](Events/PlayerSleepInBed)             | ✔                    |
| onPlayerUseHoe           | [crafttweaker.event.PlayerUseHoeEvent](Events/PlayerUseHoe)                     | ✔                    |
| onPlayerUseItemStart     | [crafttweaker.event.PlayerUseItemStartEvent](Events/PlayerUseItemStart)         | ✘                    |
| onPlayerUseItemTick      | [crafttweaker.event.PlayerUseItemTickEvent](Events/PlayerUseItemTick)           | ✘                    |