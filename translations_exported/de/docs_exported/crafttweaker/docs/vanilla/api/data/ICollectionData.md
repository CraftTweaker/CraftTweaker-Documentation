# ICollectionData

Die ICollection Daten werden verwendet, um eine Sammlung von [crafttweaker.api.data.IData](/vanilla/api/data/IData) wie eine Liste zu repräsentieren<IData>

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.ICollectionData
```

## Implementierte Schnittstellen
ICollectionData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Methoden
### hinzufügen

```zenscript
neue ListData(["Hallo", "World"]).add(value as crafttweaker.api.data.IData);
new ListData(["Hallo", "World"]).add("today");
```

| Parameter | Type                                                   | Beschreibung                                    |
| --------- | ------------------------------------------------------ | ----------------------------------------------- |
| wert      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll |



```zenscript
neue ListData(["Hallo", "World"]).add(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hallo", "World"]).add(1, "beautiful");
```

| Parameter  | Type                                                   | Beschreibung                                                                                        |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| indexieren | int                                                    | Der Index zu dem hinzugefügt werden soll. Nachfolgende Elemente werden einen Index höher verschoben |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll                                                     |


### asListe

Ruft eine Liste ab<IData> diese IData, liefert null auf alles außer [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) zurück.

 Gibt `null zurück, wenn diese IData keine Liste ist.`

Retourentyp: Liste&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
neue ListData(["Hallo", "World"]).asList();
```

### asMap

Liefert eine Karte<String, IData> Darstellung dieser IData, liefert Null auf alles außer [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Gibt `null zurück, wenn diese IData keine Karte ist.`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
neue ListData(["Hallo", "Welt"]).asMap();
```

### asString

Ruft die Zeichenkettenrepräsentation dieser IData ab

 Gibt `-Zeichenkette, die diese IData (Wert und Typ) repräsentiert.`

Rückgabetyp: String

```zenscript
neue ListData(["Hallo", "World"]).asString();
```

### löschen

Entfernt jedes Element in der Liste

```zenscript
neue ListData(["Hallo", "Welt"]).clear();
```

### enthält

Prüft, ob diese IData eine andere IData enthält, die hauptsächlich in Unterklassen von [crafttweaker verwendet wird. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), ist identisch mit einer Gleichheitsüberprüfung bei anderen IData Typen

 Gibt an: `wahr wenn die angegebenen IDaten in dieser IData enthalten sind`

Rückgabetyp: boolesch

```zenscript
neue ListData(["Hallo", "World"]).Enthält(Daten als crafttweaker.api.data.IData);
neue ListData(["Hallo", "World"]).contains("Anzeigen");
```

| Parameter | Type                                                   | Beschreibung                               |
| --------- | ------------------------------------------------------ | ------------------------------------------ |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten zu überprüfen, ob sie enthalten sind |


### kopieren

Erzeugt eine Kopie dieser IData.

 IData ist standardmäßig unveränderbar, verwenden Sie dies, um eine korrekte Kopie des Objekts zu erstellen.

 Gibt `eine Kopie dieser IData zurück.`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
neue ListData(["Hallo", "World"]).copy();
```

### holen

Ruft die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index ab. Gibt zurück: `Die [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
neue ListData(["Hallo", "World"]).get(index as int);
neue ListData(["Hallo", "World"]).get(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### getId

Liefert die ID des internen NBT-Tags.

 Wird verwendet, um zu bestimmen, welcher NBT-Typ gespeichert wird (in einer Liste zum Beispiel)

 Gibt `ID des NBT-Tags, das diese Daten repräsentieren.`

Rückgabetyp: Byte

```zenscript
neue ListData(["Hallo", "World"]).getId();
```

### getString

Ruft die Zeichenkettenrepräsentation des internen INBT-Tags ab

 Gibt `zurück, der den internen INBT dieser IData repräsentiert.`

Rückgabetyp: String

```zenscript
neue ListData(["Hallo", "World"]).getString();
```

### entfernen

Entfernt die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index gespeichert. Gibt zurück: `Die [crafttweaker.api.data.IData](/vanilla/api/data/IData) die entfernt wurde`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
neue ListData(["Hallo", "Welt"]).remove(Index als int);
neue ListData(["Hallo", "Welt"]).remove(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### setzen

Setzt das Element im angegebenen Index auf den angegebenen Wert zurückgegeben: `Der ersetzte Wert`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
neue ListData(["Hallo", "World"]).set(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hallo", "World"]).set(0, "Bye");
```

| Parameter  | Type                                                   | Beschreibung                      |
| ---------- | ------------------------------------------------------ | --------------------------------- |
| indexieren | int                                                    | Der zu setzende Index (0-basiert) |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der neue Wert                     |



## Eigenschaften

| Name   | Type | Hat Getter | Hat Setter |
| ------ | ---- | ---------- | ---------- |
| grösse | int  | true       | false      |

