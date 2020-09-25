# IEventManager

Der IEventManager ist genau das, was Sie brauchen, wenn Sie mit Eventhandlern umgehen.

## Diese Klasse importieren

It might be required for you to [import](/AdvancedFunctions/Import/) the class if you encounter any issues.  
`import crafttweaker.events.IEventManager;`

## Aufruf des Event-Managers

You can access the event manager using the [global `events` field](/Vanilla/Global_Functions/)

## Wie funktionieren Ereignisse?

Sie können eine Funktion hinzufügen, die das Ereignis repräsentiert, und von dort aus können Sie entscheiden, was CrT tun soll, wenn ein solches Ereignis auftritt.  
Das Wichtigste, was man sich vor Augen halten muss, ist, dass man den Anlass **ZUGRIFF ZU IHREN ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU ZU!** ansonsten können Sie auf keinen Fall zugreifen, wenn es ZenGetters ist.  
Wenn Sie einfach etwas ausdrucken wollen, wo Sie nicht auf das Ereignis zugreifen müssen, dann ist es in Ordnung.

```zenscript
events.onPlayerCrafted(function(event as craftweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    event. layer.xp += 1;
});


Events. nPlayerLoggedIn(function(event) {
    //event instanceof Object -> Keine Möglichkeit darauf zuzugreifen, also besser casten!
    print("SOMEONE HAT EIN!!!");
});
```

## Welche Veranstaltungen sind verfügbar?

Die ZenMethoden sind das, was Sie bei `Events anrufen müssen,`, die Event Class wäre das, was du brauchst, um das Event zu werfen.

| ZenMethode                    | Event-Klasse                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                  | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                               |
| onBlockBreak                  | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops           | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                      |
| onBlockPlace                  | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                  | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                     | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit                 | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                             |
| onCropGrowPost                | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| onCropGrowPre                 | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                             |
| onVerzauberung LevelSet       | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)             |
| onEnderTeleport               | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                         |
| onEntityLivingAttacked        | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath           | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops      | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)       |
| onEntityLivingFall            | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                   |
| onEntityLivingHurt            | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                   |
| onEntityLivingJump            | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                   |
| onEntityLivingUseItem         | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)         |
| onEntityLivingUseItemFinish   | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)      |
| onEntityLivingUseItemStart    | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)       |
| onEntityLivingUseItemStop     | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick     | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityMount                 | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToDimension     | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)     |
| onEntityStruckByLightning     | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate           | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart              | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                       |
| onFarmlandTrample             | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                     |
| onItemAblauf                  | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| onItemFished                  | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                    | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| onLivingDestroyBlock          | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop        | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack              | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| onPlünderungsebene            | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                           |
| onMinecartCollision           | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                 |
| onMinecartInteract            | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing                 | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                             |
| onPlayerAdvancement           | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                      |
| onPlayerAnvilRepair           | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                 |
| onPlayerAnvilUpdate           | [`crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                 |
| onSpieler AngriffEntität      | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)               |
| onPlayerKnochenmehl           | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                       |
| onPlayerBreakSpeed            | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                        |
| onSpieler BrewedTrank         | [`crafttweaker.event.PlayerBrewedTrank`](/Vanilla/Events/Events/PlayerBrewedPotion/)                     |
| onSpieler Geänderte Dimension | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)       |
| onPlayerCloseContainer        | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)           |
| onPlayerCrafted               | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                         |
| onPlayerDeathDrops            | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                   |
| onPlayerDestroyItem           | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                      |
| onPlayerFillBucket            | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                   |
| onPlayerInteract              | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                       |
| onPlayerInteractBlock         | [`crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)             |
| onPlayerInteractEntity        | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)           |
| onPlayerItemPickup            | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                   |
| onPlayerLeftClickBlock        | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)           |
| onPlayerLoggIn                | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                       |
| onPlayerLoggedOut             | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                     |
| onPlayerOpenContainer         | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)             |
| onPlayerPickupItem            | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                   |
| onPlayerPickupXp              | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                       |
| onSpieler Respawn             | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                         |
| onSpieler RechtsklickItem     | [`crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)           |
| onPlayerSetSpawn              | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                            |
| onSpieler SleepInBett         | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                   |
| onSpieler geschmolzen         | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                         |
| onPlayerTick                  | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                               |
| onPlayerUseHoe                | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                           |
| onPlayerSichtbarkeit          | [`crafttweaker.event.PlayerVisibilityEvent`](/Vanilla/Events/Events/PlayerVisibility/)                   |
| onPotionBraufpost             | [`crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                       |
| onPotionBring Pre             | [`crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                         |
| onProjectileImpactPfeil       | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)         |
| onProjectileImpactFireball    | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)   |
| onProjectileImpactThrowable   | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/) |
| onSleepingLocationCheck       | [`crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)         |
| onSleepingTimeCheck           | [`crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)                 |
| onSpecialSpawn                | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |

## Alle Ereignis-Handler löschen

```zenscript
events.clear();
```