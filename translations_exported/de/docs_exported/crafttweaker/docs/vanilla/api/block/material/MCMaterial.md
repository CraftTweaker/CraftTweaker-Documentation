# MCMaterial

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Implementierte Schnittstellen
MCMaterial implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### blocksbewegung

Gibt zurück, wenn dieses Material als solide betrachtet wird oder nicht

Rückgabetyp: boolesch

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Ruft den Farbindex des Blocks ab. Dies ist die gleiche Farbe, die Vanille-Karten verwenden, um diesen Block zu repräsentieren.

Rückgabetyp: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isistimmend

Gibt zurück, wenn der Block brennen kann oder nicht.

Rückgabetyp: boolesch

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Gibt zurück, wenn Blöcke dieser Materialien Flüssigkeiten sind.

Rückgabetyp: boolesch

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Zeigt an, ob das Material undurchsichtig ist

Rückgabetyp: boolesch

```zenscript
myMCMaterial.isOpaque();
```

### unveränderbar

Gibt zurück, ob das Material durch andere Blöcke ersetzt werden kann, wenn es platziert wird - zB Schnee, Reben und großes Gras.

Rückgabetyp: boolesch

```zenscript
myMCMaterial.isErsetzbar();
```

### isSolid

Gibt wahr aus, wenn der Block als solide gilt. Dies ist standardmäßig der Fall.

Rückgabetyp: boolesch

```zenscript
myMCMaterial.isSolid();
```


## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |

