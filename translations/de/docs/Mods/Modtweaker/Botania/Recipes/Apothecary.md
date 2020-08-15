# Petal-Apotheke

Das Apotheker-Paket wird zum Hinzufügen oder Entfernen von Rezepten in die Botanische Petal-Apotheke verwendet.

## Anruf

Sie können das Apothecary Paket mit `mods.botania.Apothecary` anrufen

## Rezeptzusatz

Sie können entweder Rezepte mit dem zurückgegebenen [IItemStack](/Vanilla/Items/IItemStack/) als Ausgangsparameter hinzufügen, oder den Namen der Botanischen Blume als String. der Streichername funktioniert nur für botanische Blumen.  
Denk aber an eines:  
Die Apotheke ist **Hardcodiert, um nur Blätter zu akzeptieren**, so dass du Rezepte mit beliebigen Zutaten hinzufügen kannst, solltest du nur Gegenstände verwenden, die du in die Apotheke werfen kannst.

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[] eingeben);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods. otania.Apothecary.addRecipe(String Output, IIngredient[] Eingabe);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Rezept-Entfernung

Sie können entweder Rezepte mit dem zurückgegebenen [IItemStack](/Vanilla/Items/IItemStack/) als Ausgabe-Parameter entfernen oder den Namen der botanischen Blume als String. der Streichername funktioniert nur für botanische Blumen.

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```