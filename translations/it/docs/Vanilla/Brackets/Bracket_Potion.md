# Gestore Parentesi Pozioni

Il gestore di parentesi pozione ti dà accesso alle pozioni nel gioco. È solo possibile ottenere Pozioni registrate nel gioco, quindi l'aggiunta o la rimozione di mod può causare problemi se fai riferimento alle pozioni della mod in un Gestore di parentesi di pozioni.

Le pozioni sono riferite nel gestore di parentesi pozione così:

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

Se la Pozione è trovata, questo restituirà un oggetto IPotion. Si prega di fare riferimento alla voce [Wiki](/Vanilla/Potions/IPotion/) per ulteriori informazioni su ciò che si può fare con questi.

# Ottenere tutte le Pozioni registrate

È possibile utilizzare il seguente comando per produrre tutte le pozioni registrate nel registro CraftTweaker

    /ct pozioni
    /crafttweaker pozioni