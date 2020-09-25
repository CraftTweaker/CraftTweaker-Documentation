# IEventManager

IEventManager &mdash; это то, что вам нужно, чтобы работать с обработчиками событий.

## Импорт класса

Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс при обнаружении проблем.  
`import crafttweaker.events.IEventManager;`

## Вызов менеджера событий

Вы можете получить доступ к менеджеру событий, используя [глобальное поле `events`](/Vanilla/Global_Functions/).

## Как работают события?

Вы можете добавить функцию, которая представляет событие и оттуда, вы можете решить, что делать CrT если такое событие произойдет.  
Самое главное, что вам нужно **НАЗНАЧИТЬ СОБЫТИЕ!** в противном случае вы не сможете получить доступ к любому из них, если это ZenGetters.  
Если вы просто хотите напечатать что-нибудь, где вам не нужно иметь доступ к событию, то это нормально.

```zenscript
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    событие. layer.xp += 1;
});


событий. nPlayerLoggedIn(function(event) {
    //exanceof Object -> Нет доступа к нему, так что лучше cast!
    print("СОМЕН ЗАВЕРШЕНЫ В!!!");
});
```

## Какие события доступны?

Методы ZenMethods будут такими, как вам нужно вызвать `события`, Класс событий будет именно то, что вам нужно сделать для участия в событии.

| Метод                                             | Класс события                                                                                            |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                                    | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                                      | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                               |
| onBlockBreak                                      | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops                               | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                      |
| onBlockPlace                                      | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                                      | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                                         | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit                                     | [`crafttweaker.event.riticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                              |
| Рост на крючке                                    | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| Растение                                          | [`crafttweaker.event.CropGrowEvent`](/Vanilla/Events/Events/CropGrowPre/)                                |
| набор зачарований                                 | [`crafttweaker.event.EnchantmentLevel SetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)            |
| ЭндерТелепорт                                     | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                         |
| onEntityLivingАтакуется                           | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath                               | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops                          | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)       |
| onEntityLivingFall                                | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                   |
| onEntityLivingHurt                                | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                   |
| onEntityLivingJump                                | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                   |
| onEntityLivingUseItem                             | [`crafttweaker.event.EntityLivingUseItemEvent.Все`](/Vanilla/Events/Events/LivingEntityUseItem/)         |
| onEntityLivingUseItemFinish                       | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)      |
| onEntityLivingUseItemStart                        | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)       |
| onEntityLivingUseItemStop                         | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick                         | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityMount                                     | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToизмерение                         | [`crafttweaker.event.EntityTravelToDimension.Event`](/Vanilla/Events/Events/EntityTravelToDimension/)    |
| onEntityStruckByLightning                         | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate                               | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart                                  | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                       |
| трамвай для фермы                                 | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                     |
| на предмет Истекает                               | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| предмета                                          | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                                        | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| уничтожениеБлок ОнлайвингБлок                     | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop                            | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack                                  | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| уровень грабежа                                   | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                           |
| onMinecartCollision                               | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                 |
| Взаимодействие на Minecartact                     | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing                                     | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                             |
| прогресс игрока                                   | [`crafttweaker.event.Player.Advancement`](/Vanilla/Events/Events/PlayerAdvancement/)                     |
| Восстановление Игрового Аудиа                     | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                 |
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