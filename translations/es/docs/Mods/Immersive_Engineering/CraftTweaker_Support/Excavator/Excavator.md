# Excavador

## Llamar al paquete

Puedes llamar al paquete Excavator usando `mods.immersiveengineering.Excavator`.

## Añadir Mineral

| Requerido | Tipo                      | Tipo de Datos |
| --------- | ------------------------- | ------------- |
| Requerido | Nombre                    | cadena        |
| Requerido | Peso Mineral              | int           |
| Requerido | Probabilidad de fallo     | doble         |
| Requerido | Ores                      | cadena[]      |
| Requerido | Oportunidades             | doble[]       |
| Opcional  | Dimensión de lista blanca | int []        |
| Opcional  | Lista negra               | boolean       |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0. 05, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], verdadero);
```

## Quitar Mineral

| Requerido | Tipo   | Tipo de Datos |
| --------- | ------ | ------------- |
| Requerido | Nombre | Cadena        |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Hierro");
```