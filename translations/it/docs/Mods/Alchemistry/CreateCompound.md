# Crea Composto
Generazione Di Composti Alchimica Personalizzata

# Pacchetto
```zenscript
mods.alchimia.Util.createCompound
```

## Caricatore
Questo deve essere caricato con `#loader alchemistry`

## Metodi
- **int meta** meta for new Compund
- **Nome della stringa** Nome della nuova compagine
- **int red** compound red shade, RGB
- **int green** compound green shade, RGB
- **int blu** composto blu ombra, RGB
- **Object[][]** Ogni parentesi contiene un elemento diverso seguito da una virgola e la quantità da usare nel tuo composto

## Creazione
```zenscript
mods.alchimia.Util.createCompound(int meta, Nome string, int rosso, int verde, int blu, Object[][] componenti);

mods.alchemistry.Util.createCompound(1000, "sufide di vibranio", 20, 69, 185,
[["vibranium", 1],
 ["zolfo", 3]]);
```

## Note
- Si prega di utilizzare nomi minuscoli
- La linea '#loader alchemistry' è richiesta nella parte superiore del file. Questo file può essere usato solo per creare elementi e composti, altre ricette devono essere inserite in altri file.
- Il campo componenti richiede che ogni voce sia un array come così ["cellulosa", 5], che indica l'elemento/composto ed è quantità. Gli argomenti delle stringhe sono utilizzati qui piuttosto che itemstacks per garantire che vengano utilizzati solo elementi/composti.
- Il meta campo è necessario per garantire che i nuovi composti abbiano un identificatore immutabile anche quando altri composti vengono creati o rimossi. Ogni composto deve avere un valore meta unico. Al momento di questa scrittura, la mod utilizza solo i valori meta da circa 0 a 35, ma inizierei a numerare il vostro meta a 1000 (come visto sopra) o superiore per garantire che i vostri composti personalizzati non si scontrano mai con le ricette interne di Alchemistry
