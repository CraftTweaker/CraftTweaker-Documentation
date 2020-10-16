# IBlock

Obiekt IBlock składa się z [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), metadanych i TileData.  
odnosi się do bloku w grze.

## Importing the package

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.block.IBlock;`

## Wywołanie obiektu IBlock

Istnieje wiele sposobów, w których odcisk zwraca obiekt IBlock:

* Przesyłanie [IItemStack](/Vanilla/Items/IItemStack/) jako IBlock (używając słowa kluczowego `AS` lub metody `asBlock()`)
* Używanie getBlock(x,y,z) na [IWorld](/Vanilla/World/IWorld/).
* Używanie getBlock() na [ICTBlockState ContentTweaker's](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

Ostrzeżenie: Tylko użycie drugiej metody jest możliwe, aby `data` ZenGetter zwrócił nie-null IData!

## Zengetters

| Getter     | What does it do          | Return Type                                              |
| ---------- | ------------------------ | -------------------------------------------------------- |
| definition | Zwraca definicję Block'a | [Definicja IBlock'a](/Vanilla/Blocks/IBlockDefinition/)  |
| meta       | Zwraca metadane bloku    | int                                                      |
| dane       | Zwraca kafelki Block'a   | [IData](/Vanilla/Data/IData/)                            |
| fluid      | Zwraca płyn Block'a      | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |

# Wzór IBlock'a

IBlocks rozszerza [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) obiektów. Oznacza to, że wszystkie funkcje, które są dostępne dla obiektów IBlockPattern mogą być również używane dla obiektów IBlock:

* Użyj `bloków` ZenGetter
* OR'ing
* Dopasowanie przy użyciu `w słowie kluczowym`
* Użyj `displayName` ZenGetter