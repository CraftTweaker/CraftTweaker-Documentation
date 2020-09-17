# Banco de trabajo de cilinte

## Paquete
`importar mods.stone_age.FlintWorkbenchManager;`

## Métodos
- **Nombre de cadena** Nombre de la receta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] inputMATIx**
- **[Herramienta IIngrediente](/Vanilla/Variable_Types/IIngredient/)** Herramienta de elaboración
- **Grupo de cadenas** Grupo de recetas

## Adicional

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack output, IIngredient[][] inputMography, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>. ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
