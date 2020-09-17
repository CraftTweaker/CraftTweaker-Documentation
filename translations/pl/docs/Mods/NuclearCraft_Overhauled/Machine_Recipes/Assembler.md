# Montaż

## Importowanie pakietu
`mods.nuclearcraft.Montaż`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Assembler.addRecipe(ISkładnik itemInput1, ISkładnik itemInput2, ISkładnik itemInput3, ISkładnik itemInput4, ISkładnik itemInput4, ISkładnik itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny Mnożnik mocy, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Assembler.removeRecipeWithInput(ISkładnik itemInput1, ISkładnik itemInput2, ISkładnik itemInput3, ISkładnik itemInput4);
mods.nuclearcraft.Assembler.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Assembler.removeAllRecipes();
```