# IEntityAttribute

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter          | GetterMethod      | Tipo Di Reso     |
| ------------------ | ----------------- | ---------------- |
| nome               | getName()         | stringa          |
| valore predefinito | getDefaultValue() | doppia           |
| shouldWatch        | getShouldWatch()  | boolean          |
| genitore           | getParent()       | IEntityAttribute |

## Più ZenMethods

- doppia clampValue(doppio valore) → Fa qualcosa...