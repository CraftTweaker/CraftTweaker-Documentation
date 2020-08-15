# Centrifuga Termica

## Pacchetto

`import mods.ic2.ThermalCentrifuge;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Optional int minHeat**

## Addizione

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] outputs, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Rimozione

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/thermal_centrifuge.ini`
- Se si utilizza Ic2 Classic e Ic2c Extra, per rimuovere una ricetta, basta disattivare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.