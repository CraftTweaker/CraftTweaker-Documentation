# Four à arc

Le paquet de fours d'arc peut être utilisé pour ajouter/retirer des recettes vers/depuis le four à arc Immersif.

## Appeler le paquet

Vous pouvez appeler le paquet ArcFurnace en utilisant `mods.immersiveengineering.ArcFurnace`.

## Ajouter une recette

| Requis    | Type de texte           | Type de données                                                                      |
| --------- | ----------------------- | ------------------------------------------------------------------------------------ |
| Requis    | Sortie                  | [IItemStack](/Vanilla/Items/IItemStack/)                                             |
| Requis    | Input                   | [Ingrédient](/Vanilla/Variable_Types/IIngredient/)                                   |
| Requis    | Slag                    | [IItemStack](/Vanilla/Items/IItemStack/)                                             |
| Requis    | Date et heure           | Nombre entier                                                                        |
| Requis    | Énergie par tick        | Nombre entier                                                                        |
| Optionnel | Additifs                | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) Tableau[]                         |
| Optionnel | Type de recette spécial | Chaîne [speciRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack, IIngredient input, IItemStack slag, int energyPerTick, @Optional IIngredient[] additifs, @Optional String specialRecipeType);

mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048 );
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alliage");
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```