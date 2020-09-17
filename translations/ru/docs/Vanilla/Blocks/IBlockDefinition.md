# IBlockDefinition

Объекты IBlockDefinition предоставляют дополнительную информацию о блоках.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlockDefinition;`

## Получение объекта IBlockDefinition

* Воспользуйтесь геттером `definition` от объекта [IBlock](/Vanilla/Blocks/IBlock/).

## Получение списка объектов IBlockDefinition

* Воспользуйтесь геттером `game.blocks`, чтобы получить все определения блоков в игре.

## Геттеры/сеттеры

| Геттер          | Сеттер              | Что он делает                                         | Тип                                                 |
| --------------- | ------------------- | ----------------------------------------------------- | --------------------------------------------------- |
|                 | canSpawnInBlock     | Возвращает, может ли сущность появиться на этом блоке | bool                                                |
| creativeTab     | creativeTab         |                                                       | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                                       | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                                       | float                                               |
| id              |                     | Возвращает ID блока                                   | string                                              |
| displayName     |                     | Возвращает отображаемое имя блока                     | string                                              |
|                 | hardness            |                                                       | int                                                 |
| harvestLevel    |                     | Возвращает уровень добычи блока                       | int                                                 |
| harvestTool     |                     | Возвращает инструмент для добычи этого блока          | string                                              |
|                 | lightOpacity        |                                                       | int                                                 |
|                 | lightLevel          |                                                       | int                                                 |
|                 | resistance          |                                                       | int                                                 |
| unlocalizedName |                     | Возвращает нелокализованное имя блока                 | string                                              |
| tickRandomly    | tickRandomly        |                                                       | bool                                                |

## Методы

### setUnbreakable

Не принимает никаких параметров.  
Ничего не возвращает.  
Делает то же, что и `hardness = -1;`

```zenscript
defObj.setUnbreakable();
```

### getTickRate

Принимает объект [IWorld](/Vanilla/World/IWorld/).  
Возвращает целое число.

```zenscript
defObj.getTickRate(IWorld world);
```

### canPlaceBlockAt, canPlaceBlockOnSide

Использует объект [IWorld](/Vanilla/World/IWorld/) , объект [IBlockPos](/Vanilla/World/IBlockPos/) и в зависимости от используемого метода также объект [IFacing](/Vanilla/World/IFacing/) .  
Возвращает бул.

```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```

### getSlipperiness

Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.

```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### setHarvestLevel

Принимает строку и целое число.  
Ничего не возвращает.

```zenscript
defObj.setHarvestLevel(string toolclass, int level);
```

### Получить состояние блока метаданными

Использует int.  
возвращает [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
defObj.getStateFromMeta(int meta);
```