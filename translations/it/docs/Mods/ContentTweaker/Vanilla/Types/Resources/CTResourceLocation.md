# CTResourceLocation

Un oggetto di posizione risorsa viene utilizzato per raccontare a minecraft dove trovare qualcosa. Si compone di un dominio e di un percorso.

## Chiamata/Importazione del pacchetto

Se non si desidera digitare il nome intero del pacchetto ogni volta che si utilizza un metodo statico o se si incontrano problemi con la classe in generale, potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe:  
`mod di importazione. ontenttweaker.ResourceLocation`

## ZenMethods

### Metodi statici: Crea

I metodi statici sono quelli che sono chiamati sul pacchetto stesso, non su alcun oggetto specifico di questa istanza.  
Puoi usare questo metodo per creare una nuova istanza CTResourceLocation:

```zenscript
var istanza = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters

ZenGetters sono chiamati su un oggetto, non sul pacchetto stesso

```zenscript
print(myLocation.domain);
```

| ZenGetter | Tipo    |
| --------- | ------- |
| dominio   | stringa |
| percorso  | stringa |