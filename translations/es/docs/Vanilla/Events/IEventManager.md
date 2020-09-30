# IEventManager

The IEventManager is what you're gonna need when dealing with event handlers.

## Importar la clase

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

| ZenMethod                            | Event Class                                                                                              |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                       | [`crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)                 |
| onAnimalTame                         | [`crafttweaker.event.AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                               |
| onBlockBreak                         | [`crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                    |
| onBlockHarvestDrops                  | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                      |
| onBlockPlace                         | [`crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                               |
| onCheckSpawn                         | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |
| onCommand                            | [`crafttweaker.event.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                |
| onCriticalHit                        | [`crafttweaker.event.CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                             |
| onCropGrowPost                       | [`crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                           |
| onCropGrowPre                        | [`crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                             |
| onEnchantmentLevelSet                | [`crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)             |
| onEnderTeleport                      | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                         |
| onEntityLivingAttacked               | [`crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)           |
| onEntityLivingDeath                  | [`crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)                 |
| onEntityLivingDeathDrops             | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)       |
| onEntityLivingFall                   | [`crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                   |
| onEntityLivingHurt                   | [`crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                   |
| onEntityLivingJump                   | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                   |
| onEntityLivingUseItem                | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)         |
| onEntityLivingUseItemFinish          | [`crafttweaker.event.EntityLivingUseItemEvent.Finish`](/Vanilla/Events/Events/LivingEntityUseItem/)      |
| onEntityLivingUseItemStart           | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)       |
| onEntityLivingUseItemStop            | [`crafttweaker.event.EntityLivingUseItemEvent.Stop`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick            | [`crafttweaker.event.EntityLivingUseItemEvent.Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityMount                        | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                             |
| onEntityTravelToDimension            | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)     |
| onEntityStruckByLightning            | [`crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)     |
| onExplosionDetonate                  | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                 |
| onExplosionStart                     | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                       |
| onFarmlandTrample                    | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                     |
| onItemExpire                         | [`crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                               |
| onItemFished                         | [`crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                               |
| onItemToss                           | [`crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                   |
| onLivingDestroyBlock                 | [`crafttweaker.event.LivingDestroyBlockEvent`](/Vanilla/Events/Events/LivingDestroyBlock/)               |
| onLivingExperienceDrop               | [`crafttweaker.event.LivingExperienceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)           |
| onLivingKockBack                     | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                     |
| onLootingLevel                       | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                           |
| onMinecartCollision                  | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                 |
| onMinecartInteract                   | [`crafttweaker.event.MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing                        | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                             |
| onPlayerAdvancement                  | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                      |
| onPlayerAnvilRepair                  | [`crafttweaker.event.PlayerAnvilRepairEvent`](/Vanilla/Events/Events/PlayerAnvilRepair/)                 |
| onPlayerAnvilUpdate                  | [`crafttweaker.event.PlayerAnvilUpdateEvent`](/Vanilla/Events/Events/PlayerAnvilUpdate/)                 |
| en la entidad de ataque              | [`crafttweaker.event.PlayerAttackEntityEvento`](/Vanilla/Events/Events/PlayerAttackEntity/)              |
| onBonemeal                           | [`crafttweaker.event.PlayerBonemealEvento`](/Vanilla/Events/Events/PlayerBonemeal/)                      |
| en la velocidad de descanso          | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                        |
| en la poción elaborada por jugador   | [`pociones de crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)        |
| en la dimensión cambiada del jugador | [`Evento de la dimensión cambiada`](/Vanilla/Events/Events/PlayerChangedDimension/)                      |
| en el contenedor cerrado             | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)           |
| en PlayerCreado                      | [`crafttweaker.event.PlayerCraftedEvento`](/Vanilla/Events/Events/PlayerCrafted/)                        |
| en PlayerDeathDrops                  | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                   |
| %{count} elementos                   | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                      |
| En el cubo de relleno                | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                   |
| en Jugador Interacto                 | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                       |
| onPlayerInteractBlock                | [`crafttweaker.event.PlayerInteractBlockEvento`](/Vanilla/Events/Events/PlayerInteractBlock/)            |
| en la interactividad del jugador     | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)           |
| al recoger el elemento               | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                   |
| en el bloque izquierdo del jugador   | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)           |
| al iniciar sesión                    | [`crafttweaker.event.PlayerLoggedInevento`](/Vanilla/Events/Events/PlayerLoggedIn/)                      |
| onPlayerLoggedOut                    | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                     |
| en OpenContenedor Jugador            | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)             |
| al recolectar el elemento            | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                   |
| %s de Recogida                       | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                       |
| en Reaparición del Jugador           | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                         |
| en el elemento derecho del jugador   | [`crafttweaker.event.PlayerRight ClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)          |
| Spawn del jugador                    | [`desovar un jugador`](/Vanilla/Events/Events/PlayerSetSpawn/)                                           |
| en la cama del jugador               | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                   |
| onJayerFundeado                      | [`crafttweaker.event.PlayersmalleltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                      |
| onPlayerTick                         | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                               |
| en el juego de azada                 | [`crafttweaker.event.PlayerUseHoeEvento`](/Vanilla/Events/Events/PlayerUseHoe/)                          |
| en la visibilidad del jugador        | [`crafttweaker.event.PlayerVisibilityEvento`](/Vanilla/Events/Events/PlayerVisibility/)                  |
| en el post de la cerveza             | [`evento de PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                                |
| una cerveza de poción                | [`crear un evento de PotionBrewPreevento`](/Vanilla/Events/Events/PotionBrewPre/)                        |
| en proyectoImpactoFlecha             | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)         |
| en proyectoImpactFireball            | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)   |
| en ProyectileImpactible              | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/) |
| Verificación de ubicación de sueño   | [`%{count} eventos %{count} eventos %{count}`](/Vanilla/Events/Events/SleepingLocationCheck/)            |
| onSleepingTimeCheck                  | [`Evento de verificación de tiempo`](/Vanilla/Events/Events/SleepingTimeCheck/)                          |
| Spawn onSpecial                      | [`crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)         |

## Clear all event handlers

```zenscript
events.clear();
```