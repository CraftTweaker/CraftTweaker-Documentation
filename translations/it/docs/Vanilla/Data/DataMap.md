# DataMap

Una mappa, a volte chiamata anche un Array Associativo è una struttura di dati che consente di memorizzare più elementi.  
A differenza di un Array, tuttavia, puoi anche dare a ciascuno di questi oggetti una chiave da chiamare.  
La DataMap espande [IData](/Vanilla/Data/IData/), quindi ogni DataMap è IData, potresti aver bisogno di queste informazioni più tardi.

## Creazione di una mappa:

Una mappa è un tipo speciale di [IData](/Vanilla/Data/IData/), quindi all'ultimo momento dovrai importare quell'interfaccia:  
`import crafttweaker. ata.IData;`

Potresti aver notato che nessun tipo può essere convertito in una mappa (né può essere convertito in qualsiasi tipo oltre a Strings), quindi ci deve essere un altro modo di crearli!  
C'è:

```zenscript
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} come IData;
```

La cosa da ricordare è:  
Le mappe sono gestite come `Mappa<String,IData>`!  
Ciò significa che le chiavi non dovrebbero contenere caratteri che le normali stringhe CT non possono gestire.  
Significa anche che mentre la chiave è una stringa, il valore è un altro [IData](/Vanilla/Data/IData/) oggetto.  
Puoi anche nidare le mappe all'interno delle mappe (è quello che fanno molti NBT-dati):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "hello"
                    }
                } come IData;
```

## Recupero Membri

Sfortunatamente, le mappe create come sopra sono immutabili, quindi non puoi cambiare i loro membri.  
Per recuperare un membro di una Mappa, devi conoscere il suo nome chiave. Poi si può fare questo:

```zenscript
val mySecondMap = {key1: "value1",
                   key2: "value2",
                   key3: 3} come IData;

//Recupera il membro chiamato "key1"
var k1 = mySecondMap. ey1 come IData;
print(k1.asString());

//Recupera il membro chiamato "key2"
var k2 = mySecondMap.memberGet("key2") come IData;
print(k2.asString());
```

## Modifica mappe

È possibile aggiungere o substrato mappe l'una dall'altra per ottenere una nuova mappa con valori modificati.  
Questo funziona anche per le mappe annidate!

```zenscript
val map1 come IData = {
    key1 : "hello"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

stampa((mappa1 + mappa2). sString()); //Stampa {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 come IData = {
    key1 : "two",
    key2 : "two",
    key3 : "tre"
};

stampa((mappa3 - "key1"). sString()); //Stampa {key2 : "two", key3 : "three"}

val map4 come IData = {
    key3 : "anything"
};

stampa((mappa3 - mappa4). sString()); //Stampa {key1 : "two", key2 : "two"}
```