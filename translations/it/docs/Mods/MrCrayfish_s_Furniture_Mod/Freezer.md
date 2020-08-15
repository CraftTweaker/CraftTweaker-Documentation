# Congelatore

Il congelatore è lo scomparto inferiore del frigo.

Può essere usato per congelare gli oggetti, ma richiede il ghiaccio per funzionare.

## Ricette Congelatore Predefinite

- Secchio D'Acqua -> Ghiaccio
- Ghiaccio -> Ghiaccio Imballato
- Secchio Di Lava -> Ossidiana
- Slimeball -> Palla di neve
- Patata Velenosa -> Patata
- Carne Marcata -> Carne

## Rimozione

## Rimuovere le ricette del congelatore corrispondente.

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient);

// Rimuovi le ricette che producono il ghiaccio
mods.cfm.Freezer. emove(<minecraft:ice>);
// Rimuovi ricette che richiedono un secchio di lava
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Rimuovi tutte le ricette
mods.cfm.Freezer.remove();
```

## Aggiunta

Aggiungi una ricetta freezer.

## Supporta solo ingressi di dimensione 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta che fa 16 Ghiaccio da un secchio di lava
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Aggiunge una ricetta che rende 16 Ossidiana da un Secchio Acqua
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Aggiunge una ricetta che fa un secchio d'acqua da un secchio
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```