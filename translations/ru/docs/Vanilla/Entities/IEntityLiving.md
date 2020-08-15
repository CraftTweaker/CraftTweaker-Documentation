# IEntityLiving

Живой объект — это объект, который может погибнуть.  
Однако, в отличие от [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) игроки не являются IEniyLiving объектами!

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityLiving;`

## Расширение [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Это означает, что все функции, доступные для объектов [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , также доступны для объектов IEntityLiving .

## Методы

### Геттеры/сеттеры

| Геттер              | Сеттер        | Тип                                                       |
| ------------------- | ------------- | --------------------------------------------------------- |
| attackInterval      |               | int                                                       |
| attackTarget        | attackTarget  | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canBeSteered        |               | bool                                                      |
| canPickUpLoot       | canPickUpLoot | bool                                                      |
| canSpawnHere        |               | bool                                                      |
| getLeashedToEntity  |               | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDisabled        | isAIDisabled  | bool                                                      |
| isAIDisabled        | isAIDisabled  | bool                                                      |
| isColliding         |               | bool                                                      |
| isLeashed           |               | bool                                                      |
| isLeftHanded        | isLeftHanded  | bool                                                      |
| isNoDespawnRequired |               | bool                                                      |
| maxSpawnedInChunk   |               | int                                                       |
|                     | moveForward   | float                                                     |
|                     | moveStrafing  | float                                                     |
|                     | moveVertival  | float                                                     |
| renderSizeModifier  |               | float                                                     |

### Методы

#### Воспроизвести живой звук

Не требует параметров.  
ничего не возвращает.

```zenscript
ebtLiv.playLivingSound();
```

#### Создать частицы взрыва

Не требует параметров.  
ничего не возвращает.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Шанс выпадения ячейки снаряжения

Требуется объект [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) и плавающий слот.  
ничего не возвращает.

```zenscript
ebtLiv.setChance(IEntityEquipmentSlot слот, свободный от плавания);
```

#### Включить стойкость

Не требует параметров.  
ничего не возвращает.

```zenscript
ebtLiv.enablePersistence();
```

#### Смешивает

Первый метод требует объект [IEntity](/Vanilla/Entities/IEntity/) , логическое значение и ничего не возвращает. Второй метод требует два логических значения и ничего не возвращает.  
Третий метод требует объект [IPlayer](/Vanilla/Players/IPlayer/) и возвращает бул.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer игрока);
```