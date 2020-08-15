# CTAspect

A CTAspect is the aspect underlying an [Aspect Stack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), like an [IItemDefinition](/Vanilla/Items/IItemDefinition/) underlies an [IItemStack](/Vanilla/Items/IItemStack/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import thaumcraft.aspect.CTAspect;`

## Recupero di un tale oggetto

You can retrieve a CTAspect object from a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/) object:

```zenscript
val aspect = <aspect:ignis>.internal;
```

## ZenGetters e ZenSetters

| Nome           | isGetter | isSetter | Tipo    |
| -------------- | -------- | -------- | ------- |
| chatColo**u**r | ✔        | ✔        | stringa |
| nome           | ✔        |          | stringa |