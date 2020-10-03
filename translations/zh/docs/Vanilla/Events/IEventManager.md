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

| ZenMethod                   | Event Class                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| onAllowDespawn              | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                      |
| onAnimalTame                | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                    |
| onBlockBreak                | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                         |
| onBlockHarvestDrops         | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                           |
| onBlockPlace                | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                                    |
| onCheckSpawn                | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)              |
| onCommand                   | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                     |
| onCriticalHit               | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                  |
| onCropGrowPost              | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                                |
| onCropGrowPre               | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                                  |
| onEnchantmentLevelSet       | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)                  |
| onEnderTeleport             | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                              |
| onEntityLivingAttacked      | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)                |
| onEntityLivingDeath         | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                      |
| onEntityLivingDeathDrops    | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)            |
| onEntityLivingFall          | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                        |
| onEntityLivingHurt          | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                        |
| onEntityLivingJump          | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                        |
| onEntityLivingUseItem       | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)              |
| onEntityLivingUseItemFinish | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)           |
| onEntityLivingUseItemStart  | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)            |
| onEntityLivingUseItemStop   | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)             |
| onEntityLivingUseItemTick   | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)             |
| onEntityMount               | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                                  |
| onEntityTravelToDimension   | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)          |
| onEntityStruckByLightning   | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)          |
| onExplosionDetonate         | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                      |
| onExplosionStart            | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                            |
| onFarmlandTrample           | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                          |
| onItemExpire                | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                                    |
| onItemFished                | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                                    |
| onItemToss                  | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                        |
| onLivingDestroyBlock        | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)                    |
| onLivingExperienceDrop      | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)                |
| onLivingKockBack            | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                          |
| onLootingLevel              | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                                |
| onMinecartCollision         | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                      |
| onMinecartInteract          | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                        |
| onMobGriefing               | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                  |
| onPlayerAdvancement         | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                           |
| onPlayerAnvilRepair         | [`PlayerAnvilRepairEvent craftbiner.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/) |
| onPlayerAnvilUpdate         | [`craftbinvest.PlayerAnvilUpdate事件`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                               |
| onPlayerAttack实体            | [`craftbenefer.event.PlayerAttackEntity事件`](/Vanilla/Events/Events/PlayerAttackEntity/)                       |
| onPlayerBonemeal            | [`PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                                               |
| 随机断路速度                      | [`PlayerBreak速度`](/Vanilla/Events/Events/PlayerBreakSpeed/)                                                   |
| 游玩家酿酒药水                     | [`PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)                                            |
| onPlayerChangedDimension    | [`PlayerChangedDimension事件`](/Vanilla/Events/Events/PlayerChangedDimension/)                                  |
| onPlayerCloseContainer      | [`PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)                                   |
| 玩家合成了                       | [`PlayerCrafted事件`](/Vanilla/Events/Events/PlayerCrafted/)                                                    |
| onPlayerDeathDrops          | [`PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                                           |
| onPlayerDestrroy项目          | [`PlayerDestroy项目`](/Vanilla/Events/Events/PlayerDestroyItem/)                                                |
| onPlayerFillBucket          | [`craftbucketEvent.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                          |
| onPlayerInteract            | [`craftbenefer.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                            |
| onPlayerInteractBlock       | [`craftbenefer.event.PlayerInteractBlock事件`](/Vanilla/Events/Events/PlayerInteractBlock/)                     |
| onPlayerInteractEnty        | [`craftbenefer.event.PlayerInteractEntity事件`](/Vanilla/Events/Events/PlayerInteractEntity/)                   |
| onPlayerItem皮卡              | [`PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                                           |
| onPlayerLeftClickBlock      | [`PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)                                   |
| onPlayerLoggedin            | [`PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                                               |
| onPlayerLoggedOut           | [`PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                                             |
| onPlayerOpenContainer       | [`craftbinvest.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)                        |
| onPlayerPickupitem          | [`PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                                           |
| onPlayerPickupXp            | [`PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                                               |
| onPlayerRespawn             | [`PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                                                 |
| onPlayerRightClickites      | [`craftbenefer.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)                |
| onPlayerSet生成               | [`PlayerSettyerSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                                                |
| onPlayerSleepInBed          | [`PlayerSleepInBedEvent 事件`](/Vanilla/Events/Events/PlayerSleepInBed/)                                        |
| onPlayerSmeled              | [`craftbenefer.event.PlayerSmelted事件`](/Vanilla/Events/Events/PlayerSmelted/)                                 |
| onPlayerTick                | [`PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                                                       |
| onPlayerUseHoe              | [`PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                                                   |
| onPlayer可见性                 | [`PlayerVisibility事件`](/Vanilla/Events/Events/PlayerVisibility/)                                              |
| onPotionBrewPost            | [`PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                                               |
| onPotionBrewPre             | [`PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                                                 |
| onProjectileImpactArrow     | [`craftbenefer.event.ProjecttileImpactArrow事件`](/Vanilla/Events/Events/ProjectileImpactArrow/)                |
| onProjectileImpactFireball  | [`craftbinvest.ProjecttileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)             |
| 关于投影ImpactThrowable         | [`craftbenefer.event.ProjecttileImpactThrowableEvents`](/Vanilla/Events/Events/ProjectileImpactThrowable/)    |
| 睡眠定位检查                      | [`craftbenefer.event.SleepingLocationCheck事件`](/Vanilla/Events/Events/SleepingLocationCheck/)                 |
| onSleepingTimeCheck         | [`craftbenefer.event.SleepingTimeCheck事件`](/Vanilla/Events/Events/SleepingTimeCheck/)                         |
| 特别生成                        | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)              |

## Clear all event handlers

```zenscript
events.clear();
```