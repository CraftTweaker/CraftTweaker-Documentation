# Legante Dell’Anima

## Pacchetto

`import mods.enderio.SoulBinder;`

## Metodo

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'ingrediente principale (non-soul vial).
- **String[] entità** Entità ammesse che devono essere presenti in una fiala dell'anima perché questa ricetta possa funzionare.
- **int xp** The Experience cost for this ricetta
- **int energyCost** Quanto FE usa la ricetta. Predefinito a 5000.

## Addizione

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack output, IIngredient input, String[] entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Rimozione

```zenscript
mods.enderio.SoulBinder.removeRecipe(IItemStack output);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```