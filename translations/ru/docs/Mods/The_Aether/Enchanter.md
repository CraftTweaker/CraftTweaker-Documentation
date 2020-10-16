# Enchanter

## Package

```zenscript
import mods.aether_legacy.зачарование;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired); // Добавить рецепт энчантера, timeRequired находится в тиках

Enchanter. egisterEnchantment(IItemStack repair, int timeRequired); // Добавить элемент для ремонта, требуется время в тактах

зачарование. egisterEnchanterFuel(IItemStack input, int timeGiven); // Добавить элемент как топливо для ремонта, timeGiven is in ticks

// Новое в 1. .2
Enchanter.removeEnchantment(IItemStack); // Удаляет рецепты enchanter с заданным вводом
```
