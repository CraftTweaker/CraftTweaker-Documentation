# Listendaten



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.ListData
```

## Implementierte Schnittstellen
ListData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstrukteure
```zenscript
neue crafttweaker.api.data.ListData();
```
```zenscript
neue crafttweaker.api.data.ListData(Liste als Liste<crafttweaker.api.data.IData>);
```
| Parameter | Type                                                          | Beschreibung                 | IsOptionale | Standardwert |
| --------- | ------------------------------------------------------------- | ---------------------------- | ----------- | ------------ |
| liste     | Liste <[craftweaker.api.data.IData](/vanilla/api/data/IData)> | Keine Beschreibung angegeben | true        | null         |



## Methoden
### hinzufügen

```zenscript
["Hallo", "Welt", "!"].add(Wert als crafttweaker.api.data.IData);
["Hallo", "Welt", "!"].add("heute");
```

| Parameter | Type                                                   | Beschreibung                                    |
| --------- | ------------------------------------------------------ | ----------------------------------------------- |
| wert      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll |



```zenscript
["Hallo", "Welt", "!"].add(Index als int, Wert als crafttweaker.api.data.IData);
["Hallo", "Welt", "!"].add(1, "beautiful");
```

| Parameter  | Type                                                   | Beschreibung                                                                                        |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| indexieren | int                                                    | Der Index zu dem hinzugefügt werden soll. Nachfolgende Elemente werden einen Index höher verschoben |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll                                                     |


### löschen

Entfernt jedes Element in der Liste

```zenscript
["Hallo", "Welt", "!"].clear();
```

### holen

Ruft die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index ab.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
["Hallo", "Welt", "!"].get(Index als in);
["Hallo", "Welt", "!"].get(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### entfernen

Entfernt die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index gespeichert.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
["Hallo", "Welt", "!"].remove(Index als in);
["Hallo", "Welt", "!"].remove(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### setzen

Setzt das Element im angegebenen Index auf den angegebenen Wert

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
["Hallo", "Welt", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hallo", "Welt", "!"].set(0, "Bye");
```

| Parameter  | Type                                                   | Beschreibung                      |
| ---------- | ------------------------------------------------------ | --------------------------------- |
| indexieren | int                                                    | Der zu setzende Index (0-basiert) |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der neue Wert                     |



## Eigenschaften

| Name   | Type | Hat Getter | Hat Setter |
| ------ | ---- | ---------- | ---------- |
| grösse | int  | true       | false      |

## Zauberer

| Ergebnis-Typ                                                  | Ist Implizit |
| ------------------------------------------------------------- | ------------ |
| Liste <[craftweaker.api.data.IData](/vanilla/api/data/IData)> | true         |

