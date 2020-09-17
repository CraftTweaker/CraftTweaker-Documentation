# Registro del artículo

## Paquete
```zenscript
// Imports ItemRegistry methods into your script
import mods.terrafirmacraft.ItemRegistry;Registro de objetos;
```

## Registrar tamaño del elemento
- Registrar tamaño y peso del artículo. Esto cambia cuánto puede contener una pila.
- Tamaños [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Peso [VERY_LÍGHT, LÍGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(entrada IIngredient, tamaño de cadena, peso de cadena);
```

## Registrar elemento calor
- Registrar la capacidad de calor del elemento y si este elemento es forjable (por ejemplo: se puede utilizar en yunque).
- La capacidad de calor determina la rapidez con la que un objeto se enfría/calienta. El hierro forjado es 0.35.
- La temperatura media es la temperatura a la que el elemento está fundido. El hierro forjado es 1535 Blanco Brillante mientras que el bronce es 950 Naranja. Para una referencia completa, consulte [Temperaturas de calefacción](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(Entrada IIngrediente, Capacidad de calor flotante, meltTemp, pluma forjable);
```

## Registrar Artículo Metal
- Registrar elemento como elemento metálico. Tenga en cuenta que esto añade automáticamente la capacidad de calefacción y forjado. Si el canMelt es falso, este objeto no cargará la salida directamente (como el mineral de hierro necesita horno de flor/explosión)
- Los elementos de lingote de metal registrados no están registrados automáticamente como una entrada válida para las herramientas (por ejemplo: la ingota de acero de otros mods registrados por el método registerMetalItem no será automáticamente viable para la cabeza del pico de acero TFC)
```zenscript
ItemRegistry.registerItemMetal(Entrada IIngrediente, Cadena metal, unidades enteras, libros);
```

## Registrar comida
- Registrar las estadísticas de alimentos del ítem (no funciona en TFC Foods), Esto tiene prioridad sobre los valores existentes. Establecer la decadencia en 0 detiene la decadencia de suceder.
```zenscript
ItemRegistry.registerFood(Entrada IIngrediente, hambre, agua flotante, saturación flotante, descomposición flotante, grano flotante, verdura flotante, fruta flotante, carne flotante, carne flotante, productos lácteos);
```

## Registrar Armadura
- Registrar estadísticas de armadura
```zenscript
ItemRegistry.registerArmor(entrada IIngredient, float trushingModifier, float piercingModifier, float slashingModifier);
```

## Registrar Fuel
- Registrar elemento como combustible para fogones, forja o florecimiento
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, temperatura flotante, bool forgeFuel, bool bloomeryFuel);
```
