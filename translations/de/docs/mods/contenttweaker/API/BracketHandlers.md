# BracketHandler

Ich rate davon ab, die statischen Methoden in dieser Klasse direkt zu verwenden, da sie jederzeit in CrT's BEP zusammengeführt werden können. Wenn Sie dynamisch auf die Methoden des Bracket Expression Parser zugreifen müssen, können Sie
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.BracketHandlers
```

## Methoden
### getItemGroup

Ruft die Artikelgruppe ab. Werfe einen Fehler, wenn die Gruppe nicht gefunden werden konnte

 Rückgaben: `Die gefundene MCItemGroup`

Rückgabetyp: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(Token als String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parameter | Type   | Beschreibung                                 |
| --------- | ------ | -------------------------------------------- |
| token     | String | Was Sie im BEP-Aufruf erstellen DataCompound |


### getToolType

Liefert einen [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Erstellt eine neue, wenn die angegebene nicht existiert.

 Gibt zurück: `Die [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) gefunden, oder ein neuer MCToolType`

Rückgabetyp: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(Token als String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parameter | Type   | Beschreibung                           |
| --------- | ------ | -------------------------------------- |
| token     | String | Was Sie im BEP-Aufruf erstellen würden |



