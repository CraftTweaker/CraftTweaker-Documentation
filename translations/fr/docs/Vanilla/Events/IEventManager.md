# IEventManager

Le IEventManager est ce dont vous aurez besoin lorsque vous traiterez avec les gestionnaires d'événements.

## Importation de la classe

Il peut être nécessaire pour vous de [importer](/AdvancedFunctions/Import/) la classe si vous rencontrez des problèmes.  
`importer crafttweaker.events.IEventManager ;`

## Appel au gestionnaire d'événements

Vous pouvez accéder au gestionnaire d'événements en utilisant le champ [global `événements`](/Vanilla/Global_Functions/)

## Comment fonctionnent les événements ?

Vous pouvez ajouter une fonction qui représente l'événement et, à partir de là, vous pouvez décider ce que vous voulez que CrT fasse si un tel événement se produit.  
La chose la plus importante à retenir est que vous devez **CASTER L'ÉVÉNEMENT À CE TYPE !** sinon, vous ne serez pas en mesure d'y accéder si c'est ZenGetters.  
Si vous voulez simplement imprimer quelque chose où vous n'avez pas besoin d'accéder à l'événement, alors c'est bien.

```zenscript
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    print("event".length);
    print(event.player.name);
    événement. layer.xp += 1;
});


événements. nPlayerLoggedIn(function(event) {
    //event instanceof Object -> Aucun moyen d'y accéder, donc mieux caster !
    print("SOMEONE A CONNECTÉ !!!");
});
```

## Quels sont les événements disponibles ?

Les méthodes Zen seraient ce dont vous aurez besoin pour appeler les `événements`, la classe d'événement serait ce dont vous avez besoin pour lancer l'événement comme.

| Méthode Zen                            | Classe de l'événement                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| onAllowDespawn                         | [`format@@0 crafttweaker.event.EntityLivingSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)               |
| onAnimalTame                           | [`AnimalTameEvent`](/Vanilla/Events/Events/AnimalTame/)                                                          |
| format@@0 onBlockBreak                 | [`format@@0 crafttweaker.event.BlockBreak`](/Vanilla/Events/Events/BlockBreak/)                                  |
| onBlockHarvestDrops                    | [`BlockHarvestDrops`](/Vanilla/Events/Events/BlockHarvestDrops/)                                                 |
| onBlockPlace                           | [`format@@0 crafttweaker.event.BlockPlaceEvent`](/Vanilla/Events/Events/BlockPlace/)                             |
| onCheckSpawn                           | [`format@@0 crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)       |
| onCommand                              | [`Évènement crafttweaker.CommandEvent`](/Vanilla/Events/Events/CommandEvent/)                                    |
| onCriticalHit                          | [`format@@0 CriticalHitEvent`](/Vanilla/Events/Events/CriticalHit/)                                              |
| format@@0 onCropGrowPost               | [`format@@0 crafttweaker.event.CropGrowPostEvent`](/Vanilla/Events/Events/CropGrowPost/)                         |
| format@@0 onCropGrowPre                | [`format@@0 crafttweaker.event.CropGrowPreEvent`](/Vanilla/Events/Events/CropGrowPre/)                           |
| format@@0 onEnchantmentLevel           | [`format@@0 crafttweaker.event.EnchantmentLevelSetEvent`](/Vanilla/Events/Events/EnchantmentLevelSet/)           |
| format@@0 onEnderTeleport              | [`Événement d'EnderTeleportation`](/Vanilla/Events/Events/EnderTeleport/)                                        |
| format@@0 onEntityLivingLivingAttacked | [`format@@0 crafttweaker.event.EntityLivingAttackedEvent`](/Vanilla/Events/Events/EntityLivingAttacked/)         |
| format@@0 onEntityLivingDeath          | [`format@@0 crafttweaker.event.EntityLivingDeathEvent`](/Vanilla/Events/Events/EntityLivingDeath/)               |
| format@@0 onEntityLivingDeathDrops     | [`format@@0 crafttweaker.event.EntityLivingDeathDropsEvent`](/Vanilla/Events/Events/EntityLivingDeathDrops/)     |
| onEntityLivingFall                     | [`format@@0 crafttweaker.event.EntityLivingFallEvent`](/Vanilla/Events/Events/EntityLivingFall/)                 |
| en cours de vie sur une entité         | [`format@@0 crafttweaker.event.EntityLivingHurtEvent`](/Vanilla/Events/Events/EntityLivingHurt/)                 |
| format@@0 onEntityLivingJump           | [`format@@0 crafttweaker.event.EntityLivingJumpEvent`](/Vanilla/Events/Events/EntityLivingJump/)                 |
| onEntityLivingUseItem                  | [`crafttweaker.event.EntityLivingUseItemEvent.All`](/Vanilla/Events/Events/LivingEntityUseItem/)                 |
| onEntityLivingUseItemFinish            | [`format@@0 crafttweaker.event.EntityLivingUseItemEvent`](/Vanilla/Events/Events/LivingEntityUseItem/)           |
| onEntityLivingUseItemStart             | [`format@@0 crafttweaker.event.EntityLivingUseItemEvent.Start`](/Vanilla/Events/Events/LivingEntityUseItem/)     |
| onEntityLivingUseItemStop              | [`Arrêt`](/Vanilla/Events/Events/LivingEntityUseItem/)                                                           |
| onEntityLivingUseItemTick              | [`Tick`](/Vanilla/Events/Events/LivingEntityUseItem/)                                                            |
| Montage onEntity                       | [`format@@0 crafttweaker.event.EntityMountEvent`](/Vanilla/Events/Events/EntityMount/)                           |
| sur EntityTravelTo Dimension           | [`format@@0 crafttweaker.event.EntityTravelToDimensionEvent`](/Vanilla/Events/Events/EntityTravelToDimension/)   |
| onEntityStruckByLightning              | [`format@@0 crafttweaker.event.EntityStruckByLightningEvent`](/Vanilla/Events/Events/EntityStruckByLightning/)   |
| format@@0 onExplosionDetonate          | [`Événement ExplosionDetonateEvent`](/Vanilla/Events/Events/ExplosionDetonate/)                                  |
| format@@0 onExplosionStart             | [`Événement de démarrage d'Explosion`](/Vanilla/Events/Events/ExplosionStart/)                                   |
| format@@0 onFarmlandTrample            | [`FarmlandTrampleEvent`](/Vanilla/Events/Events/FarmlandTrample/)                                                |
| format@@0 onItemExpire                 | [`format@@0 crafttweaker.event.ItemExpireEvent`](/Vanilla/Events/Events/ItemExpire/)                             |
| format@@0 onItemFished                 | [`format@@0 crafttweaker.event.ItemFishedEvent`](/Vanilla/Events/Events/ItemFished/)                             |
| onItemToss                             | [`format@@0 crafttweaker.event.ItemTossEvent`](/Vanilla/Events/Events/ItemToss/)                                 |
| format@@0 onLivingDestroyBlock         | [`Évènement format@@0LivingDestroyBlockformat@@1`](/Vanilla/Events/Events/LivingDestroyBlock/)                   |
| onLivingExperienceDrop                 | [`Événement « crafttweaker.» LivingExperience DropEvent`](/Vanilla/Events/Events/LivingExperienceDrop/)          |
| onLivingKockBack                       | [`format@@0 crafttweaker.event.LivingKnockBackEvent`](/Vanilla/Events/Events/LivingKnockBack/)                   |
| niveau de butin                        | [`Evénement de niveau de butin`](/Vanilla/Events/Events/LootingLevel/)                                           |
| onMinecartCollision                    | [`MinecartCollisionEvent`](/Vanilla/Events/Events/MinecartCollision/)                                            |
| sur MinecartInteract                   | [`Événement MinecartInteractEvent`](/Vanilla/Events/Events/MinecartInteract/)                                    |
| onMobGriefing                          | [`Événement MobGriefingEvent`](/Vanilla/Events/Events/MobGriefing/)                                              |
| format@@0 onPlayerAdvancement          | [`format@@0 crafttweaker.event.PlayerAdvancement`](/Vanilla/Events/Events/PlayerAdvancement/)                    |
| format@@0 onPlayerAnvilRepair          | [`format@@0 crafttweaker.event.PlayerAnvilRepair`](/Vanilla/Events/Events/PlayerAnvilRepair/)                    |
| onPlayerAttackEntity                   | [`format@@0 crafttweaker.event.PlayerAttackEntityEvent`](/Vanilla/Events/Events/PlayerAttackEntity/)             |
| farine d'os de joueur                  | [`format@@0 crafttweaker.event.PlayerBonemealEvent`](/Vanilla/Events/Events/PlayerBonemeal/)                     |
| format@@0 onPlayerBreakSpeed           | [`format@@0 crafttweaker.event.PlayerBreakSpeed`](/Vanilla/Events/Events/PlayerBreakSpeed/)                      |
| onPlayerBrewedPotion                   | [`format@@0 crafttweaker.event.PlayerBrewedPotion`](/Vanilla/Events/Events/PlayerBrewedPotion/)                  |
| onPlayerChangedDimension               | [`format@@0 crafttweaker.event.PlayerChangedDimensionEvent`](/Vanilla/Events/Events/PlayerChangedDimension/)     |
| format@@0 onPlayerCloseContainer       | [`format@@0 crafttweaker.event.PlayerCloseContainerEvent`](/Vanilla/Events/Events/PlayerCloseContainer/)         |
| onPlayerCrafted                        | [`format@@0 crafttweaker.event.PlayerCraftedEvent`](/Vanilla/Events/Events/PlayerCrafted/)                       |
| onPlayerDeathDrops                     | [`format@@0 crafttweaker.event.PlayerDeathDropsEvent`](/Vanilla/Events/Events/PlayerDeathDrops/)                 |
| format@@0 onPlayerDestroyItem          | [`format@@0 crafttweaker.event.PlayerDestroyItem`](/Vanilla/Events/Events/PlayerDestroyItem/)                    |
| format@@0 onPlayerFiller Bucket        | [`format@@0 crafttweaker.event.PlayerFillBucketEvent`](/Vanilla/Events/Events/PlayerFillBucket/)                 |
| format@@0 onPlayerInteract             | [`format@@0 crafttweaker.event.PlayerInteractEvent`](/Vanilla/Events/Events/PlayerInteract/)                     |
| onPlayerInteractBlock                  | [`format@@0 crafttweaker.event.PlayerInteractBlockEvent`](/Vanilla/Events/Events/PlayerInteractBlock/)           |
| format@@0 onPlayerInteractEntity       | [`format@@0 crafttweaker.event.PlayerInteractEntityEvent`](/Vanilla/Events/Events/PlayerInteractEntity/)         |
| format@@0 onPlayerItemPickup           | [`format@@0 crafttweaker.event.PlayerItemPickupEvent`](/Vanilla/Events/Events/PlayerItemPickup/)                 |
| onPlayerClickBlock                     | [`format@@0 crafttweaker.event.PlayerLeftClickBlockEvent`](/Vanilla/Events/Events/PlayerLeftClickBlock/)         |
| onPlayerConnecté                       | [`format@@0 crafttweaker.event.PlayerLoggedInEvent`](/Vanilla/Events/Events/PlayerLoggedIn/)                     |
| onPlayerLoggedOut                      | [`format@@0 crafttweaker.event.PlayerLoggedOutEvent`](/Vanilla/Events/Events/PlayerLoggedOut/)                   |
| onPlayerOpenContainer                  | [`format@@0 crafttweaker.event.PlayerOpenContainerEvent`](/Vanilla/Events/Events/PlayerOpenContainer/)           |
| format@@0 onPlayerPickupItem           | [`format@@0 crafttweaker.event.PlayerPickupItemEvent`](/Vanilla/Events/Events/PlayerPickupItem/)                 |
| format@@0 onPlayerPickupXp             | [`format@@0 crafttweaker.event.PlayerPickupXpEvent`](/Vanilla/Events/Events/PlayerPickupXp/)                     |
| format@@0 onPlayerRespawn              | [`format@@0 crafttweaker.event.PlayerRespawnEvent`](/Vanilla/Events/Events/PlayerRespawn/)                       |
| onPlayerClickItem                      | [`format@@0 crafttweaker.event.PlayerRightClickItemEvent`](/Vanilla/Events/Events/PlayerRightClickItem/)         |
| format@@0 onPlayerSetSpawn             | [`format@@0 crafttweaker.event.PlayerSetSpawn`](/Vanilla/Events/Events/PlayerSetSpawn/)                          |
| onPlayerSleepInBed                     | [`format@@0 crafttweaker.event.PlayerSleepInBedEvent`](/Vanilla/Events/Events/PlayerSleepInBed/)                 |
| onPlayerSmelted                        | [`format@@0 crafttweaker.event.PlayerSmeltedEvent`](/Vanilla/Events/Events/PlayerSmelted/)                       |
| format@@0 onPlayerTick                 | [`format@@0 crafttweaker.event.PlayerTickEvent`](/Vanilla/Events/Events/PlayerTick/)                             |
| onPlayerUseHoe                         | [`format@@0 crafttweaker.event.PlayerUseHoeEvent`](/Vanilla/Events/Events/PlayerUseHoe/)                         |
| onPlayerVisibility                     | [`Événement de Visibilité des joueurs`](/Vanilla/Events/Events/PlayerVisibility/)                                |
| format@@0 onPotionBrewPost             | [`format@@0 crafttweaker.event.PotionBrewPostEvent`](/Vanilla/Events/Events/PotionBrewPost/)                     |
| format@@0 onPotionBrewPre              | [`format@@0 crafttweaker.event.PotionBrewPreEvent`](/Vanilla/Events/Events/PotionBrewPre/)                       |
| onProjectileImpactFrow                 | [`format@@0 crafttweaker.event.ProjectileImpactArrowEvent`](/Vanilla/Events/Events/ProjectileImpactArrow/)       |
| onProjectileImpactFireball             | [`format@@0 crafttweaker.event.ProjectileImpactFireballEvent`](/Vanilla/Events/Events/ProjectileImpactFireball/) |
| format@@0 onProjectileImpactThrowable  | [`Événement ProjectileImpactThrowableEvent`](/Vanilla/Events/Events/ProjectileImpactThrowable/)                  |
| onSleepingLocationCheck                | [`format@@0 crafttweaker.event.SleepingLocationCheckEvent`](/Vanilla/Events/Events/SleepingLocationCheck/)       |
| onSleepingTimeCheck                    | [`format@@0 crafttweaker.event.SleepingTimeCheckEvent`](/Vanilla/Events/Events/SleepingTimeCheck/)               |
| format@@0 onSpecialSpawn               | [`format@@0 crafttweaker.event.EntityLivingExtendedSpawnEvent`](/Vanilla/Events/Events/EntityLivingSpawn/)       |

## Effacer tous les gestionnaires d'événements

```zenscript
clear();
```