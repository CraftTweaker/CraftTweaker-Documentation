# MapData



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.MapData
```

## Implementierte Schnittstellen
MapData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Konstrukteure
```zenscript
neue crafttweaker.api.data.MapData();
```
```zenscript
neue crafttweaker.api.data.MapData(Karte als crafttweaker.api.data.IData[String]);
```
| Parameter    | Type                                                           | Beschreibung                 |
| ------------ | -------------------------------------------------------------- | ---------------------------- |
| kartographie | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Keine Beschreibung angegeben |



## Methoden
### asListe

Ruft eine Liste ab<IData> diese IData, liefert null auf alles außer [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) zurück.

 Gibt `null zurück, wenn diese IData keine Liste ist.`

Gibt die Liste zurück<[craftweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
myMapData.asList();
```

### asMap

Liefert eine Karte<String, IData> Darstellung dieser IData, liefert Null auf alles außer [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Gibt `null zurück, wenn diese IData keine Karte ist.`

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData)[String] zurück

```zenscript
myMapData.asMap();
```

### asString

Ruft die Zeichenkettenrepräsentation dieser IData ab

 Gibt `-Zeichenkette, die diese IData (Wert und Typ) repräsentiert.`

Gibt den String zurück

```zenscript
myMapData.asString();
```

### enthält

Prüft, ob die Karte den angegebenen Schlüssel enthält.

Rückgabewert boolesch

```zenscript
myMapData.contains(Schlüssel als String);
myMapData.contains("Hallo");
```

| Parameter | Type   | Beschreibung                               |
| --------- | ------ | ------------------------------------------ |
| -Taste    | String | Der Schlüssel nach dem gesucht werden soll |


### kopieren

Erzeugt eine Kopie dieser IData.

 IData ist standardmäßig unveränderbar, verwenden Sie dies, um eine korrekte Kopie des Objekts zu erstellen.

 Gibt `eine Kopie dieser IData zurück.`

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
myMapData.copy();
```

### holen

Ruft den dem Schlüssel zugeordneten Wert ab

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
myMapData.get(Schlüssel als String);
myMapData.get("Hallo");
```

| Parameter | Type   | Beschreibung                               |
| --------- | ------ | ------------------------------------------ |
| -Taste    | String | Der Schlüssel nach dem gesucht werden soll |


### getId

Liefert die ID des internen NBT-Tags.

 Wird verwendet, um zu bestimmen, welcher NBT-Typ gespeichert wird (in einer Liste zum Beispiel)

 Gibt `ID des NBT-Tags, das diese Daten repräsentieren.`

Gibt Byte zurück

```zenscript
myMapData.getId();
```

### getString

Ruft die Zeichenkettenrepräsentation des internen INBT-Tags ab

 Gibt `zurück, der den internen INBT dieser IData repräsentiert.`

Gibt den String zurück

```zenscript
myMapData.getString();
```

### zusammenführen

Fügt diese Karte und die andere Karte zusammen. Wenn Einträge aus dieser Karte und die andere Karte die Werte teilen, werden die Werte zusammengeführt. Wenn das nicht funktioniert, wird der Wert der anderen Karte verwendet.

Gibt [craftweaker.api.data.MapData](/vanilla/api/data/MapData) zurück

```zenscript
myMapData.merge(andere als crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Parameter | Type                                                       | Beschreibung      |
| --------- | ---------------------------------------------------------- | ----------------- |
| andere    | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | Die andere Karte. |


### setzen

Fügt den Wert für den angegebenen Schlüssel hinzu oder erzeugt einen neuen Eintrag, falls er vorher nicht existiert.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
myMapData.put(Schlüssel als String, Wert als crafttweaker.api.data.IData);
myMapData.put("Hallo", "Goodbye");
```

| Parameter | Type                                                   | Beschreibung                                  |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| -Taste    | String                                                 | Der Schlüssel, für den der Wert gesetzt wird. |
| wert      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der zu setzende Wert.                         |


### putAll

Fügt alle Einträge der angegebenen Karte in diese hinzu. Bestehende Schlüssel können überschrieben werden.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hallo: "Goodbye", Item: "Bedrock"});
```

| Parameter    | Type                                                           | Beschreibung                                                |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------------- |
| kartographie | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Die anderen Einträge die zu dieser Karte hinzugefügt werden |


### entfernen

Entfernt den Eintrag mit dem angegebenen Schlüssel aus der Karte

```zenscript
myMapData.remove(Schlüssel als String);
myMapData.remove("Irgendwande");
```

| Parameter | Type   | Beschreibung                               |
| --------- | ------ | ------------------------------------------ |
| -Taste    | String | Der Schlüssel des zu entfernenden Eintrags |



## Eigenschaften

| Name    | Type           | Hat Getter | Hat Setter |
| ------- | -------------- | ---------- | ---------- |
| isEmpty | boolean        | true       | false      |
| keySet  | Setzen<String> | true       | false      |
| grösse  | int            | true       | false      |

## Operatoren
### ZUD

Fügt alle Einträge der angegebenen IData zu diesem Eintrag hinzu

```zenscript
myMapData + Daten als crafttweaker.api.data.IData
```

| Parameter | Type                                                   | Beschreibung                 |
| --------- | ------------------------------------------------------ | ---------------------------- |
| daten     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ                                                   | Ist Implizit |
| -------------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true         |

