# Smerigliatrice Rock

Il pacchetto *rockgrinder* viene utilizzato per aggiungere o rimuovere ricette a/da Rock Grinder.

## Chiamata

Puoi chiamare il pacchetto *rockgrinder* usando `mods.skyresources.rockgrinder`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```