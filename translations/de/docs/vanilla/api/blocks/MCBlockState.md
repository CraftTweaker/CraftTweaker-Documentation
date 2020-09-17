# MCBlockStatus

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implementierte Schnittstellen
MCBlockState implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### getAllowedValuesForProperty

Retourenliste<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


### getEigenschaften

Gibt den String[String] zurück

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Retourenliste<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Gibt den String zurück

```zenscript
myMCBlockState.getPropertyValue(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


### hasProperty

Rückgabewert boolesch

```zenscript
myMCBlockState.hasProperty(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


### ohne Eigentum

Gibt [craftweaker.api.block.MCBlockState zurück](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(Name als String, Wert als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |
| wert      | String | Keine Beschreibung angegeben |



## Eigenschaften

| Name             | Type                                                          | Hat Getter | Hat Setter |
| ---------------- | ------------------------------------------------------------- | ---------- | ---------- |
| blockieren       | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true       | false      |
| canProvidePower  | boolean                                                       | true       | false      |
| Kommandozeile    | String                                                        | true       | false      |
| hasTileEntity    | boolean                                                       | true       | false      |
| isSolid          | boolean                                                       | true       | false      |
| isSticky         | boolean                                                       | true       | false      |
| leuchtende Stufe | int                                                           | true       | false      |
| zufällig         | boolean                                                       | true       | false      |

## Zauberer

| Ergebnis-Typ                                                  | Ist Implizit |
| ------------------------------------------------------------- | ------------ |
| String                                                        | false        |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true         |

