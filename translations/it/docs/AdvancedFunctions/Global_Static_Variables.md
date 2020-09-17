# Variabili globali e statiche

Certo che sei stato nella situazione in cui hai dichiarato la stessa variabile in ogni script più e più volte.  
"Perché non c'è modo di renderli disponibili in ogni script?" È quello che è passato attraverso la tua testa in questi momenti.

Siate sollevati ora perché ci è stato aggiunto un mezzo per dichiarare e accedere a valori globali e scriptbound (statici)!  
Non possono essere cambiati, però.

## Differenza tra statica e globale

Sia le statiche che i globali sono legati agli script e sono istanziati prima che lo script venga eseguito.  
Entrambi non possono essere cambiati.  
La differenza è come vengono chiamati:  
Globali possono essere chiamati da ovunque semplicemente con il loro nome a meno che non si dispone già di una variabile locale che ha lo stesso nome.  
Statica d'altra parte, è necessario utilizzare il [cross-script di riferimento](/AdvancedFunctions/Cross-Script_Reference/) per essere accesso.

I globali vengono creati usando la parola chiave `global` .  
Le statiche vengono create usando la parola chiave `statica`.

A parte questo, sono identici!

## Dichiarare un valore globale

Dichiarare un valore globale è semplice come dichiarare un valore locale:

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

Ok, facciamo rompere, noi?

1. `parola chiave globale` che indica la dichiarazione di un valore globale
2. `myGlobalValue` il nome del valore
3. `come IItemStack` il tipo del valore (si consiglia di [importare](/AdvancedFunctions/Import/) i tipi prima di lanciare la variabile)
4. `= <minecraft:dirt>;` inizializzazione valore. Poiché i valori globali sono finali, è necessario inizializzarli mentre li dichiara!

## Parole di consulenza

- È possibile accedere solo globali che sono già stati dichiarati. Utilizzare il [Preprocessore di priorità](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) per assicurarsi che gli script in cui vengono dichiarati globali siano eseguiti prima.
- I globali non possono essere dichiarati negli script che sono dentro le sottocartelle! Si compilerà ma si sarà lasciato con una enorme FieldNotFound Exception.
- Mentre è tecnicamente possibile omettere la `come` parte, si raccomanda di lasciarlo dentro, in quanto l'interfaccia IAny non è ancora pienamente funzionante. Inoltre, rende la tua dichiarazione più chiara per le persone che leggono/debug il tuo script!
- Le variabili locali/valori CAN overshadow le variabili globali. Lo script cercherà sempre lo scopo più interno per le variabili e uscirà fino a quando non colpisce globale durante la ricerca di parole chiave!