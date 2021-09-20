# Arc Furnace

Das Arc Furnace package kann dazu genutzt werden um Rezepte vom Arc Furnace hinzuzufügen oder zu entfernen.

## Hinzufügen des Packages

Du kannst das paket über mods.immersiveengineering.ArcFurnace aufrufen.

## Rezept hinzufügen

| Benötigt | 类型                  | Datentyp                                                                               |
| -------- | ------------------- | -------------------------------------------------------------------------------------- |
| Benötigt | 输出                  | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Benötigt | 输入                  | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)                                |
| Benötigt | Slag                | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Benötigt | Time                | 整型                                                                                     |
| Benötigt | Energy Per Tick     | 整型                                                                                     |
| 可选       | Additives           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array[]                            |
| 可选       | Special Recipe Type | String [Spezialrezepttypen](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## Rezept entfernen

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiele:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```