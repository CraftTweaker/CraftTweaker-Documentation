# Compattatore

## Pacchetto

`mods.thermalexpansion.Compactor`

Il compattatore supporta 4 tipi di modificatori:

    Menta
    Premi
    Magazzino
    Gear
    

## Menta

Il modificatore della zecca cambia le ricette registrate nella mappa delle ricette `COIN` nell'espansione termica.

Si noti che queste ricette richiedono l'incremento della stampa Numismatica.

### Addizione

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Rimozione

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Stampa

Il modificatore stampa cambia le ricette non registrate nel `PLATE`, `COIN`, o `GEAR` ricette mappe in espansione termica.

Queste ricette non richiedono un aumento specifico.

### Addizione

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Rimozione

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Archiviazione

Il modificatore Storage cambia le ricette registrate nella mappa delle ricette `PLATE` in espansione termica.

Queste ricette non richiedono un aumento specifico, e apparentemente sono utilizzate solo per i piatti.

### Addizione

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Rimozione

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Attrezzo

Il modificatore dell'ingranaggio cambia le ricette registrate nella mappa delle ricette `GEAR` nell'espansione termica.

Nota che queste ricette richiedono il Gearworking Die Augment.

### Addizione

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Rimozione

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```