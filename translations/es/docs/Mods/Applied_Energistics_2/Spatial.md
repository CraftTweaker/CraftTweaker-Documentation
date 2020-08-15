# Spatial

### Importando

```zenscript
importar mods.appliedenergistics2.Spatial;
```

### Agregando

Lista blanca de una clase TileEntity para EO Espacial. Advertencia: Algunas entidades de título, especialmente estructuras multibloque, pueden causar errores inesperados o bloqueos cuando se mueven a la EI espacial. Los desarrolladores de paquetes deberían probar cualquier adición a la lista blanca de IO espacial.

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//Agrega la caja pequeña de almacenamiento AA a la lista blanca de IO espacial
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```