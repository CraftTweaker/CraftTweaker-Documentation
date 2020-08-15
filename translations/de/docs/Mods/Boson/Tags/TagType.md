# `TagType`

Ein `TagType` identifiziert die Art von Elementen, die in einem gegebenen [`Tag`](/Mods/Boson/Tags/Tag/) gespeichert werden können. Es beherbergt auch zusätzliche schreibgeschützte Daten, die eine bestimmte Menge von Mnemoniken identifizieren, die helfen, einen Typ mehr menschenfreundlich zu identifizieren.

## Klassendetails
Die Klasse befindet sich im `net.thesilkminer.mc.boson.zen.tag` Paket, wodurch `net.thesilkminer.mc.boson.tag.TagType` der vollqualifizierte Name für den Import ist.

## Neue Instanz erstellen
Es ist nicht möglich, eine neue Instanz eines rohen Tag-Typs von CraftTweaker zu erstellen. Es ist trotzdem möglich, den Typ eines gegebenen `Tags` über seine Eigenschaften zu erhalten. Lesen Sie die [-Dokumentation für `Tag`](/Mods/Boson/Tags/Tag/) für weitere Informationen.

### Bekannte `TagType` Instanzen
Boson erstellt standardmäßig bereits eine Reihe von Tag-Typen, die in [Klammerhandlern](/Mods/Boson/Tags/BracketHandler/) verwendet werden können, um Instanzen von `Tag`s oder `TagIngredient`s zu erhalten. Diese Mnemonik sind in der Tabelle aufgeschrieben:

| Mnemonisch      | Gespeicherte Objekte                          |
| --------------- | --------------------------------------------- |
| `blocks`        | [`IBlockState`](/Vanilla/Blocks/IBlockState/) |
| `flüssigkeiten` | (nicht derzeit über CraftTweaker erreichbar)  |
| `gegenstände`   | [`IItemStack`](/Vanilla/Items/IItemStack/)    |

## Eigenschaften
Ein `TagType` bietet schreibgeschützten Zugriff auf bestimmte Eigenschaften, wie in der folgenden Tabelle dargestellt:

| Eigenschaftsname    | Type                                                                   | Beschreibung                                                                          |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `directoryName`     | `string`                                                               | Name des Verzeichnisses, in dem sich JSONs in einem Datenpaket befinden               |
| `name`              | `string`                                                               | Mnemonic identifiziert den angegebenen Tag-Typ; wird in Tag-Klammer-Handler verwendet |
| `classType`         | [`Klasse`](/Mods/Boson/Reflection/Class/)                              | Typ von Objekten, die im Tag gespeichert sind                                         |
| `konverterfunktion` | [`Funktion<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Konvertiert Namen in Tag-Elemente                                                     |
