# MCPlayerEntity

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Metodi
### addExhaustion

aumenta il livello di esaurimento della quantità fornita

```zenscript
myMCPlayerEntity.addExhaustion(esaurimento come galleggiante);
```

| Parametro   | Tipo         | Descrizione                 |
| ----------- | ------------ | --------------------------- |
| esaurimento | galleggiante | Nessuna descrizione fornita |


### addExperienceLevel

Aggiungi livelli di esperienza a questo giocatore.

```zenscript
myMCPlayerEntity.addExperienceLevel(levels as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| livelli   | int  | Nessuna descrizione fornita |


### addItemStackToInventory

Restituisce un booleano

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### addMovementStat

Aggiunge un valore a un campo statistico di movimento - come correre, camminare, nuotare o salire.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ come doppio, p_71000_3_ come doppio, p_71000_5_ come doppio);
```

| Parametro    | Tipo   | Descrizione                 |
| ------------ | ------ | --------------------------- |
| p_71000_1_ | doppia | Nessuna descrizione fornita |
| p_71000_3_ | doppia | Nessuna descrizione fornita |
| p_71000_5_ | doppia | Nessuna descrizione fornita |


### addPotionEffect

Restituisce un booleano

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn come crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro        | Tipo                                                                                          | Descrizione                 |
| ---------------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effectInstanceIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### addScore

Aggiungi al punteggio del giocatore

```zenscript
myMCPlayerEntity.addScore(scoreIn as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| scoreIn   | int  | Nessuna descrizione fornita |


### addTag

Restituisce un booleano

```zenscript
myMCPlayerEntity.addTag(tag as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| tag       | Stringa | Nessuna descrizione fornita |


### addVelocity

Aggiunge alla velocità corrente dell'entità e imposta a true.

```zenscript
myMCPlayerEntity.addVelocity(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### allowLogging

Restituisce un booleano

```zenscript
myMCPlayerEntity.allowLogging();
```

### attaccabile

Restituisce un booleano

```zenscript
myMCPlayerEntity.attackable();
```

### tentato teletrasporto

Restituisce un booleano

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ come double, p_213373_3_ come double, p_213373_5_ come double, p_213373_7_ come boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_213373_1_ | doppia  | Nessuna descrizione fornita |
| p_213373_3_ | doppia  | Nessuna descrizione fornita |
| p_213373_5_ | doppia  | Nessuna descrizione fornita |
| p_213373_7_ | boolean | Nessuna descrizione fornita |


### baseTick

Ottiene chiamato ogni tick dalla classe principale dell'Entità

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Restituisce un booleano

```zenscript
myMCPlayerEntity.canAttackPlayer(altro come crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| altri     | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### canBeAttackedWithItem

Restituisce vero se è possibile attaccare questa entità con un oggetto.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedWith

Restituisce vero se ad altre Entità dovrebbe essere impedito di passare attraverso questa Entità.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### pozione canBeHitWithpozione

Restituisce falso se l'entità è un supporto per armature Restituisce vero per tutte le altre basi viventi.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

Restituisce vero se questa entità dovrebbe spingere ed essere spinta da altre entità quando collidono.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### canBreatheSubacquea

Restituisce un booleano

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Restituisce un booleano

```zenscript
myMCPlayerEntity.canEat(ignoreHunger as boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| ignoreHunger | boolean | Nessuna descrizione fornita |


### canHarvestBlock

Restituisce un booleano

```zenscript
myMCPlayerEntity.canHarvestBlock(dichiara come crafttweaker.api.block.MCBlockState);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| stato     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |


### canPassengerSteer

Restituisce un booleano

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Restituisce se questo giocatore può modificare il blocco in una certa posizione con la pila data. <p> La posizione da interrogare è {@code pos.offset(facing.getOpposite()))}. Restituisce: `Se questo giocatore può modificare la posizione interrogata nel mondo corrente` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Restituisce un booleano

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Nessuna descrizione fornita |
| fronte    | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)    | Nessuna descrizione fornita |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### canRenderOnFire

Renderà se questa entità dovrebbe essere resa come in fiamme.

Restituisce un booleano

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Restituisce un booleano

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

Restituisce un booleano

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample

Restituisce un booleano

```zenscript
myMCPlayerEntity.canTrample(dichiara come crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Parametro    | Tipo                                                                    | Descrizione                 |
| ------------ | ----------------------------------------------------------------------- | --------------------------- |
| stato        | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nessuna descrizione fornita |
| fallDistance | galleggiante                                                            | Nessuna descrizione fornita |


### canUpdate

Restituisce un booleano

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(value as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| valore    | boolean | Nessuna descrizione fornita |


### canUseCommandBlock

Restituisce un booleano

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### clearActivePozioni

Restituisce un booleano

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### clearBedPosition

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### closeScreen

imposta l'inventario di fabbricazione corrente al quadrato 2x2

```zenscript
myMCPlayerEntity.closeScreen();
```

### curePotionEffects

Restituisce un booleano

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem come crafttweaker.api.item.IItemStack);
```

| Parametro    | Tipo                                                              | Descrizione                 |
| ------------ | ----------------------------------------------------------------- | --------------------------- |
| curativeItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### disableShield

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ come boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_190777_1_ | boolean | Nessuna descrizione fornita |


### doesEntityNotTriggerPressurePlate

Restituisce se questa entità non deve innescare una piastra di pressione o un tripwire.

Restituisce un booleano

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### uguale

Restituisce un booleano

```zenscript
myMCPlayerEntity.equals(p_equals_1_ come Object);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_equals_1_ | Oggetto | Nessuna descrizione fornita |


### extinguish

Rimuove il fuoco dall'entità.

```zenscript
myMCPlayerEntity.extinguish();
```

### caduta

```zenscript
myMCPlayerEntity.fall(distanza come galleggiante, dannoMoltiplicatore come galleggiante);
```

| Parametro           | Tipo         | Descrizione                 |
| ------------------- | ------------ | --------------------------- |
| distanza            | galleggiante | Nessuna descrizione fornita |
| dannoMoltiplicatore | galleggiante | Nessuna descrizione fornita |


### findAmmo

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(sparatutto come crafttweaker.api.item.IItemStack);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| riproducibile | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### func_213300_bk

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ come doppio, p_213312_3_ come doppio, p_213312_5_ come doppio);
```

| Parametro     | Tipo   | Descrizione                 |
| ------------- | ------ | --------------------------- |
| p_213312_1_ | doppia | Nessuna descrizione fornita |
| p_213312_3_ | doppia | Nessuna descrizione fornita |
| p_213312_5_ | doppia | Nessuna descrizione fornita |


### func_213314_bj

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Restituisce fluttuante

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Restituisce un booleano

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn come crafttweaker.api.item.IItemStack);
```

| Parametro   | Tipo                                                              | Descrizione                 |
| ----------- | ----------------------------------------------------------------- | --------------------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### getAIMoveSpeed

le mosse utilizzate per il nuovo sistema di IA

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAssorbimentoImporto

Restituisce la quantità di salute aggiunta dall'effetto Assorbimento.

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

restituisce il PotionEffect per la Pozione fornita se è attiva, nulla altrimenti.

Restituisce [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(pozioneIn come crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| pozioneIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### getActivePotionEffects

Restituisce Collezione<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getAdjustedHorizontalFacing

Ottiene la direzione orizzontale di fronte a questa Entità, aggiustata per tenere conto dei tipi di entità trattati specialmente.

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Restituisce un intero

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Restituisce un booleano

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Restituisce un intero

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

ottiene la direzione per la fotocamera se questa entità sta dormendo

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedLocation

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getLuminosità

Ottiene quanto sia brillante questa entità.

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Restituisce un intero

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Ritorna una stringa

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

Restituisce [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount as boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| forSpawnCount | boolean | Nessuna descrizione fornita |


### getCollisionBorderSize

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### getCooldownPeriod

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getCooldownPeriodo();
```

### getCooledAttackStrength

Restituisce la percentuale di potenza di attacco disponibile in base al tempo di ricarica (zero a uno).

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getCooledAttackStrength(adjustTicks as float);
```

| Parametro   | Tipo         | Descrizione                 |
| ----------- | ------------ | --------------------------- |
| adjustTicks | galleggiante | Nessuna descrizione fornita |


### getDigSpeed

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getDigSpeed(dichiara come crafttweaker.api.block.MCBlockState);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| stato     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |



Restituisce fluttuante

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 come crafttweaker.api.block.MCBlockState, arg1 come crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                                    | Descrizione                 |
| --------- | ----------------------------------------------------------------------- | --------------------------- |
| arg0      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nessuna descrizione fornita |
| arg1      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nessuna descrizione fornita |


### getDistanceSq

Restituzioni doppie

```zenscript
myMCPlayerEntity.getDistanceSq(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### getEntityId

Restituisce un intero

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Ritorna una stringa

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeHeight

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Restituisce un intero

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getHealth();
```

### getHeight

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontalFacing

Ottiene la direzione orizzontale di fronte a questa Entità.

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Restituisce un intero

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Restituisce un intero

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Restituisce un intero

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Restituisce un intero

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Restituisce un intero

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

L'altezza massima da cui l'entità è tenuta a saltare (utilizzata nel pathfinder)

Restituisce un intero

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Ritorna la quantità di tempo che questa entità dovrebbe rimanere in un portale prima di essere trasportata.

Restituisce un intero

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Restituisce l'offset Y dalla posizione dell'entità per qualsiasi entità che cavalca questa.

Restituzioni doppie

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Ottiene il passo corrente dell'entità.

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getPitch(partialTicks as float);
```

| Parametro    | Tipo         | Descrizione                 |
| ------------ | ------------ | --------------------------- |
| partialTicks | galleggiante | Nessuna descrizione fornita |


### getPortalCooldown

Restituisce la quantità di recupero prima che questa entità possa utilizzare di nuovo un portale.

Restituisce un intero

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

Ottenere la posizione nel mondo. <b>{@code null} non è consentito!</b> Se non sei un'entità nel mondo, restituisci le coordinate 0, 0, 0

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Restituisce un intero

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Restituisce un intero

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

Restituisce una Stringa da usare come nome di questa entità nei sistemi di selezione scoreboard/entità

Ritorna una stringa

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Restituisce un intero

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedHeight

Restituzioni doppie

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwimAnimation

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks as float);
```

| Parametro    | Tipo         | Descrizione                 |
| ------------ | ------------ | --------------------------- |
| partialTicks | galleggiante | Nessuna descrizione fornita |


### getSwingProgress

Ottiene la progressione dell'animazione swing, varia da 0.0 a 1.0.

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| Parametro       | Tipo         | Descrizione                 |
| --------------- | ------------ | --------------------------- |
| partialTickTime | galleggiante | Nessuna descrizione fornita |


### getTags

Set Restituzioni<String>

```zenscript
myMCPlayerEntity.getTags();
```

### getTeletrasporto

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleporDirection();
```

### getTicksElytraFlying

Restituisce un intero

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmorValue

Restituisce il valore corrente dell'armatura determinato da una chiamata a InventoryPlayer.getTotalArmorValue

Restituisce un intero

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Restituisce un intero

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Restituisce l'Offset Y di questa entità.

Restituzioni doppie

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Ottiene lo yaw corrente dell'entità

Restituisce fluttuante

```zenscript
myMCPlayerEntity.getYaw(partialTicks as float);
```

| Parametro    | Tipo         | Descrizione                 |
| ------------ | ------------ | --------------------------- |
| partialTicks | galleggiante | Nessuna descrizione fornita |


### giveExperiencePoints

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_195068_1_ | int  | Nessuna descrizione fornita |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id come byte);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| id        | byte | Nessuna descrizione fornita |


### handleWaterMovement

Restituisce se questa entità è in acqua e finirà per aggiungere la velocità delle acque all'entità

Restituisce un booleano

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustomName

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### hasPermissionLevel

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ come int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_211513_1_ | int  | Nessuna descrizione fornita |


### hasReducedDebug

Se l'opzione "reduced DebugInfo" è attiva per questo giocatore.

Restituisce un booleano

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Restituisce un intero

```zenscript
myMCPlayerEntity.hashCode();
```

### guarire

Cura entità vivente (parametro: quantità di mezzocordi)

```zenscript
myMCPlayerEntity.heal(healAmount as float);
```

| Parametro  | Tipo         | Descrizione                 |
| ---------- | ------------ | --------------------------- |
| guarigione | galleggiante | Nessuna descrizione fornita |


### ignoreItemEntityData

Controlla se i giocatori possono sfruttare questa entità per accedere sia direttamente sia indirettamente a comandi operatore (livello di permesso 2), come per esempio give o setblock. Un metodo simile esiste per le entità a {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Ad esempio, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() comando block minecarts} e {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (comando spawning
 block minecarts o drops) sono considerati accessibili.</p>Restituisce: `true se questa entità offre modi per
 giocatori non autorizzati per utilizzare comandi limitati`

Restituisce un booleano

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Restituisce un booleano

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Restituisce true se l' entità non è stata .

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

Restituisce un booleano

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Se almeno 1 entità sta cavalcando questa

Restituisce un booleano

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### isBurning

Restituisce vero se l'entità è in fiamme. Usato dal rendering per aggiungere l'effetto fuoco al rendering.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Se animale, controlla se il timer di età è negativo

Restituisce un booleano

```zenscript
myMCPlayerEntity.isChild();
```

### isCreativo

Restituisce un booleano

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

Restituisce un booleano

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlying

Restituisce un booleano

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Controlla se questa entità è all'interno di un blocco opaco

Restituisce un booleano

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Restituisce vero se questa entità non è morta.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

Restituisce un booleano

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

Restituisce un booleano

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Restituisce un booleano

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Restituisce un booleano

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### isInRangeToRenderDist

Controlla se l'entità è nell'intervallo da renderizzare.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distanza come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| distanza  | doppia | Nessuna descrizione fornita |


### isInWater

Controlla se questa entità è all'interno dell'acqua (se inWater field è vero come risultato di handleWaterMovement() che restituisce true)

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWater();
```

### isInWaterOrBubbleColonna

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWaterOrBubbleColumn();
```

### isInWaterRainOrBubbleColonna

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### isInvisibile

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvisibile();
```

### isInvisibleToPlayer

Usato solo dal renderer nelle sottoclassi EntityLivingBase. Determina se un'entità è visibile o meno a uno specifico giocatore, se l'entità è normalmente invisibile. Per le sottoclassi EntityLivingBase, restituendo falso quando invisibile renderà l'entità semi-trasparente.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| giocatore | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### isInvulnerabile

Restituisce un booleano

```zenscript
myMCPlayerEntity.isInvulnerabile();
```

### èVivere

Restituisce un booleano

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

Restituisce falso se questa Entità è un boss, vero altrimenti.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

Controlla se la posizione di offset dalla posizione corrente dell'entità è all'interno di un liquido.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### isOnScalder

Restituisce vero se questa entità dovrebbe muoversi come se fosse su una scala (sia perché è in realtà su una scala, o per motivi di intelligenza artificiale)

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Restituisce un booleano

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPasseggero

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

Restituisce se il giocatore è addormentato o meno e lo schermo è completamente sbiadito.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPotionActive(pozioneIn come crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| pozioneIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### isPotionApplicabile

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPotionApplicable(poioneffectIn come crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro     | Tipo                                                                                          | Descrizione                 |
| ------------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| poioneffectIn | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### isPushedByWater

Restituisce un booleano

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Restituisce se l'entità è in un mondo server

Restituisce un booleano

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Restituisce: `Vero se questa entità non riprodurrà suoni`

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSilent();
```

### isSleeping

Restituisce se il giocatore sta dormendo o no

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Restituisce se questa entità sta funzionando.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSneaking();
```

### isSpawnForced

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Restituisce vero se il giocatore è in modalità spettatore.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Ottieni se l'entità è in primavera.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSprinting();
```

### isNuoto

Restituisce un booleano

```zenscript
myMCPlayerEntity.isSwimming();
```

### isUser

ritorna vero se questo è un EntityPlayerSP, o il giocatore loggato.

Restituisce un booleano

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Verifica se questa entità è in acqua o su un blocco all'aperto a pioggia (utilizzato nei lupi).

Restituisce un booleano

```zenscript
myMCPlayerEntity.isWet();
```

### salto

Fa sì che questa entità faccia un movimento verso l'alto (salto).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Chiamato frequentemente in modo che l'entità può aggiornare il suo stato ogni tick come richiesto. Ad esempio, zombie e scheletri usano questo per reagire alla luce del sole e iniziare a bruciare.

```zenscript
myMCPlayerEntity.livingTick();
```

### moveToBlockPosAndAngles

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Parametro       | Tipo                                                         | Descrizione                 |
| --------------- | ------------------------------------------------------------ | --------------------------- |
| pos             | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| rotazioneYawIn  | galleggiante                                                 | Nessuna descrizione fornita |
| rotationPitchIn | galleggiante                                                 | Nessuna descrizione fornita |


### onAddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithPlayer

Chiamato da un'entità giocatore quando collidono con un'entità

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn come crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| entityIn  | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nessuna descrizione fornita |


### onEnchant

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, cost as int);
```

| Parametro     | Tipo                                                              | Descrizione                 |
| ------------- | ----------------------------------------------------------------- | --------------------------- |
| enchantedItem | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |
| costo         | int                                                               | Nessuna descrizione fornita |


### onEnterBubbleColonna

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(downwards as boolean);
```

| Parametro      | Tipo    | Descrizione                 |
| -------------- | ------- | --------------------------- |
| verso il basso | boolean | Nessuna descrizione fornita |


### onEnterBubbleColumnWithAirAbove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(verso il basso come boolean);
```

| Parametro      | Tipo    | Descrizione                 |
| -------------- | ------- | --------------------------- |
| verso il basso | boolean | Nessuna descrizione fornita |


### onKillCommand

Chiamato dal comando /kill.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedFromWorld

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### performHurtAnimation

Imposta l'entità per fare l'animazione ferita. Usato solo dai pacchetti in multigiocatore.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### preparaPlayerToSpawn

Mantieni lo spostamento dell'entità in modo da non collidere con i blocchi e altri requisiti per questa entità di essere generata (solo effettivamente utilizzato sui giocatori anche se la sua su Entità)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### ricalcolaDimensione

```zenscript
myMCPlayerEntity.recalculateSize();
```

### rimuovi

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| keepData  | boolean | Nessuna descrizione fornita |


### removeActivePotionEffect

Restituisce [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 come crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| arg0      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### removePassengers

Smonta tutte le entità che cavalcano questa entità da questa entità.

```zenscript
myMCPlayerEntity.removePassengers();
```

### removePotionEffect

Restituisce un booleano

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parametro | Tipo                                                                          | Descrizione                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| EffettoIn | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nessuna descrizione fornita |


### removeTag

Restituisce un booleano

```zenscript
myMCPlayerEntity.removeTag(tag as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| tag       | Stringa | Nessuna descrizione fornita |


### replaceItemInInventory

Restituisce un booleano

```zenscript
myMCPlayerEntity.replaceItemInInventario(inventarioSlot come int, itemStackIn come crafttweaker.api.item.IItemStack);
```

| Parametro      | Tipo                                                              | Descrizione                 |
| -------------- | ----------------------------------------------------------------- | --------------------------- |
| inventarioSlot | int                                                               | Nessuna descrizione fornita |
| itemStackIn    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### resetActiveHand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### resetPositionToBB

Ripristina la posizione dell'entità ai punti centrali (piani) e inferiori (verticali) della sua casella di delimitazione.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnPlayer

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### ravvivare

```zenscript
myMCPlayerEntity.revive();
```

### rotateTowards

```zenscript
myMCPlayerEntity.rotateTowards(yaw as double, pitch as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| imbardata | doppia | Nessuna descrizione fornita |
| pece      | doppia | Nessuna descrizione fornita |


### sendEndCombat

Invia un pacchetto END_COMBAT al client

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### sendEnterCombat

Invia un pacchetto ENTER_COMBAT al client

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### sendPlayerAbilities

Invia le abilità del giocatore al server (se ce n'è una).

```zenscript
myMCPlayerEntity.sendPlayerAbility();
```

### setAIMoveSpeed

impostare le mosse usate per il nuovo sistema AI

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn as float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| speedIn   | galleggiante | Nessuna descrizione fornita |


### setAssorbimentoImporto

```zenscript
myMCPlayerEntity.setAssorptionAmount(amount as float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| importo   | galleggiante | Nessuna descrizione fornita |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| aria      | int  | Nessuna descrizione fornita |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(count as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| conteggio | int  | Nessuna descrizione fornita |


### setBedPosition

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ as crafttweaker.api.util.BlockPos);
```

| Parametro     | Tipo                                                         | Descrizione                 |
| ------------- | ------------------------------------------------------------ | --------------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag come boolean);
```

| Parametro           | Tipo    | Descrizione                 |
| ------------------- | ------- | --------------------------- |
| alwaysRenderNameTag | boolean | Nessuna descrizione fornita |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| id        | int  | Nessuna descrizione fornita |


### setFire

Imposta l'entità da bruciare per x quantità di secondi, non può abbassare la quantità di fuoco esistente.

```zenscript
myMCPlayerEntity.setFire(secondi come int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| secondi   | int  | Nessuna descrizione fornita |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ come int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_223308_1_ | int  | Nessuna descrizione fornita |


### setGlowing

```zenscript
myMCPlayerEntity.setGlowing(glowingIn come boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| glowingIn | boolean | Nessuna descrizione fornita |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, pitch as int);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| imbardata | galleggiante | Nessuna descrizione fornita |
| pece      | int          | Nessuna descrizione fornita |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(health as float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| salute    | galleggiante | Nessuna descrizione fornita |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn as int);
```

| Parametro  | Tipo | Descrizione                 |
| ---------- | ---- | --------------------------- |
| idleTimeIn | int  | Nessuna descrizione fornita |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setInvisibile

```zenscript
myMCPlayerEntity.setInvisible(invisibile come boolean);
```

| Parametro  | Tipo    | Descrizione                 |
| ---------- | ------- | --------------------------- |
| invisibile | boolean | Nessuna descrizione fornita |


### setInvulnerabile

Imposta se questa entità è invulnerabile.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerabile come boolean);
```

| Parametro       | Tipo    | Descrizione                 |
| --------------- | ------- | --------------------------- |
| isInvulnerabile | boolean | Nessuna descrizione fornita |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(jumping as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| salto     | boolean | Nessuna descrizione fornita |


### setPosizioneAndAngles

Imposta la posizione e Yaw/Pitch di un'entità nel mondo

```zenscript
myMCPlayerEntity.setLocationAndAngles(x come doppio, y come doppio, z come doppio, yaw come float, pitch come float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| x         | doppia       | Nessuna descrizione fornita |
| y         | doppia       | Nessuna descrizione fornita |
| z         | doppia       | Nessuna descrizione fornita |
| imbardata | galleggiante | Nessuna descrizione fornita |
| pece      | galleggiante | Nessuna descrizione fornita |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### setNoGravità

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| noGravità | boolean | Nessuna descrizione fornita |


### setPartying

Chiamato quando un record inizia o smette di giocare. Usato per far iniziare i pappagalli o smettere di festeggiare.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Parametro  | Tipo                                                         | Descrizione                 |
| ---------- | ------------------------------------------------------------ | --------------------------- |
| pos        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| isPartying | boolean                                                      | Nessuna descrizione fornita |


### setPortal

Segna l'entità come all'interno di un portale, attivando la logica di teletrasportazione in onEntityUpdate() nei seguenti tick(s).

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### setPosition

Imposta x,y,z dell'entità dai parametri specificati. Sembra anche creare un riquadro di delimitazione.

```zenscript
myMCPlayerEntity.setPosition(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### setPositionAndRotation

Imposta la posizione e la rotazione, il bloccaggio e l'avvolgimento dei parametri a valori validi. Utilizzato dal codice di rete.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x come doppio, y come doppio, z come doppio, yaw come float, pitch come float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| x         | doppia       | Nessuna descrizione fornita |
| y         | doppia       | Nessuna descrizione fornita |
| z         | doppia       | Nessuna descrizione fornita |
| imbardata | galleggiante | Nessuna descrizione fornita |
| pece      | galleggiante | Nessuna descrizione fornita |


### setPositionAndRotationDirect

Imposta un obiettivo per il client da interpolare verso oltre i prossimi tick

```zenscript
myMCPlayerEntity.setPosizioneAndRotationDirect(x come doppio, y come doppio, z come doppio, yaw come float, pitch come float, posRotationIncrementi come int, teletrasportati come boolean);
```

| Parametro             | Tipo         | Descrizione                 |
| --------------------- | ------------ | --------------------------- |
| x                     | doppia       | Nessuna descrizione fornita |
| y                     | doppia       | Nessuna descrizione fornita |
| z                     | doppia       | Nessuna descrizione fornita |
| imbardata             | galleggiante | Nessuna descrizione fornita |
| pece                  | galleggiante | Nessuna descrizione fornita |
| posRotationIncrementi | int          | Nessuna descrizione fornita |
| teletrasporto         | boolean      | Nessuna descrizione fornita |


### setPositionAndUpdate

Imposta la posizione dell'entità e aggiorna le variabili 'ultime'

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### setPositionNonDirty

Restituisce un booleano

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug as boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| ridottaDebug | boolean | Nessuna descrizione fornita |


### setRenderYawOffset

Imposta lo spostamento yaw del rendering

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset as float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| offset    | galleggiante | Nessuna descrizione fornita |


### setRotationYawHead

Imposta la rotazione della testa dell'entità.

```zenscript
myMCPlayerEntity.setRotationYawHead(rotazione come galleggiante);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| rotazione | galleggiante | Nessuna descrizione fornita |


### setScore

Imposta punteggio giocatore

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| scoreIn   | int  | Nessuna descrizione fornita |


### setSilent

Quando impostato a VERO, l'entità non riprodurrà suoni.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| isSilent  | boolean | Nessuna descrizione fornita |


### setSneaking

Imposta la bandiera furtiva.

```zenscript
myMCPlayerEntity.setSneaking(sneaking as boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| furtivamente | boolean | Nessuna descrizione fornita |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forced as boolean);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| forzato   | boolean                                                      | Nessuna descrizione fornita |


### setSprinting

Imposta l'interruttore di sprint per l'Entità.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| sprinting | boolean | Nessuna descrizione fornita |


### setNuoto

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ come boolean);
```

| Parametro     | Tipo    | Descrizione                 |
| ------------- | ------- | --------------------------- |
| p_204711_1_ | boolean | Nessuna descrizione fornita |


### setVelocity

Aggiorna il client di movimento dell'entità, chiamato dai pacchetti dal server

```zenscript
myMCPlayerEntity.setVelocity(x come doppio, y come doppio, z come doppio);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| x         | doppia | Nessuna descrizione fornita |
| y         | doppia | Nessuna descrizione fornita |
| z         | doppia | Nessuna descrizione fornita |


### shouldHeal

Controlla se la salute del giocatore non è piena e non zero.

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldHeal();
```

### shouldReceiveErrors

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldReceiveErrors();
```

### shouldReceiveFeedback

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### shouldRenderSneaking

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### shouldRiderFaceForward

Restituisce vero se il pilota dell'entità (EntityPlayer) deve affrontare in avanti quando montato. attualmente utilizzato solo nel codice vaniglia dai suini.

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametro | Tipo                                                                                       | Descrizione                               |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- |
| giocatore | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Il giocatore che sta cavalcando l'entità. |


### shouldRiderSit

Restituisce un booleano

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### spawnRunningParticles

Tenta di creare particelle sprinting se l'entità è sprinting e non in acqua.

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### spawnSweepParticles

```zenscript
myMCPlayerEntity.spawnSweepParticles();
```

### startSleeping

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ come crafttweaker.api.util.BlockPos);
```

| Parametro     | Tipo                                                         | Descrizione                 |
| ------------- | ------------------------------------------------------------ | --------------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ come int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_204803_1_ | int  | Nessuna descrizione fornita |


### stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### stopRiding

Smonta questa entità dall'entità che sta cavalcando.

```zenscript
myMCPlayerEntity.stopRiding();
```

### teleportKeepLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ come doppio, p_223102_3_ come doppio, p_223102_5_ come doppio);
```

| Parametro    | Tipo   | Descrizione                 |
| ------------ | ------ | --------------------------- |
| p_223102_1 | doppia | Nessuna descrizione fornita |
| p_223102_3 | doppia | Nessuna descrizione fornita |
| p_223102_5 | doppia | Nessuna descrizione fornita |


### tick

Chiamato ad aggiornare la posizione/logica dell'entità.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Ritorna una stringa

```zenscript
myMCPlayerEntity.toString();
```

### updateRidden

Gestisce l'aggiornamento durante la guida di un'altra entità

```zenscript
myMCPlayerEntity.updateRidden();
```

### updateSwimming

```zenscript
myMCPlayerEntity.updateSwimming();
```

### wakeUp

```zenscript
myMCPlayerEntity.wakeUp();
```

### wakeUpPlayer

Sveglia il giocatore se sta dormendo.

```zenscript
myMCPlayerEntity.wakeUpPlayer(immediately as boolean, updateWorldFlag as boolean, setSpawn as boolean);
```

| Parametro       | Tipo    | Descrizione                 |
| --------------- | ------- | --------------------------- |
| immediatamente  | boolean | Nessuna descrizione fornita |
| updateWorldFlag | boolean | Nessuna descrizione fornita |
| setSpawn        | boolean | Nessuna descrizione fornita |


### xpBarCap

Questo metodo restituisce la quantità di esperienza che la barra di esperienza può mantenere. Con ogni livello, l'esperienza berretto sulla barra di esperienza del giocatore viene alzato di 10.

Restituisce un intero

```zenscript
myMCPlayerEntity.xpBarCap();
```


