# IBlock

Ein IBlock Objekt besteht aus einer [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), einer Metadaten und einer TileData.  
Es bezieht sich auf einen Block im Spiel.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import craftweaker.block.IBlock;`

## Aufruf eines IBlock-Objekts

Es gibt mehrere Möglichkeiten, ein IBlock Objekt zurückzugeben:

* Wirf einen [IItemStack](/Vanilla/Items/IItemStack/) als IBlock (mittels `AS` Schlüsselwort, oder die `asBlock()` Methode)
* Verwendung des getBlock(x,y,z) auf einer [IWorld](/Vanilla/World/IWorld/).
* Verwendung von getBlock() auf ContentTweakers [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

## ZenGetter

| Getriebe   | Was macht es                    | Rückgabetyp                                           |
| ---------- | ------------------------------- | ----------------------------------------------------- |
| definition | Gibt die Blockdefinition zurück | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta       | Gibt die Blockmetadaten zurück  | int                                                   |
| daten      | Gibt die Block-TilleData zurück | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks erweitern [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objekte. Das bedeutet, dass alle Funktionen, die IBlockPattern-Objekte zur Verfügung stehen, auch für IBlock-Objekte verwendet werden können:

* Verwende die `Blöcke` ZenGetter
* OR'ing
* Passen mit dem Schlüsselwort `in`
* Verwende den `displayName` ZenGetter