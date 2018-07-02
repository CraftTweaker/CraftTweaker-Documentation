#Spatial

### Importing

```
import mods.appliedenergistics2.Spatial;
```

### Adding
Whitelist a TileEntity class for Spatial IO.
```
Spatial.whitelistEntity(String fullEntityClassName);

//Adds the AA small storage crate to the spatial IO whitelist
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```


