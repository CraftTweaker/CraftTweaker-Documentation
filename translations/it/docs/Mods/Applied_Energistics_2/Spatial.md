# Spatial

### Importazione

```zenscript
import mods.Appledenergistics2.Spatial;
```

### Aggiunta

Whitelist a TileEntity class for Spatial IO. Attenzione: alcune entità del titolo, in particolare le strutture multiblock, possono causare errori imprevisti o crash quando spostati nello Spatial IO. Pack devs dovrebbe attraverso testare tutte le aggiunte alla whitelist Spatial IO.

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//Aggiunge la piccola cassa di archiviazione AA alla whitelist spaziale IO
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```