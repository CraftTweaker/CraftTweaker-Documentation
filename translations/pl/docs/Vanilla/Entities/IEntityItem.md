# IEntityItem

Reprezentuje stos przedmiotów na świecie.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityItem;`

## Rozszerzanie [IEntity](/Vanilla/Entities/IEntity/)

IEntityItem extends [IEntity](/Vanilla/Entities/IEntity/). Oznacza to, że wszystkie funkcje dostępne dla [IEntities](/Vanilla/Entities/IEntity/) są również dostępne dla IEntityItem.

## ZenGetters

| ZenGetter | Typ zwrotu                               |
| --------- | ---------------------------------------- |
| element   | [IItemStack](/Vanilla/Items/IItemStack/) |