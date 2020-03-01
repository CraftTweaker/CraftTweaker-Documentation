# IBlock

An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlock;`

## Вызов объектов IBlock

Есть несколько способов получить объект IBlock:

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (using the `AS` keyword, or the `asBlock()` method)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

## Геттеры

| Геттер     | Что он делает                      | Возвращаемый тип                                      |
| ---------- | ---------------------------------- | ----------------------------------------------------- |
| definition | Возвращает определение этого блока | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | Возвращает метаданные этого блока  | int                                                   |
| data       | Возвращает tileData этого блока    | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks extend [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objects. That means, all functions that are available to IBlockPattern objects can also be used for IBlock objects:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter