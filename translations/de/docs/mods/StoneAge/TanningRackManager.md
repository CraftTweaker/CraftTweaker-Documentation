# Bräunungsregel

## Paket
`import mods.stone_age.TanningRackManager;`

## Methoden
- **Zeichenkettenname** Rezeptname
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Werkzeug**
- **Zeichenkettengruppe** Rezeptgruppe

## Addition

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String-Name, IItemStack-Ausgabe, IIngredient Eingabe, IIngredient Tool, @OptionalString String-Gruppe)

<recipetype:stone_age:tanning_rack>. ddRecipe("Leder", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "Leder");
TanningRackManager.INSTANCE.addRecipe("Leder", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "Leder");
```
