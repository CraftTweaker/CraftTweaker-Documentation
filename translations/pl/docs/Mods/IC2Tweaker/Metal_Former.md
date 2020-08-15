# Poprzedni Metal

## Pakiet

`importuj mods.ic2.MetalFormer;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**

## Dodaj przepis na cięcie

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(wyjście IItemStack, Wejście IIngredienta);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Usuń przepis na cięcie

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiednią linię w `config/ic2/metal_former_cutting.ini`.
- Jeśli używasz dodatków Ic2 Classic i Ic2c, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.

## Dodaj Wyciągający Przepis

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(wyjście IItemStack, Wejście IIngredienta);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Usuń Wyciągający Przepis

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiednią linię w `config/ic2/metal_former_extruding.ini`.
- Jeśli używasz dodatków Ic2 Classic i Ic2c, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.

## Dodaj przepis na rolkę

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(wyjście IItemStack, Wejście IIngredienta);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Usuń przepis na rolkę

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiednią linię w `config/ic2/metal_former_rolling.ini`
- Jeśli używasz dodatków Ic2 Classic i Ic2c, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.