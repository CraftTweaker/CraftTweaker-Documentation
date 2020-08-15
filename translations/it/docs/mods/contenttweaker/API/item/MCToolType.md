# MCToolType

Un tipo di strumento è usato per identificare che tipo di blocchi uno strumento può mio, o inversamente, che tipo di strumento è necessario per estrarre un determinato blocco.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Interfacce Implementate
MCToolType implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Costruttori
Costruisce un oggetto Tipo di strumento. Se uno con il nome dato esiste già, indicheranno internamente lo stesso tipo di strumento. Altrimenti, viene creato un nuovo nome (Lo stesso vale anche per le parentesi!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Parametro | Tipo    | Descrizione      |
| --------- | ------- | ---------------- |
| nome      | Stringa | Il nome da usare |



## Metodi
### getName

Ottiene il nome di questo toolType. The name is what is used in the Bracket expression after the `<tooltype:`

Tipo di ritorno: Stringa

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Restituisce il codice hash dell'oggetto

Tipo di restituzione: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Ottieni la rappresentazione stringa di questo tipo. È diverso dalla Stringa di comando!

Tipo di ritorno: Stringa

```zenscript
<tooltype:pickaxe>.toString();
```


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |
| nome          | Stringa | vero      | falso     |

## Operatori
### EQUALI

Confronta se due oggetti MCToolType dati sono uguali

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| Parametro | Tipo    | Descrizione     |
| --------- | ------- | --------------- |
| o         | Oggetto | L'altro oggetto |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | falso     |

