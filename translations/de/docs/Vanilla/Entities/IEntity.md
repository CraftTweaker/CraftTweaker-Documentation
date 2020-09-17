# IEntity

Entitäts-Schnittstelle. Wird verwendet, um Daten von Informationseinheiten zu erhalten und zu ändern.  
Entitäten sind alles, was sich in der Welt frei bewegen kann, wie Spieler, Monster, Gegenstände auf dem Boden noch vieles mehr.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntity;`

## ICommandSender erweitern

IEntity erweitert [ICommandSender](/Vanilla/Commands/ICommandSender/). Das bedeutet, dass alle Methoden, die für [ICommandSender](/Vanilla/Commands/ICommandSender/) Objekte verfügbar sind, auch für IEntity Objects verfügbar sind!

<details><summary>Abgeleitete Methoden</summary> 

- entity.displayName
- entity.position
- entity.world
- entity.server
- entity.sendMessage(String Text)</details>

## ZenGetter

| GetterName                 | GetterMethode     | Rückgabetyp (*kann null sein*)                              |
| -------------------------- | ----------------- | ----------------------------------------------------------- |
| luft                       | getAir()          | int                                                         |
| alive                      | isAlive()         | boolean                                                     |
| alwaysRenderNameTag        |                   | boolean                                                     |
| armorInventar              |                   | Liste <[IItemStack](/Vanilla/Items/IItemStack/)             |
| canBeAttackedWithItem      |                   | boolean                                                     |
| canBeCollidedMit           |                   | boolean                                                     |
| canPassengerSteer          |                   | boolean                                                     |
| canRiderInteract           |                   | boolean                                                     |
| controllingPassenger       |                   | *IEntity*                                                   |
| kundenname                 | getCustomName()   | string                                                      |
| definition                 |                   | *[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| maße                       | getDimension()    | int                                                         |
| does TriggerPressurePlatte |                   | boolean                                                     |
| equipmentAndArmor          |                   | Liste <[IItemStack](/Vanilla/Items/IItemStack/)             |
| Augenhöhe                  |                   | float                                                       |
| hasCustom-Name             |                   | boolean                                                     |
| hasNoGravität              |                   | boolean                                                     |
| gehaltene Ausrüstung       |                   | Liste <[IItemStack](/Vanilla/Items/IItemStack/)             |
| id                         |                   | int                                                         |
| immuneToFire               | isImmuneToFire()  | boolean                                                     |
| isBeingRidden              |                   | boolean                                                     |
| isBoss                     |                   | boolean                                                     |
| isBurning                  |                   | boolean                                                     |
| isGlowing                  |                   | boolean                                                     |
| isImmuneToExplosions       |                   | boolean                                                     |
| isInLava                   |                   | boolean                                                     |
| isInsideOpaqueBlock        |                   | boolean                                                     |
| isInvisible                |                   | boolean                                                     |
| unverwundbar               |                   | boolean                                                     |
| isInWater                  |                   | boolean                                                     |
| isOutsideBorder            |                   | boolean                                                     |
| isOverWater                |                   | boolean                                                     |
| isPushedByWater            |                   | boolean                                                     |
| isReiten                   |                   | boolean                                                     |
| isSilent                   |                   | boolean                                                     |
| isSneaking                 |                   | boolean                                                     |
| isSprinting                |                   | boolean                                                     |
| lowestRidingEntity         |                   | *IEntity*                                                   |
| maxFallHöhe                |                   | int                                                         |
| maxInPortalTime            |                   | int                                                         |
| teile                      |                   | IEntität[]                                                  |
| Passagiere                 | getPassengers()   | Liste<IEntity\>                                            |
| passengersRecursive        |                   | Liste<IEntity\>                                            |
| portalCooldowne            |                   | int                                                         |
| position3f                 | getPosition3f()   | [Position3f](/Vanilla/Utils/Position3f/)                    |
| ridingEntity               | getRidingEntity() | *IEntity*                                                   |
| should RiderSit            |                   | boolean                                                     |
| tag                        |                   | Liste<string\>                                             |
| team                       |                   | *[ITeam](/Vanilla/Game/ITeam/)*                             |
| nass                       | isWet()           | boolean                                                     |
| Welt                       |                   | [IWorld](/Vanilla/World/IWorld/)                            |
| x                          | getX()            | double                                                      |
| y                          | getY()            | double                                                      |
| z                          | getZ()            | double                                                      |
| motionX                    |                   | double                                                      |
| motionY                    |                   | double                                                      |
| motionZ                    |                   | double                                                      |
| posX                       |                   | double                                                      |
| posY                       |                   | double                                                      |
| posZ                       |                   | double                                                      |
| rotationYaw                |                   | float                                                       |
| rotation Neigung           |                   | float                                                       |
| suchrichtung               |                   | [IVector3d](/Vanilla/World/IVector3d/)                      |

## ZenSetter

| Settername          | Settermethode       | Parametertyp                           |
| ------------------- | ------------------- | -------------------------------------- |
| luft                | setAir(Sekunden)    | int                                    |
| alwaysRenderNameTag |                     | boolean                                |
| kundenname          | setCustomName(name) | string                                 |
| maße                | setDimension(id)    | int                                    |
| feuerfest           | setFire(Sekunden)   | int                                    |
| hasNoGravität       |                     | boolean                                |
| id                  |                     | int                                    |
| isGlowing           |                     | boolean                                |
| isInvisible         |                     | boolean                                |
| isOutsideBorder     |                     | boolean                                |
| isSilent            |                     | boolean                                |
| isSneaking          |                     | boolean                                |
| isSprinting         |                     | boolean                                |
| position            | setPosition(pos)    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                     | float                                  |
| rotation Neigung    |                     | float                                  |
| motionX             |                     | double                                 |
| motionY             |                     | double                                 |
| motionZ             |                     | double                                 |
| posX                |                     | double                                 |
| posY                |                     | double                                 |
| posZ                |                     | double                                 |

## Mehr ZenMethoden

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) Quelle, Float-Menge);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) Welt, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) Block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(Entity); → Gibt die Entfernung zur angegebenen Entität zurück
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Gibt das [Element](/Vanilla/Items/IItemStack/) zurück, das die Entität aufheben würde (e. . die Item-Item-Items, die die Entität ist ein Item oder das Minecart Item)
- void addTag(String Tag);
- nichtig löschen(); → Löscht die Entität, falls im Feuer
- onEntityUpdate(); ungültig
- void onKillCommand();
- onUpdate(); ungültig
- entfernen Sie das Tag(String-Tag);
- void setDead(); → Tötet die Entität
- void spawnRunningParticles();
- entferne Passagier();
- nichtig lösen RidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource/) Quelle);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- nichtig aktualisiert([IData](/Vanilla/Data/IData/) Daten);
- boolean onGround(); → Gibt true zurück, wenn die Entität am Boden ist und falsch wenn in der Luft