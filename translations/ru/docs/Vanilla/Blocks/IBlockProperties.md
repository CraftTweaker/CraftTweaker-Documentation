# Параметры IBlockProperties

BlockProperties - это то, что делает блок отличимым от других блоков. Он в основном служит superinterface к [IBlockState](/Vanilla/Blocks/IBlockState/), это означает, что все эти функции также доступны для всех [IBlockState](/Vanilla/Blocks/IBlockState/) объектов.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlockProperties;`

| Геттер                           | Возвращаемый тип                         | Описание                                                                 |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| canProvidePower                  | bool                                     | Возвращается, если блок реферата может обеспечить мощь редстоуна         |
| mobilityFlag                     | string                                   | Возвращает флаг [мобильности](/Vanilla/Blocks/IMobilityFlag/) как строку |
| материал                         | [Иматерация](/Vanilla/Blocks/IMaterial/) | Возвращает [материал блока](/Vanilla/Blocks/IMaterial/)                  |
| суффикация                       | bool                                     | Возвращается, может ли блок зажигать вас.                                |
| hasCustomBreakingProgress        | bool                                     |                                                                          |
| блокНормальный Куб               | bool                                     |                                                                          |
| полный блок                      | bool                                     |                                                                          |
| Полный Куб                       | bool                                     |                                                                          |
| нормальный куб                   | bool                                     |                                                                          |
| opaqueCube                       | bool                                     |                                                                          |
| полупрозрачный                   | bool                                     |                                                                          |
| использование NeighborBrightness | bool                                     |                                                                          |

## ZenMethods

### незаменимый

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Параметры:

- [IWorld](/Vanilla/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Vanilla/World/IBlockPos/) бак → Положение Блока

Возвращает логическое значение, которое говорит может ли блок быть заменен или нет.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Параметры:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) мир → Мир для проверки
- [IBlockPos](/Vanilla/World/IBlockPos/) бак → Положение Блока

Возвращает подсказку, представляющую текущее значение света в заданном месте.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Параметры:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) мир → Мир для проверки
- [IBlockPos](/Vanilla/World/IBlockPos/) бак → Положение Блока
- [Подогнав](/Vanilla/World/IFacing/) перед → Сторона будет проверена возвращает int представляющую текущую мощность красного камня на этой стороне.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Параметры:

- [IWorld](/Vanilla/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Vanilla/World/IBlockPos/) бак → Положение Блока

Возвращает подсказку, представляющую входной элемент редактора редстоун-компаратора.

### Проверьте, может ли объект появиться на блоке

Используйте [IEntity](/Vanilla/Entities/IEntity/).  
возвращает рабочее пространство.

```zenscript
blockProperties.canEntitySpawn(IEntity сущность);
```

### Получить фактический BlockState

Используйте [IBlockAccess](/Vanilla/World/IBlockAccess/) и [IBlockPos](/Vanilla/World/IBlockPos/).  
Возвращает новый объект IBlockProperties.

```zenscript
blockProperties.getActualState(мир IBlockAccess World, pos);
```

### Получить твердость блока

Используйте [IWorld](/Vanilla/World/IWorld/) и [IBlockPos](/Vanilla/World/IBlockPos/).  
Возвращает число с плавающей точкой.

```zenscript
blockProperties.getBlockHardness(IWorld World, pos);
```

### Установить непрозрачность света блока

Используйте [IWorld](/Vanilla/World/IWorld/) и [IBlockPos](/Vanilla/World/IBlockPos/).  
Возвращает int.

```zenscript
blockProperties.getLightOpacy(IWorld World, pos);
```

### Получить Относительный Блок Запряжения

Используйте [IPlayer](/Vanilla/Players/IPlayer/), [IWorld](/Vanilla/World/IWorld/) и [IBlockPos](/Vanilla/World/IBlockPos/).  
Возвращает число с плавающей точкой.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, позиция IBlockPos);
```

### Проверьте, является ли сторона блока твердой

Use an [IBlockAccess](/Vanilla/World/IBlockAccess/), an [IBlockPos](/Vanilla/World/IBlockPos/) and an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.

```zenscript
blockProperties.isSideSolid(мир IBlockAccess world, pos, poss IBlockPos facing);
```