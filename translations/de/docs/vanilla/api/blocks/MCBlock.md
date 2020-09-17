# MCBlock

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.block.MCBlock
```

## Methoden
### canSpawnInBlock

Rückgabewert boolesch

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Gibt [craftweaker.api.block.MCBlockState zurück](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Eigenschaften

| Name           | Type   | Hat Getter | Hat Setter |
| -------------- | ------ | ---------- | ---------- |
| lootTable      | String | true       | false      |
| translationkey | String | true       | false      |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | false        |

