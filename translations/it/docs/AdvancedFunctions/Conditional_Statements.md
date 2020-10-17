# Dichiarazioni Condizionali

Potresti voler includere il codice che verrà eseguito solo se determinati criteri sono soddisfatti (o se non lo sono). Questo è ciò per cui hai bisogno di dichiarazioni condizionali.

## Se

Una dichiarazione If è la prima parte di una dichiarazione condizionale. Dichiara la condizione che deve essere vera per l'esecuzione del seguente codice. **Attenzione, hai bisogno di DUE EQUALI quando si confrontano i valori! (Questo perché uno uguale è per dichiarare valori!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Altrimenti

Alla fine di una Dichiarazione condizionale può essere aggiunta una Dichiarazione Else-Statement per dichiarare ciò che verrà eseguito quando la condizione if-condition è uguale a false.

```zenscript
var test = 0;

if (test == 0) { //true
    //will be executed when test is equal to 0
    print("Test is zero! );
} else {
    //verrà eseguito quando il test non è uguale a 0
    print("Il test NON è zero! );
}

test = 1;
se (test == 0) { //false
    //verrà eseguito quando il test è uguale a 0
    print("Now, test è zero! );
} else {
    //verrà eseguito quando il test non è uguale a 0
    print("Now, test NON è zero! );
}

```

## Cose da controllare per

I calcoli supportati sono `+`,`-`,`*`,`/`,`mod`,`concatenazione(~)`

Operandi supportati sono `Logical OR(<unk> <unk> )`, `Logical AND(&&)`, `Bitwise OR(<unk> )`, `Bitwise E (&)`e `Bitwise XOR(^)`

```zenscript
//Puoi controllare per:


//Number values
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Valori numerici calcolati
val b = 1;
val c = 5;
//Tutti valutano a true
if (b+c == 6) { print("Num1! ); }
se (b*c == 5) { print("Num2!"); }
se (b/c == 0. ) { print("Num3! ); }

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", la Tilde concatena una cosa all'altra

//<unk> <unk> (OR) significa, finché uno dei criteri è soddisfatto, valuta a true
if (d == "Hello" <unk> <unk> e == "Hello") { print("OR1! ); } //true
if (d == "Hello" <unk> <unk> e == "World") { print("OR2! ); } //true

//^(XOR) significa, SOLO un criterio può essere rispettato, altrimenti valuta a false
se (d == "Hello" ^ e == "Hello") { print("XOR1! ); } //true
if (d == "Hello" ^ e == "World") { print("XOR2! ); } //false

//&&(AND) significa, entrambi i criteri devono essere rispettati, altrimenti valuta a false
se (d == "Hello" && e == "Hello") { print("AND1! ); } //false
if (d == "Hello" && e == "World") { print("AND2! ); } //true
```

## Il ? Operatore

Sicuramente, scrivere sempre una struttura if/else può essere fastidioso. Soprattutto se si vuole solo fare una o una condizione. Ecco perché l'operatore `?` è stato implementato. Segue la stessa logica di una dichiarazione if/else è solo di molto meno codice richiesto. Syntax: `boolean ? if : else`

```zenscript
val switchy = falso;

//prints switchy state
print("Switchy is " ~ switchy);

//if switchy is true, vInt = 1, otherwise vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Stampa "Hello" se switchy è stue, altrimenti stampa "Bye"
print(switchy ? "Hello" : "Bye");

//Stampa "Bye" se la commutazione è vera, altrimenti stampa "Hello"
switchy ? print("Bye") : print("Hello");

```

## Operatori

È possibile utilizzare questi operatori. Tutti gli esempi forniti valutano a verità.

<table>
  <tr>
    <th>
      Nome
    </th>
    
    <th>
      token
    </th>
    
    <th>
      Spiegazione
    </th>
    
    <th>
      Example
    </th>
  </tr>
  
  <tr>
    <td>
      Non
    </td>
    
    <td>
      <code>!</code>
    </td>
    
    <td>
      Inverte un booleano
    </td>
    
    <td>
      !false
    </td>
  </tr>
  
  <tr>
    <td>
      Non Uguale
    </td>
    
    <td>
      <code>!=</code>
    </td>
    
    <td>
      Controlla se il valore prima e dopo non è uguale
    </td>
    
    <td>
      1 != 2
    </td>
  </tr>
  
  <tr>
    <td>
      Uguale
    </td>
    
    <td>
      <code>==</code>
    </td>
    
    <td>
      Controlla se il valore prima e dopo è uguale
    </td>
    
    <td>
      1 == 1
    </td>
  </tr>
  
  <tr>
    <td>
      Maggiore di
    </td>
    
    <td>
      <code>&gt;</code>
    </td>
    
    <td>
      Controlla se il valore prima è maggiore di dopo
    </td>
    
    <td>
      1 > 2
    </td>
  </tr>
  
  <tr>
    <td>
      Maggiore o uguale
    </td>
    
    <td>
      <code>&gt;=</code>
    </td>
    
    <td>
      Controlla se il valore prima è maggiore o uguale con dopo
    </td>
    
    <td>
      1 >= 1
    </td>
  </tr>
  
  <tr>
    <td>
      Minore di
    </td>
    
    <td>
      <code>&lt;</code>
    </td>
    
    <td>
      Controlla se il valore prima è inferiore a dopo
    </td>
    
    <td>
      1 < 2
    </td>
  </tr>
  
  <tr>
    <td>
      Minore o uguale
    </td>
    
    <td>
      <code>&lt;=</code>
    </td>
    
    <td>
      Controlla se il valore prima è inferiore o uguale a dopo
    </td>
    
    <td>
      1 <= 1
    </td>
  </tr>
  
  <tr>
    <td>
      Logico E
    </td>
    
    <td>
      <code>&&</code>
    </td>
    
    <td>
      Controlla se entrambi i valori prima e dopo sono veri, falsi se uno o entrambi sono falsi
    </td>
    
    <td>
      true && true
    </td>
  </tr>
  
  <tr>
    <td>
      O Logico
    </td>
    
    <td>
      <code>\|\|</code>
    </td>
    
    <td>
      Controlla se il valore prima o dopo è vero, falso se non è vero
    </td>
    
    <td>
      false \<unk> \<unk> true
    </td>
  </tr>
  
  <tr>
    <td>
      Bitwise XOR
    </td>
    
    <td>
      <code>^</code>
    </td>
    
    <td>
      Controlla se è vero esattamente uno dei valori precedenti o successivi, falsi se entrambi o nessuno sono veri
    </td>
    
    <td>
      vero ^ falso
    </td>
  </tr>
  
  <tr>
    <td>
      Bitwise AND
    </td>
    
    <td>
      <code>&</code>
    </td>
    
    <td>
      Esegue un'operazione bitwise AND sui valori prima e dopo. Vedi <a href="https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs">questo</a> per ulteriori informazioni
    </td>
    
    <td>
      true && true
    </td>
  </tr>
  
  <tr>
    <td>
      O Bitwise
    </td>
    
    <td>
      <code>\|</code>
    </td>
    
    <td>
      Esegue un'operazione OR bitwise sui valori prima e dopo. Vedi <a href="https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs">questo</a> per ulteriori informazioni
    </td>
    
    <td>
      false \<unk> \<unk> true
    </td>
  </tr>
</table>

### Differenza tra `<unk>` e `<unk> <unk>` (e `&` e `&&`)

La differenza principale tra il singolo e il doppio, con semantica a parte, è che il doppio esegue un controllo dopo ogni condizione ed esce presto - questo è chiamato cortocircuitazione. Tuttavia, il singolo passa attraverso l'intera catena di condizioni, anche se la prima avrebbe annullato l'intera condizione. Questo non solo consente di risparmiare risorse, ma consente anche uno script più facile come **null check** e condizioni incatenate.

```zenscript
var a = 5;
var elemento = ... come IItemStack;

// Anche se a è 5, continua ad attraversare tutte le condizioni elencate
se (a == 5 <unk> a == 3 <unk> a == 10 <unk> a == -1) {
...
}

// Anche se a è 5 e la condizione è impossibile (una variabile non può essere 3 e 5), continua ad attraversare tutte le condizioni elencate
se (a == 3 & a < 2 & a > 8 & a == 5) {
... 
}

// Controlla se l'elemento non è null prima di accedere alle variabili dall'elemento
se (!isNull(item) && item.amount == 1) {
...
}

// Controlla se l'elemento non è nullo durante l'accesso alle variabili da un elemento potenzialmente nullo, lanciando un errore se l'elemento è null
se (! sNull(item) & item. mount == 1) {
...
}
```

## L'operatore in/has

Il `in` e il `ha` operatore controllare se qualcosa è in qualcosa.  
Per prima cosa hai bisogno della lista che vuoi controllare, poi il `in`/`ha` quindi il valore che si desidera controllare. `in` e `ha` sono la stessa parola chiave per ZS, ma nella maggior parte dei casi le persone usano `ha` per controllare se una raccolta contiene un elemento e dentro per i cicli in quanto rappresenta la grammatica inglese.

### in/has loadadedMods

Puoi controllare, se una mod viene caricata controllando se è nella lista caricata.Mods

```zenscript
//While contains checks can use in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack loaded");
}

//La maggior parte delle persone preferisce usare ha
se (loadedMods ha "mcp") {
    print("Minecraft Coder Pack caricato");
}
```

### in/has IIngredient

Puoi anche controllare se un elemento corrisponde a una definizione confrontando due IIngredienti.  
Con questo devi essere un po' attento a non confondere le due voci:  
Questo è vero solo quando l'IIngrediente DOPO il `in` può anche essere trovato completamente in quello PRIMA il `in`.  
Nella maggior parte dei casi utilizzerai la `ha` parola chiave invece perché la sua intenzione è più chiara e fa esattamente lo stesso.

```zenscript
// Controlla se il lingotto di ferro è nel oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("I lingotti di ferro sono nella giusta oreDict");
}

// Preferito, la stessa funzione del precedente
se (<ore:ingotIron> ha <minecraft:iron_ingot>) { 
    print("I lingotti di ferro sono nell'oreDict");
}
```

Questo vale solo quando TUTTI gli oggetti corrispondenti dell'IIngrediente DOPO che il `ha` possono essere trovati anche nella IIngrediente PRIMA `ha`: Dì che abbiamo un IIngrediente che contiene tutte le polveri (e. . polvere di pietra rossa e pietra luminosa):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts. dd(redstone, glowstone);

//True as redstone is a part of allpolvers
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, e redstone è costituito solo da redstone.
if (redstone has allDusts) {

}
```