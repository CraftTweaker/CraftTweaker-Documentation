# Spatial

### Importieren

```zenscript
importieren mods.appliedenergistics2.Spatial;
```

### Hinzufügen

Whitelist eine TileEntity Klasse für Spatial IO. Warnung: Einige Titel-Entitäten, insbesondere Multiblock-Strukturen, können zu unerwarteten Fehlern oder zum Absturz führen, wenn sie in Spatial IO verschoben werden. Pack devs sollte alle Ergänzungen zur Spatial IO Whitelist gründlich testen.

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//Fügt die AA kleine Speicherkiste zur räumlichen IO Whitelist
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```