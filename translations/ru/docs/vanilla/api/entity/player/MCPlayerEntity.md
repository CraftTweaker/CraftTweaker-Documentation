# MCPlayerEntity

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Методы
### Добавить Exhaustion

повышает уровень истощения на поставляемое количество

```zenscript
myMCPlayerEntity.addExhaustion(истощение как float);
```

| Параметр  | Тип   | Описание             |
| --------- | ----- | -------------------- |
| истощение | float | Описание отсутствует |


### уровень расширенияОпыта

Добавить уровни опыта этому игроку.

```zenscript
myMCPlayerEntity.addExperienceLevel(уровни);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| уровни   | int | Описание отсутствует |


### addItemStackToInventory

Возвращает boolean

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Параметр      | Тип                                                               | Описание             |
| ------------- | ----------------------------------------------------------------- | -------------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### addMovementStat

Добавляет значение в поле статистики движения - такие как run, walk, swin или восхождение.

```zenscript
myMCPlayerEntity.addMovementStat(p_71000_1_ двойная, p_71000_3_ двойная, p_71000_5_ двойной);
```

| Параметр     | Тип    | Описание             |
| ------------ | ------ | -------------------- |
| p_71000_1_ | double | Описание отсутствует |
| p_71000_3_ | double | Описание отсутствует |
| p_71000_5_ | double | Описание отсутствует |


### Добавить Зелье

Возвращает boolean

```zenscript
myMCPlayerEntity.addPotionEffect(effectInstanceIn как crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр         | Тип                                                                                                   | Описание             |
| ---------------- | ----------------------------------------------------------------------------------------------------- | -------------------- |
| effectInstanceIn | [Экземпляр crafttweaker.api.potion.MCPotionEffectEffect](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### addScore

Добавить к счету игрока

```zenscript
myMCPlayerEntity.addScore(счет как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| счет     | int | Описание отсутствует |


### addTag

Возвращает boolean

```zenscript
myMCPlayerEntity.addTag(тег как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| tag      | String | Описание отсутствует |


### addVelocity

Добавляет текущую скорость сущности и устанавливает истину.

```zenscript
myMCPlayerEntity.addVelocity(x как двойная, y как двойная, z как двойной);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### разрешить ведение журнала

Возвращает boolean

```zenscript
myMCPlayerEntity.allowLogging();
```

### атакуемый

Возвращает boolean

```zenscript
myMCPlayerEntity.attackable();
```

### попытка телепортации

Возвращает boolean

```zenscript
myMCPlayerEntity.attemptTeleport(p_213373_1_ как double, p_213373_3_ как double, p_213373_5_ как double, p_213373_7_ как boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_213373_1_ | double  | Описание отсутствует |
| p_213373_3_ | double  | Описание отсутствует |
| p_213373_5_ | double  | Описание отсутствует |
| p_213373_7_ | boolean | Описание отсутствует |


### baseTick

Получает каждый тик от главного класса сущности

```zenscript
myMCPlayerEntity.baseTick();
```

### canAttackPlayer

Возвращает boolean

```zenscript
myMCPlayerEntity.canAttackPlayer(другой как crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| другой   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### Снято с кем-предмета

Возвращает значение true, если возможно атаковать этот объект предметом.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### canBeCollidedС

Возвращает значение true, если другие сущности не могут перемещаться по этой сущности.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeCollidedWith();
```

### Снять зелье

Возвращает false, если сущность подставна для брони. Возвращает значение «истина» для всех остальных живых баз сущности.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeHitWithPotion();
```

### canBePushed

Возвращает значение true, если эта сущность должна толкать другие сущности при столкновении.

Возвращает boolean

```zenscript
myMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Возвращает boolean

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### кандрейф под водой

Возвращает boolean

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Возвращает boolean

```zenscript
myMCPlayerEntity.canEat(игнорировать голода как boolean);
```

| Параметр     | Тип     | Описание             |
| ------------ | ------- | -------------------- |
| ignoreHunger | boolean | Описание отсутствует |


### СборкаБлок

Возвращает boolean

```zenscript
myMCPlayerEntity.canHarvestBlock(состояние как crafttweaker.api.block.MCBlockState);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| штат     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |


### canPassengerSteer

Возвращает boolean

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Возвращает, может ли этот игрок изменять блок в определенном месте с заданным стеком. <p> Позиция запроса: {@code pos.offset(facing.getOpposite())}. Возвращается: `Может ли этот игрок изменить место в текущем мире` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Возвращает boolean

```zenscript
myMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, facing as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Параметр  | Тип                                                               | Описание             |
| --------- | ----------------------------------------------------------------- | -------------------- |
| пос       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)      | Описание отсутствует |
| облицовка | [crafttweaker.api.util.direction](/vanilla/api/util/Direction)    | Описание отсутствует |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### canRenderOnFire

Возвращает ли эта сущность должна быть отображена как огонь.

Возвращает boolean

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Возвращает boolean

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### canSwim

Возвращает boolean

```zenscript
myMCPlayerEntity.canSwim();
```

### канTrample

Возвращает boolean

```zenscript
myMCPlayerEntity.canTrample(состояние как crafttweaker.api.block.MCBlockState, pos как crafttweaker.api.util.BlockPos, fallDistance как float);
```

| Параметр         | Тип                                                                     | Описание             |
| ---------------- | ----------------------------------------------------------------------- | -------------------- |
| штат             | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |
| пос              | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Описание отсутствует |
| Дальность взлёта | float                                                                   | Описание отсутствует |


### canUpdate

Возвращает boolean

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(значение boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| value    | boolean | Описание отсутствует |


### canUseCommandBlock

Возвращает boolean

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### очистить ActivePotions

Возвращает boolean

```zenscript
myMCPlayerEntity.clearActivePotion();
```

### clearBedPosition

```zenscript
myMCPlayerEntity.clearBedPosition();
```

### закрытие Экрана

вернуть инвентарь для создания в квадрат 2x2

```zenscript
myMCPlayerEntity.closeScreen();
```

### лекарственное зелье

Возвращает boolean

```zenscript
myMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Параметр            | Тип                                                               | Описание             |
| ------------------- | ----------------------------------------------------------------- | -------------------- |
| целительный элемент | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### Отключать щит

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ как boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_190777_1_ | boolean | Описание отсутствует |


### не EntityNotTriggerPressurePlate

Возвращает ли эта сущность не должна запускать нажимную пластину или тележку.

Возвращает boolean

```zenscript
myMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### равно

Возвращает boolean

```zenscript
myMCPlayerEntity.equals(p_equals_1_ как объект);
```

| Параметр     | Тип    | Описание             |
| ------------ | ------ | -------------------- |
| p_равно 1_ | Объект | Описание отсутствует |


### extinguish

Убирает огонь из объекта.

```zenscript
myMCPlayerEntity.extinguish();
```

### падение

```zenscript
myMCPlayerEntity.fall(расстояние как плавающий, Множитель урона как плавающий);
```

| Параметр        | Тип   | Описание             |
| --------------- | ----- | -------------------- |
| расстояние      | float | Описание отсутствует |
| Множитель урона | float | Описание отсутствует |


### найти патроны

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.findAmmo(shootable as crafttweaker.api.item.IItemStack);
```

| Параметр     | Тип                                                               | Описание             |
| ------------ | ----------------------------------------------------------------- | -------------------- |
| съемный стол | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### func_213300_bk

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ как double, p_213312_3_ как double, p_213312_5_ как double);
```

| Параметр      | Тип    | Описание             |
| ------------- | ------ | -------------------- |
| p_213312_1_ | double | Описание отсутствует |
| p_213312_3_ | double | Описание отсутствует |
| p_213312_5_ | double | Описание отсутствует |


### функция_213314_bj

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Возвращает boolean

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn как crafttweaker.api.item.IItemStack);
```

| Параметр    | Тип                                                               | Описание             |
| ----------- | ----------------------------------------------------------------- | -------------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### getAIMoveSpeed

движущийся для новой системы ИИ

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionСумма

Возвращает количество здоровья, добавляемое эффектом Абсорбция.

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

возвращает зелье для поставляемого зелья, если оно активно, null иначе.

Возвращает [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(зелье как crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| зелье    | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### getActivePotionEffects

Возвращает коллекцию<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getjustedHorizontalFacing

Получает горизонтальное направление направления этого объекта, скорректированное с учетом особо обработанных типов сущностей.

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getjustedHorizonFacing();
```

### getAir

Возвращает int

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Возвращает boolean

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Возвращает int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

получает направление к камере, если этот объект спящий

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedLocation

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getBedLocation();
```

### getBlockState

Возвращает [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### getBrightness

Получает яркость этой сущности.

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Возвращает int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### Уникальная строка getCachedUniqueIdString

Возвращает строку

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### getClassification

Возвращает [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forawnCount as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| фора     | boolean | Описание отсутствует |


### getCollisionBorderSize

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### Время перезарядки

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackStrength

Возвращает процент доступной мощности атаки, основанный на откате (от нуля до одного).

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getCooledAttackStrength(adjustTicks как плавающий);
```

| Параметр    | Тип   | Описание             |
| ----------- | ----- | -------------------- |
| Регулировка | float | Описание отсутствует |


### getDigSpeed

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getDigSpeed(состояние как crafttweaker.api.block.MCBlockState);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| штат     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |



Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 as crafttweaker.api.block.MCBlockState, arg1 as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Описание отсутствует |
| arg1     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Описание отсутствует |


### getDistanceSq

Удвоение возвратов

```zenscript
myMCPlayerEntity.getDistanceSq(x как двойный, y как двойный, z как двойный);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### getEntityId

Возвращает int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Возвращает строку

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeВысота

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Возвращает int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### Здравоохранение

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getHealth();
```

### getВысота

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### getHorizontalFacing

Получает горизонтальное направление в этом объекте.

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getHorizonFacing();
```

### getIdleTime

Возвращает int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Возвращает int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Возвращает int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Возвращает int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Возвращает int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

Максимальная высота, с которой сущность должна прыгать (используется в путепроводе)

Возвращает int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Возвращает количество времени, которое данная сущность должна остаться на портале перед транспортировкой.

Возвращает int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Возвращает смещение по Y из позиции сущности для любого объекта, занимающего это место.

Удвоение возвратов

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Получает текущий участок объекта.

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getPitch(partialTicks как float);
```

| Параметр       | Тип   | Описание             |
| -------------- | ----- | -------------------- |
| частичные Тики | float | Описание отсутствует |


### getPortalперезарядка

Возвращает количество отката перед повторным использованием портала.

Возвращает int

```zenscript
myMCPlayerEntity.getPortalCooldown();
```

### getPosition

Получить позицию в мире. <b>{@code null} не допускается!</b> Если вы не являетесь объектом в мире, верните координаты 0, 0

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerEntity.getPosition();
```

### getRenderScale

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Возвращает int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getRotationYawHead();
```

### getScore

Возвращает int

```zenscript
myMCPlayerEntity.getScore();
```

### Имя getScoreboardname

Возвращает строку для использования в качестве имени этого объекта в системах выбора счетчика и сущностей

Возвращает строку

```zenscript
myMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Возвращает int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmergedВысота

Удвоение возвратов

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwimАнимация

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks как плавающий);
```

| Параметр       | Тип   | Описание             |
| -------------- | ----- | -------------------- |
| частичные Тики | float | Описание отсутствует |


### getSwingProgress

Получает прогрессию анимации свинга, диапазоны от 0.0 до 1.0.

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime as float);
```

| Параметр        | Тип   | Описание             |
| --------------- | ----- | -------------------- |
| partialTickTime | float | Описание отсутствует |


### getТеги

Набор возвратов<String>

```zenscript
myMCPlayerEntity.getTags();
```

### Направление getTeleport

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlying

Возвращает int

```zenscript
myMCPlayerEntity.getTicksElytraFlying();
```

### getTotalArmmorValue

Возвращает текущее значение брони, определенное вызовом к InventoryPlayer.getTotalArmorValue

Возвращает int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPSeed

Возвращает int

```zenscript
myMCPlayerEntity.getXPSeed();
```

### getYOffset

Возвращает смещение по Y этого объекта.

Удвоение возвратов

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Получает текущую яду сущности

Возвращает с плавающей точкой

```zenscript
myMCPlayerEntity.getYaw(partialTicks как float);
```

| Параметр       | Тип   | Описание             |
| -------------- | ----- | -------------------- |
| частичные Тики | float | Описание отсутствует |


### Дать Очки опыта

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ как int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_195068_1_ | int | Описание отсутствует |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id как байт);
```

| Параметр | Тип  | Описание             |
| -------- | ---- | -------------------- |
| id       | byte | Описание отсутствует |


### перемещение ручной воды

Возвращает если эта сущность находится в воде и в итоге добавит скорость воды к сущности

Возвращает boolean

```zenscript
myMCPlayerEntity.handleWaterMovement();
```

### имеет Настраиваемое Имя

Возвращает boolean

```zenscript
myMCPlayerEntity.hasCustomName();
```

### hasNoGravity

Возвращает boolean

```zenscript
myMCPlayerEntity.hasNoGravity();
```

### уровень разрешений

Возвращает boolean

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ как int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_211513_1_ | int | Описание отсутствует |


### hasReducedDebug

Опция "reducedDebugInfo" активна для этого игрока.

Возвращает boolean

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Возвращает int

```zenscript
myMCPlayerEntity.hashCode();
```

### исцеляет

Исцелить живую сущность (Пара: количество полусердец)

```zenscript
myMCPlayerEntity.heal(исцеление плавающей суммы);
```

| Параметр  | Тип   | Описание             |
| --------- | ----- | -------------------- |
| исцеление | float | Описание отсутствует |


### игнорировать сущность

Проверяет, могут ли игроки использовать эту сущность для доступа к оператору (уровень разрешений 2) либо напрямую, либо косвенно, например, дать или setblock. Аналогичный метод существует по адресу {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Например, {@link
 net.minecraft.entity.item.EntityMinecartCommandBlock#ignoreItemEntityData() command block minecarts} и {@link
 net.minecraft.entity.item.EntityMinecartMobSpawner#ignoreItemEntityData() mob spawner minecarts} (spawning command
 block minecarts или drops) считаются доступными.</p>Возвращается: `истина, если эта сущность предлагает способы для несанкционированных
 игроков использовать ограниченные команды`

Возвращает boolean

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Возвращает boolean

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### добавлен в мир

Возвращает boolean

```zenscript
myMCPlayerEntity.isAddedToWorld();
```

### isAlive

Возвращает значение истины, если сущность не была .

Возвращает boolean

```zenscript
myMCPlayerEntity.isAlive();
```

### Разрешено

Возвращает boolean

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Если хотя бы 1 объект ездит на этом объекте

Возвращает boolean

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### зажигающий

Возвращает значение истина, если сущность на огне. Используется рендером, чтобы добавить эффект огня при рендеринге.

Возвращает boolean

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Проверяет, является ли возраст отрицательным

Возвращает boolean

```zenscript
myMCPlayerEntity.isChild();
```

### неТворческий

Возвращает boolean

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

Возвращает boolean

```zenscript
myMCPlayerEntity.isCustomNameVisible();
```

### Элитрация Летания

Возвращает boolean

```zenscript
myMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Проверяет, находится ли эта сущность внутри непрозрачного блока

Возвращает boolean

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Возвращает значение истины, если сущность не мертва.

Возвращает boolean

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### isGlowing

Возвращает boolean

```zenscript
myMCPlayerEntity.isGlowing();
```

### isHandActive

Возвращает boolean

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Возвращает boolean

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Возвращает boolean

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Возвращает boolean

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Возвращает boolean

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### isInRangeToRenderDist

Проверяет, находится ли объект в диапазоне к рендеру.

Возвращает boolean

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(расстояние двойно);
```

| Параметр   | Тип    | Описание             |
| ---------- | ------ | -------------------- |
| расстояние | double | Описание отсутствует |


### isInWater

Проверяет, является ли эта сущность внутренней водой (если поле inWater истинно в результате handleWaterMovement() возвращает значение )

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWater();
```

### пузырьковый пузырьк

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWaterOrbbleColumn();
```

### isInWaterRainOrBubbleColumn

Возвращает boolean

```zenscript
myMCPlayerEntity.isInWaterRainOrbbleColumn();
```

### isInvisible

Возвращает boolean

```zenscript
myMCPlayerEntity.isневидимый();
```

### невидимый для игрока

Используется только рендерером в подклассах EntityLivingBase. Определяет, является ли сущность видимой или не видимой для определенного игрока, если сущность обычно невидимой. Для подклассов EntityLivingBase возврат false, когда невидимый сделает сущность полупрозрачной.

Возвращает boolean

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(игрок как мастерство.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| player   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### неуязвимый

Возвращает boolean

```zenscript
myMCPlayerEntity.isInvulnerable();
```

### живой

Возвращает boolean

```zenscript
myMCPlayerEntity.isLiving();
```

### isNonBoss

Возвращает false, если этот объект является боссом, верно иначе.

Возвращает boolean

```zenscript
myMCPlayerEntity.isNonBoss();
```

### isOffsetPositionInLiquid

Проверяет, находится ли офсетная позиция сущности внутри жидкости.

Возвращает boolean

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x как double, y как double, z как double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### лестница

Возвращает значение true, если этот объект должен двигаться так, как будто он находится на лестнице (либо потому, что на самом деле он находится на лестнице, или по соображениям И)

Возвращает boolean

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Возвращает boolean

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### пассажир

Возвращает boolean

```zenscript
myMCPlayerEntity.isPassenger();
```

### Полностью спящий

Возвращает ли игрок спящий или нет и экран полностью исчезает.

Возвращает boolean

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### неактивный

Возвращает boolean

```zenscript
myMCPlayerEntity.isPotionActive(зелье как мастерство.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| зелье    | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### Применимо к отравлению

Возвращает boolean

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр | Тип                                                                                                   | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------- | -------------------- |
| зелье    | [Экземпляр crafttweaker.api.potion.MCPotionEffectEffect](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### isPushedByWater

Возвращает boolean

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Возвращает ли сущность в мире сервера

Возвращает boolean

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Возвращается: `Правда, если этот объект не воспроизводит звуки`

Возвращает boolean

```zenscript
myMCPlayerEntity.isSilent();
```

### спящий

Возвращает ли игрок спящий или нет

Возвращает boolean

```zenscript
myMCPlayerEntity.isSleeping();
```

### isSneaking

Возвращает если эта сущность красться.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSneaking();
```

### неспавнсированный

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpawnForced();
```

### isSpectator

Возвращает значение true, если игрок находится в режиме наблюдателя.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

Возвращает boolean

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Получить, если сущность спринтирована.

Возвращает boolean

```zenscript
myMCPlayerEntity.isSprinting();
```

### плавание

Возвращает boolean

```zenscript
myMCPlayerEntity.isSwimming();
```

### пользователь

возвращает true, если это EntityPlayerSP, или игрок.

Возвращает boolean

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Проверяет, находится ли эта сущность в воде или на открытом воздухе в дождь (используется в волках).

Возвращает boolean

```zenscript
myMCPlayerEntity.isWet();
```

### прыжок

Вызывает эту сущность для движения вверх (прыжок).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Звонки часто, чтобы сущность могла обновлять свое состояние каждый тик по мере необходимости. Например, зомби и скелеты используют это для реагирования на солнечный свет и начала гореть.

```zenscript
myMCPlayerEntity.livingTick();
```

### переместить в Блокируемые Углы

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn как плавающий, вращениеPitchIn как плавающие);
```

| Параметр       | Тип                                                          | Описание             |
| -------------- | ------------------------------------------------------------ | -------------------- |
| пос            | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| вращение YawIn | float                                                        | Описание отсутствует |
| вращение       | float                                                        | Описание отсутствует |


### добавлено в мир

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### ОН/Выход Игрока

Вызывается игроком при столкновении с сущностью

```zenscript
myMCPlayerEntity.onCollideWithPlayer(entityIn как crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание             |
| -------- | ------------------------------------------------------------------------------------------ | -------------------- |
| entityIn | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Описание отсутствует |


### зачарование

```zenscript
myMCPlayerEntity.onEnchant(enchantedItem as crafttweaker.api.item.IItemStack, стоит как int);
```

| Параметр             | Тип                                                               | Описание             |
| -------------------- | ----------------------------------------------------------------- | -------------------- |
| зачарованный предмет | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |
| стоимость            | int                                                               | Описание отсутствует |


### onEnterBubbleColumn

```zenscript
myMCPlayerEntity.onEnterBubbleColumn(вниз, как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| вниз     | boolean | Описание отсутствует |


### onEnterBubbleColumnWithAirAbove

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(вниз, как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| вниз     | boolean | Описание отсутствует |


### onKillCommand

Вызывается командой /kill

```zenscript
myMCPlayerEntity.onKillCommand();
```

### судалён из мира

```zenscript
myMCPlayerEntity.onRemovedFromWorld();
```

### выполнить HurtAnimation

Настройте сущность для выполнения анимации повреждения. Используется только пакетами в мультиплеере.

```zenscript
myMCPlayerEntity.performHurtAnimation();
```

### подготовленного игрокаТоспавна

Перемещает сущность вверх, поэтому она не сталкивается с блоками и другими требованиями для создания сущности (фактически используется только для игроков, хотя и для сущности)

```zenscript
myMCPlayerEntity.preparePlayerToSpawn();
```

### пересчитать размер

```zenscript
myMCPlayerEntity.recalculateSize();
```

### удалить

```zenscript
myMCPlayerEntity.remove();
```


```zenscript
myMCPlayerEntity.remove(keepData as boolean);
```

| Параметр         | Тип     | Описание             |
| ---------------- | ------- | -------------------- |
| данные хранилища | boolean | Описание отсутствует |


### удалить активный эффект зелья

Возвращает [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### removePassengers

Размонтирует все сущности, которые ездят на эту сущность из этой сущности.

```zenscript
myMCPlayerEntity.removePassengers();
```

### удалить зелье

Возвращает boolean

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Параметр | Тип                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------- | -------------------- |
| эффект В | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Описание отсутствует |


### removeTag

Возвращает boolean

```zenscript
myMCPlayerEntity.removeTag(тег как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| tag      | String | Описание отсутствует |


### заменить Инвентарь

Возвращает boolean

```zenscript
myMCPlayerEntity.replaceItemInInventory(inventorySlot как int, itemStackIn как crafttweaker.api.item.IItemStack);
```

| Параметр       | Тип                                                               | Описание             |
| -------------- | ----------------------------------------------------------------- | -------------------- |
| слот инвентаря | int                                                               | Описание отсутствует |
| itemStackIn    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### сбросить Активный Рук

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### сбросить позицию в BB

Сбрасывает положение объекта в центр (планар) и нижние (вертикальные) точки его границы.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### возродить Игрока

```zenscript
myMCPlayerEntity.respawnPlayer();
```

### возродить

```zenscript
myMCPlayerEntity.revive();
```

### поворачиватьПо

```zenscript
myMCPlayerEntity.rotateToward(yaw двойный, высота в два раза);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| яй       | double | Описание отсутствует |
| высота   | double | Описание отсутствует |


### sendEndCombat

Отправляет клиенту пакет END_COMBAT

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### sendEnterbattle

Отправляет клиенту пакет ENTER_COMBAT

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### sendPlayerAbility

Отправляет возможности игрока на сервер (если таковой имеется).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

установить передвижение, используемое для новой системы ИИ

```zenscript
myMCPlayerEntity.setAIMoveSpeed(скорость плавающей скорости);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| скорости | float | Описание отсутствует |


### setAbsorptionAmount

```zenscript
myMCPlayerEntity.setAbsorptionAmount(amount as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| сумма    | float | Описание отсутствует |


### setAir

```zenscript
myMCPlayerEntity.setAir(воздух, как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| air      | int | Описание отсутствует |


### setArrowCountInEntity

```zenscript
myMCPlayerEntity.setArrowCountInEntity(учитывается как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| подсчет  | int | Описание отсутствует |


### установленная позиция

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ как crafttweaker.api.util.BlockPos);
```

| Параметр      | Тип                                                          | Описание             |
| ------------- | ------------------------------------------------------------ | -------------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag boolean);
```

| Параметр            | Тип     | Описание             |
| ------------------- | ------- | -------------------- |
| alwaysRenderNameTag | boolean | Описание отсутствует |


### идентификатор объекта

```zenscript
myMCPlayerEntity.setEntityId(id as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| id       | int | Описание отсутствует |


### setFire

Устанавливает ожог сущности на x количество секунд, нельзя уменьшить количество огонь.

```zenscript
myMCPlayerEntity.setFire(секунды как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| секунд   | int | Описание отсутствует |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ как int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_223308_1_ | int | Описание отсутствует |


### установка Светящейся

```zenscript
myMCPlayerEntity.setGlowing(glowingIn как boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| glowingIn | boolean | Описание отсутствует |


### setHeadRotation

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, pitch as int);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| яй       | float | Описание отсутствует |
| высота   | int   | Описание отсутствует |


### задано Здоровье

```zenscript
myMCPlayerEntity.setHealth(здоровье плавать);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| здоровье | float | Описание отсутствует |


### setIdleTime

```zenscript
myMCPlayerEntity.setIdleTime(idleTimeIn как int);
```

| Параметр   | Тип | Описание             |
| ---------- | --- | -------------------- |
| idleTimeIn | int | Описание отсутствует |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### невидимый

```zenscript
myMCPlayerEntity.setInvisible(невидим как boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| невидимый | boolean | Описание отсутствует |


### setInvulnerable

Устанавливает неуязвимость этой сущности.

```zenscript
myMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| Параметр   | Тип     | Описание             |
| ---------- | ------- | -------------------- |
| неуязвимый | boolean | Описание отсутствует |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(прыжок как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| прыжок   | boolean | Описание отсутствует |


### setLocationAndУглы

Устанавливает местоположение и Яйцо/Яйцо сущности в мире

```zenscript
myMCPlayerEntity.setLocationAndAngles(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |
| яй       | float  | Описание отсутствует |
| высота   | float  | Описание отсутствует |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setNoGravity

```zenscript
myMCPlayerEntity.setNoGravity(noGravity как boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| noGravity | boolean | Описание отсутствует |


### настройка Партнёра

Вызывается, когда запись запускается или прекращается играть. Используется для того, чтобы попугаи начинали или останавливали вечеринку.

```zenscript
myMCPlayerEntity.setParty(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Параметр  | Тип                                                          | Описание             |
| --------- | ------------------------------------------------------------ | -------------------- |
| пос       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| Причастие | boolean                                                      | Описание отсутствует |


### setPortal

Отмечает сущность как находящуюся внутри портала, активируя логику телепортации в onEntityUpdate() в следующем флажке.

```zenscript
myMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Описание             |
| -------- | ------------------------------------------------------------ | -------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### установка позиции

Устанавливает x,y,z сущности из заданных параметров. Также кажется, что можно настроить граничащее поле.

```zenscript
myMCPlayerEntity.setPosition(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setPositionи ротация

Устанавливает положение и вращение, зажигание и обертывание параметров действительными значениями. Используется сетевым кодом.

```zenscript
myMCPlayerEntity.setPositionAndRotation(x as double, y as double, z as double, yaw as float, pitch as float);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |
| яй       | float  | Описание отсутствует |
| высота   | float  | Описание отсутствует |


### setPositionAndDirect

Устанавливает цель для клиента для интерполяции на следующие несколько тактов

```zenscript
myMCPlayerEntity.setPositionAndRotationDirect(x as double, y as double, z as double, yaw as float, pitch as float, posRotationIncrements as int, teleport as boolean);
```

| Параметр             | Тип     | Описание             |
| -------------------- | ------- | -------------------- |
| х                    | double  | Описание отсутствует |
| у                    | double  | Описание отсутствует |
| z                    | double  | Описание отсутствует |
| яй                   | float   | Описание отсутствует |
| высота               | float   | Описание отсутствует |
| Пороговые увеличения | int     | Описание отсутствует |
| телепортироваться    | boolean | Описание отсутствует |


### установить и обновить

Устанавливает положение сущности и обновляет «последние» переменные

```zenscript
myMCPlayerEntity.setPositionAndUpdate(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### setPositionNonDirty

Возвращает boolean

```zenscript
myMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedОтладка как boolean);
```

| Параметр         | Тип     | Описание             |
| ---------------- | ------- | -------------------- |
| отладка отменена | boolean | Описание отсутствует |


### setRenderYawOffset

Установить смещение рендеринга

```zenscript
myMCPlayerEntity.setRenderYawOffset(смещение с плавающей точкой);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| смещение | float | Описание отсутствует |


### setRotationYawHead

Устанавливает вращение головы yaw сущности.

```zenscript
myMCPlayerEntity.setRotationYawHead(вращение как плавный);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| вращение | float | Описание отсутствует |


### setScore

Установить счет игрока

```zenscript
myMCPlayerEntity.setScore(счет как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| счет     | int | Описание отсутствует |


### setSilent

Когда установлено в true сущность не будет воспроизводить звуки.

```zenscript
myMCPlayerEntity.setSilent(isSilent as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| isSilent | boolean | Описание отсутствует |


### настройка подкрадывания

Устанавливает флаг подкрадывания.

```zenscript
myMCPlayerEntity.setSneaking(зависание от boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| подкрадывание | boolean | Описание отсутствует |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, принудительно boolean);
```

| Параметр      | Тип                                                          | Описание             |
| ------------- | ------------------------------------------------------------ | -------------------- |
| пос           | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |
| принудительно | boolean                                                      | Описание отсутствует |


### setSprinting

Установите переключатель пружины для Entity.

```zenscript
myMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Параметр  | Тип     | Описание             |
| --------- | ------- | -------------------- |
| пружинный | boolean | Описание отсутствует |


### setSwimming

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ как boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| p_204711_1_ | boolean | Описание отсутствует |


### setVelocity

Обновляет клиентское движение сущности, вызываемое пакетами с сервера

```zenscript
myMCPlayerEntity.setVelocity(x as double, y as double, z as double);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| х        | double | Описание отсутствует |
| у        | double | Описание отсутствует |
| z        | double | Описание отсутствует |


### должен исцелить

Проверяет, не заполнено ли здоровье игрока и не равно нулю.

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldHeal();
```

### должны быть допущены ошибки

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldReceiveError();
```

### не удалось получить отзыв

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldReceiveback();
```

### ShouldRenderSneaking

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRenderSneaking();
```

### должно быть RiderFaceForward

Возвращает true, если всадник сущности (EntityPlayer) должен столкнуться вперед при монтировании. в настоящее время используется только в ванильном коде свиньями.

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRiderFaceForward(игрок как crafttweaker.api.entity.player.MCPlayerEntity);
```

| Параметр | Тип                                                                                        | Описание                         |
| -------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| player   | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Игрок, который ездит на объекте. |


### должно быть RiderSit

Возвращает boolean

```zenscript
myMCPlayerEntity.shouldRiderSit();
```

### спавн RunningParticle

Попытка создавать частицы спринта, если сущность спринтирована, а не в воде.

```zenscript
myMCPlayerEntity.spawnRunningParticles();
```

### создать частицы развёртывания

```zenscript
myMCPlayerEntity.spawnSweepParticles();
```

### старт сна

```zenscript
myMCPlayerEntity.startSleeping(p_213342_1_ как crafttweaker.api.util.BlockPos);
```

| Параметр      | Тип                                                          | Описание             |
| ------------- | ------------------------------------------------------------ | -------------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |


### startSpinAttack

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ как int);
```

| Параметр      | Тип | Описание             |
| ------------- | --- | -------------------- |
| p_204803_1_ | int | Описание отсутствует |


### Стоп-Активный

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### остановка на пути

Отмонтирует этот объект от той сущности, которую он управляет.

```zenscript
myMCPlayerEntity.stopRiding();
```

### телепортация загружена

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ как double, p_223102_3_ как double, p_223102_5_ двойно);
```

| Параметр      | Тип    | Описание             |
| ------------- | ------ | -------------------- |
| p_223102_1_ | double | Описание отсутствует |
| p_223102_3_ | double | Описание отсутствует |
| p_223102_5_ | double | Описание отсутствует |


### тик

Звонил обновления позиции/логики сущности.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Возвращает строку

```zenscript
myMCPlayerEntity.toString();
```

### обновить Ridden

Обрабатывает обновление при езде на другую сущность

```zenscript
myMCPlayerEntity.updateRidden();
```

### updateSwimming

```zenscript
myMCPlayerEntity.updateSwimming();
```

### пробуждение

```zenscript
myMCPlayerEntity.wakeUp();
```

### пробуждение-плеер

Разбудить игрока, если он спал.

```zenscript
myMCPlayerEntity.wakeUpPlayer(сразу же как логический, обновлять WorldFlag как логический, установить Spawn как boolean);
```

| Параметр        | Тип     | Описание             |
| --------------- | ------- | -------------------- |
| немедленно      | boolean | Описание отсутствует |
| updateWorldFlag | boolean | Описание отсутствует |
| setSpawn        | boolean | Описание отсутствует |


### xpBarCap

Этот метод возвращает кол-во опыта, которое может держать бар опыта. На каждом уровне колпачка опыта игрока поднимается на 10.

Возвращает int

```zenscript
myMCPlayerEntity.xpBarCap();
```


