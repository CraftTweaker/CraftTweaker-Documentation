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

| ZenMethod                             | Event Class                                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                        | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                         |
| onAnimalTame                          | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                       |
| onBlockBreak                          | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                            |
| onBlockHarvestDrops                   | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                              |
| onBlockPlace                          | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                                       |
| onCheckSpawn                          | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onCommand                             | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                        |
| onCriticalHit                         | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                     |
| onCropGrowPost                        | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                                   |
| onCropGrowPre                         | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                                     |
| onEnchantmentLevelSet                 | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)                     |
| onEnderTeleport                       | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                                 |
| onEntityLivingAttacked                | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)                   |
| onEntityLivingDeath                   | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                         |
| onEntityLivingDeathDrops              | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)               |
| onEntityLivingFall                    | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                           |
| onEntityLivingHurt                    | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                           |
| onEntityLivingJump                    | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                           |
| onEntityLivingUseItem                 | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)                 |
| onEntityLivingUseItemFinish           | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)              |
| onEntityLivingUseItemStart            | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)               |
| onEntityLivingUseItemStop             | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)                |
| onEntityLivingUseItemTick             | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)                |
| onEntityMount                         | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                                     |
| onEntityTravelToDimension             | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)             |
| onEntityStruckByLightning             | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)             |
| onExplosionDetonate                   | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                         |
| onExplosionStart                      | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                               |
| onFarmlandTrample                     | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                             |
| onItemExpire                          | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                                       |
| onItemFished                          | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                                       |
| onItemToss                            | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                           |
| onLivingDestroyBlock                  | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)                       |
| onLivingExperienceDrop                | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)                   |
| onLivingKockBack                      | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                             |
| onLootingLevel                        | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                                   |
| onMinecartCollision                   | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                         |
| onMinecartInteract                    | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                           |
| onMobGriefing                         | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                     |
| onPlayerAdvancement                   | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                              |
| onPlayerAnvilRepair                   | [`format@@0 crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)               |
| onPlayerAnvilUpdate                   | [`format@@0 crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)               |
| onPlayerAttackEntity                  | [`format@@0 crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)             |
| farine d'os de joueur                 | [`format@@0 crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                     |
| format@@0 onPlayerBreakSpeed          | [`format@@0 crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                      |
| onPlayerBrewedPotion                  | [`format@@0 crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)                  |
| onPlayerChangedDimension              | [`format@@0 crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)     |
| format@@0 onPlayerCloseContainer      | [`format@@0 crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)         |
| onPlayerCrafted                       | [`format@@0 crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                       |
| onPlayerDeathDrops                    | [`format@@0 crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                 |
| format@@0 onPlayerDestroyItem         | [`format@@0 crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                    |
| format@@0 onPlayerFiller Bucket       | [`format@@0 crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                 |
| format@@0 onPlayerInteract            | [`format@@0 crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                     |
| onPlayerInteractBlock                 | [`format@@0 crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)           |
| format@@0 onPlayerInteractEntity      | [`format@@0 crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)         |
| format@@0 onPlayerItemPickup          | [`format@@0 crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                 |
| onPlayerClickBlock                    | [`format@@0 crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)         |
| onPlayerConnecté                      | [`format@@0 crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                     |
| onPlayerLoggedOut                     | [`format@@0 crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                   |
| onPlayerOpenContainer                 | [`format@@0 crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)           |
| format@@0 onPlayerPickupItem          | [`format@@0 crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                 |
| format@@0 onPlayerPickupXp            | [`format@@0 crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                     |
| format@@0 onPlayerRespawn             | [`format@@0 crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                       |
| onPlayerClickItem                     | [`format@@0 crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)         |
| format@@0 onPlayerSetSpawn            | [`format@@0 crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                          |
| onPlayerSleepInBed                    | [`format@@0 crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                 |
| onPlayerSmelted                       | [`format@@0 crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                       |
| onPlayerTick                          | [`format@@0 crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                             |
| onPlayerUseHoe                        | [`format@@0 crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                         |
| onPlayerVisibility                    | [`Événement de Visibilité des joueurs`](/Vanilla/Events/Events/PlayerVisibility/)                                |
| format@@0 onPotionBrewPost            | [`format@@0 crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                     |
| format@@0 onPotionBrewPre             | [`format@@0 crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                       |
| onProjectileImpactFrow                | [`format@@0 crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)       |
| onProjectileImpactFireball            | [`format@@0 crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/) |
| format@@0 onProjectileImpactThrowable | [`Événement ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/)                  |
| onSleepingLocationCheck               | [`format@@0 crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)       |
| onSleepingTimeCheck                   | [`format@@0 crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)               |
| format@@0 onSpecialSpawn              | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |

## Clear all event handlers

```zenscript
events.clear();
```