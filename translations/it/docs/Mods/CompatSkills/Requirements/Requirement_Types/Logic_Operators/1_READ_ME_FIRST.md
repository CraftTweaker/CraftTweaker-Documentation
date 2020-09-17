# Sintassi Del Requisito Logico

Ora che sai quali cancelli logici sono io in grado di descrivere la sintassi implementata in Reskillable che permette loro di essere utilizzati. Vi saranno esempi più dettagliati in una sezione successiva.

In tutte le sintassi di seguito `requisito` è la rappresentazione stringa di qualsiasi altro requisito supportato (compresi quelli aggiunti da CompatSkills o altri addons).

* * *

## Cancelli obbligatori unari

### NON Requisito

Il più semplice requisito logico che supporti Reskillable è la capacità di invertire un requisito. Lo fa utilizzando un cancello **NOT** e la sintassi per esso è `non richiesto`. Come descritto sopra nella sezione sui cancelli logici, questo requisito logico sarà contrassegnato come soddisfatto solo se il requisito `specificato` non è soddisfatto.

* * *

## Cancelli di richiesta binaria

Gli altri requisiti logici sono leggermente più complessi in quanto richiedono due *requisiti di input*. Poiché i cancelli logici sono relativamente semplici, l'ordine dei requisiti non conta, tuttavia mi riferirò a loro come `requisito<sub>1</sub>` e `requisito<sub>2</sub>` per differenziare quello che è.

Condividono anche la sintassi: `gate<unk> [requisito<sub>1</sub>]~[requisito<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `né`, `xor`, o `xnor`.  
**Nota**: Le parentesi intorno a `requisiti<sub>1</sub>` e `requisiti<sub>2</sub>` sono necessari.

* * *

### E Requisito

Il requisito **E** a differenza degli altri requisiti logici è principalmente utile per i requisiti logici annidati (più su questo abbassamento), per bloccare un elemento o un altro oggetto con più requisiti richiede che tutti i requisiti indicati siano soddisfatti. Questo è lo stesso della funzionalità **E** , quindi dovrebbe essere utilizzato quando possibile, in quanto renderà il suggerimento essere formattato in modo più facile da leggere.

## Esempi

Tutti gli esempi qui sotto saranno mostrati utilizzando la sintassi dal supporto di CompatSkill's CraftTweaker in quanto è più facile da leggere. I requisiti logici funzionano bene anche dalla configurazione.

Tutte le voci di script CrT di esempio qui sotto usano la dichiarazione di importazione: `import mods.compatskills.Requirement. ddRequireation;` questo è principalmente per ridurre la lunghezza delle altre linee e renderle più leggibili. (So se stai copiando uno degli esempi dovrai includerlo nella parte superiore del tuo file di script. Un paio di esempi qui sotto che iniziano direttamente con `mods. ompatskills.` sono serrature che sono specifiche per CompatSkills e che ho fornito esempi di requisiti di logica decente per.

* * *

Consenti solo di attaccare pigmen zombie al di fuori di nether: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not<unk> dim<unk> -1");`

* * *

Permetti di entrare nel nether se un giocatore ha un livello di attacco o difesa di almeno 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "o<unk> [reskillable:attack<unk> 15]~[reskillable:defense<unk> 15]");`

* * *

Una volta che un giocatore ottiene di difesa di livello 24 e di agilità livello 24 smettere di consentire loro di utilizzare armature di cuoio:

    addRequirement(<minecraft:leather_helmet:*>, "nand<unk> [reskillable:defense<unk> 24]~[reskillable:agility<unk> 24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand<unk> [reskillable:defense<unk> 24]~[reskillable:agility<unk> 24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand<unk> [reskillable:defense<unk> 24]~[reskillable:agility<unk> 24]");
    addRequirement(<minecraft:leather_boots:*>, "nand<unk> [reskillable:defense<unk> 24]~[reskillable:agility<unk> 24]");
    

* * *

Permetti solo di usare una pala di legno finché il giocatore non ottiene miniere o raccoglie livello 5: `addRequirement(<minecraft:wooden_shovel:*>, "nor<unk> [reskillable:mining<unk> 5]~[reskillable:collecting<unk> 5]");`

* * *

Permetti a un giocatore di usare perle ender, solo se ha magia 32 o se ha agilità 32. Non lasciare tuttavia che lo usino se hanno entrambe le abilità al livello 32: `addRequirement(<minecraft:ender_pearl>, "xor<unk> [reskillable:magic<unk> 32]~[reskillable:agility<unk> 32]");`. Questo può essere utile se si desidera avere più alberi di progressione e assicurarsi che devono seguirne uno se vogliono continuare a essere in grado di utilizzare elementi specifici.

* * *

È stato difficile trovare un esempio per **XNOR**, tuttavia questo è un esempio di come può funzionare.

Permetti a un giocatore di livellare la difesa al livello 5 solo se non hanno ancora messo punti in attacco o se sono al livello di attacco 32: `mods. ompatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor<unk> [reskillable:attack<unk> 2]~[reskillable:attack<unk> 32]");`

### Requisiti Di Logica Nested

I requisiti logici annidati sono quando si utilizza un requisito logico come uno dei `parametri del requisito` in un altro requisito logico. Prestare particolare attenzione al posizionamento staffa in requisiti nidificati.

* * *

Permetti che il minerale di diamante venga rotto solo se il giocatore ha il livello di miniera 20 o se il giocatore ha entrambi il livello di raccolta 25 e il livello di miniera 15: `addRequirement(<minecraft:diamond_ore>, "o<unk> [reskillable:mining<unk> 20]~[e<unk> [reskillable:collecting<unk> 25]~[reskillable:mining<unk> 15]]");` *Nota*: Questo ha anche l'effetto collaterale di non consentire ai giocatori di posizionare minerale di diamante a meno che non soddisfino anche il requisito.

* * *

Consenti solo di utilizzare gli elitari con agilità 15 alla fine o di avere agilità e livelli magici 25 senza essere alla fine: `addRequirement(<minecraft:elytra:*>, "xor<unk> [and<unk> [dim<unk> 1]~[reskillable:agility<unk> 15]]~[and<unk> [reskillable:agility<unk> 25]~[reskillable:magic<unk> 25]]");` *Nota*: Una volta che raggiungi l'agilità e la magia 25 non puoi usare l'elytra alla fine. Questo è in parte solo come esempio e non necessariamente quello che qualcuno vuole.

Un altro modo in cui il requisito di cui sopra potrebbe essere scritto è: `addRequirement(<minecraft:elytra:*>, "reskillable:agility<unk> 15", "xor<unk> [dim<unk> 1]~[and<unk> [reskillable:agility<unk> 25]~[reskillable:magic<unk> 25]]");` perché entrambe le parti richiedono almeno l'agilità 15.