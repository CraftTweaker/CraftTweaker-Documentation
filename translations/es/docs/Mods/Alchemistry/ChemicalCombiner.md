# Combinador Químico

# Paquete
```zenscript
mods.alchemistry.CombinerCombinador
```

## Métodos
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** - La salida de la receta.

- **[ItemStack](/Vanilla/Items/IItemStack/)[] entrada** - Las entradas de la receta.


## Adicional
```zenscript
mods.alchemistry.AtomizerCombiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Eliminar
```zenscript
mods.alchemistry.AtomizerCombiner.removeRecipe(IItemStack output);
mods.alchemistry.mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();Combiner.removeAll-Recetas ();
```


# Integración de fases del juego

## Nuevas recetas
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Receta existente

```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
