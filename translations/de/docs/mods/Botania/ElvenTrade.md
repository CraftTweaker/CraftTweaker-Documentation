# Botania Elfenhandel

Elven Trade ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird drei Rezepte zum Elfenhandel hinzufügen, die Rezepte werden folgendes tun: 1) Wenn Glas durch ein Elfenportal geworfen wird, wird ein Stück Erde zurückgegeben. 2) Wenn ein Glowstone-Block und eine Gelbe Wolle durch ein Elfenportal geworfen werden, wird ein Apfel zurückgegeben. 3) Wenn ein Stück Redstone-Staub durch ein Elfenportal geworfen wird, wird ein Apfel und ein Lapis Lazuli Block zurückgegeben.

```zenscript
// <recipetype:botania:elven_trade>.addRecipe(String name, IItemStack[] outputs, IIngredient... inputs)

<recipetype:botania:elven_trade>.addRecipe("elven_trade_test", [<item:minecraft:dirt>], <item:minecraft:glass>);
<recipetype:botania:elven_trade>.addRecipe("elven_trade_multiple_test", [<item:minecraft:apple>], <item:minecraft:glowstone>, <item:minecraft:yellow_wool>);
<recipetype:botania:elven_trade>.addRecipe("elven_trade_multiple_multiple_test", [<item:minecraft:apple>, <item:minecraft:lapis_block>], <item:minecraft:redstone>);
```

#### Remove Recipes


##### Einzelne Item Outputs

Das folgende Skript wird alle Rezepte aus dem Elfenhandel entfernen, die einen Drachenstein ausgeben.

```zenscript
// <recipetype:botania:elven_trade>.removeRecipe(IItemStack output);

<recipetype:botania:elven_trade>.removeRecipe(<item:botania:dragonstone>);
```

##### Mehrere Item Outputs

Das folgende Skript wird alle Rezepte aus dem Elfenhandel entfernen, die einen Drachenstein und einen Diamanten ausgeben.

**HINWEIS:**

Dies ist kein gültiges Rezept im Spiel mit nur Botania allein, Elven Trading unterstützt die Ausgabe mehrerer Items, aber hat keine Rezepte eingebaut, die mehrere Items ausgeben.

```zenscript
// <recipetype:botania:elven_trade>.removeRecipe(IItemStack[] output);

<recipetype:botania:elven_trade>.removeRecipe([<item:botania:dragonstone>, <item:minecraft:diamond>]);
```