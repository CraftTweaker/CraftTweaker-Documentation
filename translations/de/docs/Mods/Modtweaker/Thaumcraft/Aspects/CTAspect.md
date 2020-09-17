# KTAspekt

Ein CTAspect ist der Aspekt, der einem [Aspect Stack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/)zugrunde liegt, ähnlich wie ein [IItemDefinition](/Vanilla/Items/IItemDefinition/) einem [IItemStack](/Vanilla/Items/IItemStack/) zugrunde liegt.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`thaumcraft.aspect.CTAspect;`

## Ein solches Objekt wird abgerufen

Du kannst ein CTAspect Objekt von einem [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/) Objekt abrufen:

```zenscript
val aspect = <aspect:ignis>.internal;
```

## ZenGetters und ZenSetter

| Name           | isGetter | isSetter | Type   |
| -------------- | -------- | -------- | ------ |
| chatColo**u**r | ✔        | ✔        | string |
| name           | ✔        |          | string |