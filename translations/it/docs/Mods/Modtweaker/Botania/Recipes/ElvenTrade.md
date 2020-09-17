# Commercio Degli Elfi

Il pacchetto ElvenTrade viene utilizzato per aggiungere o rimuovere ricette da/per il portale Botania ad Alfheim.

## Chiamata

Puoi chiamare il pacchetto ElvenTrade utilizzando `mods.botania.ElvenTrade`

## Trova tutte le ricette registrate

Puoi trovare tutte le ricette ElvenTrade registrate utilizzando [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] outputs, IIngredient[] input);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Rimozione ricetta

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```