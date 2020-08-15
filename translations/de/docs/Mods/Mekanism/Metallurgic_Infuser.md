# Metallurgische Infuser

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezeptstrings der Metallurgischen Infuser über den Befehl `/ct mekrecipes metallurgicInfuser` anzuzeigen

## Infusionstyp String

Sowohl das Hinzufügen als auch das Entfernen von Rezepten erfordern eine "Infusionsart"-Zeichenkette. Standardbeispiele aus Mekanismus sind:

| Infus-Typ  | Hinzugefügt von |
| ---------- | --------------- |
| "CARBON"   | Mekanism        |
| "TIN"      | Mekanism        |
| "DIAMOND"  | Mekanism        |
| "REDSTONE" | Mekanism        |
| "FUNGI"    | Mekanism        |
| "BIO"      | Mekanism        |
| "OBSIDIAN" | Mekanism        |

Wenn eine andere Mod einen neuen Infusionstyp registriert, dieser Typ kann sowohl in CraftTweaker als auch solange verwendet werden, wie der Name des registrierten Typs genau angegeben ist. NOTE: It is *not* possible to define **new** infusion *types* with CraftTweaker

Ab dem Mekanism 9.7.0 ist es nun möglich, alle registrierten Infusionen (einschließlich derjenigen anderer Modes) über den Befehl `/ct infuseTypes` anzuzeigen

## Addition

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optionaler String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Metallurgie-Infuser-Rezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```