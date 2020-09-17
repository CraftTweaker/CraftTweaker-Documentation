# DropTableBuilder

DropTableBuilder è usato per creare stringhe 'drop' per i minerali e i campioni che supportano la caduta di più oggetti in una sola volta, pile di oggetti che contengono più di un elemento e gocce ponderate.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.DropTableBuilder;`

## Metodi

Questi metodi consentono la creazione e la modifica di una tabella di caduta. Tutti i metodi di costruttore restituiscono il costruttore su cui sono stati eseguiti, consentendo metodi di incatenamento.

| Nome Metodo     | Descrizione                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| newSlot()       | Crea una nuova tabella a discesa se eseguita staticamente o aggiunge un nuovo slot alla tabella a discesa. |
| addItem()       | Aggiunge l'elemento specificato allo slot corrente della tabella a discesa.                                |
| enableFortune() | Consente allo slot corrente di beneficiare dell'incantesimo della fortuna.                                 |

### Uso:

#### `newSlot()`

DropTableBuilder.newSlot() creerà un nuovo costruttore. \<builder\>.newSlot() finalizzerà lo slot corrente e ne inizierà uno nuovo.

#### `addItem(String itemStr[, int weight[, int count]])`

`itemStr` può essere un nome di un oggetto come \<mod\>:\<item\>:\<meta\>, una voce di dizionario minerario come oredict:\<entry\>, o la parola vuota. `weight` controlla quanto è probabile che l'elemento scenda usando la formula \<item weight\>/\<sum of item weights within slot\>. Il valore predefinito è 1 se omesso. `count` è il numero di item drop se selezionato. Il valore predefinito è 1 se omesso.

#### `enableFortune()`

Gli slot che hanno la fortuna abilitata selezioneranno un numero di oggetti aggiuntivi dallo slot fino al livello di fortuna utilizzato. Abbina il comportamento della fortuna della vaniglia su slot che hanno solo 1 oggetto.

## Esempi che usano il Builder

### Creare una tabella a discesa

```zenscript
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

Questa tabella di caduta ridurrebbe 2 diamanti (10%) o 1 carbone (90%) beneficiando della fortuna, 1 pietra (100%) e 1 ciottoli (50%).

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   . ddItem("minecraft:lapis_lazuli", 1, 4)
                   . ddItem("minecraft:lapis_lazuli", 1, 5)
                   . ddItem("minecraft:lapis_lazuli", 1, 6)
                   . ddItem("minecraft:lapis_lazuli", 1, 7)
                   . ddItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

Questo tavolo di goccia imita lapis vaniglia, cadendo 4-8 lapis e beneficiando della fortuna.

### Usare una tabella a goccia

I costruttori sono usati assegnandoli come valore di dati "gocce". Dal momento che i valori dei dati accettano solo stringhe, il generatore verrà lanciato come una stringa usando il suo metodo toString.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addData.addDataValue("drops",lapistable);
complexData.addDataValue("drops",complextable+lapistable);
```

Quando 2 costruttori vengono aggiunti insieme, viene creato un nuovo tavolo con gli slot di entrambi i tavoli.