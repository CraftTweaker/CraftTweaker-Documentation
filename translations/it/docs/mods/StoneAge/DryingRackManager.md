# Rack Di Essiccazione

## Pacchetto
`import mods.stone_age.DryingRackManager;`

## Metodi
- **Nome stringa** Nome ricetta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int dryingTime** Tempo di asciugatura in zecche
- **Gruppo di stringhe** Gruppo di ricette

## Addizione

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(nome stringa, output IItemStack, input IIngrediente, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>. ddRecipe("dried_carne", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_carne", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
