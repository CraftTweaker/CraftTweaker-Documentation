# Yunque

## Paquete
```zenscript
import mods.terrafirmacraft.Anvil;Yunque;
```

## Adicional

```zenscript
Anvil.addRecipe(String registryName, IIngredient entrada, ItemStack salida, int minTier, String SkillType, String... forgeRules);
```
- La entrada no puede ser apilada. Los yunques sólo aceptan un elemento por slot.
- la entrada debe ser forjable (por favor consulte [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) para registrar la capacidad de forja a un artículo).
- Los niveles son 0 = Piedra, 1 = Cobre, 2 = bronce, 3 = Hierro forjado, 4 = Acero, 5 = Acero Negro y 6 = Acero Rojo/Azul.
- El tipo de habilidad es a qué categoría de habilidad debe contribuir la forja. Las entradas válidas son `generales`, `herramientas`, `armas`, `armadura`o nulas. Si el tipo de habilidad es `herramientas`, `armas`, o `armadura` entonces el objeto resultante tendrá un bono de habilidad aplicado a él.
- Una receta debe tener 1, 2 o 3 reglas. Las reglas consisten en un tipo (`HIT`, `DRAW`, `PUNCH`, `BEND`, `UPSET`, o `SHRINK`), seguido por una orden (`ANY`, `NOT_LAST`, `Última`, `SECOND_LAST`, `THIRD_LAST`), separados por un guión bajo. Por ejemplo, `HIT_ANY`, `DRAW_SECOND_LAST`y `UPSET_NOT_LAST` son nombres de reglas válidos.

## Eliminar

```zenscript
Yvil.removeRecipe(salida IItemStack);
Yvil.removeRecipe(String registryName);
```