# Gestore Staffa Entità

L'Entity Bracket Handler ti dà accesso alle Entità (ad esempio Mobs, tile ents ecc.) nel gioco. È possibile ottenere solo entità registrate nel gioco, quindi l'aggiunta o la rimozione di mod può causare problemi se si fa riferimento alle mob del mob in un Gestore parentesi di entità.

Le entità sono referenziate nel gestore dell'entità in questo modo:

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

Se si trova il mob/entità, questo restituirà un oggetto IEntityDefinition . Si prega di fare riferimento alla voce [Wiki](/Vanilla/Entities/IEntityDefinition/) per ulteriori informazioni su ciò che si può fare con questi.

# Ottenere tutte le Entità registrate

È possibile utilizzare il seguente comando per inviare tutte le entità registrate nel registro CraftTweaker

    /ct entità
    /crafttweaker entities