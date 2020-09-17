# Stahlwerk

Das Stahlwerk ist eine Maschine, die mit Dampf einen Eingangsgegenstand und Flüssigkeit in einen Ausgangsgegenstand umwandelt.

## Anruf

Du kannst das Stahlwerkspaket mit `mods.steamagerevolution.Steelworks` aufrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept, das sie mit dem angegebenen [IItemStack finden](/Vanilla/Items/IItemStack/) `Ausgang`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack Ausgabe);

// Beispiele
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Diese Funktion entfernt *alle* Rezepte, die derzeit für Stahlwerke definiert sind:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Hinzufügen

Diese Funktion wird verwendet, um neue Rezepte für die Stahlwerke hinzuzufügen:

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack Input, IIngredient input2, IItemStack Output, int craftTime, int steamCost);

// Beispiele
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
