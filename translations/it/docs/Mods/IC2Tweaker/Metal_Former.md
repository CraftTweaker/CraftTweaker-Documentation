# Metallo Ex

## Pacchetto

`import mods.ic2.MetalFormer;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

## Aggiungi Ricetta Di Taglio

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Rimuovi La Ricetta Di Taglio

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/metal_former_cutting.ini`.
- Se si utilizza Ic2 Classic e Ic2c Extra, per rimuovere una ricetta, basta disattivare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.

## Aggiungi Ricetta Estrusione

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Rimuovi Ricetta Estrusione

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/metal_former_extruding.ini`.
- Se si utilizza Ic2 Classic e Ic2c Extra, per rimuovere una ricetta, basta disattivare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.

## Aggiungi Ricetta Rotolante

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Rimuovi La Ricetta Di Rotolamento

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/metal_former_rolling.ini`
- Se si utilizza Ic2 Classic e Ic2c Extra, per rimuovere una ricetta, basta disattivare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.