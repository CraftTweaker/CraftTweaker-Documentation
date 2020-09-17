# Decay Generator

## Importowanie pakietu
`mods.nuclearcraft.Generator DecayGenerator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.DecayGenerator.addRecipe(BlockInput Składników, Blogredient blockOutput, podwójna średnia żywotność, podwójna moc, podwójne promieniowanie);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.DecayGenerator.removeRecipeWithInput(ISkładniki blockInput);
mods.nuclearcraft.DecayGenerator.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.DecayGenerator.removeAllRecipes();
```