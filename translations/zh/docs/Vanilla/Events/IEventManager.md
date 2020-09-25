# IEventManager

IEventManager是你在处理事件处理程序时所需要的。

## 导入类

如果您遇到任何问题，您可能需要 [导入类](/AdvancedFunctions/Import/) 。  
`导入craftmiliter.events.IEventManager；`

## 调用事件管理器

您可以使用 [global `事件` 字段访问事件管理器](/Vanilla/Global_Functions/)

## 事件如何工作？

您可以添加一个代表事件的函数，从那里可以决定如果发生这种事件，您想要CrT做什么。  
需要记住的最重要的事情是你需要 **把信息传输给你的技术！** 否则您将无法访问它的ZenGetters。  
如果您只是想打印出您不需要访问该事件的内容，那么它就好了。

```zenscript
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    event.player.xp += 1;
});


events.onPlayerLoggedIn(function(event) {
    //event instanceof Object -> No way of accessing it, so better cast!
    打印("SOMEONE HAS LOGUGED IN!!!");
});
```

## 有哪些活动可用？

ZenMethods 将是您需要调用的 `事件`, 事件类将是您需要投射的事件。

| ZenMethod（ZenMethod）        | 事件类                                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| onallows Despawn            | [`craftbenefer.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                      |
| onAnimalTame                | [`craftbenefer.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                    |
| onBlockBreak                | [`Craftbiner.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                           |
| onBlockHarvestDrops         | [`craftbenefer.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                           |
| onBlockplace                | [`craftbenefer.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                                    |
| onCheckSpawn                | [`craftbenefer.event.EntityLivingExtenedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)               |
| on命令                        | [`craftbinvest.command事件`](/Vanilla/Events/Events/CommandEvent/)                                              |
| onCriticalHit               | [`CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                                     |
| onCropGrowPost              | [`craftbenefer.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                                |
| onCropGrowPre               | [`craftbenefer.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                                  |
| onEnchantLevel集             | [`craftbenefer.event.EnchantLevelSet事件`](/Vanilla/Events/Events/EnchantmentLevelSet/)                         |
| onEnderTeleport             | [`craftbenefer.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                              |
| onentityLiving被攻击           | [`craftbenefer.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)                |
| 亡语                          | [`craftbenefer.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                      |
| onentityLivingDeathDrops    | [`craftbenefer.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)            |
| onEntityLivingFall          | [`craftbenefer.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                        |
| onentityLivingHurt          | [`craftbenefer.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                        |
| onentityLivingJump          | [`craftbenefer.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                        |
| onEntityLivingUseItem       | [`所有 craftbenefer.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)           |
| onEntityLivingUseItemFinish | [`craftbenefer.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)           |
| onEntityLivingUseItemStart  | [`craftminstrer.event.EntityLivingUseItemEvent.启动`](/Vanilla/Events/Events/LivingEntityUseItem/)              |
| onEntityLivingUseItemStop   | [`craftbower.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)               |
| onEntityLivingUseItemTick   | [`craftminstrer.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)            |
| onEntityMount               | [`craftbenefer.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                                  |
| onentityTravel Timension    | [`craftbenefer.event.EntityTravelToDimension事件`](/Vanilla/Events/Events/EntityTravelToDimension/)             |
| onEntityStruckByLightning   | [`craftbenefer.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)          |
| 引爆消耗度                       | [`craftbenefer.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                      |
| 引爆开始                        | [`craftbenefer.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                            |
| 法尔兰特雷姆普尔                    | [`craftbenefer.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                          |
| 过期时间                        | [`craftbinstrer.eventItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                                    |
| onItemFished                | [`craftbinvest.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                                    |
| onItemToss                  | [`craftbenefer.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                        |
| onLivingDestroyBlock        | [`craftminstrer.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)                   |
| onLivingExperienceDrop      | [`craftbinvest.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)                      |
| onLivingKockBack            | [`craftbenefer.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                          |
| 开关级别                        | [`Lottweaker.event.LootingLevel事件`](/Vanilla/Events/Events/LootingLevel/)                                     |
| onMinecartCollision         | [`craftbenefer.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                      |
| onMinecartInteract          | [`craftbenefer.event.MinecartInteract事件`](/Vanilla/Events/Events/MinecartInteract/)                           |
| onMobGriefing               | [`craftbinefer.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                  |
| onPlayerAdvancement         | [`PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                                              |
| onPlayerAnvil维修             | [`PlayerAnvilRepairEvent craftbiner.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/) |
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
| 特别生成                        | [`craftbenefer.event.EntityLivingExtenedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)               |

## 清除所有事件处理程序

```zenscript
clear();
```