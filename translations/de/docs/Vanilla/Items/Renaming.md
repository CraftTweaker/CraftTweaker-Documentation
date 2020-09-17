# Umbenennen

Das Lesen von 'Truhe' ist ärgerlich, oder?

Deshalb gibt es die Möglichkeit, Sachen umzubenennen.

## Den Anzeigenamen ändern

Dies ist wahrscheinlich der einfachste Weg, um einen anderen Gegenstand oder einen anderen Blocknamen zu erreichen. Sie benennen `Element` in `neuem Namen` um:

```zenscript
item.displayName = newName;

//Beispiel
<minecraft:chest>.displayName = "Storage Box Deluxe";
```

`Element` ist ein [IItemStack](/Vanilla/Items/IItemStack/).  
`newName` ist ein String.

## Änderung der Lokalisierung

Wenn einige modifizierte Inventare den alten Namen des Gegenstands anzeigen, müssen Sie die Lokalisierung ändern. Du kannst lesen, was das bei `Spiel` bedeutet.

```zenscript
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`Sprachcode` ist ein String und optional. Wenn Sie es weglassen, wird die Lokalisierung unabhängig von der Sprache des Clients angewendet.  
`unlocaLizedName` ist ein String.  
`newName` ist ein String.