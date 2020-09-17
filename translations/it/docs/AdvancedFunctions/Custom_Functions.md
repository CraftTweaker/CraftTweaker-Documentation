# Funzioni Personalizzate

A volte le funzioni fornite da CT e addons semplicemente non lo farà. Ecco come scrivere le tue funzioni! È possibile anche nido funzioni nelle funzioni

## Sintassi Base

Generalmente, si dichiara un utilizzo statico:

```zenscript
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

Le cose tra parentesi sono opzionali, a seconda di ciò che si desidera raggiungere. Diamo un'occhiata più da vicino a funzioni specifiche.

## Funzioni Statiche

Le funzioni statiche vengono create prima che lo script venga eseguito e si può accedere da qualsiasi punto dello script.  
Puoi anche accedere alle funzioni dichiarate al di fuori dello script utilizzando il [riferimento cross-script](/AdvancedFunctions/Cross-Script_Reference).

### Funzioni del vuoto

Le funzioni del vuoto sono funzioni che non restituiranno alcun valore.

```zenscript
//chiama la funzione tens() senza argomenti
tens();

//chiama la funzione realTens() con la Stringa "Ciao Mondo!" come argomento
realTens("Ciao Mondo! );


//crates function tens() with no required arguments
function tens(){
    //Calls function realTens() with "" as argument
    realTens("");
}


//create function realTens() with one string required as argument
function realTens(a as string){
    //prints the argument 10 times
    for i in 1 to 11{
        print(a);
    }
}
```

### Funzioni di ritorno

È anche possibile specificare un valore che dovrebbe essere restituito da una funzione. Si consiglia di utilizzare la parola chiave `come` per definire il tipo restituito.

```zenscript
//call add function with 1 and 99 as parameters
val result = add(1,99);
print(result);

//è possibile posizionare anche la funzione aggiungi all'interno della funzione di stampa
print(add(2,64));

//definisce funzione add() con a e b come parametri (entrambi impostati per essere Integers! e imposta il tipo restituito a Integer
function add(a come int, as int) as int{
    //returns the sum of a and b
    return a+b;
}
```

## Funzioni come variabili

È anche possibile utilizzare funzioni come variabili. In questo caso, saranno creati come classi separate. Oltre a questo, funzionano praticamente lo stesso come le funzioni statiche, li chiamate con il loro nome variabile.  
Puoi anche usarli come [variabili globali](/AdvancedFunctions/Global_Static_Variables/) in questo modo.

Se hai bisogno di lanciare il metodo (come fai per i globali) puoi usare questo:

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));