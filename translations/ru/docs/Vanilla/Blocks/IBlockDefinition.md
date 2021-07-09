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

| Геттер          | Сеттер              | Что он делает                                     | Тип                                                 |
| --------------- | ------------------- | ------------------------------------------------- | --------------------------------------------------- |
| canSpawnInBlock |                     | Returns true if an entity can spawn in this block | bool                                                |
| creativeTab     | creativeTab         |                                                   | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                                   | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                                   | float                                               |
| id              |                     | Возвращает ID блока                               | string                                              |
| displayName     |                     | Возвращает отображаемое имя блока                 | string                                              |
| hardness        | hardness            |                                                   | int                                                 |
| harvestLevel    |                     | Возвращает уровень добычи блока                   | int                                                 |
| harvestTool     |                     | Возвращает инструмент для добычи этого блока      | string                                              |
|                 | lightOpacity        |                                                   | int                                                 |
|                 | lightLevel          |                                                   | int                                                 |
|                 | resistance          |                                                   | int                                                 |
| unlocalizedName |                     | Возвращает нелокализованное имя блока             | string                                              |
| tickRandomly    | tickRandomly        |                                                   | bool                                                |

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

Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.

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

Uses a string, an int and an optional [IBlockState](/Vanilla/Blocks/IBlockState/).  
if the IBlockState argument is ignored, it will set harvest level to all block states in the block definition.  
Returns void (nothing).

```zenscript
defObj.setHarvestLevel(string toolclass, int level, @Optional IBlockState state);
```

### Get harvest level of block state

returns an int.

```zenscript
defObj.getHarvestLevel(IBlockState state);
```

### Get harvest tool of block state

returns a string.

```zenscript
defObj.getHarvestTool(IBlockState state);
```

### Get a block state by metadata

Uses an int.  
Returns an [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```

### Block effective for the tool

Uses a string and an [IBlockState](/Vanilla/Blocks/IBlockState/).  
Returns a bool.

```zenscript
defObj.isToolEffective(String type, IBlockState state);
```