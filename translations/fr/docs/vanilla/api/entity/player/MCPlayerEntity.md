# Entité MCPlayer

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Méthodes
### ajouterÉpuisement

augmente le niveau d'épuisement par quantité fournie

```zenscript
myMCPlayerEntity.addExhaustion(épuisement comme flottant );
```

| Paramètre  | Type de texte | Libellé                    |
| ---------- | ------------- | -------------------------- |
| Épuisement | flottant      | Aucune description fournie |


### Ajouter un niveau d'expérience

Ajouter des niveaux d'expérience à ce joueur.

```zenscript
myMCPlayerEntity.addExperienceLevel(niveaux comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Niveaux   | Indice        | Aucune description fournie |


### addItemStackToInventory

Retourne un booléen

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Paramètre     | Type de texte                                                     | Libellé                    |
| ------------- | ----------------------------------------------------------------- | -------------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### Ajouter les statistiques de déplacement

Ajoute une valeur à un champ de statistiques de déplacement - comme la course, la marche, le swin ou l'escalade.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ en double, p_71000_3_ en double, p_71000_5_ en double);
```

| Paramètre    | Type de texte | Libellé                    |
| ------------ | ------------- | -------------------------- |
| p_71000_1_ | double        | Aucune description fournie |
| p_71000_3_ | double        | Aucune description fournie |
| p_71000_5_ | double        | Aucune description fournie |


### format@@0 addPotionEffect

Retourne un booléen

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Paramètre                  | Type de texte                                                                                 | Libellé                    |
| -------------------------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| format@@0 effectInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Aucune description fournie |


### Ajouter un score

Ajouter au score du joueur

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| scoreIn   | Indice        | Aucune description fournie |


### addTag

Retourne un booléen

```zenscript
myMCPlayerEntity.addTag(tag comme String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Étiquette | Chaîne de caractères | Aucune description fournie |


### addVelocity

Ajoute à la vitesse actuelle de l'entité, et se met à vrai.

```zenscript
myMCPlayerEntity.addVelocity(x aussi double, et aussi double, z que doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### Permettre la journalisation

Retourne un booléen

```zenscript
monMCPlayerEntity.allowLogging();
```

### attaquable

Retourne un booléen

```zenscript
myMCPlayerEntity.attaquable();
```

### tentativeTéléportation

Retourne un booléen

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ en double, p_213373_3_ en double, p_213373_5_ en double, p_213373_7_ en booléen);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_213373_1_ | double        | Aucune description fournie |
| p_213373_3_ | double        | Aucune description fournie |
| p_213373_5_ | double        | Aucune description fournie |
| p_213373_7_ | boolean       | Aucune description fournie |


### tick de base

Obtient chaque tick de la classe principale Entity

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Retourne un booléen

```zenscript
myMCPlayerEntity.canAttackPlayer(autres que crafttweaker.api.entity.player.MCPlayerEntity);
```

| Paramètre | Type de texte                                                                              | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| autres    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Aucune description fournie |


### Peut être attaqué avec un objet

Renvoie vrai s'il est possible d'attaquer cette entité avec un objet.

Retourne un booléen

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### peuvent être entrés en collision

Renvoie vrai si d'autres entités doivent être empêchées de se déplacer à travers ce titre.

Retourne un booléen

```zenscript
myMCPlayerEntity.can BeCollidedWith();
```

### format@@0 canBeHitWithPotion

Renvoie false si l'entité est une armure. Renvoie vrai pour toutes les bases de vie des autres entités.

Retourne un booléen

```zenscript
monMCPlayerEntity.peuventBeHitWithPotion();
```

### peut être poussée

Renvoie vrai si cette entité doit pousser et être poussée par d'autres entités en collision.

Retourne un booléen

```zenscript
myMCPlayerEntity.can BePushed();
```

### canBeRiddenInWater

Retourne un booléen

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheUnderwater

Retourne un booléen

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Retourne un booléen

```zenscript
myMCPlayerEntity.canEat(ignoreHunger comme booléen);
```

| Paramètre    | Type de texte | Libellé                    |
| ------------ | ------------- | -------------------------- |
| ignoreHunger | boolean       | Aucune description fournie |


### canHarvestBlock

Retourne un booléen

```zenscript
myMCPlayerEntity.canHarvestBlock(state as crafttweaker.api.block.MCBlockState);
```

| Paramètre | Type de texte                                                           | Libellé                    |
| --------- | ----------------------------------------------------------------------- | -------------------------- |
| Etat      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Aucune description fournie |


### canPassengerSteer

Retourne un booléen

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Retourne si ce joueur peut modifier le bloc à un certain emplacement avec la pile donnée. <p> La position demandée est {@code pos.offset(facing.getOpposite())}. Renvoie : `Si ce joueur peut modifier l'emplacement interrogé dans le monde actuel` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Retourne un booléen

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                    |
| --------- | ----------------------------------------------------------------- | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Aucune description fournie |
| face      | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | Aucune description fournie |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### canRenderOnFire

Renvoie si cette entité doit être rendue comme en feu.

Retourne un booléen

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Retourne un booléen

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### nager

Retourne un booléen

```zenscript
myMCPlayerEntity.canSwim();
```

### format@@0 canTrample

Retourne un booléen

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Paramètre           | Type de texte                                                           | Libellé                    |
| ------------------- | ----------------------------------------------------------------------- | -------------------------- |
| Etat                | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Aucune description fournie |
| pos                 | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Aucune description fournie |
| Distance de secours | flottant                                                                | Aucune description fournie |


### canUpdate

Retourne un booléen

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(valeur booléenne) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| valeur    | boolean       | Aucune description fournie |


### Vous ne pouvez pas utiliser le bloc de commande

Retourne un booléen

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### effacer les potions actives

Retourne un booléen

```zenscript
monMCPlayerEntity.clearActivePotions();
```

### Effacer la position du lit

```zenscript
monMCPlayerEntity.clearBedPosition();
```

### fermerEcran

remettre l'inventaire actuel de fabrication sur le carré 2x2

```zenscript
myMCPlayerEntity.closeScreen();
```

### format@@0 curePotionEffects

Retourne un booléen

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Paramètre       | Type de texte                                                     | Libellé                    |
| --------------- | ----------------------------------------------------------------- | -------------------------- |
| Élément curatif | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### Désactiver Bouclier

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ comme booléen);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_190777_1_ | boolean       | Aucune description fournie |


### Ne pas TriggerPressurePlate

Retourne si cette entité ne doit PAS déclencher une plaque de pression ou un tripwire.

Retourne un booléen

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### est égal à

Retourne un booléen

```zenscript
myMCPlayerEntity.equals(p_equals_1_ en tant qu'objet);
```

| Paramètre   | Type de texte | Libellé                    |
| ----------- | ------------- | -------------------------- |
| p_égal_1_ | Objet         | Aucune description fournie |


### extinguish

Supprime le feu de l'entité.

```zenscript
myMCPlayerEntity.extinguish();
```

### chute

```zenscript
myMCPlayerEntity.fall(distance en float, multiplicateur de dégâts en float);
```

| Paramètre                | Type de texte | Libellé                    |
| ------------------------ | ------------- | -------------------------- |
| Distance                 | flottant      | Aucune description fournie |
| Multiplicateur de dégâts | flottant      | Aucune description fournie |


### format@@0 findAmmo

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(shootable comme crafttweaker.api.item.IItemStack);
```

| Paramètre      | Type de texte                                                     | Libellé                    |
| -------------- | ----------------------------------------------------------------- | -------------------------- |
| Tables à tirer | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### func_213300_bk

Retourne un booléen

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ en double, p_213312_3_ en double, p_213312_5_ en double);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_213312_1_ | double        | Aucune description fournie |
| p_213312_3_ | double        | Aucune description fournie |
| p_213312_5_ | double        | Aucune description fournie |


### fonction_213314_bj

Retourne un booléen

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Renvoie un flottant

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Retourne un booléen

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn comme crafttweaker.api.item.IItemStack);
```

| Paramètre             | Type de texte                                                     | Libellé                    |
| --------------------- | ----------------------------------------------------------------- | -------------------------- |
| format@@0 itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### format@@0 getAIMoveSpeed

le movespeed utilisé pour le nouveau système IA

Renvoie un flottant

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionAmount

Renvoie la quantité de points de vie ajoutés par l'effet d'absorption.

Renvoie un flottant

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### Obtenir l'effet de potion active

retourne PotionEffect pour la potion fournie si elle est active, null sinon.

Retourne [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Paramètre | Type de texte                                                                 | Libellé                    |
| --------- | ----------------------------------------------------------------------------- | -------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Aucune description fournie |


### Obtenir les effets de potion actifs

Retourne Collection<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### Obtenir AjustedHorizontalFacing

Obtient la direction horizontale face à ce tity, ajustée pour prendre en compte les types d'entités spécialement traitées.

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Renvoie int

```zenscript
myMCPlayerEntity.getAir();
```

### format@@0 getalwaysRenderNameTagfor Render

Retourne un booléen

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Renvoie int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### Direction de la literie

obtenir la Direction pour la caméra si cette entité est en veille

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### format@@0 getBedLocation

Retourne [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

Retourne [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getBrightness

Obtient la luminosité de cette entité.

Renvoie un flottant

```zenscript
myMCPlayerEntity.getBrightness();
```

### Obtenir la luminosité pour le rendu

Renvoie int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### La chaîne d\'identifiant unique est mise en cache

Retourne une chaîne de caractères

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

Retourne [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount comme booléen);
```

| Paramètre      | Type de texte | Libellé                    |
| -------------- | ------------- | -------------------------- |
| pourSpawnCount | boolean       | Aucune description fournie |


### getCollisionBorderSize

Renvoie un flottant

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### format@@0 getCooldownPeriod

Renvoie un flottant

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### format@@0 getCooledAttackStrength

Renvoie le pourcentage de puissance d'attaque disponible en fonction du temps de recharge (zéro à un).

Renvoie un flottant

```zenscript
myMCPlayerEntity.getCooledAttackStrength(adjustTicks as float);
```

| Paramètre           | Type de texte | Libellé                    |
| ------------------- | ------------- | -------------------------- |
| Ajuster les tickets | flottant      | Aucune description fournie |


### getDigSpeed

Renvoie un flottant

```zenscript
myMCPlayerEntity.getDigSpeed(state as crafttweaker.api.block.MCBlockState);
```

| Paramètre | Type de texte                                                           | Libellé                    |
| --------- | ----------------------------------------------------------------------- | -------------------------- |
| Etat      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Aucune description fournie |



Renvoie un flottant

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Paramètre | Type de texte                                                           | Libellé                    |
| --------- | ----------------------------------------------------------------------- | -------------------------- |
| arg0      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Aucune description fournie |
| arg1      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Aucune description fournie |


### getDistanceSq

Renvoie double

```zenscript
myMCPlayerEntity.getDistanceSq(x aussi double, et aussi double, z que double);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### getEntityId

Renvoie int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Retourne une chaîne de caractères

```zenscript
myMCPlayerEntity.getEntityString();
```

### format@@0 getEyeHight

Renvoie un flottant

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Renvoie int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### format@@0 getHealth

Renvoie un flottant

```zenscript
myMCPlayerEntity.getHealth();
```

### format@@0 getHight

Renvoie un flottant

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### format@@0 getHorizontalFacing

Obtient la direction horizontale face à ce titre.

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Renvoie int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Renvoie int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Renvoie int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Renvoie int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Renvoie un flottant

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Renvoie int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

La hauteur maximale à partir de laquelle l'entité est autorisée à sauter (utilisée dans pathfinder)

Renvoie int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Renvoie un flottant

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Renvoie le temps que cette entité doit rester dans un portail avant d'être transportée.

Renvoie int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Retourne le décalage en Y de la position de l'entité pour toute entité qui chevauche celle-ci.

Renvoie double

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### format@@0 getPitch

Récupère le pas courant de l'entité.

Renvoie un flottant

```zenscript
myMCPlayerEntity.getPitch(partielle Ticks comme float);
```

| Paramètre        | Type de texte | Libellé                    |
| ---------------- | ------------- | -------------------------- |
| Tickets partiels | flottant      | Aucune description fournie |


### format@@0 getPortalCooldown

Renvoyez la quantité de temps de récupération avant que cette entité puisse utiliser un portail à nouveau.

Renvoie int

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### format@@0 getPosition

Obtenez la position dans le monde. <b>{@code null} n'est pas autorisé !</b> Si vous n'êtes pas une entité dans le monde, retournez les coordonnées 0, 0, 0, 0

Retourne [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Renvoie un flottant

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Renvoie int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### format@@0 getRotationYawHead

Renvoie un flottant

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### Obtenir le score

Renvoie int

```zenscript
myMCPlayerEntity.getScore();
```

### Nom du tableau de score

Retourne une chaîne à utiliser comme nom d'entité dans le tableau de score/entity selector systems

Retourne une chaîne de caractères

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### format@@0 getSleepTimer

Renvoie int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### format@@0 getSubmergedHight

Renvoie double

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### format@@0 getSwimAnimation

Renvoie un flottant

```zenscript
myMCPlayerEntity.getSwimAnimation(partielle Ticks comme float);
```

| Paramètre        | Type de texte | Libellé                    |
| ---------------- | ------------- | -------------------------- |
| Tickets partiels | flottant      | Aucune description fournie |


### getSwingProgress

Récupère la progression de l'animation de swing, varie de 0.0 à 1.0.

Renvoie un flottant

```zenscript
myMCPlayerEntity.getSwingProgress(partielTickTime comme float);
```

| Paramètre       | Type de texte | Libellé                    |
| --------------- | ------------- | -------------------------- |
| partialTickTime | flottant      | Aucune description fournie |


### getTags

Ensemble de retours<String>

```zenscript
monMCPlayerEntity.getTags();
```

### Obtenir la direction de téléportation

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### format@@0 getTicksElytraFlying

Renvoie int

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### format@@0 getTotalArmorValue

Renvoie la valeur actuelle de l'armure telle que déterminée par un appel à InventoryPlayer.getTotalArmorValue

Renvoie int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Renvoie un flottant

```zenscript
myMCPlayerEntity.getWidth();
```

### format@@0 getXPSeed

Renvoie int

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Renvoie l'offset Y de cette entité.

Renvoie double

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Obtient le yaw actuel de l'entité

Renvoie un flottant

```zenscript
myMCPlayerEntity.getYaw(partielTicks comme float);
```

| Paramètre        | Type de texte | Libellé                    |
| ---------------- | ------------- | -------------------------- |
| Tickets partiels | flottant      | Aucune description fournie |


### donner des points d'expérience

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_195068_1_ | Indice        | Aucune description fournie |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| id        | octet         | Aucune description fournie |


### handleWaterMovement

Renvoie si cette entité est dans l'eau et finira par ajouter la vitesse de l'eau à l'entité

Retourne un booléen

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### a un nom personnalisé

Retourne un booléen

```zenscript
monMCPlayerEntity.hasCustomName();
```

### Si vous avez un problème de gravité, vous pouvez le faire en cliquant ici .

Retourne un booléen

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### Niveau de permission

Retourne un booléen

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_211513_1_ | Indice        | Aucune description fournie |


### a réduit le débogage

Si l'option "reducedDebugInfo" est active pour ce lecteur.

Retourne un booléen

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Renvoie int

```zenscript
myMCPlayerEntity.hashCode();
```

### guérison

Soigner l'entité vivante (param: nombre de demi-cœurs)

```zenscript
myMCPlayerEntity.heal(healAmount as float);
```

| Paramètre            | Type de texte | Libellé                    |
| -------------------- | ------------- | -------------------------- |
| format@@0 healAmount | flottant      | Aucune description fournie |


### Ignorer les données de l'élément

Vérifie si les joueurs peuvent utiliser cette entité pour accéder aux commandes de l'opérateur (permission niveau 2) directement ou indirectement , comme donner ou setblock. Une méthode similaire existe pour les entités à {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Par exemple, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() bloc minecarts} et {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawner commande
 block minecarts ou drops) sont considérés accessibles.</p>Renvoie : `vrai si cette entité offre aux joueurs
 non autorisés des moyens d'utiliser des commandes restreintes`

Retourne un booléen

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### format@@0 isActiveItemStackBlocking

Retourne un booléen

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### est ajouté au monde

Retourne un booléen

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Renvoie vrai si l'entité n'a pas été .

Retourne un booléen

```zenscript
myMCPlayerEntity.isAlive();
```

### est autorisé à éditer

Retourne un booléen

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Si au moins 1 entité chevauche celle-ci

Retourne un booléen

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### brûlant

Renvoie vrai si l'entité est en feu. Utilisé par le rendu pour ajouter l'effet de feu lors du rendu.

Retourne un booléen

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Si l'animal, vérifie si le minuteur d'âge est négatif

Retourne un booléen

```zenscript
myMCPlayerEntity.isChild();
```

### est créatif

Retourne un booléen

```zenscript
myMCPlayerEntity.isCreative();
```

### Le nom personnalisé est visible

Retourne un booléen

```zenscript
monMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlying

Retourne un booléen

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Vérifie si cette entité est à l'intérieur d'un bloc opaque

Retourne un booléen

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Renvoie vrai si cette entité est morte-vivante.

Retourne un booléen

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### Brillant

Retourne un booléen

```zenscript
myMCPlayerEntity.isGlowing();
```

### est actif

Retourne un booléen

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Retourne un booléen

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Retourne un booléen

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Retourne un booléen

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Retourne un booléen

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x aussi double, et aussi double, z que double);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### isInRangeToRenderDist

Vérifie si l'entité est dans l'intervalle à rendre.

Retourne un booléen

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distance en double);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Distance  | double        | Aucune description fournie |


### isInWater

Vérifie si cette entité est à l'intérieur de l'eau (si le champ inWater est vrai à la suite du handleWaterMovement() retournant true)

Retourne un booléen

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleColumn

Retourne un booléen

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

Retourne un booléen

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### est invisible

Retourne un booléen

```zenscript
myMCPlayerEntity.isInvisible();
```

### est invisible pour le joueur

Utilisé uniquement par le moteur de rendu dans les sous-classes EntityLivingBase. Détermine si une entité est visible ou non pour un joueur spécifique, si l'entité est normalement invisible. Pour les sous-classes EntityLivingBase, retourner false lorsque invisible rendra l'entité semi-transparente.

Retourne un booléen

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(joueur en tant que crafttweaker.api.entity.player.MCPlayerEntity);
```

| Paramètre | Type de texte                                                                              | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| Joueur    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Aucune description fournie |


### isInvulnérable

Retourne un booléen

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### isLiving

Retourne un booléen

```zenscript
monMCPlayerEntity.isLiving();
```

### N'est pas Chef

Retourne false si cette entité est un boss, vrai autrement.

Retourne un booléen

```zenscript
monMCPlayerEntity.isNonBoss();
```

### La position est dans le mode Liquide

Vérifie si la position de décalage de la position actuelle de l'entité est à l'intérieur d'un liquide.

Retourne un booléen

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x aussi double, et double, z comme double);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### format@@0 isOnLadder

Renvoie vrai si cette entité doit se déplacer comme si elle était sur une échelle (soit parce qu'elle est en fait sur une échelle, ou pour des raisons d'IA)

Retourne un booléen

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Retourne un booléen

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPassager

Retourne un booléen

```zenscript
myMCPlayerEntity.isPassenger();
```

### format@@0 isPlayerFullyAsleep

Renvoie si le joueur est endormi ou non et que l'écran a complètement disparu.

Retourne un booléen

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### format@@0 isPotionActive

Retourne un booléen

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Paramètre | Type de texte                                                                 | Libellé                    |
| --------- | ----------------------------------------------------------------------------- | -------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Aucune description fournie |


### format@@0 isPotion applicable

Retourne un booléen

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Paramètre       | Type de texte                                                                                 | Libellé                    |
| --------------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| Effet de potion | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Aucune description fournie |


### isPushedByWater

Retourne un booléen

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Retourne si l'entité est dans un monde de serveur

Retourne un booléen

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Renvoie : `Vrai si cette entité ne jouera pas de sons`

Retourne un booléen

```zenscript
myMCPlayerEntity.isSilent();
```

### format@@0 isSleeping

Renvoie si le joueur dort ou non

Retourne un booléen

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Retourne si cette entité se faufile.

Retourne un booléen

```zenscript
myMCPlayerEntity.isSneaking();
```

### format@@0 isSpawnForced

Retourne un booléen

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Renvoie vrai si le joueur est en mode spectateur.

Retourne un booléen

```zenscript
myMCPlayerEntity.isSpectator();
```

### format@@0 isSpinAttacking

Retourne un booléen

```zenscript
monMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Récupère si l'entité est en train de sprinter.

Retourne un booléen

```zenscript
myMCPlayerEntity.isSprinting();
```

### nager

Retourne un booléen

```zenscript
myMCPlayerEntity.isSwimming();
```

### est utilisateur

retourne vrai si c'est un EntityPlayerSP, ou le joueur connecté.

Retourne un booléen

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Vérifie si cette entité est soit dans l'eau, soit sur un bloc en plein air en pluie (utilisé chez les loups).

Retourne un booléen

```zenscript
myMCPlayerEntity.isWet();
```

### sauter

Permet à cette entité de faire un mouvement vers le haut (sauter).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Appelé fréquemment pour que l'entité puisse mettre à jour son état à chaque tick si nécessaire. Par exemple, les zombies et les squelettes utilisent ceci pour réagir à la lumière du soleil et commencer à brûler.

```zenscript
myMCPlayerEntity.livingTick();
```

### Déplacer vers les angles et les Posts

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Paramètre                 | Type de texte                                                | Libellé                    |
| ------------------------- | ------------------------------------------------------------ | -------------------------- |
| pos                       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |
| Rotation Yawin            | flottant                                                     | Aucune description fournie |
| format@@0 rotationPitchIn | flottant                                                     | Aucune description fournie |


### a été ajouté à un monde

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### format@@0 onCollideWithPlayer

Appelé par une entité de joueur quand elle entre en collision avec une entité

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn comme crafttweaker.api.entity.player.MCPlayerEntity);
```

| Paramètre | Type de texte                                                                              | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| entityIn  | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Aucune description fournie |


### onEnchant

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, cost as int);
```

| Paramètre      | Type de texte                                                     | Libellé                    |
| -------------- | ----------------------------------------------------------------- | -------------------------- |
| Objet enchanté | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |
| Coûts          | Indice                                                            | Aucune description fournie |


### onEnterBubbleColumn

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(vers le bas comme booléen);
```

| Paramètre   | Type de texte | Libellé                    |
| ----------- | ------------- | -------------------------- |
| vers le bas | boolean       | Aucune description fournie |


### format@@0 onEnterBubbleColumnWithAirabove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(vers le bas comme booléen);
```

| Paramètre   | Type de texte | Libellé                    |
| ----------- | ------------- | -------------------------- |
| vers le bas | boolean       | Aucune description fournie |


### onKillCommand

Appelé par la commande /kill.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onremovedFromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### format@@0 performHurtAnimation

Configurez l'entité pour faire l'animation blessée. Utilisé uniquement par les paquets en mode multijoueur.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### preparePlayerto Spawn

Maintient le mouvement de l'entité vers le haut pour qu'il ne soit pas en collision avec les blocs et les autres exigences pour que cette entité apparaisse (uniquement utilisé sur les joueurs même si elle est sur l'entité)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### recalculer la taille

```zenscript
myMCPlayerEntity.recalculateSize();
```

### Enlever

```zenscript
monMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(Garder les données comme booléen);
```

| Paramètre             | Type de texte | Libellé                    |
| --------------------- | ------------- | -------------------------- |
| Conserver les données | boolean       | Aucune description fournie |


### Supprimer l'effet de potion active

Retourne [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 comme crafttweaker.api.potion.MCPotionEffect);
```

| Paramètre | Type de texte                                                                 | Libellé                    |
| --------- | ----------------------------------------------------------------------------- | -------------------------- |
| arg0      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Aucune description fournie |


### removePassengers

Démonte toutes les entités qui chevauchent cette entité.

```zenscript
myMCPlayerEntity.removePassengers();
```

### Supprimer l'effet de potion

Retourne un booléen

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Paramètre | Type de texte                                                                 | Libellé                    |
| --------- | ----------------------------------------------------------------------------- | -------------------------- |
| EffectIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Aucune description fournie |


### removeTag

Retourne un booléen

```zenscript
myMCPlayerEntity.removeTag(tag comme String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Étiquette | Chaîne de caractères | Aucune description fournie |


### Remplacer l'élément dans l'inventaire

Retourne un booléen

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot comme int, itemStackIn comme crafttweaker.api.item.IItemStack);
```

| Paramètre                | Type de texte                                                     | Libellé                    |
| ------------------------ | ----------------------------------------------------------------- | -------------------------- |
| emplacement d'inventaire | Indice                                                            | Aucune description fournie |
| format@@0 itemStackIn    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### réinitialisation de la main active

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### réinitialiser la position à BB

Réinitialise la position de l'entité sur les points centraux (planétaires) et bas (verticaux) de sa boîte.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### ressusciter le joueur

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### Raviver

```zenscript
myMCPlayerEntity.resve();
```

### Tourner vers la direction

```zenscript
myMCPlayerEntity.rotateTowards(yaw comme double, pas comme doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| mouillé   | double        | Aucune description fournie |
| pas       | double        | Aucune description fournie |


### sendEndCombat

Envoie un paquet END_COMBAT au client

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### format@@0 sendEnterCombat

Envoie un paquet ENTER_COMBAT au client

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### Envoyer des aptitudes de joueur

Envoie les capacités du joueur au serveur (le cas échéant).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### format@@0 setAIMoveSpeed

définir le movespeed utilisé pour le nouveau système IA

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn as float);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| speedIn   | flottant      | Aucune description fournie |


### définir le montant de l'absorption

```zenscript
myMCPlayerEntity.setAbsorptionAmount(amount as float);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| montant   | flottant      | Aucune description fournie |


### setAir

```zenscript
myMCPlayerEntity.setAir(air comme int) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| air       | Indice        | Aucune description fournie |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(count as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| compte    | Indice        | Aucune description fournie |


### définir la position de la chambre

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ en tant que crafttweaker.api.util.BlockPos);
```

| Paramètre     | Type de texte                                                | Libellé                    |
| ------------- | ------------------------------------------------------------ | -------------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |


### format@@0 setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(toujoursRenderNameTag comme booléen);
```

| Paramètre           | Type de texte | Libellé                    |
| ------------------- | ------------- | -------------------------- |
| alwaysRenderNameTag | boolean       | Aucune description fournie |


### ID de l'entité

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| id        | Indice        | Aucune description fournie |


### setFire

Définit l'entité à brûler pendant x secondes et ne peut pas réduire la quantité de feu existante.

```zenscript
myMCPlayerEntity.setFire(secondes comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| secondes  | Indice        | Aucune description fournie |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_223308_1_ | Indice        | Aucune description fournie |


### paramétrage Brillant

```zenscript
myMCPlayerEntity.setGlowing(clignotant comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| glowingIn | boolean       | Aucune description fournie |


### format@@0 setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw comme float, pitch comme int) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| mouillé   | flottant      | Aucune description fournie |
| pas       | Indice        | Aucune description fournie |


### format@@0 setHealth

```zenscript
myMCPlayerEntity.setHealth(santé comme flottant) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| santé     | flottant      | Aucune description fournie |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn comme int);
```

| Paramètre  | Type de texte | Libellé                    |
| ---------- | ------------- | -------------------------- |
| idleTimeIn | Indice        | Aucune description fournie |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### Invisible

```zenscript
myMCPlayerEntity.setInvisible(invisible comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| invisible | boolean       | Aucune description fournie |


### setInvulnérable

Définit si cette entité est invulnérable.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| Paramètre      | Type de texte | Libellé                    |
| -------------- | ------------- | -------------------------- |
| isInvulnérable | boolean       | Aucune description fournie |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(saute comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| saut      | boolean       | Aucune description fournie |


### Définir la localisation et les angles

Définit l'emplacement et le Pitch d'une entité dans le monde

```zenscript
myMCPlayerEntity.setLocationAndAngles(x aussi double, z aussi double, z aussi double, yaw que float, pitch comme float) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |
| mouillé   | flottant      | Aucune description fournie |
| pas       | flottant      | Aucune description fournie |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x aussi double, y aussi double, z que doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### Pas de Gravité

```zenscript
myMCPlayerEntity.setNoGravity(noGravity comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| noGravité | boolean       | Aucune description fournie |


### format@@0 setPartying

Appelé quand un enregistrement démarre ou arrête de jouer. Utilisé pour faire des perroquets commencer ou arrêter la fête.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Paramètre            | Type de texte                                                | Libellé                    |
| -------------------- | ------------------------------------------------------------ | -------------------------- |
| pos                  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |
| format@@0 isPartying | boolean                                                      | Aucune description fournie |


### setPortal

Marque l'entité comme étant à l'intérieur d'un portail, activant la logique de téléportation dans onEntityUpdate() dans le(s) tick(s) suivant(s).

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Paramètre | Type de texte                                                | Libellé                    |
| --------- | ------------------------------------------------------------ | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |


### régler la position

Définit x,y,z de l'entité à partir des paramètres donnés. Il semble également de mettre en place une boîte englobante.

```zenscript
myMCPlayerEntity.setPosition(x aussi double, et aussi double, z que doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### définir la position et la rotation

Définit les paramètres de position et de rotation, de serrage et d'emballage à des valeurs valides. Utilisé par le code réseau.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x aussi double, et aussi double, z aussi double, yaw que float, pitch que float) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |
| mouillé   | flottant      | Aucune description fournie |
| pas       | flottant      | Aucune description fournie |


### Définir la position et la rotation directe

Définit une cible vers laquelle le client doit interpoler au cours des prochains ticks

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x aussi double, z aussi double, z aussi double, yaw que float, pitch as float, posRotationIncrements as int, teleport as boolean);
```

| Paramètre                       | Type de texte | Libellé                    |
| ------------------------------- | ------------- | -------------------------- |
| x                               | double        | Aucune description fournie |
| y                               | double        | Aucune description fournie |
| Z                               | double        | Aucune description fournie |
| mouillé                         | flottant      | Aucune description fournie |
| pas                             | flottant      | Aucune description fournie |
| format@@0 posRotationIncrements | Indice        | Aucune description fournie |
| téléporter                      | boolean       | Aucune description fournie |


### définir la position et la mise à jour

Définit la position de l'entité et met à jour les variables 'last'

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x aussi double, y aussi double, z que doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### setPositionNonDirty

Retourne un booléen

```zenscript
monMCPlayerEntity.setPositionNonDirty();
```

### format@@0 setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug as boolean);
```

| Paramètre       | Type de texte | Libellé                    |
| --------------- | ------------- | -------------------------- |
| Débogage réduit | boolean       | Aucune description fournie |


### setRenderYawOffset

Définir le décalage de yaw de rendu

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset comme float);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| décalage  | flottant      | Aucune description fournie |


### format@@0 setRotationYawHead

Définit la rotation de la tête de l'entité.

```zenscript
myMCPlayerEntity.setRotationYawHead(rotation flottante);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| rotation  | flottant      | Aucune description fournie |


### format@@0 setScore

Définir le score du joueur

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| scoreIn   | Indice        | Aucune description fournie |


### setSilent

Lorsqu'elle est définie à "true", l'entité ne jouera pas de son.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| isSilent  | boolean       | Aucune description fournie |


### format@@0 setSneaking

Définit le drapeau sournois.

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| sournois  | boolean       | Aucune description fournie |


### format@@0 setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forced as boolean);
```

| Paramètre | Type de texte                                                | Libellé                    |
| --------- | ------------------------------------------------------------ | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |
| forcé     | boolean                                                      | Aucune description fournie |


### setSprinting

Définir le commutateur de sprint pour Entity.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| sprinter  | boolean       | Aucune description fournie |


### définir la natation

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ comme booléen);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_204711_1_ | boolean       | Aucune description fournie |


### setVelocity

Met à jour le client de mouvement d'entité, appelé par paquets du serveur

```zenscript
myMCPlayerEntity.setVelocity(x aussi double, y aussi double, z que doublé);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | double        | Aucune description fournie |
| y         | double        | Aucune description fournie |
| Z         | double        | Aucune description fournie |


### format@@0 shouldHeal

Vérifie si la santé du joueur n'est pas pleine et n'est pas nulle.

Retourne un booléen

```zenscript
myMCPlayerEntity.shouldHeal();
```

### Les erreurs de réception doivent être effectuées

Retourne un booléen

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### devrait recevoir un commentaire

Retourne un booléen

```zenscript
myMCPlayerEntity.doitReceiveFeedback();
```

### RenderSneaking

Retourne un booléen

```zenscript
myMCPlayerEntity.should dRenderSneaking();
```

### shouldRiderFaceForward

Renvoie vrai si le pilote de l'entité (EntityPlayer) doit faire face vers l'avant lorsqu'il est monté. actuellement uniquement utilisé dans le code vanilla par les porcs.

Retourne un booléen

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(joueur en tant que crafttweaker.api.entity.player.MCPlayerEntity);
```

| Paramètre | Type de texte                                                                              | Libellé                           |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------------- |
| Joueur    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Le joueur qui chevauche l'entité. |


### format@@0 shouldRiderSit

Retourne un booléen

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### format@@0 spawnRunningParticles

Tente de créer des particules de sprint si l'entité est en train de sprinter et non dans l'eau.

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### format@@0 spawn SweepParticles

```zenscript
myMCPlayerEntity.spawnSweepParticles();
```

### startSleeping

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ en tant que crafttweaker.api.util.BlockPos);
```

| Paramètre     | Type de texte                                                | Libellé                    |
| ------------- | ------------------------------------------------------------ | -------------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |


### format@@0 startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_204803_1_ | Indice        | Aucune description fournie |


### format@@0 stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### Arrêt du trajet

Démonte cette entité de l'entité qu'elle pilote.

```zenscript
myMCPlayerEntity.stopRiding();
```

### téléportKeeLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ en double, p_223102_3_ en double, p_223102_5_ en double);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_223102_1_ | double        | Aucune description fournie |
| p_223102_3_ | double        | Aucune description fournie |
| p_223102_5_ | double        | Aucune description fournie |


### tick

Appelé pour mettre à jour la position / la logique de l'entité.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Retourne une chaîne de caractères

```zenscript
myMCPlayerEntity.toString();
```

### Mis à jour rafraichissant

Gère la mise à jour lors de la conduite d'une autre entité

```zenscript
myMCPlayerEntity.updateRidden();
```

### mettre à jour la nage

```zenscript
myMCPlayerEntity.updateSwimming();
```

### réveil

```zenscript
myMCPlayerEntity.wakeUp();
```

### format@@0 wakeUpPlayer

Réveillez le joueur s'il dort.

```zenscript
myMCPlayerEntity.wakeUpPlayer(immédiatement comme boolean, updateWorldFlag comme boolean, setSpawn comme boolean);
```

| Paramètre       | Type de texte | Libellé                    |
| --------------- | ------------- | -------------------------- |
| immédiatement   | boolean       | Aucune description fournie |
| updateWorldFlag | boolean       | Aucune description fournie |
| setSpawn        | boolean       | Aucune description fournie |


### Cap de Barre xp

Cette méthode retourne la quantité maximale d'expérience que la barre d'expérience peut garder. À chaque niveau, le plafond de d'expérience de la barre d'expérience du joueur est augmenté de 10.

Renvoie int

```zenscript
myMCPlayerEntity.xpBarCap();
```


