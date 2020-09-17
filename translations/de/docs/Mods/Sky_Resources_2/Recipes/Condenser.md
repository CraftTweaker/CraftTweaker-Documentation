# Kondensator

Das *Kondensator* Paket wird verwendet, um Rezepte für/vom Kondensator hinzuzufügen oder zu entfernen.

## Anruf

Sie können das *Kondenser* Paket mit `mods.skyresources.condenser` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack output, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Rezept entfernen

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```