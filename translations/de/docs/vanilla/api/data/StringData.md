# StringData



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.StringData
```

## Implementierte Schnittstellen
StringData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Konstrukteure
```zenscript
neue crafttweaker.api.data.StringData(intern als String);
```
| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| intern    | String | Keine Beschreibung angegeben |



## Methoden
### asListe

Ruft eine Liste ab<IData> diese IData, liefert null auf alles außer [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) zurück.

 Gibt `null zurück, wenn diese IData keine Liste ist.`

Gibt die Liste zurück<[craftweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
neue StringData("Hallo").asList();
```

### asMap

Liefert eine Karte<String, IData> Darstellung dieser IData, liefert Null auf alles außer [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Gibt `null zurück, wenn diese IData keine Karte ist.`

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData)[String] zurück

```zenscript
neue StringData("Hallo").asMap();
```

### asString

Ruft die Zeichenkettenrepräsentation dieser IData ab

 Gibt `-Zeichenkette, die diese IData (Wert und Typ) repräsentiert.`

Gibt den String zurück

```zenscript
neue StringData("Hallo").asString();
```

### enthält

Prüft, ob diese IData eine andere IData enthält, die hauptsächlich in Unterklassen von [crafttweaker verwendet wird. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), ist identisch mit einer Gleichheitsüberprüfung bei anderen IData Typen

Rückgabewert boolesch

```zenscript
neue StringData("Hallo").Enthält(Daten als crafttweaker.api.data.IData);
neue StringData("Hallo").contains("Display");
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
neue StringData("Hallo").copy();
```

### getId

Liefert die ID des internen NBT-Tags.

 Wird verwendet, um zu bestimmen, welcher NBT-Typ gespeichert wird (in einer Liste zum Beispiel)

 Gibt `ID des NBT-Tags, das diese Daten repräsentieren.`

Gibt Byte zurück

```zenscript
neue StringData("Hallo").getId();
```

### getString

Ruft die Zeichenkettenrepräsentation des internen INBT-Tags ab

 Gibt `zurück, der den internen INBT dieser IData repräsentiert.`

Gibt den String zurück

```zenscript
neue StringData("Hallo").getString();
```


## Operatoren
### ZUD

Verbindet die beiden Zeichenketten Daten und gibt das Ergebnis zurück.

```zenscript
neue StringData("Hallo") + Daten als crafttweaker.api.data.StringData
neue StringData("Hallo") + neue StringData("Welt")
```

| Parameter | Type                                                             | Beschreibung                    |
| --------- | ---------------------------------------------------------------- | ------------------------------- |
| daten     | [crafttweaker.api.data.StringData](/vanilla/api/data/StringData) | Die anderen anzuhängenden Daten |

