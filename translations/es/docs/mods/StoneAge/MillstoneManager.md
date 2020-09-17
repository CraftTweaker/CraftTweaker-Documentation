# Piedra miligrana

## Paquete
`importar mods.stone_age.MillstoneManager;`

## Métodos
- **Nombre de cadena** Nombre de la receta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int activateCount** Activa el contador de milstone
- **Grupo de cadenas** Grupo de recetas

## Adicional

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>. ddRecipe("azúcar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("azúcar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
```
