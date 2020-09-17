# Verwendung von IItemDefinitionen, um viel Zeit bei der Verweisung von Meta-Elementen zu sparen

## Problem

Nehmen wir an, wir wollen die Rezepte einiger bestimmter Wollfarben entfernen.  
Weiße Wolle hat die Metadaten 0, alle Farben reichen von Meta 1 bis Meta 15, so dass es insgesamt 16 gibt.

Wir wollen die Wolle mit Meta 3 bis 12 entfernen. Was tun wir?  
Wir können nicht alle entfernen (in anderen Worten, verwenden Sie `<minecraft:wool:*>`), aber wir wollen auch nicht 10 mal dasselbe schreiben.  
Während dies in diesem Beispiel völlig funktionieren würde, wird dies im großen Maßstab ziemlich ärgerlich!

## Was wissen wir/müssen wir wissen

- recipes.remove erfordert ein [IIngredient](/Vanilla/Variable_Types/IIngredient/) Objekt
- Ein [IItemStack](/Vanilla/Items/IItemStack/) kann als [Ingredient](/Vanilla/Variable_Types/IIngredient/) verwendet werden, da [IItemstack](/Vanilla/Items/IItemStack/) erweitert [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- Wir können [IItemDefinitions](/Vanilla/Items/IItemDefinition/) verwenden, um [IItemStacks](/Vanilla/Items/IItemStack/) zu erstellen

## Lösung

Wir verwenden [IItemDefinitionen](/Vanilla/Items/IItemDefinition/) und einen Integer-Bereich und iterieren durch letztere.  
Wenn wir keinen Int-Bereich verwenden können, können wir auch ein Zahlen-Array verwenden, aber dazu müssten Sie alle erforderlichen Zahlen eingeben.  
Sie können dies auch verwenden, um einige Elemente von der Verwendung auszunehmen.

```zenscript
val itemDef = <minecraft:wool>. efinition;

//macht dies für <minecraft:wool:3> bis <minecraft:wool:12>
für i in 3 bis 13{
    recipes.remove(itemDef. akeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] als int[];


//<minecraft:wool:3> bis <minecraft:wool:12>
für i in numArray{
    itemDef. akeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> bis <minecraft:wool:12>, aber ohne 5 und 9
für i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Hilf mir!");
    }
}

```