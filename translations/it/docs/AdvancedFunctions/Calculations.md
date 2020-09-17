# Calcoli

A volte digitando numeri non lo taglierà. A volte avete bisogno di un po' di calcolo.  
Ricorda che puoi usare più di due numeri a uno, `1+1+1+1` funzionerebbe bene.

## Una parola di consiglio

Quando i risultati inaspettati accadono in un calcolo, è molto possibile che avete usato due tipi diversi.  
Per esempio `13 % 6.5` restituisce 1, anche se il risultato corretto è 0. Perché? ZenScript esegue sempre i suoi calcoli con due variabili dello stesso tipo. Per questo, converte il secondo tipo per abbinare il primo. In questo esempio, il calcolo effettuato è stato `13 % 6`, come 2° numero (un doppio) è stato convertito per abbinare il primo (un Intero).

Faccia sempre attenzione a quali due tipi di variabile usi e in caso di dubbio, basta usare una funzione di stampa per stampare l'output nel registro e confermare i risultati.

## Operatori Arithmetic

Sono abbastanza sicuro che tutti voi sapete già questi, vero?

| Token | Tokenassign | Funzione        | Esempio |
| ----- | ----------- | --------------- | ------- |
| `+`   | `+=`        | Addizione       | 1+2     |
| `-`   | `-=`        | Substrazione    | 2-1     |
| `*`   | `*=`        | Moltiplicazione | 1*1     |
| `/`   | `/=`        | Divisione       | 2/2     |
| `%`   | `%=`        | Modulo          | 13 % 6  |

## Concatenazione

Mette una cosa alla e dell'altra

```zenscript
//Stampa "Ciao Mondo"
print("Ciao" ~ " " ~ "Mondo");
```

## Risultati del calcolo

Un calcolo di solito finisce con un risultato. Che cosa fare con quello?

### Assegnare una variabile

Ci sono due modi per assegnare un valore a una variabile:

```zenscript
var test = 0;

//Opzione 1:
//assegna test con il valore 3 (1+2)
test = 1+2;

//Opzione 2:
//assegna il test con 5 (3+2)
test = test + 2;

//Opzione 3:
//assegna il test con 2 (5-3)
test -= 3;
```

Le opzioni 1 e 2 assegnano la variabile di ritorno usando il token `=` .  
Questo è probabilmente il modo più semplice per i principianti e l'unico modo se si desidera assegnare una variabile non utilizzata nel calcolo.

L'opzione 3 assegna la variabile prima del `-=` con il risultato di una normale sottrazione.  
Tutti gli operatori di questa pagina hanno i rispettivi token di assegnazione, controlla la tabella qui sopra.

### Usare altrimenti il risultato

È sempre possibile utilizzare il risultato di un calcolo in una funzione o in una dichiarazione condizionale:

```zenscript
//prints 4
print(3+1);

//rimuove l'elemento sull'array[4]
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("Usato un calcolo!")}
```