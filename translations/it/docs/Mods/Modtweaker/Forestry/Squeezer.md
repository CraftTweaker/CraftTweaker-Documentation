# Squeezer

ModTweaker consente di aggiungere o rimuovere la silvicoltura Squeezer Ricette

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.Squeezer`

## Rimozione Ricetta

Attenzione, non è possibile rimuovere le ricette che riempiono o drenano contenitori fluidi, come lattine forestali!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquid, @Optional IIngredient[] ingredienti);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Aggiunta Ricetta

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] ingredienti, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Parametro   | Tipo                                                   | descrizione                                           |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------- |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)         | L'output della Recipe's                               |
| ingredienti | [IItemStack](/Vanilla/Items/IItemStack/)[]             | The Recipe's item input(s)                            |
| timePerItem | int                                                    | Quantità di inputFluido su elemento organico richiede |
| itemOutput  | [PesoElemento Pila](/Vanilla/Items/WeightedItemStack/) | Moltiplicatore di uscita                              |