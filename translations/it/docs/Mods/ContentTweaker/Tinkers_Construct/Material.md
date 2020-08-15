# Rappresentazione Materiali

Una rappresentazione del materiale rappresenta un materiale di costruzione di un inchiostro.  
È possibile ottenere un tale oggetto sia dal [Material Builder](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) o dal [Material Bracket Handler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/).

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter     | Tipo    |
| ------------- | ------- |
| identifier    | stringa |
| commandString | stringa |

## Aggiungere elementi di materiale

Se si utilizza l'elemento dato nel costruttore di parti, è possibile impostare quanti punti materiali che daranno, o quanto l'oggetto riparerà.

    //myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `elemento` è l'elemento con cui è abbinato. È possibile utilizzare [condizioni articolo](/Vanilla/Items/Item_Conditions/) ma nessun trasformatore. 
- `amountNeeded` is the amount of items that is matched in. È possibile dividerli su tutti gli slot forniti dalla toolforge, che consente anche di andare al di sopra di 64. Nel secondo esempio sopra, avete bisogno di 4 blocchi di ferro per aggiunta. Predefiniti a 1.
- `amountMatched` is the amount of material points added per `amountNeeded`. Nel secondo esempio sopra quattro blocchi di ferro danno due punti materiali. Predefinito a 144 (un valore ingot/un materiale).

## Aggiungere Caratteri Di Materiale

Puoi aggiungere un tratto al materiale.  
Tutti gli oggetti fatti da questo materiale avranno questo carattere.  
Utilizza una [Rappresentazione Trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/) o una Stringa con l'identificatore (raccomandato), restituisce vuoto.  
Puoi anche fornire una Stringa di dipendenza, che farà sì che la caratteristica sia disponibile solo per alcuni tipi di parti, come le teste, per esempio. Omettere che il parametro verrà iniettato nullo, che farà sì che il tratto sia solo sul tipo di parte quando nessun altro modificatore di dipendenza non nullo sono già da quella parte.

La stringa varaint è consigliata, dal momento che dal tempo CoT funziona, la maggior parte dei Tratti non sono ancora disponibili, e anche dal momento in cui CrT funziona, non tutti sono stati inizializzati, ma se si utilizzano le corde, l'aggiunta dei materiali viene posticipata fino a quando non sono disponibili. Ancora non è errorproof e non c'è modo facile di controllare la presenza di pneumatici, quindi attendi i messaggi di errore che ti dicono quali tratti non sono stati trovati.

```zenscript
myMaterial.addTrait("fiery", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```