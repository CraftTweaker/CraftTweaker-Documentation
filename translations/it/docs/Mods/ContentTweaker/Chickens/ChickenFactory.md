# ChickenFactory

Il ChickenFactory consente di creare [polli personalizzati](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) per il gioco.  
Nota che questo modulo è una funzionalità aggiunta alla [Chickens mod by setycz](https://minecraft.curseforge.com/projects/chickens), quindi questo modulo è disponibile solo se questa mod è caricata.

## Importazione del pacchetto

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Creazione polli

Prima di tutto, è necessario creare una [rappresentanza di pollo](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
Questo è essenzialmente un modello vuoto di quello che diventerà il tuo pollo.  
Questo metodo restituisce un [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) object, prendendo i seguenti parametri:

- Nome della stringa: il nome dell’entità del pollo, utilizzato per i modelli e il registro delle entità.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: The color, the chicken will have.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: L'oggetto che il pollo deporrà più tardi.

```zenscript
ChickenFactory.createChicken(nome stringa, colore CTColor, elemento IItemStack);
```

## Script Di Esempio

```zenscript
#loader contenttweaker
#modloaded polli

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```