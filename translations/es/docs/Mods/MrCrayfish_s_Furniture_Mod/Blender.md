# Blender

El Blender combina objetos juntos, dando lugar a una bebida que restaura comida y saturación.

## Bebidas de Vanilla

- Fruit Crush (2 Manzanas, 4 x Melon) para 4 comida.
- Jugo de Veggie (Zanahoria 4x, Potato 1x, Tarta de Calabaza 2x) para 6 comida.
- Batido de crema y galletas (2x galletas, 1x cubo de leche) para 4 alimentos.
- Bebida Energética (8x Redstone, 1x Fire Carga, 16x Sugar) para 8 comida.

## Eliminando Bebidas

## Quite las bebidas mezcladas correspondientes.

```zenscript
mods.cfm.Blender.remove(@Nombre de cadena final opcional, @Optional final ItemStack[] ingredientes, @Optional final Integer food, @Optional final int[] colour);

// Quitar bebida llamada "Fruit Crush"
mods.cfm.Blender. emove("Fruit Crush");
// Elimina las bebidas que requieren una zanahoria, una papa y una tarta de calabaza para crear
mods. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Eliminar todas las bebidas
mods.cfm.Blender.remove();
```

## Agregando Bebidas

Añadir una bebida mezclada.

## Actualmente, la saturación y el valor de los alimentos no pueden establecerse independientemente.

```zenscript
mods.cfm.Blender. ddDrink(@Nonnull final String name, @Nonnull final ItemStack[] ingredientes, final int food, @Nonnull final int[] color);

// Agrega una bebida llamada "Nieve de agua" que es de color rosa y restaura 20 alimentos y 20 saturaciones que requieren 8 rebanadas de melon y 4 bolas de nieve para fabricar
mods. fm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```