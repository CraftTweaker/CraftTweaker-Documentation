# HCFurnace

Das HCOfen Feature macht es so, dass Ofenrezepte je nach Schmelzgegenstand unterschiedlich viel Zeit in Anspruch nehmen können. Dies wirkt sich nicht auf die Funktionsweise von Kraftstoff aus, was bedeutet, dass einige Rezepte mehr oder weniger Kraftstoff benötigen.

Ermöglicht die Einstellung der Zeit in Ticks, dass es ein bestimmtes Ofenrezept benötigt, um basierend auf seinem Eingabegegenstand zu schmelzen

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient ingredient, int time)

  //Machen Sie eine Kartoffel dauert etwa 83 Minuten um zu schmelzen, weil warum nicht
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>,100000); 
```