# Entidad del jugador

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Métodos
### addExhaustion

Aumenta el nivel de agotamiento por la cantidad administrada

```zenscript
myMCPlayerEntity.addExhaustion(agotamiento como flotante);
```

| Parámetro   | Tipo     | Descripción                   |
| ----------- | -------- | ----------------------------- |
| agotamiento | flotante | No se proporcionó descripción |


### addExperience nivel

Añade niveles de exp.

```zenscript
myMCPlayerEntity.addExperience enceLevel(levels as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| niveles   | int  | No se proporcionó descripción |


### addItemStackToInventory

Devuelve booleano

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Parámetro     | Tipo                                                              | Descripción                   |
| ------------- | ----------------------------------------------------------------- | ----------------------------- |
| a 191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### añadir MovementStat

Añade un valor a un movimiento, como correr, nadar, trepar o caminar.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ como doble, p_71000_3_ como doble, p_71000_5_ como doble);
```

| Parámetro   | Tipo  | Descripción                   |
| ----------- | ----- | ----------------------------- |
| %H: 1_      | doble | No se proporcionó descripción |
| _71000_3_ | doble | No se proporcionó descripción |
| _71000_5_ | doble | No se proporcionó descripción |


### añadir efecto de poción

Devuelve booleano

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn como crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parámetro          | Tipo                                                                                          | Descripción                   |
| ------------------ | --------------------------------------------------------------------------------------------- | ----------------------------- |
| efectoInstancia en | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No se proporcionó descripción |


### addScore

Añade un punto a la tabla de puntuacion determinada.

```zenscript
myMCPlayerEntity.addScore(puntuación como int);
```

| Parámetro  | Tipo | Descripción                   |
| ---------- | ---- | ----------------------------- |
| puntuación | int  | No se proporcionó descripción |


### addTag

Devuelve booleano

```zenscript
myMCPlayerEntity.addTag(etiqueta como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| etiqueta  | Cadena | No se proporcionó descripción |


### addVelocity

Añade a la velocidad actual de la entidad, y se ajusta a un valor verdadero.

```zenscript
myMCPlayerEntity.addVelocity(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### permitir registro

Devuelve booleano

```zenscript
myMCPlayerEntity.allowLogging();
```

### atacable

Devuelve booleano

```zenscript
myMCPlayerEntity.attackable();
```

### intentarTeleport

Devuelve booleano

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ como doble, p_213373_3_ como doble, p_213373_5_ como doble, p_213373_7_ como booleano);
```

| Parámetro   | Tipo    | Descripción                   |
| ----------- | ------- | ----------------------------- |
| 213373_1_ | doble   | No se proporcionó descripción |
| 213373_3_ | doble   | No se proporcionó descripción |
| 213373_5_ | doble   | No se proporcionó descripción |
| 213373_7_ | boolean | No se proporcionó descripción |


### marcar base

Se llama a cada tick de la clase Entity principal

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Devuelve booleano

```zenscript
myMCPlayerEntity.canAttackPlayer(otro como crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parámetro | Tipo                                                                                       | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| otro      | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No se proporcionó descripción |


### No se puede atacar el objeto

Devuelve verdadero si es posible atacar esta entidad con un objeto.

Devuelve booleano

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### puede colapsar con

Devuelve verdadero si se debe impedir que otras entidades se muevan a través de esta entidad.

Devuelve booleano

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### canal-BeHitWithPotion

Devuelve falso si la entidad es un soporte de armadura. Devuelve verdadero para todas las demás bases vivientes de la entidad.

Devuelve booleano

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### No se puede enviar

Devuelve verdadero si esta entidad debe empujar y ser empujada por otras entidades cuando choca.

Devuelve booleano

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Devuelve booleano

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### lata de agua bajo

Devuelve booleano

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Devuelve booleano

```zenscript
myMCPlayerEntity.canEat(ignoreHunger como booleano);
```

| Parámetro    | Tipo    | Descripción                   |
| ------------ | ------- | ----------------------------- |
| ignoreHunger | boolean | No se proporcionó descripción |


### Bloque de canalla

Devuelve booleano

```zenscript
myMCPlayerEntity.canHarvestBlock(estado como crafttweaker.api.block.MCBlockState);
```

| Parámetro | Tipo                                                                    | Descripción                   |
| --------- | ----------------------------------------------------------------------- | ----------------------------- |
| estado    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No se proporcionó descripción |


### canPassengerSteer

Devuelve booleano

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Devuelve si este jugador puede modificar el bloque en una determinada ubicación con la pila dada. <p> La posición a consultar es {@code pos.offset(facing.getOpposite())}. Devuelve: `Si este jugador puede modificar la ubicación consultada en el mundo actual` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Devuelve booleano

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.ItemStack);
```

| Parámetro | Tipo                                                              | Descripción                   |
| --------- | ----------------------------------------------------------------- | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | No se proporcionó descripción |
| cara      | [crafttweaker.api.util.Dirección](/vanilla/api/util/Direction)    | No se proporcionó descripción |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### canRenderOnFire

Devuelve si esta entidad debe ser renderizada como en fuego.

Devuelve booleano

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Devuelve booleano

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### nadar

Devuelve booleano

```zenscript
myMCPlayerEntity.canSwim();
```

### canTrample

Devuelve booleano

```zenscript
myMCPlayerEntity.canTrample(state as crafttweaker.api.block.MCBlockState, pos as crafttweaker.api.util.BlockPos, fallDistance as float);
```

| Parámetro | Tipo                                                                    | Descripción                   |
| --------- | ----------------------------------------------------------------------- | ----------------------------- |
| estado    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No se proporcionó descripción |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | No se proporcionó descripción |
| fallido   | flotante                                                                | No se proporcionó descripción |


### canUpdate

Devuelve booleano

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(valor como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| valor     | boolean | No se proporcionó descripción |


### puede usar CommandBlock

Devuelve booleano

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### limpiar pociones

Devuelve booleano

```zenscript
myMCPlayerEntity.clearActivePotions();
```

### borrar posición

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### cerrar pantalla

establecer inventario de fabricación actual al cuadrado 2x2

```zenscript
myMCPlayerEntity.closeScreen();
```

### efectos de curas

Devuelve booleano

```zenscript
myMCPlayerEntity.curePotionEffects(objeto curativo como crafttweaker.api.item.ItemStack);
```

| Parámetro         | Tipo                                                              | Descripción                   |
| ----------------- | ----------------------------------------------------------------- | ----------------------------- |
| elemento curativo | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### desactivar escudo

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| 1_        | boolean | No se proporcionó descripción |


### EntidadNotTriggerPressurePlate

Devuelve si esta entidad NO debe disparar una placa de presión o un tripwire.

Devuelve booleano

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### igual a

Devuelve booleano

```zenscript
myMCPlayerEntity.equals(p_iguales_1_ como objeto);
```

| Parámetro    | Tipo   | Descripción                   |
| ------------ | ------ | ----------------------------- |
| e iguales 1_ | Objeto | No se proporcionó descripción |


### extinguish

Elimina el fuego de la entidad.

```zenscript
myMCPlayerEntity.extinguish();
```

### caída

```zenscript
myMCPlayerEntity.fall(distancia como flotante, damageMultiplier como flotante);
```

| Parámetro              | Tipo     | Descripción                   |
| ---------------------- | -------- | ----------------------------- |
| distancia              | flotante | No se proporcionó descripción |
| multiplicador de daños | flotante | No se proporcionó descripción |


### findMunición

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(disparable como crafttweaker.api.item.IItemStack);
```

| Parámetro  | Tipo                                                              | Descripción                   |
| ---------- | ----------------------------------------------------------------- | ----------------------------- |
| disparable | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### func_213300_bk

Devuelve booleano

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ como doble, p_213312_3_ como doble, p_213312_5_ como doble);
```

| Parámetro   | Tipo  | Descripción                   |
| ----------- | ----- | ----------------------------- |
| 213312_1_ | doble | No se proporcionó descripción |
| 213312_3_ | doble | No se proporcionó descripción |
| 213312_5_ | doble | No se proporcionó descripción |


### función_213314_bj

Devuelve booleano

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Devuelve flotante

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Devuelve booleano

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn como crafttweaker.api.item.ItemStack);
```

| Parámetro       | Tipo                                                              | Descripción                   |
| --------------- | ----------------------------------------------------------------- | ----------------------------- |
| pila de objetos | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### getAIMoveSpeed

el movespeed usado para el nuevo sistema de IA

Devuelve flotante

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### Obtener cantidad de absorción

Devuelve la cantidad de salud añadida por el efecto Absorción.

Devuelve flotante

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### Obtener efecto de poción activo

devuelve el efecto de poción para la poción suministrada si está activa, nulo de otra manera.

Devuelve [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn como crafttweaker.api.potion.MCPotionEffect);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| poción    | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No se proporcionó descripción |


### Obtener efectos de pociones

Devuelve Collection<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### Obtener ajuste horizontal cara

Obtiene la dirección horizontal de esta Entidad, ajustada para tener en cuenta los tipos de entidades tratadas especialmente.

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Devuelve la pista

```zenscript
myMCPlayerEntity.getAir();
```

### Siempre se ha procesado el nombre del cliente

Devuelve booleano

```zenscript
miMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Devuelve la pista

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### dirección recibida

obtiene la dirección de la cámara si esta entidad está durmiendo

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### Ubicación recibida

Devuelve [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

Devuelve [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getBrrightness

Obtiene lo brillante que es esta entidad.

Devuelve flotante

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForender

Devuelve la pista

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Devuelve Cadena

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClasificación

Devuelve [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount as boolean);
```

| Parámetro       | Tipo    | Descripción                   |
| --------------- | ------- | ----------------------------- |
| para Spawncount | boolean | No se proporcionó descripción |


### getCollisionBorderSize

Devuelve flotante

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### getCooldownPeriod

Devuelve flotante

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackStrength

Devuelve el porcentaje de poder de ataque disponible basado en el tiempo de enfriamiento (cero a uno).

Devuelve flotante

```zenscript
myMCPlayerEntity.getCooledAttackStrength(Ticks de ajuste como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| ajustes   | flotante | No se proporcionó descripción |


### getDigSpeed

Devuelve flotante

```zenscript
myMCPlayerEntity.getDigSpeed(estado como crafttweaker.api.block.MCBlockState);
```

| Parámetro | Tipo                                                                    | Descripción                   |
| --------- | ----------------------------------------------------------------------- | ----------------------------- |
| estado    | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No se proporcionó descripción |



Devuelve flotante

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Parámetro | Tipo                                                                    | Descripción                   |
| --------- | ----------------------------------------------------------------------- | ----------------------------- |
| arg0      | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No se proporcionó descripción |
| arg1      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | No se proporcionó descripción |


### getDistanceSq

Devuelve doble

```zenscript
myMCPlayerEntity.getDistanceSq(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### getEntityId

Devuelve la pista

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Devuelve Cadena

```zenscript
myMCPlayerEntity.getEntityString();
```

### Altura

Devuelve flotante

```zenscript
miMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Devuelve la pista

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

Devuelve flotante

```zenscript
myMCPlayerEntity.getHealth();
```

### getHeight

Devuelve flotante

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontalcara

Obtiene la dirección horizontal de esta Entidad.

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Devuelve la pista

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Devuelve la pista

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Devuelve la pista

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Devuelve la pista

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Devuelve flotante

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Devuelve la pista

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

La altura máxima desde la cual la entidad se debe saltar (usada en pathfinder)

Devuelve la pista

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Devuelve flotante

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Devuelve la cantidad de tiempo que esta entidad debe permanecer en un portal antes de ser transportada.

Devuelve la pista

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Devuelve el desplazamiento Y desde la posición de la entidad para cualquier entidad que monte en esta.

Devuelve doble

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Obtiene el tono actual de la entidad.

Devuelve flotante

```zenscript
myMCPlayerEntity.getPitch(partialTicks como flotante);
```

| Parámetro    | Tipo     | Descripción                   |
| ------------ | -------- | ----------------------------- |
| partialTicks | flotante | No se proporcionó descripción |


### getPortalCooldown

Devuelve la cantidad de tiempo de espera antes de que esta entidad pueda utilizar un portal de nuevo.

Devuelve la pista

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

Obtener la posición en el mundo. <b>{@code null} no está permitido!</b> Si no eres una entidad en el mundo, devuelve las coordenadas 0, 0, 0

Devuelve [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Devuelve flotante

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Devuelve la pista

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### tener cabezal de rotación

Devuelve flotante

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Devuelve la pista

```zenscript
myMCPlayerEntity.getScore();
```

### getScoreboardName

Devuelve una cadena para usar como nombre de esta entidad en el scoreboard/entity selector systems

Devuelve Cadena

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### Obtener temporizador

Devuelve la pista

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedHeight

Devuelve doble

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### Nadar

Devuelve flotante

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks como flotante);
```

| Parámetro    | Tipo     | Descripción                   |
| ------------ | -------- | ----------------------------- |
| partialTicks | flotante | No se proporcionó descripción |


### getSwingProgress

Obtiene la progresión de la animación swing, oscila entre 0.0 y 1.0.

Devuelve flotante

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime como flotante);
```

| Parámetro       | Tipo     | Descripción                   |
| --------------- | -------- | ----------------------------- |
| partialTickTime | flotante | No se proporcionó descripción |


### getTags

Devuelve Set<String>

```zenscript
myMCPlayerEntity.getTags();
```

### TeleportDirection

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

Devuelve la pista

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### Obtener un ArmorValue Total

Devuelve el valor de armadura actual determinado por una llamada a InventoryPlayer.getTotalArmorValue

Devuelve la pista

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Devuelve flotante

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Devuelve la pista

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Devuelve el Desplazamiento Y de esta entidad.

Devuelve doble

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Obtiene el yaw actual de la entidad

Devuelve flotante

```zenscript
myMCPlayerEntity.getYaw(partialTicks como flotante);
```

| Parámetro    | Tipo     | Descripción                   |
| ------------ | -------- | ----------------------------- |
| partialTicks | flotante | No se proporcionó descripción |


### dar puntos de experiencia

```zenscript
myMCPlayerEntity.giveExperience encePoints(p_195068_1_ as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| 1_        | int  | No se proporcionó descripción |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id as byte);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| id        | byte | No se proporcionó descripción |


### mano-Movimiento de agua

Devuelve si esta entidad está en agua y terminará añadiendo la velocidad de las aguas a la entidad

Devuelve booleano

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### hasCustomName

Devuelve booleano

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

Devuelve booleano

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### nivel de permiso

Devuelve booleano

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ as int);
```

| Parámetro   | Tipo | Descripción                   |
| ----------- | ---- | ----------------------------- |
| 211513_1_ | int  | No se proporcionó descripción |


### ha reducido depuración

Si la opción "reducedDebugInfo" está activa para este jugador.

Devuelve booleano

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Devuelve la pista

```zenscript
myMCPlayerEntity.hashCode();
```

### curar

Cura la entidad viviente (parámetro: cantidad de la mitad del corazón)

```zenscript
myMCPlayerEntity.healAmount as float);
```

| Parámetro            | Tipo     | Descripción                   |
| -------------------- | -------- | ----------------------------- |
| cantidad de curación | flotante | No se proporcionó descripción |


### ignorar datos de elemento

Comprueba si los jugadores pueden usar esta entidad para acceder a los comandos del operador (nivel de permisos 2) directamente o indirectamente, como dar o setblock. Existe un método similar para entidades en {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Por ejemplo, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() bloque minecarts} y {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawning command
 block minecarts or drops) son considerados accesibles.</p>Devuelve: `verdadero si esta entidad ofrece formas para que los jugadores
 no autorizados utilicen comandos restringidos`

Devuelve booleano

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### activeItemStackBlocking

Devuelve booleano

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### se ha añadido al mundo

Devuelve booleano

```zenscript
MCPlayerEntity.es Añadido al Mundo();
```

### isAlive

Devuelve verdadero si la entidad no ha sido .

Devuelve booleano

```zenscript
myMCPlayerEntity.isAlive();
```

### Editar

Devuelve booleano

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Si al menos una entidad está montando esta

Devuelve booleano

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### es Ardiente

Devuelve verdadero si la entidad está en llamas. Utilizado por renderizado para agregar el efecto de fuego al renderizado.

Devuelve booleano

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Si Animal, comprueba si el temporizador de edad es negativo

Devuelve booleano

```zenscript
myMCPlayerEntity.isChild();
```

### es creativo

Devuelve booleano

```zenscript
myMCPlayerEntity.isCreative();
```

### es visible

Devuelve booleano

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### es ElytraVolador

Devuelve booleano

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Comprueba si esta entidad está dentro de un bloque opaco

Devuelve booleano

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Devuelve verdadero si esta entidad no está muerta.

Devuelve booleano

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### es brillante

Devuelve booleano

```zenscript
myMCPlayerEntity.isGlowing();
```

### está activo

Devuelve booleano

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Devuelve booleano

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Devuelve booleano

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Devuelve booleano

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Devuelve booleano

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x como doble, y como doble, z como doble);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### isInRangeToRenderDist

Comprueba si la entidad está en rango a render.

Devuelve booleano

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(distancia como doble);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| distancia | doble | No se proporcionó descripción |


### isInWater

Comprueba si esta entidad está dentro del agua (si el campo inWater es verdadero como resultado de handleWaterMovement() devolviendo true)

Devuelve booleano

```zenscript
myMCPlayerEntity.isInWater();
```

### está en el agua o en la columna bública

Devuelve booleano

```zenscript
MyMCPlayerEntity.isInWaterOrBubbleColumn();
```

### está en la columna de la bública

Devuelve booleano

```zenscript
MyMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### es invisible

Devuelve booleano

```zenscript
myMCPlayerEntity.isInvisible();
```

### no es visible para el jugador

Sólo se utiliza por renderizador en subclases EntityLivingBase. Determina si una entidad es visible o no para un jugador específico, si la entidad es normalmente invisible. Para las subclases EntityLivingBase, devolviendo falso cuando invisible hará que la entidad sea semitransparente.

Devuelve booleano

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parámetro | Tipo                                                                                       | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| jugador   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No se proporcionó descripción |


### no es vulnerable

Devuelve booleano

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### es Viviendo

Devuelve booleano

```zenscript
myMCPlayerEntity.isLiving();
```

### no es Jefe

Devuelve falso si esta Entidad es un jefe, verdadero de otra manera.

Devuelve booleano

```zenscript
myMCPlayerEntity.isNonBoss();
```

### es una posición en el líquido

Comprueba si la posición del desplazamiento desde la posición actual de la entidad está dentro de un líquido.

Devuelve booleano

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### está en la escalera

Devuelve verdadero si esta entidad debe moverse como si estuviera en una escalera (ya sea porque está realmente en una escalera, o por razones de IA)

Devuelve booleano

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Devuelve booleano

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### es pasajero

Devuelve booleano

```zenscript
myMCPlayerEntity.isPassenger();
```

### es el jugador completamente dormido

Devuelve si el reproductor está dormido o no y la pantalla se ha desvanecido completamente.

Devuelve booleano

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### es poción activa

Devuelve booleano

```zenscript
myMCPlayerEntity.isPotionActive(potionIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| poción    | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No se proporcionó descripción |


### es una poción aplicable

Devuelve booleano

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn como crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parámetro           | Tipo                                                                                          | Descripción                   |
| ------------------- | --------------------------------------------------------------------------------------------- | ----------------------------- |
| efecto de poción en | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No se proporcionó descripción |


### es enviado por agua

Devuelve booleano

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### es un mundo del servidor

Devuelve si la entidad está en un mundo del servidor

Devuelve booleano

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Devuelve: `Verdadero si esta entidad no reproducirá sonidos`

Devuelve booleano

```zenscript
myMCPlayerEntity.isSilent();
```

### dormir

Devuelve si el jugador está dormido o no

Devuelve booleano

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Devuelve si esta entidad se esfuma.

Devuelve booleano

```zenscript
myMCPlayerEntity.isSneaking();
```

### se genera forzada

Devuelve booleano

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Devuelve verdadero si el jugador está en modo espectador.

Devuelve booleano

```zenscript
myMCPlayerEntity.isSpectator();
```

### es SpinAtaque

Devuelve booleano

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Obtén si la Entidad está corriendo.

Devuelve booleano

```zenscript
myMCPlayerEntity.isSprinting();
```

### nadar

Devuelve booleano

```zenscript
myMCPlayerEntity.isSwimming();
```

### es usuario

devuelve verdadero si esto es un EntityPlayerSP, o el jugador conectado.

Devuelve booleano

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Comprueba si esta entidad está en el agua o en un bloque al aire libre bajo la lluvia (usado en los lobos).

Devuelve booleano

```zenscript
myMCPlayerEntity.isWet();
```

### salto

Hace que esta entidad haga un movimiento ascendente (saltando).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Llamada con frecuencia para que la entidad pueda actualizar su estado cada tick según sea necesario. Por ejemplo, los zombis y los esqueletos usan esto para reaccionar a la luz del sol y empezar a quemar.

```zenscript
myMCPlayerEntity.livingTick();
```

### mover a BlockPoss y Angles

```zenscript
myMCPlayerEntity.moveToBlockPosandAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Parámetro       | Tipo                                                         | Descripción                   |
| --------------- | ------------------------------------------------------------ | ----------------------------- |
| pos             | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |
| rotación Yawin  | flotante                                                     | No se proporcionó descripción |
| rotationPitchin | flotante                                                     | No se proporcionó descripción |


### añadir al mundo

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollideWithjugador

Llamado por una entidad jugador cuando colisionan con una entidad

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn como crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parámetro | Tipo                                                                                       | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| entityIn  | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | No se proporcionó descripción |


### onEncantar

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem como crafttweaker.api.item.IItemStack, cuesta como int);
```

| Parámetro          | Tipo                                                              | Descripción                   |
| ------------------ | ----------------------------------------------------------------- | ----------------------------- |
| elemento encantado | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |
| coste              | int                                                               | No se proporcionó descripción |


### onEnterBubbleColumn

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(hacia abajo como booleano);
```

| Parámetro   | Tipo    | Descripción                   |
| ----------- | ------- | ----------------------------- |
| hacia abajo | boolean | No se proporcionó descripción |


### onEnterBubbleColumnWithAirAbove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAir)[video] ve(hacia abajo como boolean);
```

| Parámetro   | Tipo    | Descripción                   |
| ----------- | ------- | ----------------------------- |
| hacia abajo | boolean | No se proporcionó descripción |


### onKillCommand

Llamado por el comando /kill.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### al eliminar del mundo

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### realizarAnimación

Configura la entidad para hacer la animación hurt. Sólo se usa por paquetes en multijugador.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### preparar al jugador para Spawn

Mantiene moviendo la entidad hacia arriba, por lo que no colabora con bloques y otros requisitos para que esta entidad sea generada (solo se utiliza en realidad en jugadores aunque también en Entidad)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### recalcular tamaño

```zenscript
miMCPlayerEntity.recalculateSize();
```

### eliminar

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| Parámetro      | Tipo    | Descripción                   |
| -------------- | ------- | ----------------------------- |
| mantener datos | boolean | No se proporcionó descripción |


### eliminar un efecto de acción

Devuelve [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffect);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| arg0      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No se proporcionó descripción |


### removePassengers

Desmonta todas las entidades que montan esta entidad desde esta entidad.

```zenscript
myMCPlayerEntity.removePassengers();
```

### quitar el efecto de la poción

Devuelve booleano

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn como crafttweaker.api.potion.MCPotionEffect);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| efecto en | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No se proporcionó descripción |


### removeTag

Devuelve booleano

```zenscript
myMCPlayerEntity.removeTag(etiqueta como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| etiqueta  | Cadena | No se proporcionó descripción |


### reemplazar inventario

Devuelve booleano

```zenscript
myMCPlayerEntity.replaceItemInventory(inventorySlot como int, itemStackIn como crafttweaker.api.item.IItemStack);
```

| Parámetro             | Tipo                                                              | Descripción                   |
| --------------------- | ----------------------------------------------------------------- | ----------------------------- |
| espacio de inventario | int                                                               | No se proporcionó descripción |
| pila de objetos       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### resetActiveMand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### resetear posición a BB

Restablece la posición de la entidad al centro (plano) e inferior (vertical) de su caja de límites.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnPlayer

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### revivir

```zenscript
myMCPlayerEntity.revive();
```

### girar Hacia

```zenscript
myMCPlayerEntity.rotateTowards(yaw como doble, pitch como doble);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| yawi      | doble | No se proporcionó descripción |
| tono      | doble | No se proporcionó descripción |


### sendEndCombat

Envía un paquete END_COMBAT al cliente

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### enviar Combate

Envía un paquete ENTER_COMBAT al cliente

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### enviar habilidades de jugador

Envía las habilidades del jugador al servidor (si hay uno).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

establecer el movespeed usado para el nuevo sistema IA

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| velocidad | flotante | No se proporcionó descripción |


### setAbsorción

```zenscript
myMCPlayerEntity.setAbsorptionAmount(cantidad como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| monto     | flotante | No se proporcionó descripción |


### setAir

```zenscript
myMCPlayerEntity.setAir(air as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| aire      | int  | No se proporcionó descripción |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(contar como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| contador  | int  | No se proporcionó descripción |


### establecer posición

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ como crafttweaker.api.util.BlockPos);
```

| Parámetro   | Tipo                                                         | Descripción                   |
| ----------- | ------------------------------------------------------------ | ----------------------------- |
| 213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |


### setCustomNamevisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag como booleano);
```

| Parámetro           | Tipo    | Descripción                   |
| ------------------- | ------- | ----------------------------- |
| alwaysRenderNameTag | boolean | No se proporcionó descripción |


### setEntityId

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| id        | int  | No se proporcionó descripción |


### setFire

Establece la entidad a quemar durante x cantidad de segundos, no puede disminuir la cantidad de fuego existente.

```zenscript
myMCPlayerEntity.setFire(segundos como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| segundos  | int  | No se proporcionó descripción |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ as int);
```

| Parámetro     | Tipo | Descripción                   |
| ------------- | ---- | ----------------------------- |
| a 223308_1_ | int  | No se proporcionó descripción |


### setBrillante

```zenscript
myMCPlayerEntity.setGlowing(brillo como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| glowingIn | boolean | No se proporcionó descripción |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw como flotante, pitch como int);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| yawi      | flotante | No se proporcionó descripción |
| tono      | int      | No se proporcionó descripción |


### setHealth

```zenscript
myMCPlayerEntity.setHealth(salud como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| salud     | flotante | No se proporcionó descripción |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn como int);
```

| Parámetro  | Tipo | Descripción                   |
| ---------- | ---- | ----------------------------- |
| idleTimeIn | int  | No se proporcionó descripción |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### setInvisible

```zenscript
myMCPlayerEntity.setInvisible(invisible como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| invisible | boolean | No se proporcionó descripción |


### setInvulnerable

Establece si esta entidad es invulnerable.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable como booleano);
```

| Parámetro        | Tipo    | Descripción                   |
| ---------------- | ------- | ----------------------------- |
| no es vulnerable | boolean | No se proporcionó descripción |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(saltando como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| saltando  | boolean | No se proporcionó descripción |


### establecer ubicación y ángulos

Establece la ubicación y Yaw/Pitch de una entidad en el mundo

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| x         | doble    | No se proporcionó descripción |
| y         | doble    | No se proporcionó descripción |
| z         | doble    | No se proporcionó descripción |
| yawi      | flotante | No se proporcionó descripción |
| tono      | flotante | No se proporcionó descripción |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Parámetro  | Tipo    | Descripción                   |
| ---------- | ------- | ----------------------------- |
| noGravedad | boolean | No se proporcionó descripción |


### setPartying

Llamado cuando un registro comienza o deja de jugar. Utilizado para hacer que los loros comiencen o detengan la fiesta.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Parámetro | Tipo                                                         | Descripción                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |
| es parte  | boolean                                                      | No se proporcionó descripción |


### setPortal

Marca la entidad como dentro de un portal, activando la lógica de teletransporte en onEntityUpdate() en los siguientes tick(s).

```zenscript
myMCPlayerEntity.setPortal(pos como crafttweaker.api.util.BlockPos);
```

| Parámetro | Tipo                                                         | Descripción                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |


### setPosition

Establece la x,y,z de la entidad a partir de los parámetros dados. También parece configurar una caja de límites.

```zenscript
myMCPlayerEntity.setPosition(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### posición y rotación

Establece la posición y la rotación, los parámetros de encapsulado y envoltura a valores válidos. Utilizado por código de red.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| x         | doble    | No se proporcionó descripción |
| y         | doble    | No se proporcionó descripción |
| z         | doble    | No se proporcionó descripción |
| yawi      | flotante | No se proporcionó descripción |
| tono      | flotante | No se proporcionó descripción |


### posición y rotación directa

Establece un objetivo hacia el que el cliente se interpolará en los próximos ticks

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x as double, y as double, z as double, yaw as float, pitch as float, posRotationIncrements as int, teleport as boolean);
```

| Parámetro              | Tipo     | Descripción                   |
| ---------------------- | -------- | ----------------------------- |
| x                      | doble    | No se proporcionó descripción |
| y                      | doble    | No se proporcionó descripción |
| z                      | doble    | No se proporcionó descripción |
| yawi                   | flotante | No se proporcionó descripción |
| tono                   | flotante | No se proporcionó descripción |
| posRotacionIncrementos | int      | No se proporcionó descripción |
| teletransporte         | boolean  | No se proporcionó descripción |


### establecer posición y actualizar

Establece la posición de la entidad y actualiza las variables 'última'

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x como doble, y como doble, z como doble);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### posición no sutil

Devuelve booleano

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug como booleano);
```

| Parámetro           | Tipo    | Descripción                   |
| ------------------- | ------- | ----------------------------- |
| Depuración reducida | boolean | No se proporcionó descripción |


### setRenderYawOffset

Define el desplazamiento de la yaw de procesamiento

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| offset    | flotante | No se proporcionó descripción |


### setRotaciónYawhead

Establece la rotación de la cabeza de la entidad.

```zenscript
myMCPlayerEntity.setRotationYawHead(rotación como flotante);
```

| Parámetro | Tipo     | Descripción                   |
| --------- | -------- | ----------------------------- |
| rotación  | flotante | No se proporcionó descripción |


### setScore

Establecer puntuación del jugador

```zenscript
myMCPlayerEntity.setScore(puntuación como int);
```

| Parámetro  | Tipo | Descripción                   |
| ---------- | ---- | ----------------------------- |
| puntuación | int  | No se proporcionó descripción |


### setSilent

Cuando se establece en verdadero, la entidad no reproducirá sonidos.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| isSilent  | boolean | No se proporcionó descripción |


### setSneaking

Establece la bandera colgante.

```zenscript
myMCPlayerEntity.setSneaking(agachándose como booleano);
```

| Parámetro   | Tipo    | Descripción                   |
| ----------- | ------- | ----------------------------- |
| agachándose | boolean | No se proporcionó descripción |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, forzado como booleano);
```

| Parámetro | Tipo                                                         | Descripción                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |
| forzado   | boolean                                                      | No se proporcionó descripción |


### setSprinting

Establecer el interruptor de impresión para Entidad.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| tirar     | boolean | No se proporcionó descripción |


### nadar

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| 1_        | boolean | No se proporcionó descripción |


### setVelocity

Actualiza el cliente de movimiento de entidad, llamado por paquetes del servidor

```zenscript
myMCPlayerEntity.setVelocity(x as double, y as double, z as double);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| x         | doble | No se proporcionó descripción |
| y         | doble | No se proporcionó descripción |
| z         | doble | No se proporcionó descripción |


### debe curar

Comprueba si la salud del jugador no está llena y no es cero.

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldHeal();
```

### debería recibir errores

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldReceiveError ();
```

### debería recibir comentarios

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldReceiveFeedback();
```

### debe ser rellenando

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### debe tener cara hacia delante

Devuelve verdadero si el jinete de la entidad (EntityPlayer) debe mirar hacia adelante cuando está montado. actualmente sólo se utiliza en código de vainilla por cerdos.

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(player as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parámetro | Tipo                                                                                       | Descripción                         |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------------- |
| jugador   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | El jugador que monta en la entidad. |


### debería RiderSit

Devuelve booleano

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### spawnRunningpartículas

Intenta crear partículas de esparcimiento si la entidad está esparciendo y no en el agua.

```zenscript
myMCPlayerEntity.spawnRunningParcles();
```

### spawnSweeppartículas

```zenscript
myMCPlayerEntity.spawnSweepParcles();
```

### empezar a dormir

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ como crafttweaker.api.util.BlockPos);
```

| Parámetro   | Tipo                                                         | Descripción                   |
| ----------- | ------------------------------------------------------------ | ----------------------------- |
| 213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |


### iniciar SpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| a 204803  | int  | No se proporcionó descripción |


### detener ActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### parar

Desmonta esta entidad de la entidad que está montando.

```zenscript
myMCPlayerEntity.stopRiding();
```

### teleportKeepLoaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ como doble, p_223102_3_ como doble, p_223102_5_ como doble);
```

| Parámetro     | Tipo  | Descripción                   |
| ------------- | ----- | ----------------------------- |
| a 223102_1    | doble | No se proporcionó descripción |
| a 223102_3_ | doble | No se proporcionó descripción |
| a 223102_5_ | doble | No se proporcionó descripción |


### tick

Llamado para actualizar la posición/lógica de la entidad.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Devuelve Cadena

```zenscript
myMCPlayerEntity.toString();
```

### actualizarRidden

Maneja la actualización mientras monta en otra entidad

```zenscript
myMCPlayerEntity.updateRidden();
```

### actualizar Natación

```zenscript
myMCPlayerEntity.updateSwimming();
```

### despertar

```zenscript
myMCPlayerEntity.wakeUp();
```

### wakeUpPlayer

Despierta al jugador si está durmiendo.

```zenscript
myMCPlayerEntity.wakeUpPlayer(inmediatamente como boolean, updateWorldFflag como boolean, setSpawn como booleano);
```

| Parámetro       | Tipo    | Descripción                   |
| --------------- | ------- | ----------------------------- |
| inmediatamente  | boolean | No se proporcionó descripción |
| updateWorldFlag | boolean | No se proporcionó descripción |
| setSpawn        | boolean | No se proporcionó descripción |


### xpBarCap

Este método devuelve la cantidad de experiencia máxima que la barra de experiencia puede sostener. Con cada nivel, el límite de experiencia de la barra de experiencia del jugador aumenta en 10.

Devuelve la pista

```zenscript
myMCPlayerEntity.xpBarCap();
```


