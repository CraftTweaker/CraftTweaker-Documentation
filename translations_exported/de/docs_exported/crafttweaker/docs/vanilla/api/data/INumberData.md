# INumberDaten

Repräsentiert eine Nummer in Form einer [crafttweaker.api.data.IData](/vanilla/api/data/IData), nützlich für die Konvertierung zwischen Typen (double to int / long for example).

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.INumberData
```

## Implementierte Schnittstellen
INumberData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Methoden
### asListe

Ruft eine Liste ab<IData> diese IData, liefert null auf alles außer [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) zurück.

 Gibt `null zurück, wenn diese IData keine Liste ist.`

Retourentyp: Liste&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
1.asList();
```

### asMap

Liefert eine Karte<String, IData> Darstellung dieser IData, liefert Null auf alles außer [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Gibt `null zurück, wenn diese IData keine Karte ist.`

Rückgabetyp: [craftweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
1.asMap();
```

### asString

Ruft die Zeichenkettenrepräsentation dieser IData ab

 Gibt `-Zeichenkette, die diese IData (Wert und Typ) repräsentiert.`

Rückgabetyp: String

```zenscript
1.asString();
```

### enthält

Prüft, ob diese IData eine andere IData enthält, die hauptsächlich in Unterklassen von [crafttweaker verwendet wird. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), ist identisch mit einer Gleichheitsüberprüfung bei anderen IData Typen

 Gibt an: `wahr wenn die angegebenen IDaten in dieser IData enthalten sind`

Rückgabetyp: boolesch

```zenscript
1.Enthält (Daten als crafttweaker.api.data.IData);
1.Enthält("Anzeigen");
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
1.copy();
```

### getId

Liefert die ID des internen NBT-Tags.

 Wird verwendet, um zu bestimmen, welcher NBT-Typ gespeichert wird (in einer Liste zum Beispiel)

 Gibt `ID des NBT-Tags, das diese Daten repräsentieren.`

Rückgabetyp: Byte

```zenscript
1.getId();
```

### getString

Ruft die Zeichenkettenrepräsentation des internen INBT-Tags ab

 Gibt `zurück, der den internen INBT dieser IData repräsentiert.`

Rückgabetyp: String

```zenscript
1.getString();
```


