# `Matematica`

`Matematica` è la classe contenitore per una serie di funzioni matematiche di base. Fare riferimento alla pagina [Concept](/Mods/Boson/Math/Concept/) per maggiori informazioni.

## Dettagli Classe
Facendo parte del Progetto ZenScriptX, il nome pienamente qualificato per la classe è `zenscriptx.math.Math`.

## Creare una nuova istanza
Poiché questa classe è solo un detentore di funzioni matematiche, è impossibile creare una nuova istanza. Piuttosto, tutti i metodi dovrebbero essere invocati sulla classe stessa.

## Metodi
Per risparmiare spazio, i metodi saranno presentati in una singola snippet, raggruppati in base al tipo di operazione che eseguono con un commento sopra delineando ciò che il metodo dovrebbe fare e qualsiasi altra condizione che dovrebbe essere tenuta in considerazione quando si utilizza il metodo. Inoltre, più metodi possono essere raggruppati se sono vicini sovraccarichi uno degli altri (i. fanno la stessa cosa, ma hanno argomenti diversi o tipi di restituzione).

```zenscript
# questo metodo fa qualcosa
metodo funzione (argomento come doppio, argument2 come bool) come doppio;
metodo funzione (argomento come float, argument2 come bool) come float;

# questo metodo fa qualcos'altro, e può restituire null
function method2() come bool?;
```

### Costanti Matematici
Questi metodi consentono di accedere a notevoli costanti matematiche che possono essere utilizzate in altre operazioni, se necessario. La loro precisione è la più grande precisione possibile in base alla rappresentazione usata all'interno dei computer (i. . il numero più preciso rappresentato con un `doppio`).

```zenscript
# Ottiene il valore di PI, che è il rapporto di una circonferenza di un cerchio al suo diametro, approssimativamente 3. 4159
function pi() as double;

# Ottenere il valore di E, che è la base del logaritmo naturale, circa 2. 1828
function e() as double;
```

### Funzioni Trigonometriche
Le funzioni trigonometriche sono funzioni che funzionano con gli angoli e le relazionano al rapporto di due lunghezze laterali di un triangolo a destra , insieme a tutte le loro funzioni inverse.

```zenscript
# calcola il seno dell'angolo passato, che DEVE essere in RADIANS
funzione sin(x come doppio) come doppio;
function sin(x as float) as float;

# calcola il seno dell'angolo passato, che DEVE essere in DEGREES
funzione sind(x come doppio) come doppio;
funzione sind(x come float) come float;

# calcola il coseno dell'angolo passato, che DEVE essere in RADIANS
funzione cos(x doppio) come doppio;
funzione cos(x come float) come float;

# calcola il coseno dell'angolo passato, che DEVE essere in DEGREES
funzione cosd(x come doppio) come doppio;
funzione cosd(x come float) come float;

# calcola la tangente dell'angolo passato, che DEVE essere nella funzione RADIANS
tan(x come doppio) come doppio;
funzione tan(x come float) come float;

# calcola la tangente dell'angolo passato, che DEVE essere in DEGREES
funzione tanda (x come doppio) come doppio;
funzione tand(x come galleggiante) come galleggiante;

# calcola il seno dell'arco del valore dato, restituendo un valore tra -PI/2 e i radianti PI/2
funzione asin(x come doppio) come doppio;
funzione asin(x come float) come float;

# calcola il seno dell'arco del valore dato, restituendo un valore compreso tra -90 e 90 gradi
funzione asind(x come doppio) come doppio;
funzione asind(x come float) come float;

# calcola il coseno dell'arco del valore dato, restituendo un valore compreso tra 0 e radianti PI
funzione acos(x come doppio) come doppio;
funzione acos(x come float) come float;

# calcola il coseno dell'arco del valore dato, restituendo un valore compreso tra 0 e 180 gradi
funzione acosd(x come doppio) come doppio;
funzione asind(x come float) come float;

# calcola la tangente dell'arco del valore dato, restituendo un valore tra -PI/2 e i radianti PI/2
funzione atan(x come doppio) come doppio;
funzione atan(x come float) come float;

# calcola la tangente dell'arco del valore dato, restituendo un valore compreso tra -90 e 90 gradi
funzione atand(x come doppio) come doppio;
funzione atand(x come float) come float;

# Calcola 'th' delle coordinate polari '(r, th)' che corrispondono alle coordinate rettangolari '(x, y)' calcolando la tangente ad arco del valore 'y/x', restituendo un valore tra -pi e pi radianti
funzione atan2(y come doppio, x come doppio) come doppio;
funzione atan2(y come float, x come float) come float;
```

### Funzioni Iperboliche
Le funzioni iperboliche sono analoghi delle funzioni trigonometriche, definite per un iperbola, piuttosto che su un cerchio.

```zenscript
# calcola il seno iperbolico del valore dato
function sinh(x as double) as double;
function sinh(x as float) as float;

# calcola il coseno iperbolico del valore dato
funzione cosh(x come doppio) come doppio;
funzione cosh(x come float) come float;

# Calcola la tangente iperbolica del valore dato
funzione tanh(x come doppio) come doppio;
funzione tanh(x come float) come float;

# calcola il seno iperbolico inverso del valore dato
funzione asinh(x come doppio) come doppio;
funzione asinh(x come float) come float;

# Calcolare il coseno iperbolico inverso del valore dato, restituendo SEMPRE un risultato positivo
funzione acosh(x come doppio) come doppio;
funzione acosh(x come float) come float;

# Calcola la tangente iperbolica inversa del valore dato
funzione atanh(x come doppio) come doppio;
funzione atanh(x come float) come float;
```

### Funzioni Triangolo Angolato Destro
Queste sono alcune funzioni aggiuntive che possono essere calcolate su un triangolo rettangolare, in aggiunta alle funzioni trigonometriche , ma che non operano sugli angoli del triangolo.

```zenscript
# Calcola la lunghezza dell'ipotenuso del triangolo con il teorema di Pitagora, assicurarsi che non si verifichino overflow o underflow durante la funzione di calcolo
hypot(x come doppio, y come doppio) come doppio;
funzione hypot(x come float, y come float) come float;
```

### Poteri e Radici
Queste funzioni permettono di calcolare i poteri e le radici in modo più rapido ed efficiente rispetto al metodo standard delle moltiplicazioni o della successiva sottrazione.

```zenscript
# calcola la radice quadrata positiva del valore dato
funzione sqrt(x come doppio) come doppio;
funzione sqrt(x come float) come float;

# calcola la radice quadrata negativa del valore dato
funzione nsqrt(x come doppio) come doppio;
funzione nsqrt(x come float) come float;

# Quadrati il valore dato
funzione sq(x come doppio) come doppio;
funzione sq(x come float) come float;

# Aumenta il valore base dato all'exp esponente
funzione pow(base come doppio, exp come doppio) come doppio;
funzione pow(base doppia, exp come int) come doppio;
funzione pow(base come float, exp come float) come float;
funzione in polvere(base come galleggiante, exp come int) come galleggiante;
```

### Exponential Functions
Una funzione esponenziale è una funzione che assume la forma di `y = a * b^x`.

```zenscript
# calcola il numero (e) di Euler elevato alla potenza della funzione x
exp(x come doppio) come doppio;
function exp(x come float) come float;

# Calcola la funzione 'exp(x) - 1', con una migliore precisione per i numeri che sono più vicini a zero
funzione expm1(x come doppio) come doppio;
funzione expm1(x come float) come float;
```

### Funzioni Logaritimiche
Una funzione logaritmica, comunemente nota come logaritmo, è la funzione inversa della funzione esponenziale. Differentemente dalle altre funzioni, un logaritmo è definito secondo una base, che rappresenta il numero che deve essere elevato al potere risultante per ottenere l'argomento del logaritmo stesso.

```zenscript
# calcola il logaritmo di x alla funzione
di base data logn(x come doppio, base come doppia) come doppia;
function logn(x as float, base as float) as float;

# Calcola il logaritmo naturale del valore dato, i. . il logaritmo di x alla base e (numero di Euler)
funzione ln(x come doppio) come doppio;
funzione ln(x come float) come float;

# calcola il logaritmo comune del valore dato, cioè il logaritmo di x alla funzione base 10
log10(x come doppio) come doppio;
funzione log10(x come float) come float;

# calcola il logaritmo binario del valore dato, cioè il logaritmo di x alla funzione base 2
log2(x come doppio) come doppio;
log2(x come float) come float;

# calcola 'ln(1 + x)', con una migliore precisione per i numeri che sono più vicini a zero
funzione ln1p(x come doppio) come doppio;
funzione ln1p(x come float) come float;
```

### Funzioni di arrotondamento
Una funzione di arrotondamento è una funzione che mappa un numero reale a un numero intero specifico secondo un insieme di regole, a seconda della funzione.

```zenscript
# Arrotonda il valore dato verso l’infinito positivo, restituire il numero reale più piccolo che è maggiore o uguale a x ed è un intero matematico
soffitto funzione (x doppio) come doppio;
funzione soffitto (x come float) come galleggiante;

# Arrotonda il valore dato verso l’infinito positivo, restituendo il numero intero più piccolo che è maggiore o uguale a x
funzione ceili(x come doppio) come int;
funzione ceili(x come float) come int;

# Arrotonda il valore dato verso l'infinito positivo, restituendo il numero intero più piccolo che è maggiore o uguale a x, espanso al numero intero più grande rappresentabile
funzione ceill(x come doppio) più lungo;
funzione ceill(x come galleggiante) lunga;

# Arrotonda il valore dato verso l'infinito negativo, restituire il numero reale più grande che è inferiore o uguale a x ed è un intero matematico
funzione floor(x come doppio) come doppio;
funzione floor(x come float) come float;

# Arrotonda il valore dato verso l'infinito negativo, restituendo il numero intero più grande che è inferiore o uguale a x
funzione floori(x come doppio) come int;
funzione floori(x come float) come int;

# Arrotonda il valore dato verso l'infinito negativo, restituendo il numero intero maggiore che è inferiore o uguale a x, esteso al più grande numero intero rappresentabile
funzione floorl(x come doppio) più lungo;
funzione floorl(x come float) lunga;

# Arrotonda il valore dato verso zero, troncando efficacemente la parte frazionaria e restituendo un intero matematico
funzione truncate(x come doppio) come doppio;
funzione truncate(x come float) come float;

# Rounds the given value towards the close mathematical integer, with a bias towards even numbers
function round(x as double) as double;
funzione round(x come float) come float;

# Arrotonda il valore dato verso l'intero più vicino, con una distorsione verso numeri pari
funzione roundi(x come doppio) come int;
funzione roundi(x come float) come int;

# Arrotonda il valore dato verso l'intero più vicino, con una distorsione verso numeri pari, ed espandendo il risultato al numero intero più grande rappresentabile
funzione roundl(x come doppio) più lungo;
funzione roundl(x come float) lunga;
```

### Funzioni Basate Su Segnali
Queste funzioni operano per lo più o esclusivamente sul segno dell'argomento.

```zenscript
# Restituisce il valore assoluto del valore dato
function abs(x as double) as double;
function abs(x as float) as float;
function abs(x as int) as int;
function abs(x as long) as long;

# Restituisce il segno del valore dato come numero: -1 per i numeri negativi, 0 per zero, 1 per i numeri positivi
segnale di funzione (x come doppio) come doppio;
funzione sign(x as float) as float;
funzione sign(x as int) as int;
funzione sign(x as long) as long;
```

### Funzioni Di Confronto
Queste funzioni raffrontano i vari argomenti e restituiscono solo uno secondo un certo insieme di regole.

```zenscript
# Restituisce il più piccolo dei due valori dati
function min(a as double, b as double) as double;
function min(a as float, b as float) as float;
function min(a as int, b as int) as int;
function min(a as long, b as long) as long;

# Restituisce il più grande dei due valori dati
funzione max(una doppia, b doppia) come doppia;
funzione max(a come float, b come float) come float;
funzione max(a come int, b come int) come int;
funzione max(a lunga, b lunga) più lunga;

# Blocca il valore x dato tra due limiti, restituendo effettivamente min se x è più piccolo di min, max se x è più grande del massimo, x altrimenti
pinza funzione (x come doppio, min come doppio, max come doppio) come doppio;
pinza funzione (x come galleggiante, min come galleggiante, max come galleggiante) come galleggiante;
pinza funzione (x come int, min come int, max come int) come int;
pinza funzione (x lunga, min lunga, max lunga) lunga;
```

### Funzioni Rimanenti
Queste funzioni calcolano il resto tra due argomenti secondo una serie di regole.

```zenscript
# calcola il resto della divisione tra valore e div secondo lo standard IEEE 754: 'r = valore - (round(value / div) * div)'
funzione rem(value as double, div come doppio) come doppio;
function rem(value as float, div as float) as float;
```

