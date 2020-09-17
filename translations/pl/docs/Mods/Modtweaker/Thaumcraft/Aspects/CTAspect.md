# CTAspect

CTAspect to aspekt leżący u podstaw [Stosu Aspektów](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), podobnie jak [IItemDefinition](/Vanilla/Items/IItemDefinition/) jest podstawą [IItemStack](/Vanilla/Items/IItemStack/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj thaumcraft.aspect.CTAspect;`

## Pobieranie takiego obiektu

Możesz pobrać obiekt CTAspect z obiektu [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/):

```zenscript
boczny wymiar = <aspect:ignis>.internal;
```

## ZenGetters i ZenSetters

| Nazwisko       | isGetter | isSetter | Typ         |
| -------------- | -------- | -------- | ----------- |
| chatColo**u**r | ✔        | ✔        | ciąg znaków |
| Nazwa          | ✔        |          | ciąg znaków |