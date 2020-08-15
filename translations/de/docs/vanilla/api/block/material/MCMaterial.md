# MCMaterial

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Methoden
### blocksbewegung

Gibt zurück, wenn dieses Material als solide betrachtet wird oder nicht

Rückgabewert boolesch

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Ruft den Farbindex des Blocks ab. Dies ist die gleiche Farbe, die Vanille-Karten verwenden, um diesen Block zu repräsentieren.

Gibt [crafttweaker.api.block.material.MCMaterialColor zurück](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isistimmend

Gibt zurück, wenn der Block brennen kann oder nicht.

Rückgabewert boolesch

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Gibt zurück, wenn Blöcke dieser Materialien Flüssigkeiten sind.

Rückgabewert boolesch

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Zeigt an, ob das Material undurchsichtig ist

Rückgabewert boolesch

```zenscript
myMCMaterial.isOpaque();
```

### unveränderbar

Gibt zurück, ob das Material durch andere Blöcke ersetzt werden kann, wenn es platziert wird - zB Schnee, Reben und großes Gras.

Rückgabewert boolesch

```zenscript
myMCMaterial.isErsetzbar();
```

### isSolid

Gibt wahr aus, wenn der Block als solide gilt. Dies ist standardmäßig der Fall.

Rückgabewert boolesch

```zenscript
myMCMaterial.isSolid();
```

### isToolNoterforderlich

Gibt wahr aus, wenn das Material ohne Werkzeug (oder mit dem falschen Tool) geerntet werden kann

Rückgabewert boolesch

```zenscript
myMCMaterial.isToolNotRequired();
```


