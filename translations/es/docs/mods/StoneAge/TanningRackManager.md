# Rack Tanning

## Paquete
`importar mods.stone_age.TanningRackManager;`

## Metodos
- **Nombre de cadena** Nombre de la receta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **[Herramienta](/Vanilla/Variable_Types/IIngredient/) IIngrediente**
- **Grupo de cadenas** Grupo de recetas

## Adicional

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack output, IIngredient input, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:tanning_rack>. ddRecipe("cuero", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "cuero");
TanningRackManager.INSTANCE.addRecipe("cuero", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "cuero");
```
