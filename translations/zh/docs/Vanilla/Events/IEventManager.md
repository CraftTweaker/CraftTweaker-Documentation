# IEventManager

The IEventManager is what you're gonna need when dealing with event handlers.

## 导入类

It might be required for you to [import](/AdvancedFunctions/Import/) the class if you encounter any issues.  
`import crafttweaker.events.IEventManager;`

## Calling the event manager

You can access the event manager using the [global `events` field](/Vanilla/Global_Functions/)

## How do events work?

You can add a function that represents the event and from there on you can decide what you want CrT to do if such an event occurs.  
The most important thing to remember is that you need to **CAST THE EVENT TO IT'S TYPE!** as otherwise you will not be able to access any if it's ZenGetters.  
If you simply want to print something where you don't need to access the event, then it's fine.

    events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
        print("event".length);
        print(event.player.name);
        event.player.xp += 1;
    });
    
    
    events.onPlayerLoggedIn(function(event) {
        //event instanceof Object -> No way of accessing it, so better cast!
        print("SOMEONE HAS LOGGED IN!!!");
    });
    

## What events are available?

The ZenMethods would be what you'll need to call on `events`, the Event Class would be what you need to cast the event as.

| ZenMethod                   | Event Class                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| onAllowDespawn              | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)             |
| onBlockBreak                | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                |
| onBlockHarvestDrops         | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                  |
| onCheckSpawn                | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)     |
| onEnderTeleport             | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                     |
| onEntityLivingAttacked      | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)       |
| onEntityLivingDeath         | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)             |
| onEntityLivingDeathDrops    | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)   |
| onEntityLivingFall          | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)               |
| onEntityLivingHurt          | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)               |
| onEntityLivingJump          | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)               |
| onEntityLivingUseItem       | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)     |
| onEntityLivingUseItemFinish | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)  |
| onEntityLivingUseItemStart  | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)   |
| onEntityLivingUseItemStop   | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)    |
| onEntityLivingUseItemTick   | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)    |
| onEntityStruckByLightning   | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/) |
| onItemExpire                | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                           |
| onItemToss                  | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                               |
| onPlayerAdvancement         | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                  |
| onPlayerAnvilRepair         | [`crafttweaker.event.PlayerAnvilRepair`](/Vanilla/Events/Events/PlayerAnvilRepair/)                  |
| onPlayerAttackEntity        | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)           |
| onPlayerBonemeal            | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                   |
| onPlayerBreakSpeed          | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                    |
| onPlayerBrewedPotion        | [`crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)                |
| onPlayerChangedDimension    | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)   |
| onPlayerCrafted             | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                     |
| onPlayerDeathDrops          | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)               |
| onPlayerDestroyItem         | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                  |
| onPlayerFillBucket          | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)               |
| onPlayerInteract            | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                   |
| onPlayerInteractBlock       | [`crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)         |
| onPlayerInteractEntity      | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)       |
| onPlayerLoggedIn            | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                   |
| onPlayerLoggedOut           | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                 |
| onPlayerOpenContainer       | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)         |
| onPlayerPickupItem          | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)               |
| onPlayerPickupXp            | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                   |
| onPlayerRespawn             | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                     |
| onPlayerSetSpawn            | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                        |
| onPlayerSleepInBed          | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)               |
| onPlayerSmelted             | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                     |
| onPlayerTick                | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                           |
| onPlayerUseHoe              | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                       |
| onSpecialSpawn              | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)     |

## Clear all event handlers

    events.clear();