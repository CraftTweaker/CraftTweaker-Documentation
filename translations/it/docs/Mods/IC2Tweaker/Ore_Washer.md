# Rondella Minerale

## Pacchetto

`import mods.ic2.OreWasher;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Optional int water** Quantità di acqua necessaria per un ciclo di lavorazione di questa ricetta, misurata in mB. Predefinito a 1000 se non indicato.

## Addizione

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] outputs, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Rimozione

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/ore_washer.ini`
- Se si utilizza Ic2 Classic e Ic2c Extra, per rimuovere una ricetta, basta disattivare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.