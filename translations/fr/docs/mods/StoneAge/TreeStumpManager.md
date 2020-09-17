# Souche d'arbre

## Paquet
`Importer mods.stone_age.TreeStumpManager ;`

## Méthodes
- **Nom de la chaîne de caractères** Nom de la recette
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Outil Igredient](/Vanilla/Variable_Types/IIngredient/)**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **int chopTimes** Coup de pied fois
- **Groupe de chaînes** de recettes

## Ajouter

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack sortie, outil IIngrédient, Entrée Igredient, int chopTimes, @OptionalString group)

<recipetype:stone_age:tree_stump>. ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
