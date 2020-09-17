# ByteArrayData



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Implementierte Schnittstellen
ByteArrayData implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstrukteure
```zenscript
neue crafttweaker.api.data.ByteArrayData(intern als byte[]);
```
| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| intern    | byte[] | Keine Beschreibung angegeben |



## Methoden
### hinzufügen

```zenscript
[4, 1, 2].add(Wert als crafttweaker.api.data.IData);
[4, 1, 2].add("heute");
```

| Parameter | Type                                                   | Beschreibung                                    |
| --------- | ------------------------------------------------------ | ----------------------------------------------- |
| wert      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Parameter  | Type                                                   | Beschreibung                                                                                        |
| ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| indexieren | int                                                    | Der Index zu dem hinzugefügt werden soll. Nachfolgende Elemente werden einen Index höher verschoben |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der Wert, der zur Liste hinzugefügt werden soll                                                     |


### löschen

Entfernt jedes Element in der Liste

```zenscript
[4, 1, 2].clear();
```

### holen

Ruft die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index ab.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[4, 1, 2].get(Index als int);
[4, 1, 2].get(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### entfernen

Entfernt die [craftweaker.api.data.IData](/vanilla/api/data/IData) im angegebenen Index gespeichert.

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[4, 1, 2].remove(Index als in);
[4, 1, 2].remove(0);
```

| Parameter  | Type | Beschreibung          |
| ---------- | ---- | --------------------- |
| indexieren | int  | Der Index (0-basiert) |


### setzen

Setzt das Element im angegebenen Index auf den angegebenen Wert

Gibt [craftweaker.api.data.IData](/vanilla/api/data/IData) zurück

```zenscript
[4, 1, 2].set(Index als int, Wert als crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parameter  | Type                                                   | Beschreibung                      |
| ---------- | ------------------------------------------------------ | --------------------------------- |
| indexieren | int                                                    | Der zu setzende Index (0-basiert) |
| wert       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Der neue Wert                     |



## Eigenschaften

| Name   | Type | Hat Getter | Hat Setter |
| ------ | ---- | ---------- | ---------- |
| grösse | int  | true       | false      |

