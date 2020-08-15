# Termioniczna Fabricator

ModTweaker pozwala na dodanie lub usunięcie z leśnych przepisw termiotycznych Fabricator

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.ThermionicFabricator`

## Przepis/Usuwanie

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(produkt typu IIngredient);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Przepis / Dodanie do Obsady

```zenscript
//mods.forestry.ThermionicFabricator.addCast(wyjście IItemStack, IIngredient[][] składniki, ILiquidStack liquidStack, @Optional IItemStack);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Wytapianie

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(ISkładniki itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Dodanie do Przetapiania

Możesz dodać każdą ciecz w grze w wyniku wytapiania, ale obecnie zalecane jest tylko `<liquid:glass>` z powodu błędów z innymi płynami.

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```