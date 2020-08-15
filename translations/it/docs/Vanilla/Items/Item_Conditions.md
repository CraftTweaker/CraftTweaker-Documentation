# Condizioni Articolo

A volte gli oggetti normali non lo taglieranno:

A volte vogliamo essere in grado di specificare ricette che funzionano solo quando l'elemento di input soddisfa alcune condizioni.

A volte vogliamo essere in grado di specificare ricette che produrranno un elemento speciale, sia con NBT-Tag o valore di Danno o altro.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.IItemCondition;`

## Condizioni Di Ingresso

Questi influenzeranno gli elementi che è possibile utilizzare per creare l'oggetto risultante. Ricorda, è possibile mescolare modificatori, per miscelare Danno e NBT-Tag, per esempio

```zenscript
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "Non siamo tutti farfalle?"}});
```

### Danno

#### anyDamage

Il valore di danno dell'elemento in ingresso non importa per la ricetta

```zenscript
item.anyDamage()
```

#### Solo Danneggiato

L'elemento in ingresso deve essere danneggiato

```zenscript
item.onlyDamaged();
```

#### Danneggiato almeno

Il valore del danno dell'elemento di input deve essere almeno il valore `specificato`  
`Valore` è un int

```zenscript
item.onlyDamageAtLeast(value);
```

#### Danno al massimo

Il valore del danno dell'oggetto in ingresso deve essere al massimo il valore `specificato`  
`Valore` è un int

```zenscript
item.onlyDamageAtMost(value);
```

#### Danno tra

Il valore del danno dell'elemento di input deve essere compreso tra il `valore specializzato 1` e `valore2`  
`Valore1` è un int  
`Valore2` è un int

```zenscript
item.onlyDamageBetween(value1, value2);
```

### Ottieni gli articoli indietro o vieta esplicitamente la riutilizzabilità di un articolo

A volte avete bisogno di una ricetta in cui si ottiene alcuni dei vostri elementi di input indietro.  
Applicando `transformDamage(int)` puoi creare tali ricette.

#### transformDamage

L'elemento in ingresso riceverà `valore` punti di danno e lo otterrai indietro, a meno che non si rompa durante il processo di creazione.  
`Valore` è un int

```zenscript
item.transformDamage(value);
```

### NBT-Tags

A volte vuoi che i tuoi ingredienti abbiano bisogno di una specifica NBT-Tag. La ricetta non importa se il tuo articolo ha NBT-Tags diversi da quelli specificati, Così un piccone con un lore specifico può anche essere incantato!

Se si utilizza `withTag` jei verrà visualizzato correttamente, se si utilizza `soloWithTag`, jei mostrerà solo un elemento senza tag!

Ecco come si fa: `NBTTag` è il tuo dati NBT

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}});
```

## Modificatori di output

Se è possibile specificare le condizioni di input, non è così difficile definire anche le condizioni di output, o meglio, i modificatori di output.

### Danno

Il tuo oggetto in uscita avrà `valore` punti di danno.  
`Valore` è un int.

```zenscript
item.withDamage(value);
```

### NBT-Tags

Il tuo articolo in uscita avrà `NBTTag` come NBT-Tag.  
`NBTTag` è il tuo dati NBT

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickleberry"}})
```

## Registrazione delle condizioni della propria voce

Puoi anche aggiungere i tuoi oggettiCondizioni. Queste sono funzioni speciali che accettano lo stesso articolo [](/Vanilla/Items/IItemStack/) come singolo parametro.

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

La funzione deve restituire un branco che è vero se l'elemento corrisponde alla condizione.