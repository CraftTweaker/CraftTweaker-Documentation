# Dichiarazioni Condizionali

Potresti voler includere il codice che verrà eseguito solo se determinati criteri sono soddisfatti (o se non lo sono). Questo è ciò per cui hai bisogno di dichiarazioni condizionali.

## Se

Una dichiarazione If è la prima parte di una dichiarazione condizionale. Dichiara la condizione che deve essere vera per l'esecuzione del seguente codice. Attenzione, hai bisogno di DUE EQUALI quando si confrontano i valori (perché uno uguale è per dichiarare i valori!)

```zenscript
val test = 0;

if(test == 0){ //true
    print("Test is zero!");
}
```

## Altrimenti

Alla fine di una Dichiarazione condizionale può essere aggiunta una Dichiarazione Else-Statement per dichiarare ciò che verrà eseguito quando la condizione if-condition è uguale a false.

```zenscript
var test = 0;

if(test == 0){//true
    //verrà eseguito quando il test è uguale a 0
    print("Test is zero! );
} else {
    //verrà eseguito quando il test non è uguale a 0
    print("Il test NON è zero! );
}

test = 1
if(test == 0){//false
    //verrà eseguito quando il test è uguale a 0
    print("Now, test è zero! );
} else {
    //verrà eseguito quando il test non è uguale a 0
    print("Now, test NON è zero! );
}

```

## Cose da controllare per

I calcoli supportati sono `+`,`-`,`*`,`/`,`mod`,`concatenazione(~)`

Operandi supportati sono `OR(<unk> )`, `AND(&)`, `XOR(^)`

```zenscript
//Puoi controllare per:


//Number values
val a = 0 as int;
if(a==0){print("NumVal");

//Valori numerici calcolati
val b = 1;
val c = 5;
//Tutti valutano a true
if(b+c==6){print("Num1! );}
if(b*c==5){print("Num2!");}
if(b/c==0. ){print("Num3! );}

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", la Tilde concatena una cosa all'altra

//<unk> (OR) significa, finché uno dei criteri è soddisfatto, valuta a true
if(d=="Hello" <unk> e == "Hello"){print("OR1! );} //true
if(d=="Hello" <unk> e == "World"){print("OR2! );} //true

//^(XOR) significa, SOLO un criterio può essere rispettato, altrimenti valuta il falso
if(d=="Hello" ^ e == "Hello"){print("XOR1! );} //true
if(d=="Hello" ^ e == "World"){print("XOR2! );} //false

//&(AND) significa, entrambi i criteri devono essere rispettati, altrimenti valuta il falso
if(d=="Hello" & e == "Hello"){print("AND1! );} //false
if(d=="Hello" & e == "World"){print("AND2!");} //true
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

| Nome              | token    | Spiegazione                                                                               | Esempio           |
| ----------------- | -------- | ----------------------------------------------------------------------------------------- | ----------------- |
| Non               | `!`      | Inverte un booleano                                                                       | !false            |
| Non Uguale        | `!=`     | Controlla se il valore prima e dopo non è uguale                                          | 1 != 2            |
| Uguale            | `==`     | Controlla se il valore prima e dopo è uguale                                              | 1 == 1            |
| Maggiore di       | `>`   | Controlla se il valore prima è maggiore di dopo                                           | 1 > 2             |
| Maggiore o uguale | `>=`  | Controlla se il valore prima è maggiore o uguale con dopo                                 | 1 >= 1            |
| Poi, minore       | `<`   | Controlla se il valore prima è inferiore a dopo                                           | 1 < 2             |
| Minore o uguale   | `<=`  | Controlla se il valore prima è inferiore o uguale a dopo                                  | 1 <= 1            |
| E                 | `&`  | Verifica se entrambi i valori, prima e dopo sono veri, falsi se uno o entrambi sono falsi | vero & vero       |
| O                 | `&#124;` | Controlla se il valore prima o dopo è vero. Vero è che entrambi sono veri                 | vero \<unk> true |
| XOR               | `^`      | Controlla se il valore prima o dopo è vero, falso se entrambi o nessuno è vero            | vero ^ falso      |

## L'operatore in/has

Il `in` e il `ha` operatore controllare se qualcosa è in qualcosa.  
Per prima cosa hai bisogno della lista che vuoi controllare, poi il `in`/`ha` quindi il valore che si desidera controllare. `in` e `ha` sono la stessa parola chiave per ZS, ma nella maggior parte dei casi le persone usano `ha` per controllare se una raccolta contiene un elemento e dentro per i cicli in quanto rappresenta la grammatica inglese.

### in/has loadadedMods

Puoi controllare, se una mod viene caricata controllando se è nella lista caricata.Mods

```zenscript
//Mentre contiene i controlli possono essere utilizzati in
if(loadedMods in "mcp"){
    print("Minecraft Coder Pack caricato");
}

//La maggior parte delle persone preferisce usare ha
if(loadedMods ha "mcp"){
    print("Minecraft Coder Pack caricato");
}
```

### in/has IIngredient

Puoi anche controllare se un elemento corrisponde a una definizione confrontando due IIngredienti.  
Con questo devi essere un po' attento a non confondere le due voci:  
Questo è vero solo quando l'IIngredeint DOPO il `in` può anche essere trovato completamente in quello PRIMA il `in`.  
Nella maggior parte dei casi utilizzerai la `ha` parola chiave invece perché la sua intenzione è più chiara e fa esattamente lo stesso.

```zenscript
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}
```

Questo è solo allora vero, quando TUTTI gli oggetti corrispondenti dell'IIngrediente DOPO che il `ha` possono essere trovati anche nell'IIngrediente PRIMA `ha`: Dì che abbiamo un IIngrediente che contiene tutte le polveri (e. . polvere di pietra rossa e pietra luminosa):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts. dd(redstone, glowstone);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, e redstone è costituito solo da redstone.
if(redstone has allDusts) {

}
```