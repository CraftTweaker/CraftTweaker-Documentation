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

| ZenMethod                       | Event Class                                                                                               |
|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| onEnderTeleport                 | [`crafttweaker.events.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport)                          |
| onEntityLivingAttacked          | [`crafttweaker.events.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked)            |
| onEntityLivingDeath             | [`crafttweaker.events.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath)                  |
| onEntityLivingDeathDrops        | [`crafttweaker.events.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops)        |
| onEntityLivingFall              | [`crafttweaker.events.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall)                    |
| onEntityLivingHurt              | [`crafttweaker.events.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt)                    |
| onEntityLivingJump              | [`crafttweaker.events.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump)                    |
| onEntityLivingUseItem           | [`crafttweaker.events.LivingEntityUseItemEvent`](/Vanilla/Events/Events/LivingEntityUseItem)              |
| onEntityLivingUseItemFinish     | [`crafttweaker.events.LivingEntityUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem)       |
| onEntityLivingUseItemStart      | [`crafttweaker.events.LivingEntityUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem)        |
| onEntityLivingUseItemStop       | [`crafttweaker.events.LivingEntityUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem)         |
| onEntityLivingUseItemTick       | [`crafttweaker.events.LivingEntityUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem)         |
| onEntityStruckByLightning       | [`crafttweaker.events.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning)      |
| onItemExpire                    | [`crafttweaker.events.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire)                                |
| onItemToss                      | [`crafttweaker.events.ItemTossEvent`](/Vanilla/Events/Events/ItemToss)                                    |
| onPlayerAttackEntity            | [`crafttweaker.events.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity)                |
| onPlayerBonemeal                | [`crafttweaker.events.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal)                        |
| onPlayerChangedDimension        | [`crafttweaker.events.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension)        |
| onPlayerCrafted                 | [`crafttweaker.events.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted)                          |
| onPlayerDeathDrops              | [`crafttweaker.events.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops)                    |
| onPlayerFillBucket              | [`crafttweaker.events.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket)                    |
| onPlayerInteract                | [`crafttweaker.events.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract)                        |
| onPlayerInteractEntity          | [`crafttweaker.events.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity)            |
| onPlayerLoggedIn                | [`crafttweaker.events.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn)                        |
| onPlayerLoggedOut               | [`crafttweaker.events.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut)                      |
| onPlayerOpenContainer           | [`crafttweaker.events.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer)              |
| onPlayerPickupItem              | [`crafttweaker.events.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem)                    |
| onPlayerPickupXp                | [`crafttweaker.events.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp)                        |
| onPlayerRespawn                 | [`crafttweaker.events.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn)                          |
| onPlayerSleepInBed              | [`crafttweaker.events.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed)                    |
| onPlayerSmelted                 | [`crafttweaker.events.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted)                          |
| onPlayerUseHoe                  | [`crafttweaker.events.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe)                            |


