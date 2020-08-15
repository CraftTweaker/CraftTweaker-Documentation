# Altare Rune

Il pacchetto RuneAltar viene utilizzato per aggiungere o rimuovere ricette da/per l'altare Rune Botania.

## Chiamata

Puoi chiamare il pacchetto RuneAltar usando `mods.botania.RuneAltar`

## Trova tutte le ricette registrate

Puoi trovare tutte le ricette di Altare Runa registrate usando [`/ct botania altare`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack output, IIngredient[] input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Rimozione ricetta

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```