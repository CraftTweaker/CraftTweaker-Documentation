# Freezer

## Package

```zenscript
import mods.aether_legacy.Freezer;Congelador;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack entrada, IItemStack salida, int timeRequired); // Añadir una receta de congelación, timeRequired está en ticks

Congelador. egisterFreezerFuel(IItemStack entrada, int timeGiven); // Agregar un elemento como combustible congelador, timeGiven está en ticks

// Nuevo en 1. .2
Freezer.removeFreezable(IItemStack input); // Elimina las recetas del congelador con la entrada dada
```
