# Scheda Creativa

Questo ti permette di aggiungere Schede Creative al gioco!

## Creazione dell'oggetto ICreativeTab

Prima di poter aggiungere la scheda, è necessario creare una rappresentazione che ti permetterà di impostare le proprietà della scheda che vuoi aggiungere.  
È qui che arriva il [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier);
```

La stringa è in ciascuno dei tre metodi lo stesso: è il nome non localizzato che la scheda avrà in seguito.  
Il secondo parametro è il simbolo che la scheda porterà avanti (e. . un secchio di lava per "misc").  
È possibile decidere wheter che si desidera utilizzare un itemRappresentation, un itemStack, una blockrepresentation o un itemStackSupplier funzione.

## Chiamare un oggetto ICreativeTab esistente

Puoi anche chiamare una scheda [creativa](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) esistente, anche se non puoi cambiare nessuna delle sue proprietà.  
Perché ti serve questo, chiedi?  
Ne avrai bisogno se vuoi aggiungere un blocco o un elemento appena creato a una scheda esistente!

## Proprietà

È possibile chiamare e impostare tutte queste proprietà utilizzando la normale scheda ZenGetters e ZenSetters  
`. nlocalizedName = "hh";`  
Nota che probabilmente non avrai mai bisogno degli Setters poiché queste Proprietà sono già inizializzate ai valori desiderati quando crei l'oggetto ICreativeTab.  
Anche, non puoi impostare né ottenere proprietà da un ICreativeTab(uno che hai recuperato usando il gestore [parentesi](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| Nome Proprietà    | Tipo                                                                                                    | Richiesto | Valore Predefinito | Descrizione/Note              |
| ----------------- | ------------------------------------------------------------------------------------------------------- | --------- | ------------------ | ----------------------------- |
| unlocalizedName   | stringa                                                                                                 | SÌ        |                    | Il nome della scheda creativa |
| iconStack         | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | SÌ/NO     |                    | L'icona della scheda creativa |
| iconStackSupplier | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | NO/SÌ     | null               | Determina qualcosa?           |

## Registrazione della scheda creativa

Devi chiamare questo metodo per registrare la scheda creativa nel gioco!  
Altrimenti non accadrà nulla!  
Dopo aver chiamato questa funzione, non è possibile annullare la registrazione della scheda o modificare nessuna delle sue proprietà!

```zenscript
tab.register();
```

## Script Di Esempio

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```