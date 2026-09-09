# Fossils and Archeology

Fossils and Archeology has native CraftTweaker support. But as this is a bit broken and does not allow removing recipes by output in the analyzer and sifter, here's my version:

### Analyzer

```
import moretweaker.fossil.Analyzer;

Analyzer.addOutput(IIngredient input, IItemStack output, double weight);

Analyzer.removeByInput(IIngredient input);

Analyzer.removeByOutput(IIngredient output);

Analyzer.removeAll();
```

### Sifter

```
import moretweaker.fossil.Sifter;

Sifter.addOutput(IIngredient input, IItemStack output, double weight);

Sifter.removeByInput(IIngredient input);

Sifter.removeByOutput(IIngredient output);

Sifter.removeAll();
```

### Archeology Workbench

```
import moretweaker.fossil.ArcheologyWorkbench;

ArcheologyWorkbench.addRecipe(IIngredient input, IItemStack output, optional IIngredient fuel);

ArcheologyWorkbench.removeRecipe(IIngredient output);

ArcheologyWorkbench.removeAll();
```

### Culture Vat

The Culture Vat may have custom recipes added but you will not be able to put any new items in the input slot.

```
import moretweaker.fossil.CultureVat;

CultureVat.addRecipe(IIngredient input, IItemStack output);

CultureVat.removeRecipe(IIngredient output);

CultureVat.removeAll();
```