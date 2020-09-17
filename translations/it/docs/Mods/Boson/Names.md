# Nomi in Boson

In Minecraft, la maggior parte degli oggetti sono identificati con nomi unici. Ad esempio, le voci utilizzano il loro nome del registro per essere identificate in modo univoco e non può esistere più di un elemento con lo stesso nome del registro.

La maggior parte dei nomi in Minecraft segue una struttura rigida, identificata da una stringa con uno spazio dei nomi e un percorso separati da un colon (es. `minecraft:iron_ingot`, dove `minecraft` è lo spazio dei nomi e `iron_ingot` è il percorso). In CraftTweaker, la maggior parte di questi nomi sono rappresentati come stringhe grezze, ma all'interno di Boson questo è scartato. Infatti, l'uso di una stringa grezza `` può confondere le persone se una chiamata di metodo prevede una stringa con uno spazio dei nomi o meno. Per questo motivo, Boson ha separato l'uso di stringhe non spaziate dai nomi e di quelle spaziate.

Le stringhe non-namespaced sono rappresentate come istanze di `stringa`, tra tutte le API Boson. Per ulteriori informazioni, consultare la documentazione di ZenScript.

Le stringhe Namespaced sono rappresentate come istanze di `NameSpacedString`, tra tutte le API Boson. Per ulteriori informazioni su come ottenere tali stringhe, fare riferimento alla sezione successiva.

## `NameSpacedString` Documentazione
La classe `NameSpacedString` risiede nel pacchetto `net.thesilkminer.mc.boson.zen.naming`.

### Creare una nuova istanza
Ci sono due modi per creare un `NameSpacedString`: usando il metodo di fabbrica o lanciando una `stringa`.

Il metodo di fabbrica è l'approccio suggerito. Essendo un metodo statico, può essere invocato direttamente sull'istanza di classe . Di seguito sono riportati la firma del metodo e un esempio del suo utilizzo:

```zenscript
function from(nameSpace as string?, path as string) as NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // equivalente a minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // utilizza namespace predefinito 'minecraft'
```

Il modo di casting si basa invece su un cast esplicito da una stringa `` a un `NameSpacedString` utilizzando il `come` operatore in ZenScript:

```zenscript
"minecraft:iron_ingot" come NameSpacedString;
```

### Proprietà
Una `NameSpacedString` fornisce accesso in sola lettura sia al suo namespace che al suo percorso tramite proprietà:

| Nome Proprietà | Tipo      | Descrizione                                                           |
| -------------- | --------- | --------------------------------------------------------------------- |
| `nomeSpazio`   | `stringa` | Ottiene la parte namespace della `NameSpacedString` (es. `minecraft`) |
| `percorso`     | `stringa` | Ottiene la parte percorso della `NameSpacedString` (es. `iron_ingot`) |

### Metodi

#### `asString`
Una `NameSpacedString` può essere convertita nuovamente in una normale `stringa` utilizzando il metodo `asString`. Di seguito sono riportati la firma del metodo e un esempio del suo utilizzo:

```zenscript
function asString() as string;
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // Stampa 'minecraft:iron_ingot' al log
```
