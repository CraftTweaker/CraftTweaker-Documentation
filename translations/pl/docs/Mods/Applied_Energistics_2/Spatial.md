# Spatial

### Importowanie

```zenscript
importuj mods.applied iedenergistics2.Spatial;
```

### Dodawanie

Biała lista klasy TileEntity dla IO Ostrzeżenie: Niektóre jednostki tytułowe, zwłaszcza struktury wieloblokowe, mogą powodować nieoczekiwane błędy lub awarie po przeniesieniu do IO przestrzennego. Dewelopery paczki powinny przez cały czas testować wszelkie dodatki do białej listy IO przestrzennych.

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//Dodaje małą skrzynkę AA do białej listy przestrzennej IO
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```