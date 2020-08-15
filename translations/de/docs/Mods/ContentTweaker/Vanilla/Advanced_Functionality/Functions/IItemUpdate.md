# IItemUpdate

Die IItemUpdateFunktion kann zu einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden, damit Code ausgeführt werden kann, wenn das Element aktualisiert wird.

## Dieses Paket importieren

Wenn Sie jemals das Bedürfnis haben, die Klasse dieser Funktion zu importieren, gehen Sie hier:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Syntax

Wir haben eine ungültige Funktion, die die folgenden Parameter nimmt (in Reihenfolge)

- Ein [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) repräsentiert den Gegenstandsstapel selbst.
- Ein [IWorld-Objekt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) repräsentiert die Welt in der die Aktion stattfindet.
- Ein [IEntity Objekt](/Vanilla/Entities/IEntity/) ist so weit wie möglich heruntergegangen, sodass Sie bis [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) instanzieren können.
- Eine Int, die den Slot repräsentiert, in dem sich der Gegenstand befindet
- Eine boolesche Angabe ob das Element aktuell ausgewählt ist oder nicht.

```zenscript
item.onItemUpdate = function(itemStack, world, ownerer, slot, isSelected) {
    //CODE GOES HIER!!
    zurückkehren;
}
```