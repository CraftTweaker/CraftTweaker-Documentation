# Ogrzewanie basenów

## Dodanie

```zenscript
importuj mods.cuisine.BasinHeating;

BasinHeating.add(ILiquidStack, wyjście IItemStack); // Użyj 1 jako wartości ciepła
BasinHeating. dd(ILiquidStack, moc wyjściowa IItemStack, wartość opałowa);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## Usuwanie

```zenscript
importuj mods.cuisine.BasinHeating;

// Usuń przez wejście.
BasinHeating.remove(ILiquidStack);

BasinHeating.remove(<liquid:lava> * 1000);

// Usuń przez identyfikator.
BasinHeating.remove(String id);

BasinHeating.remove("recipe_name");

// Usuń wszystko!
c. „oprogramowanie” specjalnie zaprojektowane lub zmodyfikowane do „rozwoju”, „produkcji” lub „użytkowania” sprzętu wyszczególnionego w pozycji 2B001;
```