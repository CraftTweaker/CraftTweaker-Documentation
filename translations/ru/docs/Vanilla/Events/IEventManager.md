# IEventManager

IEventManager &mdash; это то, что вам нужно, чтобы работать с обработчиками событий.

## Импорт класса

Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс при обнаружении проблем.  
`import crafttweaker.events.IEventManager;`

## Вызов менеджера событий

Вы можете получить доступ к менеджеру событий, используя [глобальное поле `events`](/Vanilla/Global_Functions/).

## Как работают события?

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

## Какие события доступны?

The ZenMethods would be what you'll need to call on `events`, the Event Class would be what you need to cast the event as.

| Метод                                             | Класс события                                                                                            |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                                    | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                                      | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                               |
| onBlockBreak                                      | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops                               | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                      |
| onBlockPlace                                      | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                                      | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                                         | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit                                     | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                             |
| onCropGrowPost                                    | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| onCropGrowPre                                     | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                             |
| onEnchantmentLevelSet                             | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)             |
| onEnderTeleport                                   | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                         |
| onEntityLivingAttacked                            | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath                               | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops                          | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)       |
| onEntityLivingFall                                | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                   |
| onEntityLivingHurt                                | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                   |
| onEntityLivingJump                                | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                   |
| onEntityLivingUseItem                             | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)         |
| onEntityLivingUseItemFinish                       | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)      |
| onEntityLivingUseItemStart                        | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)       |
| onEntityLivingUseItemStop                         | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick                         | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityMount                                     | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToDimension                         | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)     |
| onEntityStruckByLightning                         | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate                               | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart                                  | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                       |
| onFarmlandTrample                                 | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                     |
| onItemExpire                                      | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| onItemFished                                      | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                                        | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| onLivingDestroyBlock                              | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop                            | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack                                  | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| onLootingLevel                                    | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                           |
| onMinecartCollision                               | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                 |
| onMinecartInteract                                | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing                                     | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                             |
| onPlayerAdvancement                               | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                      |
| onPlayerAnvilRepair                               | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                 |
| onPlayerAnvilUpdate                               | [`crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                 |
| атакующий Игрок                                   | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)               |
| onPlayerBonemeal                                  | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                       |
| скорость разрыва игроков                          | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                        |
| зелье для игрока                                  | [`crafttweaker.event.PlayerBrewedЗелье`](/Vanilla/Events/Events/PlayerBrewedPotion/)                     |
| измененный размер игрока                          | [`crafttweaker.event.PlayerChangedDimension.Event`](/Vanilla/Events/Events/PlayerChangedDimension/)      |
| Закрыть контейнер игрока                          | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)           |
| созданный игроком                                 | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                         |
| onPlayerDeathDrops                                | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                   |
| предмет для Разрушения Игроков                    | [`crafttweaker.event.event.DestroyПредмет`](/Vanilla/Events/Events/PlayerDestroyItem/)                   |
| ведро для игроков                                 | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                   |
| Взаимодействие игрока                             | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                       |
| onPlayerInteractBlock                             | [`crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)             |
| Игрок InteractEntity                              | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)           |
| Самовывоз предмета игрока                         | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                   |
| onPlayerLeftClickBlock                            | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)           |
| Вход в игру                                       | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                       |
| onPlayerLoggedOut                                 | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                     |
| OpenContainer                                     | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)             |
| плейлист игрока                                   | [`crafttweaker.event.PlayerPickupitem`](/Vanilla/Events/Events/PlayerPickupItem/)                        |
| PickupXp                                          | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                       |
| Респавн игрока                                    | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                         |
| предмет правого клика игрока                      | [`crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)           |
| спавн игрока                                      | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                            |
| SleepInBed                                        | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                   |
| Плетеный                                          | [`crafttweaker.event.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                   |
| onPlayerTick                                      | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                               |
| ОнлайнерUseHoe                                    | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                           |
| Видимость игрока                                  | [`crafttweaker.event.PlayerVisibilityEvent`](/Vanilla/Events/Events/PlayerVisibility/)                   |
| PotionBrewPost                                    | [`crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                       |
| он-Зелёный Пивр                                   | [`crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                         |
| стрелка эффекта onProjectileImpactArrow           | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)         |
| атакующий огненный шар onProjectileImpactFireball | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)   |
| onProjectileImpactThrowable                       | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/) |
| Проверять местоположение                          | [`crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)         |
| onSleepingTimeCheck                               | [`crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)                 |
| onSpecialSpawn                                    | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |

## Очистить все обработчики событий

```zenscript
events.clear();
```