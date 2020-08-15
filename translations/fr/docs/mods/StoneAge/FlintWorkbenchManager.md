# Établi en silex

## Paquet
`Importer mods.stone_age.FlintWorkbenchManager ;`

## Méthodes
- **Nom de la chaîne de caractères** Nom de la recette
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) outil** Outil d'artisanat
- **Groupe de chaînes** de recettes

## Ajouter

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack sortie, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString group)

<recipetype:stone_age:flint_workbench>. ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
