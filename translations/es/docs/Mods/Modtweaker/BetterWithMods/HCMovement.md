# HCMovimiento

HCMovimiento efectúa la velocidad a la que el Jugador puede moverse dentro o fuera de ciertos bloques. Por ejemplo, por defecto camina más lento en hierba, pero más rápido en piedra.

El valor es un número decimal entre 0 y 2, donde 1 es la velocidad normal sin HCMovement, menos de 1 es más lento, mayor que 1 es más rápido.

HCMovement SÓLO acepta bloques como entradas.

```zenscript
mods.betterwithmods.Movement.set(ItemStack stack, valor flotante);

```