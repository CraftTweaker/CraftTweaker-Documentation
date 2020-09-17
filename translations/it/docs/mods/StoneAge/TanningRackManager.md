# Rack Di Tanning

## Pacchetto
`import mods.stone_age.TanningRackManager;`

## Metodi
- **Nome stringa** Nome ricetta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **[Strumento IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **Gruppo di stringhe** Gruppo di ricette

## Addizione

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(nome stringa, uscita IItemStack, ingresso IIngrediente, strumento IIngrediente, @OptionalString String group)

<recipetype:stone_age:tanning_rack>. ddRecipe("pelle", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "pelle");
TanningRackManager.INSTANCE.addRecipe("pelle", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "pelle");
```
