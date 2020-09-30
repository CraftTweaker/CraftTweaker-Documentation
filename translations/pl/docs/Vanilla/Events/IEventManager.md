# IEventManager

The IEventManager is what you're gonna need when dealing with event handlers.

## Importing the class

It might be required for you to [import](/AdvancedFunctions/Import/) the class if you encounter any issues.  
`import crafttweaker.events.IEventManager;`

## Calling the event manager

You can access the event manager using the [global `events` field](/Vanilla/Global_Functions/)

## How do events work?

You can add a function that represents the event and from there on you can decide what you want CrT to do if such an event occurs.  
The most important thing to remember is that you need to **CAST THE EVENT TO IT'S TYPE!** as otherwise you will not be able to access any if it's ZenGetters.  
If you simply want to print something where you don't need to access the event, then it's fine.

```zenscript
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

| ZenMethod                                | Event Class                                                                                                            |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                           | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                               |
| onAnimalTame                             | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                             |
| onBlockBreak                             | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                                  |
| onBlockHarvestDrops                      | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                                    |
| onBlockPlace                             | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                                             |
| onCheckSpawn                             | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                       |
| onCommand                                | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                              |
| onCriticalHit                            | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                           |
| onCropGrowPost                           | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                                         |
| onCropGrowPre                            | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                                           |
| onEnchantmentLevelSet                    | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)                           |
| onEnderTeleport                          | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                                       |
| onEntityLivingAttacked                   | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)                         |
| onEntityLivingDeath                      | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                               |
| onEntityLivingDeathDrops                 | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)                     |
| onEntityLivingFall                       | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                                 |
| onEntityLivingHurt                       | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                                 |
| onEntityLivingJump                       | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                                 |
| onEntityLivingUseItem                    | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)                       |
| onEntityLivingUseItemFinish              | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)                    |
| onEntityLivingUseItemStart               | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)                     |
| onEntityLivingUseItemStop                | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)                      |
| onEntityLivingUseItemTick                | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)                      |
| onEntityMount                            | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                                           |
| onEntityTravelToDimension                | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)                   |
| onEntityStruckByLightning                | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)                   |
| onExplosionDetonate                      | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                               |
| onExplosionStart                         | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                                     |
| onFarmlandTrample                        | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                                   |
| onItemExpire                             | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                                             |
| onItemFished                             | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                                             |
| onItemToss                               | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                                 |
| onLivingDestroyBlock                     | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)                             |
| onLivingExperienceDrop                   | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)                         |
| onLivingKockBack                         | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                                   |
| onLootingLevel                           | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                                         |
| onMinecartCollision                      | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                               |
| onMinecartInteract                       | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                                 |
| onMobGriefing                            | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                           |
| onPlayerAdvancement                      | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                                    |
| onPlayerAnvilRepair                      | [`Zdarzenie gracza AnvilRepair`](/Vanilla/Events/Events/PlayerAnvilRepair/)                                            |
| onPlayerAnvilUpdate                      | [`[PLACEHOLDER] crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                 |
| onPlayerAttackEntity                     | [`Zdarzenie Zdarzenia Gracza Ataku`](/Vanilla/Events/Events/PlayerAttackEntity/)                                       |
| [PLACEHOLDER] onPlayerBonemeal           | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                                     |
| Szybkość łamania gracza                  | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                                      |
| Mikstura onPlayerBrewedtion              | [`crafttweaker.event.PlayerBrewedMikstura`](/Vanilla/Events/Events/PlayerBrewedPotion/)                                |
| onPlayerChangedDimension                 | [`[PLACEHOLDER] crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)       |
| onPlayerCloseContainer                   | [`[PLACEHOLDER] crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)           |
| Stworzono onPlayerCcreated               | [`Zdarzenie tworzenia graczy`](/Vanilla/Events/Events/PlayerCrafted/)                                                  |
| onPlayerDeathDrops                       | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                                 |
| Przedmiot Niszczenia Gracza              | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                                    |
| onPlayerFillBucket                       | [`[PLACEHOLDER] crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                   |
| onPlayerInteract                         | [`[PLACEHOLDER] craft weaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                       |
| onPlayerInteractBlock                    | [`[PLACEHOLDER] crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)             |
| onPlayerInteractEntity                   | [`Zdarzenie PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)                                  |
| Odbiór przedmiotu onPlayerItem           | [`Zdarzenie Pickup'u gracza`](/Vanilla/Events/Events/PlayerItemPickup/)                                                |
| onPlayerLeftClickBlock                   | [`[PLACEHOLDER] crafttweaker.event.PlayerLeftClickBlockBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)      |
| onPlayerLoggedIn                         | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                                     |
| onPlayerLoggedOut                        | [`Zdarzenie Gracza LoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                                           |
| onPlayerOpenContainer                    | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)                           |
| Odbiór onPlayerItem                      | [`[PLACEHOLDER] crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                   |
| onPlayerPickupXp                         | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                                     |
| Odnowienie gracza                        | [`[PLACEHOLDER] craft weaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                         |
| onPlayerRightClickItem                   | [`[PLACEHOLDER] crafttweaker.event.PlayerRight ClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)          |
| [PLACEHOLDER] onPlayerSetSpawn           | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                                          |
| [PLACEHOLDER] onPlayerSleepInBed         | [`[PLACEHOLDER] crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                   |
| onPlayerPrzetapiane                      | [`[PLACEHOLDER] crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                         |
| onPlayerTick                             | [`[PLACEHOLDER] craft weaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                               |
| onPlayerUseHoe                           | [`Zdarzenie Zdarzenia Gracza`](/Vanilla/Events/Events/PlayerUseHoe/)                                                   |
| onPlayerVisibility                       | [`[PLACEHOLDER] craft weaker.event.PlayerVisibilityEvent`](/Vanilla/Events/Events/PlayerVisibility/)                   |
| onPotionBrewPost                         | [`crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                                     |
| onPotionBrewPre                          | [`crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                                       |
| [PLACEHOLDER] onProjectileImpactArrow    | [`[PLACEHOLDER] crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)         |
| [PLACEHOLDER] onProjectileImpactFireball | [`Zdarzenie ProjectileImpactFireballEventu`](/Vanilla/Events/Events/ProjectileImpactFireball/)                         |
| onProjectileImpactThrowable              | [`[PLACEHOLDER] crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/) |
| onSleepingLocationCheck                  | [`crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)                       |
| onSleepingTimeCheck                      | [`Zdarzenie SleepingTimeCheck`](/Vanilla/Events/Events/SleepingTimeCheck/)                                             |
| [PLACEHOLDER] onSpecialSpawn             | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                       |

## Clear all event handlers

```zenscript
events.clear();
```