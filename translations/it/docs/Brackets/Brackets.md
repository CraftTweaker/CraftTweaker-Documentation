# Gestori Parentesi

ZenScript utilizza parentesi per fare riferimento agli oggetti di gioco come Oggetti, Entità e Oredict.

## Come usare Bracket Handlers

Le parentesi in ZenScript sono definite usando i caratteri `<` e `>` , qualsiasi cosa all'interno di questi caratteri è considerata una parentesi.

Un esempio di Gestore di parentesi sarebbe il Gestore di parentesi di oggetti, che ti dà accesso agli oggetti all'interno del gioco.

## Esempi

Un esempio del [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item/) sarebbe:

```zenscript
<minecraft:apple>
```

Questo ti darà accesso all'elemento `Apple` [](/Vanilla/Items/IItemStack/).

Un esempio di [OreDictEntry Bracket Handler](/Vanilla/Brackets/Bracket_Ore/) sarebbe:

```zenscript
<ore:ingotIron>
```

Questo ti darà accesso al [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) per `ingotIron`.