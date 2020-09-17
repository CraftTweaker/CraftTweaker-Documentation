# IEventManager

IEventManager es lo que necesitas al tratar con los gestores de eventos.

## Importar la clase

It might be required for you to [import](/AdvancedFunctions/Import/) the class if you encounter any issues.  
`import crafttweaker.events.IEventManager;`

## Llamando al gestor de eventos

Puede acceder al gestor de eventos utilizando el campo [global `eventos`](/Vanilla/Global_Functions/)

## ¿Cómo funcionan los eventos?

Puedes añadir una función que representa el evento y desde allí puedes decidir qué quieres que CrT haga si ocurre un evento.  
Lo más importante que hay que recordar es que necesitas **CASTA EL EVENTO DE SU TYPE!** ya que de lo contrario no podrá acceder a ningún si es ZenGetters.  
Si simplemente quieres imprimir algo donde no necesitas acceder al evento, entonces está bien.

```zenscript
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    evento. layer.xp += 1;
});


eventos. nPlayerLoggedIn(function(event) {
    //event instanceof Object -> No hay forma de acceder a él, ¡mejor lanzado!
    print("SOMEONE HA LOGADO IN!!!");
});
```

## ¿Qué eventos están disponibles?

Los métodos ZenMethods serían lo que necesitarás llamar a `eventos`, la Clase de Eventos sería lo que usted necesita para lanzar el evento.

| Método                               | Clase de evento                                                                                           |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                       | [`crear un evento`](/Vanilla/Events/Events/EntityLivingSpawn/)                                            |
| onAnimalTame                         | [`crear un evento de error`](/Vanilla/Events/Events/AnimalTame/)                                          |
| en BlockBreak                        | [`rotura de bloques`](/Vanilla/Events/Events/BlockBreak/)                                                 |
| onBlockHarvestDrops                  | [`crafttweaker.event.BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                       |
| en BlockPlace                        | [`programar un evento`](/Vanilla/Events/Events/BlockPlace/)                                               |
| onCheckSpawn                         | [`crear un evento`](/Vanilla/Events/Events/EntityLivingSpawn/)                                            |
| onCommand                            | [`commandEvent`](/Vanilla/Events/Events/CommandEvent/)                                                    |
| onCriticalHit                        | [`crafttweaker.event.Evento crítico`](/Vanilla/Events/Events/CriticalHit/)                                |
| en Cortar                            | [`crafttweaker.event.Recortar Evento Postal`](/Vanilla/Events/Events/CropGrowPost/)                       |
| en Cultivar Pre                      | [`crafttweaker.event.Recorte Preevento`](/Vanilla/Events/Events/CropGrowPre/)                             |
| onEnchantmentLevelSet                | [`crear un evento`](/Vanilla/Events/Events/EnchantmentLevelSet/)                                          |
| onEnderTeleport                      | [`crafttweaker.event.EnderTeleportEvent`](/Vanilla/Events/Events/EnderTeleport/)                          |
| La entidad ha sido atacada           | [`crear un evento o un evento`](/Vanilla/Events/Events/EntityLivingAttacked/)                             |
| En la vida de la entidad             | [`crafttweaker.event.Todo evento muerto`](/Vanilla/Events/Events/EntityLivingDeath/)                      |
| una entidad con la que morir         | [`crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)        |
| onEntityLivingFall                   | [`crafttweaker.event.Todo evento FallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                    |
| En caso de daño                      | [`crafttweaker.event.Todo evento`](/Vanilla/Events/Events/EntityLivingHurt/)                              |
| %s de salto                          | [`crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                    |
| onEntityLivingUseItem                | [`crafttweaker.event.EntityLivingUseItemEvento`](/Vanilla/Events/Events/LivingEntityUseItem/)             |
| onEntityLivingUseItemFinish          | [`crafttweaker.event.EntityLivingUseItemEvent.Finalizar`](/Vanilla/Events/Events/LivingEntityUseItem/)    |
| onEntityLivingUseItemStart           | [`crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemStop            | [`crafttweaker.event.EntityLivingUseItemEvent.Parar`](/Vanilla/Events/Events/LivingEntityUseItem/)        |
| onEntityLivingUseItemTick            | [`Crear un evento de un objeto`](/Vanilla/Events/Events/LivingEntityUseItem/)                             |
| onEntityMount                        | [`crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                              |
| en la dimensión del viaje            | [`crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)      |
| onEntityStruckByLightning            | [`crafttweaker.event.EntityStructural ByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/) |
| onExplosionDetonate                  | [`crafttweaker.event.ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                  |
| onExplosionStart                     | [`crafttweaker.event.ExplosionStartEvent`](/Vanilla/Events/Events/ExplosionStart/)                        |
| onFarmlandTrample                    | [`crafttweaker.event.FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                      |
| onItemExpire                         | [`crafttweaker.event.ItempireEvent`](/Vanilla/Events/Events/ItemExpire/)                                  |
| onItemFished                         | [`evento de crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                      |
| onItemToss                           | [`Evento de objetos`](/Vanilla/Events/Events/ItemToss/)                                                   |
| al activar el bloqueo                | [`Evento de bloqueo`](/Vanilla/Events/Events/LivingDestroyBlock/)                                         |
| onLivingExperienceDrop               | [`crafttweaker.event.LivingExperience enceDropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)       |
| onLivingKockBack                     | [`crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                      |
| nivel de saqueo                      | [`crafttweaker.event.LootingLevelEvent`](/Vanilla/Events/Events/LootingLevel/)                            |
| onMinecartCollision                  | [`crafttweaker.event.MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                  |
| en MinecartInteracto                 | [`crafttweaker.event.MinecartInteractEvento`](/Vanilla/Events/Events/MinecartInteract/)                   |
| onMobGriefing                        | [`crafttweaker.event.MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                              |
| en Avance del Jugador                | [`crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                       |
| en Reparacion de Jugador             | [`crafttweaker.event.PlayerAnvilRepair`](/Vanilla/Events/Events/PlayerAnvilRepair/)                       |
| en la entidad de ataque              | [`crafttweaker.event.PlayerAttackEntityEvento`](/Vanilla/Events/Events/PlayerAttackEntity/)               |
| onBonemeal                           | [`crafttweaker.event.PlayerBonemealEvento`](/Vanilla/Events/Events/PlayerBonemeal/)                       |
| en la velocidad de descanso          | [`crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                         |
| en la poción elaborada por jugador   | [`pociones de crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)         |
| en la dimensión cambiada del jugador | [`Evento de la dimensión cambiada`](/Vanilla/Events/Events/PlayerChangedDimension/)                       |
| en el contenedor cerrado             | [`crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)            |
| en PlayerCreado                      | [`crafttweaker.event.PlayerCraftedEvento`](/Vanilla/Events/Events/PlayerCrafted/)                         |
| en PlayerDeathDrops                  | [`crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                    |
| %{count} elementos                   | [`crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                       |
| En el cubo de relleno                | [`crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                    |
| en Jugador Interacto                 | [`crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                        |
| onPlayerInteractBlock                | [`crafttweaker.event.PlayerInteractBlockEvento`](/Vanilla/Events/Events/PlayerInteractBlock/)             |
| en la interactividad del jugador     | [`crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)            |
| al recoger el elemento               | [`crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                    |
| en el bloque izquierdo del jugador   | [`crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)            |
| al iniciar sesión                    | [`crafttweaker.event.PlayerLoggedInevento`](/Vanilla/Events/Events/PlayerLoggedIn/)                       |
| onPlayerLoggedOut                    | [`crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                      |
| en OpenContenedor Jugador            | [`crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)              |
| al recolectar el elemento            | [`crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                    |
| %s de Recogida                       | [`crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                        |
| en Reaparición del Jugador           | [`crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                          |
| en el elemento derecho del jugador   | [`crafttweaker.event.PlayerRight ClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)           |
| Spawn del jugador                    | [`desovar un jugador`](/Vanilla/Events/Events/PlayerSetSpawn/)                                            |
| en la cama del jugador               | [`crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                    |
| onJayerFundeado                      | [`crafttweaker.event.PlayersmalleltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                       |
| en Tick de jugador                   | [`crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                                |
| en el juego de azada                 | [`crafttweaker.event.PlayerUseHoeEvento`](/Vanilla/Events/Events/PlayerUseHoe/)                           |
| en la visibilidad del jugador        | [`crafttweaker.event.PlayerVisibilityEvento`](/Vanilla/Events/Events/PlayerVisibility/)                   |
| en el post de la cerveza             | [`evento de PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                                 |
| una cerveza de poción                | [`crear un evento de PotionBrewPreevento`](/Vanilla/Events/Events/PotionBrewPre/)                         |
| en proyectoImpactoFlecha             | [`crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)          |
| en proyectoImpactFireball            | [`crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/)    |
| en ProyectileImpactible              | [`crafttweaker.event.ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/)  |
| Verificación de ubicación de sueño   | [`%{count} eventos %{count} eventos %{count}`](/Vanilla/Events/Events/SleepingLocationCheck/)             |
| onSleepingTimeCheck                  | [`Evento de verificación de tiempo`](/Vanilla/Events/Events/SleepingTimeCheck/)                           |
| Spawn onSpecial                      | [`crear un evento`](/Vanilla/Events/Events/EntityLivingSpawn/)                                            |

## Borrar todos los controladores de eventos

```zenscript
events.clear();
```