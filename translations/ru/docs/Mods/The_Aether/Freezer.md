# Freezer

## Package

```zenscript
import mods.aether_legacy.заморожено;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack input, IItemStack output, int timeRequired); // Добавить рецепт морозильника, timeRequired в тактах

замораживания. egisterFreezerFuel(IItemStack input, int timeGiven); // Добавить элемент как freezer fuel, timeGiven is in ticks

// Новое в 1. .2
Freezer.removeFreezable(IItemStack); // Удаляет рецепты морозильника с заданным вводом
```
