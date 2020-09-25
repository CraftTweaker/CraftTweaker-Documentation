# IEventManager

IEventManager è quello di cui hai bisogno quando hai a che fare con i gestori di eventi.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe se riscontri dei problemi.  
`importare crafttweaker.events.IEventManager;`

## Chiamare il gestore degli eventi

È possibile accedere al gestore degli eventi utilizzando il campo [globale `eventi`](/Vanilla/Global_Functions/)

## Come funzionano gli eventi?

È possibile aggiungere una funzione che rappresenta l'evento e da lì in poi si può decidere cosa si desidera fare CrT se tale evento si verifica.  
La cosa più importante da ricordare è che è necessario **CAST THE EVENT TO IT 'S TYPE!** altrimenti non sarai in grado di accedere a nessuno se è ZenGetters.  
Se vuoi semplicemente stampare qualcosa dove non hai bisogno di accedere all'evento, allora va bene.

```zenscript
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    event. layer.xp += 1;
});


eventi. nPlayerLoggedIn(function(event) {
    //event instanceof Object -> Nessun modo di accedervi, così meglio cast!
    print("SOMEONE HAS LOGGED IN!!!");
});
```

## Quali eventi sono disponibili?

Lo ZenMethods sarebbe quello che dovrai chiamare `eventi`, la Classe Evento sarebbe ciò di cui hai bisogno per lanciare l'evento.

| ZenMethod                   | Classe Evento                                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| onAllowDespawn              | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                               |
| onBlockBreak                | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops         | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                      |
| onBlockPlace                | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                   | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit               | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                             |
| onCropGrowPost              | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| onCropGrowPre               | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                             |
| onEnchantmentLevelSet       | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)             |
| onEnderTeleport             | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                         |
| onEntityLivingAttacked      | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath         | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops    | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)       |
| onEntityLivingFall          | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                   |
| onEntityLivingHurt          | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                   |
| onEntityLivingJump          | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                   |
| onEntityLivingUseItem       | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)         |
| onEntityLivingUseItemFinish | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)      |
| onEntityLivingUseItemStart  | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)       |
| onEntityLivingUseItemStop   | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick   | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityMount               | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToDimension   | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)     |
| onEntityStruckByLightning   | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate         | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart            | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                       |
| onFarmlandTrample           | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                     |
| onItemScadere               | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| onItemFished                | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                  | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| onLivingDestroyBlock        | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop      | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack            | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| onLootingLevel              | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                           |
| onMinecartCollision         | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                 |
| onMinecartInteract          | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing               | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                             |
| onPlayerAdvancement         | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                      |
| onPlayerAnvilRepair         | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                 |
| onPlayerAnvilUpdate         | [`crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                 |
| onPlayerAttackEntity        | [`crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)               |
| onPlayerBonemeal            | [`crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                       |
| onPlayerBreakSpeed          | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                        |
| onPlayerBrewedPozione       | [`crafttweaker.event.PlayerBrewedPozione`](/Vanilla/Events/Events/PlayerBrewedPotion/)                   |
| onPlayerChangedDimension    | [`crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)       |
| onPlayerCloseContainer      | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)           |
| onPlayerCrafted             | [`crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                         |
| onPlayerDeathDrops          | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                   |
| onPlayerDestroyItem         | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                      |
| onPlayerFillBucket          | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                   |
| onPlayerInteract            | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                       |
| onPlayerInteractBlock       | [`crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)             |
| onPlayerInteractEntity      | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)           |
| onPlayerItemPickup          | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                   |
| onPlayerLeftClickBlock      | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)           |
| onPlayerLoggedIn            | [`crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                       |
| onPlayerLoggedOut           | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                     |
| onPlayerOpenContainer       | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)             |
| onPlayerPickupItem          | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                   |
| onPlayerPickupXp            | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                       |
| onPlayerRespawn             | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                         |
| onPlayerRightClickItem      | [`crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)           |
| onPlayerSetSpawn            | [`crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                            |
| onPlayerSleepInBed          | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                   |
| onPlayerSmelted             | [`crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                         |
| onPlayerTick                | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                               |
| onPlayerUseHoe              | [`crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                           |
| onPlayerVisibility          | [`crafttweaker.event.PlayerVisibilityEvent`](/Vanilla/Events/Events/PlayerVisibility/)                   |
| onPotionBrewPost            | [`crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                       |
| onPotionBrewPre             | [`crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                         |
| onProjectileImpactArrow     | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)         |
| onProjectileImpactFireball  | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)   |
| onProjectileImpactThrowable | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/) |
| onSleepingLocationCheck     | [`crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)         |
| onSleepingTimeCheck         | [`crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)                 |
| onSpecialSpawn              | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |

## Cancella tutti i gestori di eventi

```zenscript
events.clear();
```