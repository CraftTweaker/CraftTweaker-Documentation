# Moulinet

## Paquet
`Importer mods.stone_age.MillstoneManager ;`

## Méthodes
- **Nom de la chaîne de caractères** Nom de la recette
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **int activateCount** Activer le comptage de millstone
- **Groupe de chaînes** de recettes

## Ajouter

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString group)

<recipetype:stone_age:millstone>. ddRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
```
