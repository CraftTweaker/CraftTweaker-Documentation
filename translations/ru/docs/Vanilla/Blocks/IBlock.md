# IBlock

Объект IBlock состоит из [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), метаданных и TileData.  
Он относится к блоку в игре.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlock;`

## Вызов объектов IBlock

Есть несколько способов получить объект IBlock:

* Разложение [IItemStack](/Vanilla/Items/IItemStack/) в качестве IBlock (используя ключевое слово `AS` или метод `asBlock()`)
* Используя getBlock(x,y,z) на [IWorld](/Vanilla/World/IWorld/).
* Использование getBlock() на ContentTweaker [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

Предупреждение: Только использование второго метода возможно для `данных` ZenGetter, чтобы вернуть ненулевую IData!

## Геттеры

| Геттер     | Что он делает                      | Возвращаемый тип                                      |
| ---------- | ---------------------------------- | ----------------------------------------------------- |
| definition | Возвращает определение этого блока | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | Возвращает метаданные этого блока  | int                                                   |
| data       | Возвращает tileData этого блока    | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks расширяют [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) объекты. Это означает, что все функции, доступные объектам IBlockPattern, также могут быть использованы для IBlock объектов:

* Используйте блоки `` ZenGetter
* OR'ing
* Сопоставление с использованием ключевого слова `в`
* Используйте `displayName` ZenGetter