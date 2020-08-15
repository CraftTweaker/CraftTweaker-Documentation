# Articoli Cibo

Questo ti permette di aggiungere prodotti alimentari al gioco!

## Crea la rappresentazione dell'elemento alimentare

Prima di poter aggiungere l'oggetto, è necessario creare un prodotto alimentare Rappresentazione che vi permetterà di impostare le proprietà dell'elemento che si desidera aggiungere.  
È qui che arriva il [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Importa il pacchetto di rappresentazione

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.ItemFood;`

## Espansione Rappresentazione Oggetti

La classe ItemFoodRepresentation espande [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Ciò significa che tutti i Metodi e ZenProperties che sono disponibili per gli articoli [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) sono disponibili anche per gli articoli alimentari!

## ZenProperties

Per ottenere/impostare le proprietà è possibile utilizzare ZenGetter/Setters rispettando o i ZenMethods:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Proprietà          | Tipo                                                                                            | Richiesto | Valore Predefinito | Descrizione/Note                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------- | --------- | ------------------ | ---------------------------------------------------------------------------- |
| guarigione         | int                                                                                             | Sì        |                    | Quanti punti alimentari vengono ripristinati quando mangiati?                |
| alwaysCommestibile | bool                                                                                            | No        | falso              | Il cibo può essere ancora mangiato se la barra del cibo dell'utente è piena? |
| wolfFood           | bool                                                                                            | No        | falso              | Il cibo può essere usato per domare le tessute?                              |
| saturazione        | galleggiante                                                                                    | No        | 0.6                | Il valore di saturazione del cibo                                            |
| onItemFoodEaten    | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | No        | null               | Chiamato quando il prodotto alimentare viene mangiato                        |

## Registrazione della voce

Devi chiamare questo metodo per registrare l'elemento nel gioco!  
Altrimenti non accadrà nulla!  
Dopo aver chiamato questa funzione, non è possibile annullare la registrazione dell'elemento o modificare nessuna delle sue proprietà!

```zenscript
item.register();
```