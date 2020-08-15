# Tocón de árbol

## Paquete
`importar mods.stone_age.Gestor de trompetas;`

## Metodos
- **Nombre de cadena** Nombre de la receta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Herramienta](/Vanilla/Variable_Types/IIngredient/) IIngrediente**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **chopTimes int** Corta veces
- **Grupo de cadenas** Grupo de recetas

## Adicional

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>. ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
