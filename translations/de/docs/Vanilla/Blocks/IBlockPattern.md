# IBlockPattern

Ein IBlockPattern ist eine Schnittstelle, mit der mehrere Blöcke zu einem Objekt kombiniert werden können.  
Es ist vergleichbar mit dem, was das [IIngredient](/Vanilla/Variable_Types/IIngredient/) Interface mit [IItemStacks](/Vanilla/Items/IItemStack/) ist.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren Sie crafttweaker.block.IBlockPattern;`

## Aufruf eines IBlockPattern-Objekts

Technisch rufen Sie jedes Mal, wenn Sie ein [IBlock](/Vanilla/Blocks/IBlock/) Objekt aufrufen, ein IBlockPattern-Objekt auf.  
Aber es gibt Fälle, in denen Sie explizit ein IBlockPattern-Objekt als Rückgabewert erhalten.

* ODER zwei [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetter

| ZenGetter   | Was macht es                                      | Rückgabetyp                               |
| ----------- | ------------------------------------------------- | ----------------------------------------- |
| blocks      | Listet alle möglichen Blöcke für dieses Objekt    | Liste <[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | Gibt die Anzeigenamen der passenden Blöcke zurück | string                                    |

## OR (ODER)

Sie können ODER zwei IBlockPattern-Objekte mit dem ODER- `|` Operator verwenden

## Passend

Sie können überprüfen, ob ein IBlockPatternObject ein anderes enthält, indem Sie das `in` Schlüsselwort verwenden.  
Zum Beispiel können Sie überprüfen, ob sich ein Block in einem IBlockPattern befindet.