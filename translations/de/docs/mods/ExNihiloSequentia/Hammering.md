# Hammering

## Package
`import mods.exnihilosequentia.ZenHammerRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setInput(IIngredient input)** // der Block, der zerstört werden soll
- **addOutput(IItemStack drop)** // das Item, wenn der Block zerstört wurde
- **addOutput(IItemStack drop, float chance)** // ein anderes Item und die Drop-Chance, wenn der Block zerstört wurde


## Addition

```zenscript
<recipetype:exnihilosequentia:hammer>.create("hammer_test").setInput(<item:minecraft:cobblestone>).addOutput(<item:minecraft:gravel>).addOutput(<item:minecraft:diamond>, 0.01);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:hammer>.removeAll();
```
