# Incudine

## Pacchetto
```zenscript
import mods.terrafirmacraft.Incudine;
```

## Addizione

```zenscript
Anvil.addRecipe(String registryName, Input IIngrediente, Uscita IItemStack, int minTier, Tipo di abilità String, Stringa... forgeRules);
```
- L'input non può essere impilato. Le incudine accettano solo un oggetto per slot.
- l'input deve essere forgeable (si prega di fare riferimento a [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) per registrare la capacità di forgiatura a un articolo).
- I livelli sono 0 = pietra, 1 = rame, 2 = bronzo, 3 = ferro battuto, 4 = acciaio, 5 = acciaio nero e 6 = acciaio rosso/blu.
- Tipo di abilità è a quale categoria di abilità la forgiatura dovrebbe contribuire. Le voci valide sono `generali`, `strumenti`, `armi`, `armatura`o null. Se il tipo di abilità è `strumenti`, `armi`, o `armatura` allora l'elemento risultato avrà un bonus abilità applicato.
- Una ricetta deve avere 1, 2 o 3 regole. Le regole consistono in un tipo (`HIT`, `DRAW`, `PUNCH`, `BEND`, `UPSET`, o `SHRINK`), seguita da un ordine (`ANY`, `NOT_LAST`, `ULTIMA`, `SECOND_LAST`, `THIRD_LAST`), separati da un underscore. Ad esempio, `HIT_ANY`, `DRAW_SECOND_LAST`e `UPSET_NOT_LAST` sono nomi di regola validi.

## Rimozione

```zenscript
Anvil.removeRecipe(IItemStack output);
Anvil.removeRecipe(String registryName);
```