# Crea Elemento
Creazione di elementi personalizzati per l'alchimia

# Pacchetto
`mods.alchimia.Util.createElement`
## Caricatore
Questo deve essere caricato con `#loader alchemistry`

## Metodi
- **int atomicNumber** ID for new Element
- **Nome stringa** Nome nuovi elementi
- **Abbrebiation string** New Elements Abbrebiation
- **int red** Element red shade, RGB
- **int green** Element green shade, RGB
- **int blue** Element blue shade, RGB

## Creazione
```zenscript
mods.alchimia.Elemento di util.creement(int atomicNumber, nome della stringa, abbreviazione della stringa, int rosso, int verde, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Note

- Si prega di utilizzare nomi minuscoli
- I numeri atomici preesistenti non possono essere sovrascritti
- La linea '#loader alchemistry' è richiesta nella parte superiore del file. Questo file può essere usato solo per creare elementi e composti, altre ricette devono essere inserite in altri file.
- NOTA: A partire da v1.0.2, il caricatore di risorse mod deve essere usato per includere l'immagine e il modello json per elementi personalizzati. Se si desidera generare automaticamente queste risorse ho creato un programma JAR da riga di comando [qui](https://github.com/al132mc/alchemistry-resource-creator/releases) per farlo.
