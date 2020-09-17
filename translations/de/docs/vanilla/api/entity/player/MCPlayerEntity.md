# MCPlayerEntity

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Methoden
### zusätzliche Erschöpfung

erhöht den Erschöpfungsgrad um den angegebenen Betrag

```zenscript
myMCPlayerEntity.addExhaustion(Erschöpfung als float);
```

| Parameter   | Type  | Beschreibung                 |
| ----------- | ----- | ---------------------------- |
| erschöpfung | float | Keine Beschreibung angegeben |


### addExperience-Level

Füge diesem Spieler Erfahrungslevel hinzu.

```zenscript
myMCPlayerEntity.addExperienceLevel(Level als int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| stufen    | int  | Keine Beschreibung angegeben |


### addItemStackToInventory

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Parameter     | Type                                                              | Beschreibung                 |
| ------------- | ----------------------------------------------------------------- | ---------------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### addMovementStat

Fügt einem Bewegungsstatistikfeld einen Wert hinzu - wie Laufen, Laufen, Laufen, Swin oder Klettern.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ als Doppel, p_71000_3_ als Doppel, p_71000_5_ als Doppel);
```

| Parameter    | Type   | Beschreibung                 |
| ------------ | ------ | ---------------------------- |
| p_71000_1  | double | Keine Beschreibung angegeben |
| p_71000_3  | double | Keine Beschreibung angegeben |
| p_71000_5_ | double | Keine Beschreibung angegeben |


### addPotionEffect

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter        | Type                                                                                         | Beschreibung                 |
| ---------------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| effektInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) | Keine Beschreibung angegeben |


### addScore

Zu Spieler Punktzahl hinzufügen

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| scoreIn   | int  | Keine Beschreibung angegeben |


### addTag

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.addTag(Tag als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| tag       | String | Keine Beschreibung angegeben |


### addVelocity

Fügt die aktuelle Geschwindigkeit der Einheit hinzu und setzt auf wahr.

```zenscript
myMCPlayerEntity.addVelocity(x Doppelt, y doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### erlaubte Protokollierung

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.allowLogging();
```

### angreifbar

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.attackable();
```

### attemptTeleport

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ als Doppel, p_213373_3_ als Doppel, p_213373_5_ als Doppel, p_213373_7_ als Boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| p_213373_1_ | double  | Keine Beschreibung angegeben |
| p_213373_3_ | double  | Keine Beschreibung angegeben |
| p_213373_5_ | double  | Keine Beschreibung angegeben |
| p_213373_7_ | boolean | Keine Beschreibung angegeben |


### baseTick

Ruft jeden Ticker aus der Haupteigentümerklasse ab

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canAttackPlayer(andere als crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parameter | Type                                                                                       | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| andere    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Keine Beschreibung angegeben |


### canBeAttackedWithItem

Gibt wahr aus, wenn es möglich ist, diese Entität mit einem Gegenstand anzugreifen.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedMit

Gibt wahr aus, wenn andere Entitäten daran gehindert werden sollten, sich durch diese Entität zu bewegen.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canBeHitWithTrank

Gibt false zurück, wenn die Entität ein Rüstungsständer ist. Gibt für alle anderen lebenden Körperschaften Gültigkeit.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

Gibt wahr aus, wenn diese Entität schieben und von anderen Entitäten geschoben werden soll, wenn sie kollidiert.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheUnterwasser

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canEat(ignoreHunger als Boolean);
```

| Parameter    | Type    | Beschreibung                 |
| ------------ | ------- | ---------------------------- |
| ignoreHunger | boolean | Keine Beschreibung angegeben |


### canHarvestBlock

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canHarvestBlock(Status als crafttweaker.api.block.MCBlockState);
```

| Parameter | Type                                                                    | Beschreibung                 |
| --------- | ----------------------------------------------------------------------- | ---------------------------- |
| status    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Keine Beschreibung angegeben |


### canPassengerSteer

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Gibt zurück, ob dieser Spieler den Block an einem bestimmten Ort mit dem angegebenen Stapel verändern kann. <p> Die zu fragende Position ist {@code pos.offset(facing.getOpposite())}. Gibt zurück: `Ob dieser Spieler den abgefragten Ort in der aktuellen Welt ändern kann` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canPlayerEdit(Pos as crafttweaker.api.util.BlockPos, face as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung                 |
| --------- | ----------------------------------------------------------------- | ---------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Keine Beschreibung angegeben |
| schaut    | [crafttweaker.api.util.Richtung](/vanilla/api/util/Direction)     | Keine Beschreibung angegeben |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### canRenderOnFire

Gibt zurück, ob diese Entität wie in Brand gerendert werden soll.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Parameter   | Type                                                                    | Beschreibung                 |
| ----------- | ----------------------------------------------------------------------- | ---------------------------- |
| status      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Keine Beschreibung angegeben |
| posten      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Keine Beschreibung angegeben |
| falldistanz | float                                                                   | Keine Beschreibung angegeben |


### canUpdate

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(Wert als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| wert      | boolean | Keine Beschreibung angegeben |


### canUseCommandBlock

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActiveTränke

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### clearBedPosition

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### schließen Bildschirm

das aktuelle Handwerksinventar auf das 2x2 Quadrat zurücksetzen

```zenscript
myMCPlayerEntity.closeScreen();
```

### curePotionEffects

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Parameter    | Type                                                              | Beschreibung                 |
| ------------ | ----------------------------------------------------------------- | ---------------------------- |
| kurativeItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### deaktivierter Schild

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ als Boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| p_190777_1_ | boolean | Keine Beschreibung angegeben |


### does EntityNotTriggerPressurePlate

Gibt zurück, ob diese Entität KEINE Druckplatte oder einen Tripdraht auslösen soll.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.does EntityNotTriggerPressurePlate();
```

### gleich

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.equals(p_equals_1_ als Objekt);
```

| Parameter     | Type   | Beschreibung                 |
| ------------- | ------ | ---------------------------- |
| p_gleich 1_ | Objekt | Keine Beschreibung angegeben |


### extinguish

Entfernt Feuer von Entität.

```zenscript
myMCPlayerEntity.extinguish();
```

### fallen

```zenscript
myMCPlayerEntity.fall(Entfernung als float, SchadenMultiplier als float);
```

| Parameter            | Type  | Beschreibung                 |
| -------------------- | ----- | ---------------------------- |
| distanz              | float | Keine Beschreibung angegeben |
| SchadenMultiplikator | float | Keine Beschreibung angegeben |


### findMunition

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCPlayerEntity.findAmmo(abschießen als crafttweaker.api.item.IItemStack);
```

| Parameter   | Type                                                              | Beschreibung                 |
| ----------- | ----------------------------------------------------------------- | ---------------------------- |
| schießbarer | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### func_213300_bk

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ als Doppel, p_213312_3_ als Doppel, p_213312_5_ als Doppel);
```

| Parameter     | Type   | Beschreibung                 |
| ------------- | ------ | ---------------------------- |
| p_213312_1_ | double | Keine Beschreibung angegeben |
| p_213312_3_ | double | Keine Beschreibung angegeben |
| p_213312_5_ | double | Keine Beschreibung angegeben |


### 213314_bj

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn as crafttweaker.api.item.IItemStack);
```

| Parameter   | Type                                                              | Beschreibung                 |
| ----------- | ----------------------------------------------------------------- | ---------------------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### getAIMoveSpeed

die verschoben für das neue KI-System

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionsbetrag

Gibt die Menge an Gesundheit zurück, die durch den Absorptionseffekt hinzugefügt wurde.

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

gibt den Trankeffekt für den mitgelieferten Trank zurück, wenn er aktiv ist, sonst null.

Gibt [craftweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) zurück

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parameter | Type                                                                          | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------- | ---------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Keine Beschreibung angegeben |


### getActivePotionEffects

Gibt Sammlung zurück<[crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getjustedHorizontal-Facing

Ruft die horizontale Richtung dieses Entitäts ab, die angepasst ist, um speziell behandelte Entitäten zu berücksichtigen.

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAnpasst();
```

### getAir

Retouren Int

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Retouren Int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

erhält die Richtung für die Kamera, wenn diese Einheit schläft

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedBedlocation

Gibt [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) zurück

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockStatus

Gibt [craftweaker.api.block.MCBlockState zurück](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getHelligkeit

Ruft auf, wie hell diese Entität ist.

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Retouren Int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Gibt den String zurück

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getKlassifizierung

Gibt [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) zurück

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount als boolean);
```

| Parameter      | Type    | Beschreibung                 |
| -------------- | ------- | ---------------------------- |
| forSpawnAnzahl | boolean | Keine Beschreibung angegeben |


### getCollisionBorderSize

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### geCooldown-Periode

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAngriffsstärke

Gibt den Prozentsatz der verfügbaren Angriffskraft basierend auf der Abklingzeit zurück (0 zu einem).

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getCooledAttackStrength(Anpassungs-Ticks als float);
```

| Parameter        | Type  | Beschreibung                 |
| ---------------- | ----- | ---------------------------- |
| anpassende Ticks | float | Keine Beschreibung angegeben |


### getDigSpeed

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getDigSpeed(Status als crafttweaker.api.block.MCBlockState);
```

| Parameter | Type                                                                    | Beschreibung                 |
| --------- | ----------------------------------------------------------------------- | ---------------------------- |
| status    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Keine Beschreibung angegeben |



Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                                    | Beschreibung                 |
| --------- | ----------------------------------------------------------------------- | ---------------------------- |
| arg0      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Keine Beschreibung angegeben |
| arg1      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Keine Beschreibung angegeben |


### getDistanceSq

Gibt doppelt zurück

```zenscript
myMCPlayerEntity.getDistanceSq(x Doppelt, y doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### getEntityId

Retouren Int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Gibt den String zurück

```zenscript
myMCPlayerEntity.getEntityString();
```

### getAugenhöhe

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Retouren Int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getGesundheit

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getHealth();
```

### getHöhe

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontal-Deckung

Ruft die horizontale Richtung dieser Einheit ab.

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Retouren Int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Retouren Int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Retouren Int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Retouren Int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Retouren Int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

Die maximale Höhe von der aus die Entität springt (wird im Pfadfinder verwendet)

Retouren Int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Gibt die Zeit zurück, die diese Entität in einem Portal bleiben soll, bevor sie transportiert wird.

Retouren Int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Gibt den Y-Offset von der Position der Entität für jede Entität, die auf dieser Stelle reitet, zurück.

Gibt doppelt zurück

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Liefert die aktuelle Tonhöhe der Entität.

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getPitch(partialTicks als float);
```

| Parameter    | Type  | Beschreibung                 |
| ------------ | ----- | ---------------------------- |
| partialTicks | float | Keine Beschreibung angegeben |


### getPortalCooldown

Gib die Menge an Abklingzeit zurück, bevor diese Einheit ein Portal wieder verwenden kann.

Retouren Int

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

Holen Sie sich die Position in der Welt. <b>{@code null} ist nicht erlaubt!</b> Wenn Sie keine Entität in der Welt sind, geben Sie die Koordinaten 0, 0, 0 zurück

Gibt [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) zurück

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Retouren Int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Retouren Int

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

Gibt einen String zurück, der als Name dieser Entität in den Scoreboard/Entity Selektorsystemen verwendet werden soll

Gibt den String zurück

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Retouren Int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmerged-Höhe

Gibt doppelt zurück

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSchwimmanimation

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks als float);
```

| Parameter    | Type  | Beschreibung                 |
| ------------ | ----- | ---------------------------- |
| partialTicks | float | Keine Beschreibung angegeben |


### getSwingProgress

Liefert die Fortschreibung der Schwunganimation, die zwischen 0,0 und 1,0 liegt.

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime als float);
```

| Parameter       | Type  | Beschreibung                 |
| --------------- | ----- | ---------------------------- |
| partialTickTime | float | Keine Beschreibung angegeben |


### getTags

Rückgabewerte<String>

```zenscript
myMCPlayerEntity.getTags();
```

### getTeleportRichtung

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

Retouren Int

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorWert

Gibt den aktuellen Rüstungswert zurück, wie durch einen Aufruf an InventoryPlayer.getTotalArmorValue bestimmt

Retouren Int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Retouren Int

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Gibt den Y-Versatz dieser Entität zurück.

Gibt doppelt zurück

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Ruft den aktuellen Yaw der Entität ab

Rückgabewerte schweben

```zenscript
myMCPlayerEntity.getYaw(partialTicks als float);
```

| Parameter    | Type  | Beschreibung                 |
| ------------ | ----- | ---------------------------- |
| partialTicks | float | Keine Beschreibung angegeben |


### giveExperiencePoints

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_195068_1_ | int  | Keine Beschreibung angegeben |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id als Byte);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| id        | byte | Keine Beschreibung angegeben |


### handleWatermovement

Gibt zurück, wenn diese Entität im Wasser ist und die Wassergeschwindigkeit der Entität hinzufügen wird

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustom-Name

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravität

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasPermissionLevel

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_211513_1_ | int  | Keine Beschreibung angegeben |


### hasReducedDebug

Ob die Option "reducedDebugInfo" für diesen Spieler aktiv ist.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Retouren Int

```zenscript
myMCPlayerEntity.hashCode();
```

### heilen

Lebewesen heilen (Param: Anzahl an Halbherzen)

```zenscript
myMCPlayerEntity.heal(Heilanzahl als float);
```

| Parameter  | Type  | Beschreibung                 |
| ---------- | ----- | ---------------------------- |
| healamount | float | Keine Beschreibung angegeben |


### ignoreItemEntityData

Prüft, ob Spieler diese Entität benutzen können, um auf Operator (Berechtigungsstufe 2) Befehle direkt oder indirekt zuzugreifen, wie zum Beispiel Gib oder Setblock. Eine ähnliche Methode existiert für Entitäten unter {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Zum Beispiel werden {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() command block minecarts} und {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (Spawnbefehl
 block minecarts oder drops) als zugänglich.</p>Gibt zurück: `wahr wenn diese Entität nicht autorisierte
 Spieler Möglichkeiten bietet, eingeschränkte Befehle zu benutzen`

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Gibt wahr aus, wenn die Entität nicht war.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Wenn mindestens 1 Entität auf diesem reitet

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

Gibt wahr aus, wenn die Entität in Brand steht. Wird vom Renderer verwendet, um den Feuereffekt beim Rendern hinzuzufügen.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Wenn Tier, überprüft, ob das Alter negativ ist

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isChild();
```

### isCreative

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameSichtbar

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isCustomNameSichtbar();
```

### isElytraFliegen

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Prüft, ob sich diese Entität innerhalb eines undurchsichtigen Blocks befindet

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Gibt wahr aus, wenn diese Entität untot ist.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandaktiv

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x als Doppelt, y als Doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### isInRangeToRenderDist

Prüft, ob die Entität im zu rendernden Bereich ist.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(Entfernung als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| distanz   | double | Keine Beschreibung angegeben |


### isInWater

Checks if this entity is inside water (if inWater field is true as a result of handleWaterMovement() returning true)

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleColumn

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColumn

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### isInvisible

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isUnsichtbar();
```

### isInvisibleToPlayer

Wird nur vom Renderer in EntityLivingBase-Unterklassen verwendet. Legt fest, ob eine Entität für einen bestimmten Spieler sichtbar ist oder nicht, ob die Entität normalerweise unsichtbar ist. Bei EntityLivingBase-Unterklassen wird die EntityLivingBase-Entität halbtransparent.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(Spieler als crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parameter | Type                                                                                       | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| player    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Keine Beschreibung angegeben |


### unverwundbar

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isUnverwundbar();
```

### isLiving

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

Gibt false zurück, wenn diese Entität ein Boss ist, sonst wahr.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

Prüft, ob sich die Offsetposition von der aktuellen Position der Entität innerhalb einer Flüssigkeit befindet.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x als Doppelt, y als Doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### isOnLadder

Gibt wahr aus, wenn diese Entität sich bewegen soll, als ob sie auf einer Leiter wäre (entweder weil sie tatsächlich auf einer Leiter ist, oder aus KI-Gründen)

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPassagier

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

Gibt zurück, ob der Spieler eingeschlafen ist oder nicht, und der Bildschirm ist vollständig verblasst.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parameter | Type                                                                          | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------- | ---------------------------- |
| potionIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Keine Beschreibung angegeben |


### isPotionAnwendbar

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn als crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter      | Type                                                                                         | Beschreibung                 |
| -------------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| potioneffectIn | [crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) | Keine Beschreibung angegeben |


### isPushedByWater

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Gibt zurück, ob sich die Entität in einer Serverwelt befindet

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Gibt zurück: `Wahr, wenn diese Entität keine Töne abspielen wird`

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSilent();
```

### isst Schlafen

Gibt zurück, ob der Spieler schläft oder nicht

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Gibt zurück, wenn diese Entität schleicht.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSneaking();
```

### isSpawnForced

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSpawnForc();
```

### isSpectator

Gibt wahr aus, wenn der Spieler im Zuschauermodus ist.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAngriff

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSpinAttack();
```

### isSprinting

Erhalten Sie, wenn die Entität sprintet.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSprinting();
```

### isschwimmen

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isSwimming();
```

### isUser

gibt true zurück, wenn dies ein EntityPlayerSP oder der eingeloggte Spieler ist.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Prüft, ob sich diese Entität entweder im Wasser oder auf einem freien Block im Regen befindet (bei Wölfen verwendet).

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.isWet();
```

### springe

Bewirkt, dass diese Entität eine Aufwärtsbewegung vollzieht (Springen).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Häufig aufgerufen, damit die Entität ihren Status bei Bedarf jeder Ticker aktualisieren kann. Zum Beispiel Zombies und Skelette verwenden Sie dies, um auf Sonnenlicht zu reagieren und zu brennen.

```zenscript
myMCPlayerEntity.livingTick();
```

### moveToBlockPosAndWinkel

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Parameter       | Type                                                         | Beschreibung                 |
| --------------- | ------------------------------------------------------------ | ---------------------------- |
| posten          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |
| rotationYawIn   | float                                                        | Keine Beschreibung angegeben |
| rotationPitchIn | float                                                        | Keine Beschreibung angegeben |


### an AddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithPlayer

Wird von einer Spielereinheit aufgerufen, wenn sie mit einer Entität kollidieren

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn als crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parameter | Type                                                                                       | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| entityIn  | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Keine Beschreibung angegeben |


### onverzaubert

```zenscript
myMCPlayerEntity.onEnchant(verzaubertes Item als crafttweaker.api.item.IItemStack, inin);
```

| Parameter               | Type                                                              | Beschreibung                 |
| ----------------------- | ----------------------------------------------------------------- | ---------------------------- |
| verzauberter Gegenstand | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |
| kosten                  | int                                                               | Keine Beschreibung angegeben |


### onEnterBubblespalte

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(abwärts als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abwärts   | boolean | Keine Beschreibung angegeben |


### onEnterBubbleColumnWithAirOber

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(abwärts als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abwärts   | boolean | Keine Beschreibung angegeben |


### onKillCommand

Ruft den /kill Befehl auf.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedVromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### performHurtAnimation

Richtet die Entität ein, um die verwundete Animation zu tun. Wird nur von Paketen im Multiplayer verwendet.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### preparePlayerToSpawn

Hält daran, die Entität nach oben zu bewegen, damit sie nicht mit Blöcken und anderen Anforderungen kollidiert, damit diese Entität generiert wird (nur für Spieler, aber auch für Entität)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### Neuberechnungsgröße

```zenscript
myMCPlayerEntity.recalculateSize();
```

### entfernen

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| Parameter       | Type    | Beschreibung                 |
| --------------- | ------- | ---------------------------- |
| behaltungsdaten | boolean | Keine Beschreibung angegeben |


### removeActivePotionEffect

Gibt [craftweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) zurück

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffekt);
```

| Parameter | Type                                                                          | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------- | ---------------------------- |
| arg0      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Keine Beschreibung angegeben |


### removePassengers

Trägt alle Entitäten, die diese Entität reiten, von dieser Entität ab.

```zenscript
myMCPlayerEntity.removePassengers();
```

### entferne PotionEffect

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parameter | Type                                                                          | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------- | ---------------------------- |
| effektIn  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Keine Beschreibung angegeben |


### removeTag

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.removeTag(Tag als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| tag       | String | Keine Beschreibung angegeben |


### ersetzeItemInInventar

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot als int, itemStackIn als crafttweaker.api.item.IItemStack);
```

| Parameter     | Type                                                              | Beschreibung                 |
| ------------- | ----------------------------------------------------------------- | ---------------------------- |
| inventorySlot | int                                                               | Keine Beschreibung angegeben |
| itemStackIn   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### zurücksetzen ActiveHand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### zurücksetzen PositionToBB

Setzt die Position der Entität auf die Mitte (planar) und untere (vertikale) Punkte ihres Begrenzungsfeldes zurück.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnPlayer

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### wiederbeleben

```zenscript
myMCPlayerEntity.revive();
```

### nach Richtung drehen

```zenscript
myMCPlayerEntity.rotateTowards(doppelt, doppelt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| yaw       | double | Keine Beschreibung angegeben |
| piste     | double | Keine Beschreibung angegeben |


### sendEndCombat

Sendet ein END_COMBAT Paket an den Client

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### sendEnterCombat

Sendet ein ENTER_COMBAT Paket an den Client

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### sendPlayerfähigkeiten

Sendet die Fähigkeiten des Spielers an den Server (falls vorhanden).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

setzt den verschiebbaren Wert für das neue KI-System

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| speedIn   | float | Keine Beschreibung angegeben |


### setAbsorptionamount

```zenscript
myMCPlayerEntity.setAbsorptionAmount(Menge als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| beträge   | float | Keine Beschreibung angegeben |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| luft      | int  | Keine Beschreibung angegeben |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(als InEntity);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| zählen    | int  | Keine Beschreibung angegeben |


### setBedPosition

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ als crafttweaker.api.util.BlockPos);
```

| Parameter     | Type                                                         | Beschreibung                 |
| ------------- | ------------------------------------------------------------ | ---------------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |


### setCustomNameSichtbar

```zenscript
myMCPlayerEntity.setCustomNameVisible(immersRenderNameTag als Boolean);
```

| Parameter           | Type    | Beschreibung                 |
| ------------------- | ------- | ---------------------------- |
| alwaysRenderNameTag | boolean | Keine Beschreibung angegeben |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| id        | int  | Keine Beschreibung angegeben |


### setFire

Legt fest, dass die Entität für x Anzahl an Sekunden brennt, kann die Menge des vorhandenen Feuers nicht senken.

```zenscript
myMCPlayerEntity.setFire(Sekunden intest);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| Sekunden  | int  | Keine Beschreibung angegeben |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_223308_1_ | int  | Keine Beschreibung angegeben |


### leuchten

```zenscript
myMCPlayerEntity.setGlowing(glowingIn als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| glowingIn | boolean | Keine Beschreibung angegeben |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(jaw as float, Pitch as int);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| yaw       | float | Keine Beschreibung angegeben |
| piste     | int   | Keine Beschreibung angegeben |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(Gesundheit als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| gesund    | float | Keine Beschreibung angegeben |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn als In);
```

| Parameter  | Type | Beschreibung                 |
| ---------- | ---- | ---------------------------- |
| idleTimeIn | int  | Keine Beschreibung angegeben |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setUnsichtbar

```zenscript
myMCPlayerEntity.setInvisible(unsichtbar als boolean);
```

| Parameter  | Type    | Beschreibung                 |
| ---------- | ------- | ---------------------------- |
| unsichtbar | boolean | Keine Beschreibung angegeben |


### setze unverwundbar

Legt fest, ob diese Entität unverwundbar ist.

```zenscript
myMCPlayerEntity.setInvulnerable(als Boolean unverwundbar);
```

| Parameter    | Type    | Beschreibung                 |
| ------------ | ------- | ---------------------------- |
| unverwundbar | boolean | Keine Beschreibung angegeben |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(Springen als Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| springe   | boolean | Keine Beschreibung angegeben |


### setLocationAndWinkel

Stellt den Standort und die Yaw/Neigung einer Entität in der Welt fest

```zenscript
myMCPlayerEntity.setLocationAndAngles(x so doppelt, y als doppelt, z als doppelt, schwach als float);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |
| yaw       | float  | Keine Beschreibung angegeben |
| piste     | float  | Keine Beschreibung angegeben |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x so doppelt, y als doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Parameter  | Type    | Beschreibung                 |
| ---------- | ------- | ---------------------------- |
| nogravität | boolean | Keine Beschreibung angegeben |


### setPartying

Wird aufgerufen, wenn ein Datensatz startet oder nicht mehr abgespielt wird. Verwendet, um Papageien starten oder aufhören zu feiern.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying als boolean);
```

| Parameter  | Type                                                         | Beschreibung                 |
| ---------- | ------------------------------------------------------------ | ---------------------------- |
| posten     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |
| isPartying | boolean                                                      | Keine Beschreibung angegeben |


### setPortal

Markiert die Entität als innerhalb eines Portals und aktiviert die Teleportationslogik in onEntityUpdate() in folgenden Tick(s) (n).

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Beschreibung                 |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |


### setPosition

Legt das x,y,z der Entität der angegebenen Parameter fest. Auch scheint ein Begrenzungsfeld einzurichten.

```zenscript
myMCPlayerEntity.setPosition(x als Doppelt, y als Doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### setPositionAndRotation

Setzt Position und Drehung, Spann- und Umhüllungsparameter auf gültige Werte. Wird vom Netzwerkcode verwendet.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x als doppelt, y als doppelt, z als doppelt, schwach als float);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |
| yaw       | float  | Keine Beschreibung angegeben |
| piste     | float  | Keine Beschreibung angegeben |


### setPositionAndRotationDirect

Setzt ein Ziel für die Interpolation des Clients über die nächsten Ticks

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x als doppelt, y als doppelt, z als zwei, glatt als schwimmend, Pitch als float, posRotationIncrements als int, teleportieren als Boolean);
```

| Parameter             | Type    | Beschreibung                 |
| --------------------- | ------- | ---------------------------- |
| x                     | double  | Keine Beschreibung angegeben |
| y                     | double  | Keine Beschreibung angegeben |
| z                     | double  | Keine Beschreibung angegeben |
| yaw                   | float   | Keine Beschreibung angegeben |
| piste                 | float   | Keine Beschreibung angegeben |
| posRotationIncrements | int     | Keine Beschreibung angegeben |
| teleportieren         | boolean | Keine Beschreibung angegeben |


### setPositionAndUpdate

Legt die Position der Entität fest und aktualisiert die 'letzten' Variablen

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x als Doppelt, y als Doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### setPositionNonDirty

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug as boolean);
```

| Parameter        | Type    | Beschreibung                 |
| ---------------- | ------- | ---------------------------- |
| reduzierte Debug | boolean | Keine Beschreibung angegeben |


### setRenderYawOffset

Render Yaw-Versatz einstellen

```zenscript
myMCPlayerEntity.setRenderYawOffset(Offset als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| versatz   | float | Keine Beschreibung angegeben |


### setRotationYawHead

Legt die Yaw-Rotation des Kopfes fest.

```zenscript
myMCPlayerEntity.setRotationYawHead(Rotation als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| drehen    | float | Keine Beschreibung angegeben |


### setScore

Setze Spielerpunktzahl

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| scoreIn   | int  | Keine Beschreibung angegeben |


### setSilent

Wenn auf true gesetzt, wird die Einheit keine Töne abspielen.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| isSilent  | boolean | Keine Beschreibung angegeben |


### setSneaking

Legt die Schleichflagge fest.

```zenscript
myMCPlayerEntity.setSneaking(Als Boolean schleichen);
```

| Parameter   | Type    | Beschreibung                 |
| ----------- | ------- | ---------------------------- |
| schleichend | boolean | Keine Beschreibung angegeben |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(Pos as crafttweaker.api.util.BlockPos, erzwungen als boolean);
```

| Parameter | Type                                                         | Beschreibung                 |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |
| erzwungen | boolean                                                      | Keine Beschreibung angegeben |


### setSprinting

Sprinting Schalter für Entität.

```zenscript
myMCPlayerEntity.setSprinting(Sprinting als Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| spritzen  | boolean | Keine Beschreibung angegeben |


### setzten Schwimmen

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ als Boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| p_204711_1_ | boolean | Keine Beschreibung angegeben |


### setVelocity

Aktualisiert die Entität Bewegungs-Clientseite, die von Paketen vom Server aufgerufen wird

```zenscript
myMCPlayerEntity.setVelocity(x als Doppelt, y als Doppelt, z als Doppel);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| x         | double | Keine Beschreibung angegeben |
| y         | double | Keine Beschreibung angegeben |
| z         | double | Keine Beschreibung angegeben |


### sollte heilen

Prüft, ob die Gesundheit des Spielers nicht voll ist und nicht Null.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.shouldHeal();
```

### sollte empfangene Fehler

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.should dReceiveErrors();
```

### sollte Feedback erhalten

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.should dReceiveFeedback();
```

### sollte RenderSneaking

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### sollte RiderFaceForward

Gibt wahr aus, wenn der Fahrer (EntityPlayer) vorwärts geht, wenn er montiert wird. derzeit nur im Vanille-Code von Schweinen verwendet.

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(Spieler als crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parameter | Type                                                                                       | Beschreibung                         |
| --------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| player    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Der Spieler, der die Einheit reitet. |


### should RiderSit

Rückgabewert boolesch

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### spawnRunningParticles

Versuche Sprintpartikel zu erzeugen, wenn die Entität Sprint ist und nicht im Wasser.

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### spawnSweepParticles

```zenscript
myMCPlayerEntity.spawnSweepParticles();
```

### starte Schlafen

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ als crafttweaker.api.util.BlockPos);
```

| Parameter     | Type                                                         | Beschreibung                 |
| ------------- | ------------------------------------------------------------ | ---------------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_204803_1_ | int  | Keine Beschreibung angegeben |


### stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### stoppe Reiten

Tritt diese Entität von der Entität ab, die sie reitet.

```zenscript
myMCPlayerEntity.stopRiding();
```

### teleportKeepLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ als Doppel, p_223102_3_ als Doppel, p_223102_5_ als Doppel);
```

| Parameter     | Type   | Beschreibung                 |
| ------------- | ------ | ---------------------------- |
| p_223102_1_ | double | Keine Beschreibung angegeben |
| p_223102_3_ | double | Keine Beschreibung angegeben |
| p_223102_5_ | double | Keine Beschreibung angegeben |


### ticken

Aufgerufen, um die Position/Logik der Entität zu aktualisieren.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Gibt den String zurück

```zenscript
myMCPlayerEntity.toString();
```

### updateRidden

Bearbeitet Aktualisierungen beim Fahren einer anderen Einheit

```zenscript
myMCPlayerEntity.updateRidden();
```

### aktualisiere Schwimmen

```zenscript
myMCPlayerEntity.updateSwimming();
```

### wecken

```zenscript
myMCPlayerEntity.wakeUp();
```

### wakeUpPlayer

Wecke den Spieler auf, wenn er schläft.

```zenscript
myMCPlayerEntity.wakeUpPlayer(sofort als boolean, updateWorldFlag als boolean, setSpawn als boolean);
```

| Parameter       | Type    | Beschreibung                 |
| --------------- | ------- | ---------------------------- |
| sofort          | boolean | Keine Beschreibung angegeben |
| updateWorldFlag | boolean | Keine Beschreibung angegeben |
| setSpawn        | boolean | Keine Beschreibung angegeben |


### xpBarCap

Diese Methode gibt die maximale Menge an Erfahrung zurück, die die Erfahrungsleiste halten kann. Mit jedem Level wird die Erfahrung auf der Erfahrungsleiste des Spielers um 10 erhöht.

Retouren Int

```zenscript
myMCPlayerEntity.xpBarCap();
```


