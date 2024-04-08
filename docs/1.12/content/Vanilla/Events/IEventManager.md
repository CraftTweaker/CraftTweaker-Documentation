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

| ZenMethod                       | Event Class                                                                                                  |
|---------------------------------|--------------------------------------------------------------------------------------------------------------|
| onAllowDespawn                  | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                     |
| onAnimalTame                    | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                   |
| onArrowLoose                    | [`crafttweaker.event.ArrowLooseEvent`](/Vanilla/Events/Events/ArrowLoose/)                                   |
| onArrowNock                     | [`crafttweaker.event.ArrowNockEvent`](/Vanilla/Events/Events/ArrowNock/)                                     |
| onBlockBreak                    | [`crafttweaker.event.BlockBreakEvent`](/Vanilla/Events/Events/BlockBreak/)                                   |
| onBlockHarvestDrops             | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                          |
| onBlockNeighborNotify           | [`crafttweaker.event.BlockNeighborNotifyEvent`](/Vanilla/Events/Events/BlockNeighborNotify)                  |
| onBlockPlace                    | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                                   |
| onCheckSpawn                    | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)             |
| onClientTick                    | [`crafttweaker.event.ClientTickEvent`](/Vanilla/Events/Events/ClientTick/)                                   |
| onCommand                       | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                    |
| onCriticalHit                   | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                 |
| onCropGrowPost                  | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                               |
| onCropGrowPre                   | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                                 |
| onEnchantmentLevelSet           | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)                 |
| onEnderTeleport                 | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                             |
| onEntityJoinWorld               | [`crafttweaker.event.EntityJoinWorldEvent`](/Vanilla/Events/Events/EntityJoinWorld/)                         |
| onEntityLivingAttacked          | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)               |
| onEntityLivingDamage            | [`crafttweaker.event.EntityLivingDamageEvent`](/Vanilla/Events/Events/EntityLivingDamage/)                   |
| onEntityLivingDeath             | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                     |
| onEntityLivingDeathDrops        | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)           |
| onEntityLivingEquipmentChange   | [`crafttweaker.event.EntityLivingEquipmentChangeEvent`](/Vanilla/Events/Events/EntityLivingEquipmentChange/) |
| onEntityLivingFall              | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                       |
| onEntityLivingHeal              | [`crafttweaker.event.EntityLivingHealEvent`](/Vanilla/Events/Events/EntityLivingHeal/)                       |
| onEntityLivingHurt              | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                       |
| onEntityLivingJump              | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                       |
| onEntityLivingUpdate            | [`crafttweaker.event.EntityLivingUpdateEvent`](/Vanilla/Events/Events/EntityLivingUpdate/)                   |
| onEntityLivingUseItem           | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)             |
| onEntityLivingUseItemFinish     | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)          |
| onEntityLivingUseItemStart      | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)           |
| onEntityLivingUseItemStop       | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)            |
| onEntityLivingUseItemTick       | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)            |
| onEntityMount                   | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                                 |
| onEntityStruckByLightning       | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)         |
| onEntityTravelToDimension       | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)         |
| onExplosionDetonate             | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                     |
| onExplosionStart                | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                           |
| onFarmlandTrample               | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                         |
| onItemExpire                    | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                                   |
| onItemFished                    | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                                   |
| onItemToss                      | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                       |
| onLivingDestroyBlock            | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)                   |
| onLivingExperienceDrop          | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)               |
| onLivingKnockBack               | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                         |
| onLootingLevel                  | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                               |
| onMinecartCollision             | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                     |
| onMinecartInteract              | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                       |
| onMobGriefing                   | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                 |
| onPlayerAdvancement             | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                          |
| onPlayerAnvilRepair             | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                     |
| onPlayerAnvilUpdate             | [`crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                     |
| onPlayerAttackEntity            | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)                   |
| onPlayerBonemeal                | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                           |
| onPlayerBreakSpeed              | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                            |
| onPlayerBrewedPotion            | [`crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)                        |
| onPlayerChangedDimension        | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)           |
| onPlayerClone                   | [`crafttweaker.event.PlayerCloneEvent`](/Vanilla/Events/Events/PlayerClone/)                                 |
| onPlayerCloseContainer          | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)               |
| onPlayerCrafted                 | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                             |
| onPlayerDeathDrops              | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                       |
| onPlayerDestroyItem             | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                          |
| onPlayerFillBucket              | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                       |
| onPlayerInteract                | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                           |
| onPlayerInteractBlock           | [`crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)                 |
| onPlayerInteractEntity          | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)               |
| onPlayerItemPickup              | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                       |
| onPlayerLeftClickBlock          | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)               |
| onPlayerLoggedIn                | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                           |
| onPlayerLoggedOut               | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                         |
| onPlayerOpenContainer           | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)                 |
| onPlayerPickupItem              | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                       |
| onPlayerPickupXp                | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                           |
| onPlayerRespawn                 | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                             |
| onPlayerRightClickItem          | [`crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)               |
| onPlayerSetSpawn                | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                                |
| onPlayerSleepInBed              | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                       |
| onPlayerSmelted                 | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                             |
| onPlayerTick                    | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                                   |
| onPlayerUseHoe                  | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                               |
| onPlayerVisibility              | [`crafttweaker.event.PlayerVisibilityEvent`](/Vanilla/Events/Events/PlayerVisibility/)                       |
| onPortalSpawn                   | [`crafttweaker.event.PortalSpawnEvent`](/Vanilla/Events/Events/PortalSpawn)                                  |
| onPotionBrewPost                | [`crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                           |
| onPotionBrewPre                 | [`crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                             |
| onProjectileImpactArrow         | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)             |
| onProjectileImpactFireball      | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)       |
| onProjectileImpactThrowable     | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/)     |
| onRenderTick                    | [`crafttweaker.event.RenderTickEvent`](/Vanilla/Events/Events/RenderTick/)                                   |
| onServerTick                    | [`crafttweaker.event.ServerTickEvent`](/Vanilla/Events/Events/ServerTick/)                                   |
| onSleepingLocationCheck         | [`crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)             |
| onSleepingTimeCheck             | [`crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)                     |
| onSpecialSpawn                  | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)             |
| onWorldTick                     | [`crafttweaker.event.WorldTickEvent`](/Vanilla/Events/Events/WorldTick/)                                     |

## Clear all event handlers
```zenscript
events.clear();
```
