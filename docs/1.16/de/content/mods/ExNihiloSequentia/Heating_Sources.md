# Heating Sources

## Package
`import mods.exnihilosequentia.ZenHeatRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setBlock(MCBlock input)** // der Block, der als Wärmequelle hinzugefügt werden soll
- **setAmount(int amount)** // die Stärke der Hitzequelle



## Addition

```zenscript
<recipetype:exnihilosequentia:heat>.create("heat_test").setBlock(<block:minecraft:cobblestone>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:heat>.removeAll();
```
