# MCLivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingKnockBackEvent;
```


## Extending MCLivingEvent

MCLivingKnockBackEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingKnockBackEvent

## Proprietà

| Nome           | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ------ | --------- | --------- | ----------------------- |
| originRatioX   | double | sì        | no        | No Description Provided |
| originRatioZ   | double | sì        | no        | No Description Provided |
| originStrength | float  | sì        | no        | No Description Provided |
| ratioX         | double | sì        | sì        | No Description Provided |
| ratioZ         | double | sì        | sì        | No Description Provided |
| strength       | float  | sì        | sì        | No Description Provided |

