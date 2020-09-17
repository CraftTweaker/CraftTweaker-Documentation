# IEntity

Interfaccia Di Entità. Utilizzato per ottenere e modificare i dati delle entità di informazione.  
Le entità sono tutto ciò che è liberamente mobile nel mondo come giocatori, mostri, oggetti sul campo molti altri.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntity;`

## Estensione Di ICommandSender

IEntity estende [ICommandSender](/Vanilla/Commands/ICommandSender/). Ciò significa che tutti i metodi disponibili per gli oggetti di [ICommandSender](/Vanilla/Commands/ICommandSender/) sono disponibili anche per gli oggetti di IEntity!

<details><summary>Metodi Derivati</summary> 

- entity.displayName
- entity.position
- entity.world
- entity.server
- entity.sendMessage(String text)</details>

## ZenGetters

| GetterName               | GetterMethod      | Tipo di ritorno (*can be null*)                             |
| ------------------------ | ----------------- | ----------------------------------------------------------- |
| aria                     | getAir()          | int                                                         |
| alive                    | isAlive()         | boolean                                                     |
| alwaysRenderNameTag      |                   | boolean                                                     |
| armorInventory           |                   | Lista<[IItemStack](/Vanilla/Items/IItemStack/)              |
| canBeAttackedWithItem    |                   | boolean                                                     |
| canBeCollidedWith        |                   | boolean                                                     |
| canPassengerSteer        |                   | boolean                                                     |
| canRiderInteract         |                   | boolean                                                     |
| controllingPassenger     |                   | *IEntity*                                                   |
| customName               | getCustomName()   | stringa                                                     |
| definizione              |                   | *[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| dimensione               | getDimension()    | int                                                         |
| doesTriggerPressurePlate |                   | boolean                                                     |
| equipaggiamentoAndArmor  |                   | Lista<[IItemStack](/Vanilla/Items/IItemStack/)              |
| altezzaAltezza           |                   | galleggiante                                                |
| hasCustomName            |                   | boolean                                                     |
| hasNoGravity             |                   | boolean                                                     |
| possedutoEquipaggiamento |                   | Lista<[IItemStack](/Vanilla/Items/IItemStack/)              |
| id                       |                   | int                                                         |
| immuneToFire             | isImmuneToFire()  | boolean                                                     |
| isBeingRidden            |                   | boolean                                                     |
| isBoss                   |                   | boolean                                                     |
| isBurning                |                   | boolean                                                     |
| isGlowing                |                   | boolean                                                     |
| isImmuneToExplosions     |                   | boolean                                                     |
| isInLava                 |                   | boolean                                                     |
| isInsideOpaqueBlock      |                   | boolean                                                     |
| isInvisibile             |                   | boolean                                                     |
| isInvulnerabile          |                   | boolean                                                     |
| isInWater                |                   | boolean                                                     |
| isOutsideBorder          |                   | boolean                                                     |
| isOverWater              |                   | boolean                                                     |
| isPushedByWater          |                   | boolean                                                     |
| isEquitazione            |                   | boolean                                                     |
| isSilent                 |                   | boolean                                                     |
| isSneaking               |                   | boolean                                                     |
| isSprinting              |                   | boolean                                                     |
| lowestRidingEntity       |                   | *IEntity*                                                   |
| maxFallHeight            |                   | int                                                         |
| maxInPortalTime          |                   | int                                                         |
| parti                    |                   | Entità[]                                                    |
| passeggeri               | getPassengers()   | Elenco<IEntity\>                                           |
| passengersRecursive      |                   | Elenco<IEntity\>                                           |
| portalCooldowne          |                   | int                                                         |
| posizione3f              | getPosition3f()   | [Position3f](/Vanilla/Utils/Position3f/)                    |
| ridingEntity             | getRidingEntity() | *IEntity*                                                   |
| shouldRiderSit           |                   | boolean                                                     |
| tag                      |                   | Elenco<string\>                                            |
| team                     |                   | *[ITeam](/Vanilla/Game/ITeam/)*                             |
| bagnato                  | isWet()           | boolean                                                     |
| mondo                    |                   | [IWorld](/Vanilla/World/IWorld/)                            |
| x                        | getX()            | doppia                                                      |
| y                        | getY()            | doppia                                                      |
| z                        | getZ()            | doppia                                                      |
| motionX                  |                   | doppia                                                      |
| motionY                  |                   | doppia                                                      |
| motionZ                  |                   | doppia                                                      |
| posX                     |                   | doppia                                                      |
| posY                     |                   | doppia                                                      |
| posZ                     |                   | doppia                                                      |
| rotationYaw              |                   | galleggiante                                                |
| rotazionePitch           |                   | galleggiante                                                |
| guardandoDirezione       |                   | [IVector3d](/Vanilla/World/IVector3d/)                      |

## ZenSetters

| SetterName          | SetterMethod        | Tipo Parametro                         |
| ------------------- | ------------------- | -------------------------------------- |
| aria                | setAir(secondi)     | int                                    |
| alwaysRenderNameTag |                     | boolean                                |
| customName          | setCustomName(name) | stringa                                |
| dimensione          | setDimension(id)    | int                                    |
| fuoco               | setFire(secondi)    | int                                    |
| hasNoGravity        |                     | boolean                                |
| id                  |                     | int                                    |
| isGlowing           |                     | boolean                                |
| isInvisibile        |                     | boolean                                |
| isOutsideBorder     |                     | boolean                                |
| isSilent            |                     | boolean                                |
| isSneaking          |                     | boolean                                |
| isSprinting         |                     | boolean                                |
| posizione           | setPosition(pos)    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw         |                     | galleggiante                           |
| rotazionePitch      |                     | galleggiante                           |
| motionX             |                     | doppia                                 |
| motionY             |                     | doppia                                 |
| motionZ             |                     | doppia                                 |
| posX                |                     | doppia                                 |
| posY                |                     | doppia                                 |
| posZ                |                     | doppia                                 |

## Più ZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) source, float amount);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) world, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) block, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(entità); → Restituisce la distanza all'entità data
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Restituisce il [elemento](/Vanilla/Items/IItemStack/) che raccogliendo l'entità restituirebbe (e. . l' id dell' elemento che l' entità è un elemento o l' oggetto della miniera)
- void addTag(String tag);
- void extinguish(); → Estingue l'entità, se in fiamme
- void onEntityUpdate();
- void onKillCommand();
- void onUpdate();
- void removeTag(String tag);
- void setDead(); → Uccidi l'entità
- void spawnRunningParticles();
- void removePassengers();
- void dismountRidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- booleano isInvulnerableTo([IDamageSource](/Vanilla/Damage/IDamageSource/) source);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- void update([IData](/Vanilla/Data/IData/) data);
- booleano suGround(); → Restituisce vero se l'entità è a terra, e falso quando in aria