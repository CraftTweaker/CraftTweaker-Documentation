# Rack de Tannage

## Paquet
`Importer mods.stone_age.TanningRackManager;`

## Méthodes
- **Nom de la chaîne de caractères** Nom de la recette
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**
- **[Outil Igredient](/Vanilla/Variable_Types/IIngredient/)**
- **Groupe de chaînes** de recettes

## Ajouter

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack sortie, Entrée IIngredient, IIngredient tool, @OptionalString group)

<recipetype:stone_age:tanning_rack>. ddRecipe("cuir", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "cuir");
TanningRackManager.INSTANCE.addRecipe("cuir", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "cuir");
```
