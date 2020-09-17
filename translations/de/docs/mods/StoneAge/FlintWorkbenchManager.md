# Feuerwerksbank

## Paket
`importiere mods.stone_age.FlintWorkbenchManager;`

## Methoden
- **Zeichenkettenname** Rezeptname
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Werkzeug** Herstellungswerkzeug
- **Zeichenkettengruppe** Rezeptgruppe

## Addition

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack output, IIngredient[][] inputMatrix, IIngredient Tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>. ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
