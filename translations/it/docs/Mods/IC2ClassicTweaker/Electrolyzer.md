# Elettrolyzer

## Pacchetto

```zenscript
import mods.ic2.ClassicElectrolyzer;
```

## Metodi

### Aggiungi Entrambe Le Ricette

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Deve essere un ItemStack, nessun oredict o altre cose.
- **int energy** Total eu received from discharge part and total energy used for charge part of the recipe.

### Aggiungi Ricetta Di Carica

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Deve essere un ItemStack, nessun oredict o altre cose.
- **int energy** Total eu used in the recipe.

### Aggiungi Ricetta Di Scarico

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Deve essere un ItemStack, nessun oredict o altre cose.
- **int energy** Total eu ricevuto dalla ricetta.

### Rimozione

Basta disabilitare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.

