# IWorld

Объект IWorld содержит информацию об измерении в игре.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.world.IWorld`

## Наследование от IBlockProperties

IBlockState расширяет [IBlockAccess](/Vanilla/World/IBlockAccess/). Это означает, что все методы, доступные [IBlockAccess](/Vanilla/World/IBlockAccess/) объектам также доступны для IBlockState объектов.

## Создание объекта IWorld

Обычно этот объект можно извлечь из сущностей или других функций. Если вам нужно создать его самостоятельно, это путь:  
Обратите внимание, что этот метод следует использовать только внутри функций, которые предназначены для работы внутри minecraft, не во время загрузки круга.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## Методы без параметров и геттеры

| Метод              | Геттер            | Возвращаемый тип                                 | Описание                                                                                                                                                                                            |
| ------------------ | ----------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Удалить()          | удаленный         | boolean                                          | Правда, если мир является "рабородным" клиентом, изменения не будут сохранены или распространены из этого мира. Например, серверные миры имеют значение false, клиентские миры имеют значение true. |
| isRaining()        | дождь             | boolean                                          | Возвращает значение true, если оно в данный момент дождь.                                                                                                                                           |
| isThundering()     | грабеж            | boolean                                          | Возвращает значение true, если оно в данный момент грозит.                                                                                                                                          |
| getMoonPhase()     | Лунная Фаза       | int                                              | Возвращает текущую луну фазы.                                                                                                                                                                       |
| isDayTime()        | dayTime           | boolean                                          | Проверяет, есть ли дневное время.                                                                                                                                                                   |
| getWorldTime()     | время             | long                                             | Возвращает время мира.                                                                                                                                                                              |
| getDimension()     | измерение         | int                                              | Возвращает измерение мира.                                                                                                                                                                          |
| isSurfaceWorld()   | поверхностный мир | boolean                                          | Возвращается, если вы находитесь в мире поверхности или нет.                                                                                                                                        |
| getDimensionType() | тип измерения     | String                                           | Возвращает имя типа размера.                                                                                                                                                                        |
| getWorldType()     | worldType         | String                                           | Возвращает название мира типа.                                                                                                                                                                      |
| getWorldInfo()     | Информация о мире | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Возвращает информацию о мире. Может быть использовано для получения еще больше информации о мире.                                                                                                   |
| getProvider()      | провайдер         | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Возвращает мировых провайдеров. Может быть использовано для получения еще больше информации о мире.                                                                                                 |

## Методы с параметрами

### Получить биом в определенной позиции

Use either an [IPosition3f](/Vanilla/Utils/Position3f/) or an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.

```zenscript
worldObj.getBiome(IPosition3f позиция);
worldObj.getBiome(позиция IBlockPos);
```

### Получить яркость в определенной позиции

Используйте либо три int, либо [IBlockPos](/Vanilla/World/IBlockPos/) объекта. Возвращает int.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(позиция IBlockPos);
```

### Получить блок в определенной позиции

Используйте либо три int, либо [IBlockPos](/Vanilla/World/IBlockPos/) объекта. Возвращает объект [IBlock](/Vanilla/Blocks/IBlock/).

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(позиция IBlockPos);
```

### Получить или установить состояние блокировки в определенном месте

Используйте [IBlockPos](/Vanilla/World/IBlockPos/) Object и для установщика также [IBlockState](/Vanilla/Blocks/IBlockState/) Object. Можно задать объект [IData](/Vanilla/Data/IData/) для определения NBT данных для TileEntity блока, когда он установлен. Получение возвращает [IBlockState](/Vanilla/Blocks/IBlockState/), устанавливаем щит.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Создать объект

Используйте объект [IEntity](/Vanilla/Entities/IEntity/) ,  
Возвращает бул, который состоят, если спавн был успешным.

```zenscript
worldObj.spawnEntity(сущность сущности);
```

### Get a raytrace result

Use two [IVector3d](/Vanilla/World/IVector3d/) objects, and three booleans to get an [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Can be null**

Первый вектор описывает начальную точку, второй вектор направления и длины, которую мы ищем.  
По умолчанию истинно только последний параметр.

```zenscript
worldObj.rayTraceBlocks(IVector3d begin, IVector3d ray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Получить выбранный блок

Используйте [IBlockPos](/Vanilla/World/IBlockPos/), [IRayTraceResult](/Vanilla/World/IRayTraceResult/) и [IPlayer](/Vanilla/Players/IPlayer/).  
Возвращает [IItemStack](/Vanilla/Items/IItemStack/).  
**Может быть нулевым**

Получает IItemStack, который будет получен, выбрав блок в позиции.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult, IPlayer игрок);
```