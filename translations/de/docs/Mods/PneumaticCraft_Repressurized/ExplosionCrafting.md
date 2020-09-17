# Explosionsherstellung

Explosionsherstellung wird verwendet, um ein Item in ein anderes umzuwandeln, indem es einer Explosion ausgesetzt wird, wenn es sich um einen Gegenstand auf dem Boden handelt. Es kann eine konfigurierbare (zufällig) Verlustrate angegeben werden. Standardmäßig wird dies verwendet, um Eiseneinnahmen in komprimierte Eiseneinnahmen mit einer Verlustrate von 20% umzuwandeln.

## Anruf

Du kannst das Explosion Crafting Paket mit `mods.pneumaticcraft.explosioncrafting` aufrufen

## Entfernen

Diese Funktion entfernt das erste gefundene Rezept mit der angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) `Ausgabe`:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngrediente Ausgabe);
// Beispiel
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Diese Funktion entfernt *alle* Explosionsherstellungsrezepte:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## Hinzufügen

Diese Funktionen werden verwendet, um neue Explosionsherstellungsrezepte hinzuzufügen:

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack Input, IItemStack Output, int verlu_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry Input, IItemStack Output, int verlu_rate);

// Beispiel
mods. neumaticcraft.explosioncrafting.removeAllRecipes();
// Ein Expertenmodus-Paket könnte aus Eisen eine sehr schlechte Wahl machen, und Stahl viel besser.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting. ddRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// Eine Möglichkeit, viele Netherziegel herzustellen, für (im Durchschnitt) 4x die Kosten von Netherrack
Mods. neumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```