# Incudine

## Pacchetto

`mods.rockytweaks.Incudine`

## Addizione

### Singolo

Crea ricette di incudine individuali che un visualizzato separatamente in JEI.

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Set Ricette

Crea più ricette incudine che JEI cicli attraverso le opzioni possibili.

```zenscript
// addRecipe(IItemstack input1, IItemstack[] input2, IItemstack[] output, int[] exp-cost);
mods.rockytweaks.Incudine. ddRecipe(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32
  ],
  [
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32
  ]
);
```

## Rimozione

L'incudine non utilizza ricette in senso normale, ma si è ancora in grado di rimuovere / blacklist specifici ingressi o uscite.

```zenscript
// remove(IIngredient[] inputs)
// remove(IIngredient output) - Rimuovi un output

// Blacklist Mending Enchant (input)
Incudine. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V su una spada di diamante (inputs)
mods. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Blacklist Enchanted Books (output)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
