# IBlock
An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## Вызов объектов IBlock

Есть несколько способов получить объект IBlock:

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (using the `AS` keyword, or the `asBlock()` method)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

Предупреждение: Только использование второго метода возможно для `данных` ZenGetter, чтобы вернуть ненулевую IData!

## Геттеры

| Getter     | What does it do                    | Возвращаемый тип                                         |
| ---------- | ---------------------------------- | -------------------------------------------------------- |
| definition | Возвращает определение этого блока | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)    |
| meta       | Возвращает метаданные этого блока  | int                                                      |
| data       | Возвращает tileData этого блока    | [IData](/Vanilla/Data/IData/)                            |
| fluid      | Returns the Block's fluid          | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |



# IBlockPattern

IBlocks расширяют [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) объекты. Это означает, что все функции, доступные объектам IBlockPattern, также могут быть использованы для IBlock объектов:

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter
