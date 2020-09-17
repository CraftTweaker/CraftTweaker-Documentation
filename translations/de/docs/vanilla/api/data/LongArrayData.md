# LongArrayData



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.LongArrayData
```

## Implementierte Schnittstellen
LongArrayData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstrukteure
```zenscript
neue crafttweaker.api.data.LongArrayData(intern als lang[]);
```
| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| intern    | lang[] | Keine Beschreibung angegeben |



## Methoden
### hinzufügen

```zenscript
[100000, 800000, 50000].add(Wert als crafttweaker.api.data.IData);
[100000, 800000, 50000].add("heute");
```

| Parameter | Type                                                   | Beschreibung                                    |
| --------- | ------------------------------------------------------ | ----------------------------------------------- |
| wert      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll |



```zenscript
[100000, 800000, 50000].add(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].add(1, "beautiful");
```

| Parameter  | Type                                                   | Beschreibung                                                                                        |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| indexieren | int                                                    | Der Index zu dem hinzugefügt werden soll. Nachfolgende Elemente werden einen Index höher verschoben |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll                                                     |


### asListe

Ruft eine Liste ab<IData> diese IData, liefert null auf alles außer [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) zurück.

 Gibt `null zurück, wenn diese IData keine Liste ist.`

Gibt die Liste zurück<[craftweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[100000, 800000, 50000].asList();
```

### asMap

Liefert eine Karte<String, IData> Darstellung dieser IData, liefert Null auf alles außer [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Gibt `null zurück, wenn diese IData keine Karte ist.`

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData)[String] zurück

```zenscript
[100000, 800000, 50000].asMap();
```

### asString

Ruft die Zeichenkettenrepräsentation dieser IData ab

 Gibt `-Zeichenkette, die diese IData (Wert und Typ) repräsentiert.`

Gibt den String zurück

```zenscript
[100000, 800000, 50000].asString();
```

### löschen

Entfernt jedes Element in der Liste

```zenscript
[100000, 800000, 50000].clear();
```

### enthält

Prüft, ob diese IData eine andere IData enthält, die hauptsächlich in Unterklassen von [crafttweaker verwendet wird. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), ist identisch mit einer Gleichheitsüberprüfung bei anderen IData Typen

Rückgabewert boolesch

```zenscript
[100000, 800000, 50000].Enthält (Daten als crafttweaker.api.data.IData);
[100000, 800000, 50000].contains("Display");
```

| Parameter | Type                                                   | Beschreibung                               |
| --------- | ------------------------------------------------------ | ------------------------------------------ |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Daten zu überprüfen, ob sie enthalten sind |


### kopieren

Erzeugt eine Kopie dieser IData.

 IData ist standardmäßig unveränderbar, verwenden Sie dies, um eine korrekte Kopie des Objekts zu erstellen.

 Gibt `eine Kopie dieser IData zurück.`

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[100000, 800000, 50000].copy();
```

### holen

Ruft die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index ab.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[100000, 800000, 50000].get(Index als int);
[100000, 800000, 50000].get(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### getId

Liefert die ID des internen NBT-Tags.

 Wird verwendet, um zu bestimmen, welcher NBT-Typ gespeichert wird (in einer Liste zum Beispiel)

 Gibt `ID des NBT-Tags, das diese Daten repräsentieren.`

Gibt Byte zurück

```zenscript
[100000, 800000, 50000].getId();
```

### getString

Ruft die Zeichenkettenrepräsentation des internen INBT-Tags ab

 Gibt `zurück, der den internen INBT dieser IData repräsentiert.`

Gibt den String zurück

```zenscript
[100000, 800000, 50000].getString();
```

### entfernen

Entfernt die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index gespeichert.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[100000, 800000, 50000].remove(Index als int);
[100000, 800000, 50000].remove(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### setzen

Setzt das Element im angegebenen Index auf den angegebenen Wert

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[100000, 800000, 50000].set(Index als int, Wert als crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Bye");
```

| Parameter  | Type                                                   | Beschreibung                      |
| ---------- | ------------------------------------------------------ | --------------------------------- |
| indexieren | int                                                    | Der zu setzende Index (0-basiert) |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der neue Wert                     |



## Eigenschaften

| Name   | Type | Hat Getter | Hat Setter |
| ------ | ---- | ---------- | ---------- |
| grösse | int  | true       | false      |

