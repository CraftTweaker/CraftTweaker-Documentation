# Infusore Metallurgico

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricette del Infuser Metallurgico attraverso il comando `/ct mekrecipes metallurgicInfuser`

## Tipo Di Infusione Stringa

Sia l'aggiunta che la rimozione di ricette richiedono un "tipo di infusione" stringa. Esempi di default da Mekanism sono:

| Tipo Di Infusa | Aggiunto da |
| -------------- | ----------- |
| "CARBONE"      | Mekanism    |
| "TIN"          | Mekanism    |
| "DIAMOND"      | Mekanism    |
| "REDSTONE"     | Mekanism    |
| "FUNGI"        | Mekanism    |
| "BIO"          | Mekanism    |
| "OBSIDIAN"     | Mekanism    |

Se un’altra mod registra un nuovo tipo di infusione, questo tipo può essere utilizzato in CraftTweaker e fino a quando il nome del tipo registrato è specificato esattamente. NOTA: Non è ** possibile definire **nuovi** tipi di infusione ** con CraftTweaker

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le infusioni registrate (comprese quelle provenienti da altre mods) tramite il comando `/ct infuseTypes`

## Addizione

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di Infusatore Metallurgico. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.infuser.removeAllRicette();
```