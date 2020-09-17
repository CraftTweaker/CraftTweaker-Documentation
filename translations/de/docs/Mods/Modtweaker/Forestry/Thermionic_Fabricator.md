# Thermionischer Fabrikator

ModTweaker erlaubt es Ihnen, Thermionische Fabrikator-Rezepte hinzuzufügen oder zu entfernen

## Anruf

Sie können das Paket mit `mods.forestry.ThermionicFabricator` anrufen

## Rezept/Bestrahlung

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngrediente Produkt);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Rezept/Cast-Zusatz

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack Output, IIngredient[][] Zutaten, ILiquidStack liquidStack, @Optional IItemStack plan);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null],[null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Schmelzung entfernen

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Schmelzzusatz

Du kannst jede Flüssigkeit im Spiel als Ergebnis des Schmelzens hinzufügen aber derzeit wird nur `<liquid:glass>` </code> empfohlen, da es bei anderen Flüssigkeiten zu Fehlern kommt.

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```