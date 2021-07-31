# Sieving

## Package
`import mods.exnihilosequentia.ZenSieveRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setInput(IIngredient input)** // Der Input
- **addDrop(IItemStack drop)** // das Item, das von dem Block gedroppt werden soll
- **addRoll(String mesh, float chance)** // der Netztyp und die Drop-Chance
- **setWaterlogged()** // soll das Sieb waterlogged sein?


## Addition

```zenscript
<recipetype:exnihilosequentia:sieve>.create("sieve_test").setInput(<item:minecraft:cobblestone>).addDrop(<item:minecraft:netherite_ingot>).addRoll("diamond", 0.01).addRoll("string", 1.0);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
```
