# BlockPos

Stellt eine Position eines Blocks in der Welt dar

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.BlockPos
```

## Konstrukteure
```zenscript
neue crafttweaker.api.util.BlockPos(x als int, y als int, z als in);
```
| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| x         | int  | Keine Beschreibung angegeben |
| y         | int  | Keine Beschreibung angegeben |
| z         | int  | Keine Beschreibung angegeben |



## Methoden
### hinzufügen

Fügt zwei Positionen zusammen und gibt das Ergebnis zurück.

 Gibt `neu [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) mit den hinzugefügten Werten zurück.`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parameter | Type                                                         | Beschreibung               |
| --------- | ------------------------------------------------------------ | -------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | andere Position hinzufügen |



Fügt die angegebenen Werte zu dieser Position hinzu und gibt eine neue Position mit den neuen Werten zurück.

 Gibt `eine neue Position zurück, basierend auf Werten der angegebenen Werte und dieser Position`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).add(x als Doppelt, y als Doppelt);
neue BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parameter | Type   | Beschreibung      |
| --------- | ------ | ----------------- |
| x         | double | x Wert hinzufügen |
| y         | double | y Wert hinzufügen |
| z         | double | z Wert hinzufügen |



Fügt die angegebenen Werte zu dieser Position hinzu und gibt eine neue Position mit den neuen Werten zurück.

 Gibt `eine neue Position zurück, basierend auf Werten der angegebenen Werte und dieser Position`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).add(x als int, y als int, z als in);
neue BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parameter | Type | Beschreibung      |
| --------- | ---- | ----------------- |
| x         | int  | x Wert hinzufügen |
| y         | int  | y Wert hinzufügen |
| z         | int  | z Wert hinzufügen |


### crossProdukt

Erstellt neue BlockPos basierend auf dem Kreuzprodukt dieser Position und der angegebenen Position

 Gibt `neue BlockPos zurück, basierend auf dem Kreuzprodukt dieser BlockPos und der angegebenen BlockPos`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parameter | Type                                                         | Beschreibung                         |
| --------- | ------------------------------------------------------------ | ------------------------------------ |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos zum Überqueren des Produkts |


### distanceSq

Ruft die quadrierte Distanz dieser Position zu den angegebenen BlockPos über die Mitte der BlockPos ab

 Gibt `die quadratische Distanz dieser aktuellen Position und die angegebenen BlockPos zurück.`

Rückgabetyp: Doppelt

```zenscript
neue BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parameter | Type                                                         | Beschreibung        |
| --------- | ------------------------------------------------------------ | ------------------- |
| zu        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos zum Prüfen |



Ruft die quadrierte Distanz dieser Position zu den angegebenen BlockPos ab

 Gibt `die quadratische Distanz dieser aktuellen Position und die angegebenen BlockPos zurück.`

Rückgabetyp: Doppelt

```zenscript
neue BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parameter | Type                                                         | Beschreibung                                                             |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| zu        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos zum Prüfen                                                      |
| useCenter | boolean                                                      | soll die Koordinatenmitte benutzt werden? (fügt 0,5 zu jedem Wert hinzu) |



Ruft die quadrierte Distanz dieser Position zu den angegebenen Koordinaten ab

 Gibt `die quadratische Distanz dieser aktuellen Position und die angegebenen Koordinaten zurück.`

Rückgabetyp: Doppelt

```zenscript
neue BlockPos(0, 1, 2).distanceSq(x als doppelt, y als doppelt, z als doppelt, useCenter als boolean);
neue BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parameter | Type    | Beschreibung                                                             |
| --------- | ------- | ------------------------------------------------------------------------ |
| x         | double  | x Position zum Prüfen                                                    |
| y         | double  | y Position zum Prüfen                                                    |
| z         | double  | z Position zum Prüfen                                                    |
| useCenter | boolean | soll die Koordinatenmitte benutzt werden? (fügt 0,5 zu jedem Wert hinzu) |


### runter

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block niedriger sind als diese BlockPos

 Gibt `neue BlockPos zurück, die einen Block niedriger sind als diese BlockPos`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).down();
```

### östlich

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block östlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die einen Block östlich von diesem BlockPos sind`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).east();
```


Erstellt neue BlockPos basierend auf diesen BlockPos, die n Blöcke östlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die n Blöcke östlich dieser BlockPos sind`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| n         | int  | Keine Beschreibung angegeben |


### manhattanDistanz

Ruft die Manhattan Distance dieses Poses im Vergleich zu einer anderen Position ab

 Gibt zurück: `Die Manhattandistanz der Positionen`

Rückgabetyp: int

```zenscript
neue BlockPos(0, 1, 2).manhattanDistance(andere als crafttweaker.api.util.BlockPos);
neue BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parameter | Type                                                         | Beschreibung                               |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| andere    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | andere Position um die Distanz zu erhalten |


### nördlich

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block nördlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die einen Block nördlich von diesem BlockPos liegen`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).nörd();
```


Erstellt neue BlockPos basierend auf diesen BlockPos, die n Blöcke nördlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die n Blöcke nördlich dieser BlockPos liegen`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).north(n als int);
neue BlockPos(0, 1, 2).north(10);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| n         | int  | Keine Beschreibung angegeben |


### versatz

Erstellt einen neuen BlockPos basierend auf diesen BlockPos, der ein Blockversatz dieser BlockPos ist, basierend auf dem angegebenen [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Gibt `einen neuen BlockPos zurück, der 1 Block Offset dieser BlockPos ist`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).offset(Richtung als crafttweaker.api.util.Direction);
neue BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parameter | Type                                                          | Beschreibung                 |
| --------- | ------------------------------------------------------------- | ---------------------------- |
| Richtung  | [crafttweaker.api.util.Richtung](/vanilla/api/util/Direction) | Keine Beschreibung angegeben |



Erstellt eine neue BlockPos basierend auf diesen BlockPos, die n BlockPos Offset für diese BlockPos sind, basierend auf dem angegebenen [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Gibt `neue BlockPos zurück, die n BlockPos versetzen sind`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).offset(Richtung als crafttweaker.api.util.Direction, n wie int);
neue BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parameter | Type                                                          | Beschreibung                 |
| --------- | ------------------------------------------------------------- | ---------------------------- |
| Richtung  | [crafttweaker.api.util.Richtung](/vanilla/api/util/Direction) | Keine Beschreibung angegeben |
| n         | int                                                           | Keine Beschreibung angegeben |


### süd

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block südlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die einen Block südlich von diesem BlockPos liegen`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).Süden();
```


Erstellt neue BlockPos basierend auf diesen BlockPos, die n Blöcke südlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die n Blöcke südlich von diesem BlockPos`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).Süden(n als int);
neue BlockPos(0, 1, 2).Süden(12);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| n         | int  | Keine Beschreibung angegeben |


### subtrahieren

Subtraktiert zwei Positionen zusammen und gibt das Ergebnis zurück.

 Gibt `neu [crafttweaker.api.util.BlockPos](/vanilla/api/util/blockPos) mit den gelöschten Werten zurück.`

Rückgabetyp: [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
neue BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parameter | Type                                                         | Beschreibung                   |
| --------- | ------------------------------------------------------------ | ------------------------------ |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | andere zu entfernende Position |


### oben

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block höher sind als diese BlockPos

 Gibt `neue BlockPos zurück, die einen Block höher sind als diese BlockPos`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).up();
```


Erstellt neue BlockPos basierend auf diesen BlockPos, die n Blöcke höher sind als diese BlockPos

 Gibt `neue BlockPos zurück, die n Blöcke höher sind als diese BlockPos`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).up(n wie in);
neue BlockPos(0, 1, 2).up(45);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| n         | int  | Keine Beschreibung angegeben |


### westlich

Erstellt neue BlockPos basierend auf diesen BlockPos, die einen Block westlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die einen Block westlich dieser BlockPos sind`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).west();
```


Erstellt neue BlockPos basierend auf diesen BlockPos, die n Blöcke westlich von diesem BlockPos sind

 Gibt `neue BlockPos zurück, die n Blöcke westlich dieser BlockPos sind`

Rückgabetyp: net.minecraft.util.math.BlockPos

```zenscript
neue BlockPos(0, 1, 2).west(n als int);
neue BlockPos(0, 1, 2).west(120);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| n         | int  | Keine Beschreibung angegeben |


### innerhalb der Distanz

Prüft, ob sich die angegebenen BlockPos innerhalb der angegebenen Distanz befinden (dies benutzt die Mitte der BlockPos)

 Gibt `zurück, wenn sich die angegebenen BlockPos innerhalb der angegebenen Distanz dieser BlockPos befinden`

Rückgabetyp: boolesch

```zenscript
neue BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parameter | Type                                                         | Beschreibung                                               |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos um zu überprüfen, ob es innerhalb der Distanz ist |
| distanz   | double                                                       | zu überprüfende Distanz innerhalb                          |



## Eigenschaften

| Name | Type | Hat Getter | Hat Setter |
| ---- | ---- | ---------- | ---------- |
| x    | int  | true       | false      |
| y    | int  | true       | false      |
| z    | int  | true       | false      |

## Operatoren
### ZUD

Fügt zwei Positionen zusammen und gibt das Ergebnis zurück.

 Gibt `neu [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) mit den hinzugefügten Werten zurück.`

```zenscript
neue BlockPos(0, 1, 2) + Pos als crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parameter | Type                                                         | Beschreibung               |
| --------- | ------------------------------------------------------------ | -------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | andere Position hinzufügen |
### SUB

Subtraktiert zwei Positionen zusammen und gibt das Ergebnis zurück.

 Gibt `neu [crafttweaker.api.util.BlockPos](/vanilla/api/util/blockPos) mit den gelöschten Werten zurück.`

```zenscript
neue BlockPos(0, 1, 2) - Pos als crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parameter | Type                                                         | Beschreibung                   |
| --------- | ------------------------------------------------------------ | ------------------------------ |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | andere zu entfernende Position |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| long         | false        |

