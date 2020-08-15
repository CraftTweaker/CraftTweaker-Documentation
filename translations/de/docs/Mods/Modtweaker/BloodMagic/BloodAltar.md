# Blutaltaren

## Paket

`mods.bloodmagic.BloodAltar`

## Addition

Dadurch wird ein Blutaltarrezept erzeugt, das den `Eingabewert` verwendet und den angegebenen `Ausgabe` Gegenstand erzeugt.  
Um die `minimumTier`zu erhalten , substract 1 von dem, was JEI/das Silber dir mitteilt, so dass ein T1-Altar `0`benötigt.  
Der `Syphon` Wert ist die Menge der LebensEssenz die im Laufe des Handwerks vom Blutaltar-Syphon syphon aus dem Blutaltar.  
Die `Verbrauchsrate` ist wie schnell die LebensEssenz geschnürt wird.  
Die `drainRate` ist, wie schnell der Fortschritt verloren geht, wenn der Blutaltar-Altar während der Fahrt nicht mehr lebenswichtig ist.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(IItemStack Output, IItemStack Input, int minimumTier, int syphon, int consumeRate, int drainRate);
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## Entfernen

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(IItemStack input);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```