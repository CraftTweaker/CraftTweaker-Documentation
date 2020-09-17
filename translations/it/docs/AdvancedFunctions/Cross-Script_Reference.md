# Riferimento Cross-Script

Tutti gli script che hanno [variabili statiche](/AdvancedFunctions/Global_Static_Variables/) o [funzioni personalizzate](/AdvancedFunctions/Custom_Functions/) sono registrati nel riferimento cross-script.  
Questo consente di accedere a questi campi/funzioni utilizzando la notazione di punti.

## Specifiche

- I riferimenti cross-script iniziano con `scripts.`
- Si specifica il percorso relativo dalla cartella script (es. `scripts.mySubfolder.a.zs`)
- È possibile utilizzare la notazione punto in una dichiarazione di importazione [](/AdvancedFunctions/Import/) se si sceglie di farlo.
- ZS prima controlla per le directory corrispondenti quindi per i file o i valori corrispondenti.

## Esempio

Diciamo che abbiamo due script: `a.zs` e `b.zs`.

a.zs:

```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```