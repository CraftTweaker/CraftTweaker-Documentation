# IEventManager

IEventManager jest tym, czego potrzebujesz podczas obsługi zdarzeń.

## Importowanie klasy

Może być wymagane, abyś [zaimportował](/AdvancedFunctions/Import/) klasę, jeśli napotkasz jakiekolwiek problemy.  
`zaimportuj crafttweaker.events.IEventManager;`

## Dzwonienie do menedżera wydarzeń

Możesz uzyskać dostęp do menadżera wydarzeń za pomocą pola [globalna `zdarzenia`](/Vanilla/Global_Functions/)

## Jak działają wydarzenia?

Możesz dodać funkcję, która reprezentuje wydarzenie i z tego miejsca możesz zdecydować, co chcesz zrobić CrT w przypadku wystąpienia takiego zdarzenia.  
Najważniejszą rzeczą do zapamiętania jest to, że musisz **ZATRUDNIĆ ZATRUDNIENIE NA TYP!** w przeciwnym razie nie będziesz mógł uzyskać dostępu do ZenGetters.  
Jeśli chcesz po prostu wydrukować coś, do którego nie musisz mieć dostępu do wydarzenia, to jest to w porządku.

```zenscript
events.onPlayerCcrefted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    zdarzenie. layer.xp += 1;
});


zdarzeń. nPlayerLoggedIn(function(event) {
    //event instanceof Object -> Brak sposobu dostępu do niego. Lepiej rzutować!
    print("SOMEONE ZOSTAŁ ZLOGOWANY!!!");
});
```

## Jakie wydarzenia są dostępne?

ZenMethods będą tym, do czego będziesz musiał dzwonić `wydarzeń`, Klasa Wydarzenia będzie tym, czego potrzebujesz by wysłać wydarzenie jako

| Metoda ZenMethod                         | Klasa wydarzenia                                                                                                       |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                           | [`[PLACEHOLDER] crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                             | [`Zdarzenie zwierzęcia`](/Vanilla/Events/Events/AnimalTame/)                                                           |
| [PLACEHOLDER] onBlockBreak               | [`[PLACEHOLDER] craft weaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops                      | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                                    |
| Miejsce onBlock'a                        | [`[PLACEHOLDER] crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                             | [`[PLACEHOLDER] crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                                | [`[PLACEHOLDER] crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit                            | [`[PLACEHOLDER] crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                             |
| Rośliny rosnące                          | [`[PLACEHOLDER] crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| Przyrosty                                | [`[PLACEHOLDER] crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                             |
| [PLACEHOLDER] onEnchantmentLevelSet      | [`[PLACEHOLDER] crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)             |
| onEnderTeleport                          | [`Zdarzenie EnderTeleportacji`](/Vanilla/Events/Events/EnderTeleport/)                                                 |
| onEntityLivingAttacked                   | [`[PLACEHOLDER] crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath                      | [`[PLACEHOLDER] crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops                 | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)                     |
| onEntityLivingFall                       | [`Zdarzenie crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                       |
| onEntityLivingHurt                       | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                                 |
| onEntityLivingJump                       | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                                 |
| onEntityLivingUseItem                    | [`crafttweaker.event.EntityLivingUseItemEvent.Wszystkie`](/Vanilla/Events/Events/LivingEntityUseItem/)                 |
| onEntityLivingUseItemFinish              | [`crafttweaker.event.EntityLivingUseItemEvent.Zakończ`](/Vanilla/Events/Events/LivingEntityUseItem/)                   |
| onEntityLivingUseItemStart               | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)                     |
| onEntityLivingUseItemStop                | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)                      |
| onEntityLivingUseItemTick                | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)                      |
| onEntityMount                            | [`[PLACEHOLDER] crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToDimension                | [`[PLACEHOLDER] crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)     |
| onEntityStruckByLightning                | [`[PLACEHOLDER] crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate                      | [`[PLACEHOLDER] crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart                         | [`[PLACEHOLDER] crafttweaker.event.ExplosionStart`](/Vanilla/Events/Events/ExplosionStart/)                            |
| [PLACEHOLDER] onFarmlandTrample          | [`Zdarzenie FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                                            |
| onItemExpire                             | [`[PLACEHOLDER] crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| Wprowadzone przedmioty                   | [`[PLACEHOLDER] crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                               | [`[PLACEHOLDER] crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| [PLACEHOLDER] onLivingDestroyBlock       | [`[PLACEHOLDER] crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop                   | [`[PLACEHOLDER] crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack                         | [`[PLACEHOLDER] crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| Poziom onLooting                         | [`Zdarzenie LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                                                  |
| onMinecartCollision                      | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                               |
| onMinecartInteract                       | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                                 |
| onMobGriefing                            | [`Zdarzenie MobGriefing`](/Vanilla/Events/Events/MobGriefing/)                                                         |
| onPlayerAdvancement                      | [`crafttweaker.event.Gracza Advancement`](/Vanilla/Events/Events/PlayerAdvancement/)                                   |
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
| [PLACEHOLDER] onSpecialSpawn             | [`[PLACEHOLDER] crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |

## Wyczyść wszystkie osoby obsługujące zdarzenia

```zenscript
Wyczyść ();
```