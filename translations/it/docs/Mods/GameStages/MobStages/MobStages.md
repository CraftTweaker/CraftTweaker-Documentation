# Fasi Di Mob

Questa mod è un addon per l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Mob Stages permette che lo spawning di mob sia configurato in un sistema di progressione personalizzato. Per maggiori informazioni su come funziona la mod, consulta la pagina della mod [qui](https://minecraft.curseforge.com/projects/mob-stages)

## Opzioni Globali

Crea una nuova voce globo per il mob. Solo una voce globale può esistere per mob.

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Aggiunge una sostituzione per il mob. Se il mob non riesce a generare perché non ci sono giocatori validi nelle vicinanze, la mob sostitutiva verrà generata nel suo posto.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Imposta l'intervallo per cercare giocatori validi. L'intervallo predefinito è di 512 blocchi, quindi questo è opzionale.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Permette ai riproduttori di sovrascrivere il controllo di stadio. Il valore predefinito è falso. Se impostato a VERO, gli spawner funzioneranno per questo mob, anche se non ci sono giocatori validi.

```zenscript
// mods.MobStages.toggleSpawner(String entityId, boolean allow);
mods.MobStages.toggleSpawner("minecraft:zombie", true);

// mods.MobStages.toggleSpawner(String entityId, boolean allow, int dimension);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
```

## Opzioni Specifiche Dimensione

Le opzioni specifiche per la dimensione sono quasi le stesse delle opzioni globali, tuttavia hanno un altro argomento aggiunto alla fine, che è la dimensione Integer id. Le voci specifiche per la dimensione sostituiranno la voce globale in quella dimensione. Puoi avere solo una voce per mob, per dimensione.

## Script Di Esempio

```zenscript
// Creepers richiedono il primo stadio per generare
mods.MobStages.addStage("one", "minecraft:creeper");

// Gli scheletri richiedono il secondo stadio, o qualsiasi spawner.
mods.MobStages.addStage("two", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// I ragni richiedono il terzo stadio nether.
mods.MobStages.addStage("tre", "minecraft:spider", -1);

// Gli zombie richiedono la fase 4 in nessuno, e sono sostituiti da pipistrelli se non possono.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```