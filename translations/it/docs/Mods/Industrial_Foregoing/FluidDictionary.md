# Dizionario Fluido

### Importazione

```zenscript
import mods.industrialforegoing.FluidDictionary;
```

### Aggiunta

Ha bisogno del nome fluido come input, del nome fluido come output e un tasso di conversione. Il tasso è il numero di mb dall'origine sarà trasformato in output. (InputMB * rate = OutputMB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### Rimozione

Ha bisogno del nome del fluido come input, il nome del fluido come output.

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```