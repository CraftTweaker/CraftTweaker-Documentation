# Rituals

## Package
`moretweaker.bewitchment.WitchesRitual`

## Chalk Value Fields

```
moretweaker.bewitchment.WitchesRitual.NONE;      // No chalk
moretweaker.bewitchment.WitchesRitual.GOLDEN;    // Golden chalk
moretweaker.bewitchment.WitchesRitual.RITUAL;    // Ritual Chalk (The standard white chalk)
moretweaker.bewitchment.WitchesRitual.FIERY;     // Fiery/Infernal chalk
moretweaker.bewitchment.WitchesRitual.PHASING;   // Phasing/Otherwhere chalk
moretweaker.bewitchment.WitchesRitual.ANY;       // No matter what chalk
```

## Addition

```zenscript
//moretweaker.bewitchment.WitchesRitual.addRecipe(String name, IItemStack[] outputs, IIngredient[] inputs, String entityOutput, String entityInput, int power, int ringSmall, int ringMedium, int ringLarge);
moretweaker.bewitchment.WitchesRitual.addRecipe("Ritual of CraftTweaker", [<minecraft:diamond>], [<minecraft:dirt>, <minecraft:gravel>], null /* Won't spawn an entity */, "minecraft:villager" /* You need to sacrifice a villager */, 4000, moretweaker.bewitchment.WitchesRitual.FIERY, moretweaker.bewitchment.WitchesRitual.NONE, moretweaker.bewitchment.WitchesRitual.ANY);
```

## Removal

```zenscript
//moretweaker.bewitchment.WitchesRitual.removeByOutput(IIngredient output);
moretweaker.bewitchment.WitchesRitual.removeByOutput(<minecraft:diamond>);

//moretweaker.bewitchment.WitchesRitual.removeByInput(IIngredient input);
moretweaker.bewitchment.WitchesRitual.removeByInput(<minecraft:golden_carrot>);

moretweaker.bewitchment.WitchesRitual.removeAll();
```