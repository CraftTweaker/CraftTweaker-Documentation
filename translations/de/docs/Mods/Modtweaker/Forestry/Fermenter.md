# Fermenter

ModTweaker erlaubt es Ihnen, Fermenter-Rezepte der Forstwirtschaft hinzuzufügen oder zu entfernen

## Anruf

You can call the package using `mods.forestry.Fermenter`

## Rezept entfernen

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Rezeptzusatz

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Menge der Flüssigkeitsausgabe: FermentationWert * fluidOutputModifier

| Parameter              | Type                                           | beschreibung                                            |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------------- |
| fluidOutput            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Ausgabe des Rezepts                                     |
| ressource              | [IItemStack](/Vanilla/Items/IItemStack/)       | Artikeleingabe des Rezepts                              |
| fluidInput             | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Der flüssige Eingriff des Rezepts                       |
| Fermentationswert      | int                                            | Menge an InputFluid für organische Gegenstände benötigt |
| fluidOutputModifikator | int                                            | Ausgabemultiplikator                                    |

## Brennstoffentnahme

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Kraftstoffzusatz

```zenscript
//mods.forestry.Fermenter.addFuel(IItemStack item, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Parameter       | Type                                     | Beschreibung                                                                                      |
| --------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| eintrag         | [IItemStack](/Vanilla/Items/IItemStack/) | Gegenstand für den Gärer zu einem gültigen Treibstoff werden                                      |
| fermentPerCycle | int                                      | Wie viel wird pro Arbeitszyklus vergoren, d.h. wie viel Flüssigkeit des Eingangs verbraucht wird. |
| brenndauer      | int                                      | Die Menge der Arbeit zykliert einen einzelnen Brennstoff vor dem Auslauf.                         |