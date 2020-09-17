# MCBiome

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methoden
### gettemperatur

Rückgabetyp: Float

```zenscript
myMCBiome.getTemperature(Pos als crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Beschreibung                 |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| posten    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Keine Beschreibung angegeben |



## Eigenschaften

| Name               | Type    | Hat Getter | Hat Setter |
| ------------------ | ------- | ---------- | ---------- |
| kategorie          | String  | true       | false      |
| tiefe              | float   | true       | false      |
| regen              | boolean | true       | false      |
| betreibt Schnee    | boolean | true       | false      |
| fallen             | float   | true       | false      |
| isHighfeuchtigkeit | boolean | true       | false      |
| regnertyp          | String  | true       | false      |
| skalieren          | float   | true       | false      |
| wasserfarbe        | int     | true       | false      |
| waterFogColor      | int     | true       | false      |

