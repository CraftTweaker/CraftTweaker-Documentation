# Spatial

### Importing

    import mods.appliedenergistics2.Spatial;
    

### Adding

Whitelist a TileEntity class for Spatial IO. Warning: Some title entities, especially multiblock structures, may cause unexpected errors or crash when moved into Spatial IO. Pack devs should throughly test any additions to the Spatial IO whitelist.

    Spatial.whitelistEntity(String fullEntityClassName);
    
    //Adds the AA small storage crate to the spatial IO whitelist
    Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");