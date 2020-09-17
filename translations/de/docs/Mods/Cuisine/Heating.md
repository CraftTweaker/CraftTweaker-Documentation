# Becken Heizung

## Addition

```zenscript
import mods.cuisine.BasinHeating;

BasinHeating.add(ILiquidStack-Eingang, IItemStack-Ausgabe); // 1 als Wärmewert verwenden
BasinHeating. dd(ILiquidStack-Eingang, IItemStack-Ausgabe, int heatValue);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## Entfernen

```zenscript
import mods.cuisine.BasinHeating;

// Durch Eingabe entfernen.
BasinHeating.remove(ILiquidStack Eingang);

BasinHeating.remove(<liquid:lava> * 1000);

// Entfernen durch Identifikator.
BasinHeating.remove(String id);

BasinHeating.remove("recipe_name");

// Alles entfernen!
BasinHeating.removeAll();
```