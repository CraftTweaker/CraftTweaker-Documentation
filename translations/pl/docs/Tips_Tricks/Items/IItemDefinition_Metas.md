# Używanie IIDefinitions do zaoszczędzenia dużo czasu podczas odnoszenia meta-elementów

## Problem

Powiedzmy, że chcemy usunąć przepisy niektórych konkretnych kolorów wełny.  
Biała wełna ma metadane 0, wszystkie kolory wahają się od meta 1 do meta 15, więc w sumie jest 16 osób.

Chcemy usunąć wełnę z meta 3 do 12. Co robimy?  
Nie możemy po prostu usunąć wszystkich z nich (innymi słowy, użyj `<minecraft:wool:*>`), ale nie chcemy pisać 10 razy tego samego.  
Podczas gdy w tym przykładzie to działałoby całkowicie na wielką skalę, to staje się to dość irytujące!

## Co wiemy/musimy wiedzieć

- recipes.remove wymaga obiektu [Składnik](/Vanilla/Variable_Types/IIngredient/)
- [IItemStack](/Vanilla/Items/IItemStack/) może być użyty jako [IIngredient](/Vanilla/Variable_Types/IIngredient/) jako [IItemstack](/Vanilla/Items/IItemStack/) rozszerza [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- Możemy użyć [IIDefinitions](/Vanilla/Items/IItemDefinition/) , aby utworzyć [IItemStacks](/Vanilla/Items/IItemStack/)

## Rozwiązanie

Używamy [definicji IItemtions](/Vanilla/Items/IItemDefinition/) i zakresu Integer Range i przejdźmy przez ten zakres.  
Jeśli nie możemy użyć zakresu intów, możemy również użyć tablicy numerów, ale to wymagałoby wpisania wszystkich wymaganych liczb.  
Możesz również użyć tego aby nie używać niektórych przedmiotów.

```zenscript
Wal element Def = <minecraft:wool>. efiniation;

//robi to dla <minecraft:wool:3> do <minecraft:wool:12>
dla i w 3 do 13{
    recipes.remove(itemDef. akeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] jak int[];


//<minecraft:wool:3> do <minecraft:wool:12>
dla i w numArray{
    itemDef. akeStack(i).addoltip("Un-Craftable");
}

//<minecraft:wool:3> do <minecraft:wool:12>ale bez 5 i 9
dla i w 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Pomóż mnie!");
    }
}

```