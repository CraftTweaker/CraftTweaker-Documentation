# Mana Infusion

Il pacchetto ManaInfusion viene utilizzato per aggiungere o rimuovere ricette da/per Botania ManaPool.

## Chiamata

Puoi chiamare il pacchetto ManaInfusion usando `mods.botania.ManaInfusion`

## Trova tutte le ricette registrate

Puoi trovare tutte le ricette di ManaInfusion registrate utilizzando [`/ct infusioni di botania`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

```zenscript
//mods.botania.ManaInfusion.addInfusion(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack output, IIngredient input, int mana);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Rimozione ricetta

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```