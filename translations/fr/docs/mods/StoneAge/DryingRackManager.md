# Chevalet de séchage

## Paquet
`Importer mods.stone_age.DryingRackManager;`

## Méthodes
- **Nom de la chaîne de caractères** Nom de la recette
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **int dryingTime** Temps de séchage en ticks
- **Groupe de chaînes** de recettes

## Ajouter

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString group)

<recipetype:stone_age:drying_rack>. ddRecipe("viande séchée", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "aliments");

DryingRackManager.INSTANCE.addRecipe("viande séchée", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "aliments");
```
