# Reservas

## eliminar

| Nombre        | Tipo   |
| ------------- | ------ |
| Nombre Receta | Cadena |

Ejemplo:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## eliminar todo

| Nombre | Tipo |
| ------ | ---- |
|        |      |

Ejemplo:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Constructor de embalses

## constructor

| Nombre        | Tipo                                        |
| ------------- | ------------------------------------------- |
| Fluido        | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Tamaño mínimo | int                                         |
| Tamaño máximo | int                                         |
| Reponer tasa  | int                                         |
| Peso          | int                                         |

### Peso

El peso es la posibilidad ponderada de un trozo que contiene ese depósito de líquido específico. El peso es contado como en X en Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Entonces cada entrada respectiva tendrá una probabilidad ponderada de:
```
5 en 34
5 en 34
6 en 34
8 en 34
10 en 34
```

Ejemplo:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 0, 20);
```

## añadir Dimensiones

| Nombre                  | Tipo                |
| ----------------------- | ------------------- |
| Lista negra             | Boolean             |
| Nombres de la dimensión | Arreglo de cadena[] |

Ejemplo:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Nombre           | Tipo                |
| ---------------- | ------------------- |
| Lista negra      | Boolean             |
| Nombres de bioma | Arreglo de cadena[] |

Ejemplo:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## construir

| Nombre | Tipo   |
| ------ | ------ |
| Nombre | Cadena |

### Preface
Los embalses de base son minúsculas ya que se traducen - las personalizadas deben ser debidamente capitalizadas (por ejemplo, "Reservas de Petróleo en el Océano Profundo").

Ejemplo:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Nombre de ejemplo");
```

---

Ejemplo: Copiar/Pegar:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Desert Lava");
```
