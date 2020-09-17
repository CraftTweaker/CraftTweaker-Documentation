# IEntity

Interface d'Entité. Utilisé pour obtenir et modifier les données des entités d'information.  
Les entités sont tout ce qui peut circuler librement dans le monde, comme les joueurs, les monstres, les objets au sol bien plus.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntity ;`

## Étendre ICommandSender

IEntity étend [ICommandSender](/Vanilla/Commands/ICommandSender/). Cela signifie que toutes les méthodes qui sont disponibles pour les objets [ICommandSender](/Vanilla/Commands/ICommandSender/) sont également disponibles pour les objets IEntity !

<details><summary>Méthodes dérivées</summary> 

- Nom de l'entité
- Position de l'entité
- monde
- Serveur
- entity.sendMessage(String text)</details>

## ZenGetters

| Nom du Getter                                                               | Méthode d'obtention | Type de retour (*peut être null*)                            |
| --------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------ |
| air                                                                         | getAir()            | Indice                                                       |
| alive                                                                       | isAlive()           | boolean                                                      |
| alwaysRenderNameTag                                                         |                     | boolean                                                      |
| Inventaire des armures                                                      |                     | Liste <[IItemStack](/Vanilla/Items/IItemStack/)              |
| Peut être attaqué avec un objet                                             |                     | boolean                                                      |
| peuvent être entrés en collision                                            |                     | boolean                                                      |
| canPassengerSteer                                                           |                     | boolean                                                      |
| canRiderInteract                                                            |                     | boolean                                                      |
| controllingPassenger                                                        |                     | *IEntity*                                                    |
| format@@0 customName                                                        | getCustomName()     | chaîne de caractères                                         |
| Définition                                                                  |                     | *[Définition IEntity](/Vanilla/Entities/IEntityDefinition/)* |
| cote                                                                        | getDimension()      | Indice                                                       |
| format@@0 does TriggerPressurePlate                                         |                     | boolean                                                      |
| EquipementAndArmor                                                          |                     | Liste <[IItemStack](/Vanilla/Items/IItemStack/)              |
| hauteur des yeux                                                            |                     | flottant                                                     |
| a un nom personnalisé                                                       |                     | boolean                                                      |
| Si vous avez un problème de gravité, vous pouvez le faire en cliquant ici . |                     | boolean                                                      |
| Équipement en attente                                                       |                     | Liste <[IItemStack](/Vanilla/Items/IItemStack/)              |
| id                                                                          |                     | Indice                                                       |
| format@@0 immuneToFire                                                      | isImmuneToFire()    | boolean                                                      |
| isBeingRidden                                                               |                     | boolean                                                      |
| isBoss                                                                      |                     | boolean                                                      |
| brûlant                                                                     |                     | boolean                                                      |
| Brillant                                                                    |                     | boolean                                                      |
| isImmuneToExplosions                                                        |                     | boolean                                                      |
| isInLava                                                                    |                     | boolean                                                      |
| isInsideOpaqueBlock                                                         |                     | boolean                                                      |
| est invisible                                                               |                     | boolean                                                      |
| isInvulnérable                                                              |                     | boolean                                                      |
| isInWater                                                                   |                     | boolean                                                      |
| Bordure extérieure                                                          |                     | boolean                                                      |
| Eau Supérieure                                                              |                     | boolean                                                      |
| isPushedByWater                                                             |                     | boolean                                                      |
| format@@0 isRiding                                                          |                     | boolean                                                      |
| isSilent                                                                    |                     | boolean                                                      |
| isSneaking                                                                  |                     | boolean                                                      |
| isSprinting                                                                 |                     | boolean                                                      |
| lowestRidingEntity                                                          |                     | *IEntity*                                                    |
| format@@0 maxFallHeight                                                     |                     | Indice                                                       |
| Temps maximum dans le portail                                               |                     | Indice                                                       |
| Pièces                                                                      |                     | IEntité[]                                                    |
| passagers                                                                   | getPassengers()     | Liste<IEntity\>                                             |
| passengersRecursive                                                         |                     | Liste<IEntity\>                                             |
| portalCooldowne                                                             |                     | Indice                                                       |
| position3f                                                                  | getPosition3f()     | [Position3f](/Vanilla/Utils/Position3f/)                     |
| Entité de trading                                                           | getRidingEntity()   | *IEntity*                                                    |
| format@@0 shouldRiderSit                                                    |                     | boolean                                                      |
| Tags                                                                        |                     | Liste<string\>                                              |
| équipe                                                                      |                     | *[ITeam](/Vanilla/Game/ITeam/)*                              |
| mouillé                                                                     | isWet()             | boolean                                                      |
| monde                                                                       |                     | [IWorld](/Vanilla/World/IWorld/)                             |
| x                                                                           | getX()              | double                                                       |
| y                                                                           | getY()              | double                                                       |
| Z                                                                           | getZ()              | double                                                       |
| mouvement unnamed@@0                                                        |                     | double                                                       |
| mouvement Y                                                                 |                     | double                                                       |
| motionZ                                                                     |                     | double                                                       |
| posX                                                                        |                     | double                                                       |
| posY                                                                        |                     | double                                                       |
| format@@0 posZ                                                              |                     | double                                                       |
| format@@0 rotationYaw                                                       |                     | flottant                                                     |
| Hauteur de rotation                                                         |                     | flottant                                                     |
| Direction de la recherche                                                   |                     | [IVector3d](/Vanilla/World/IVector3d/)                       |

## ZenSetters

| Nom de la catégorie                                                         | Méthode de réglage | Type de paramètre                       |
| --------------------------------------------------------------------------- | ------------------ | --------------------------------------- |
| air                                                                         | setAir(secondes)   | Indice                                  |
| alwaysRenderNameTag                                                         |                    | boolean                                 |
| format@@0 customName                                                        | nom_de_set(nom)  | chaîne de caractères                    |
| cote                                                                        | setDimension(id)   | Indice                                  |
| feu                                                                         | setFire(secondes)  | Indice                                  |
| Si vous avez un problème de gravité, vous pouvez le faire en cliquant ici . |                    | boolean                                 |
| id                                                                          |                    | Indice                                  |
| Brillant                                                                    |                    | boolean                                 |
| est invisible                                                               |                    | boolean                                 |
| Bordure extérieure                                                          |                    | boolean                                 |
| isSilent                                                                    |                    | boolean                                 |
| isSneaking                                                                  |                    | boolean                                 |
| isSprinting                                                                 |                    | boolean                                 |
| position                                                                    | setPosition(pos)   | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| format@@0 rotationYaw                                                       |                    | flottant                                |
| Hauteur de rotation                                                         |                    | flottant                                |
| mouvement unnamed@@0                                                        |                    | double                                  |
| mouvement Y                                                                 |                    | double                                  |
| motionZ                                                                     |                    | double                                  |
| posX                                                                        |                    | double                                  |
| posY                                                                        |                    | double                                  |
| format@@0 posZ                                                              |                    | double                                  |

## Plus de méthodes Zen

- booléen attackEntityFrom( source[IDamageSource](/Vanilla/Damage/IDamageSource/) , quantité flottante);
- booléen canTrample([IWorld](/Vanilla/World/IWorld/) monde, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) bloc, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float automne );
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- double getDistanceSqToEntity(entity); → Renvoie la distance à l'entité donnée
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Retourne l'élément [](/Vanilla/Items/IItemStack/) qui ramasse l'entité retournerait (e. . l'identifiant de l'élément que l'entité est un élément ou l'élément minecart)
- annuler addTag (balise String);
- annuler l'extinction (); → éteint l'entité, si en feu
- annuler la mise à jour onEntity();
- void onKillCommand();
- annuler onUpdate();
- void removeTag(String tag);
- void setDead(); → Kills l'entité
- void spawnRunningParticles();
- void removePassengers();
- void dismountRidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo( source[IDamageSource](/Vanilla/Damage/IDamageSource/));
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- annuler la mise à jour ([IData](/Vanilla/Data/IData/) données);
- booléen onGround(); → Renvoie vrai si l'entité est sur le sol, et false lorsqu'elle est en l'air