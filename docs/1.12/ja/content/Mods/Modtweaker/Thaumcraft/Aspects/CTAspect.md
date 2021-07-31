# CTAspect

A CTAspect is the aspect underlying an [Aspect Stack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), much like an [IItemDefinition](/Vanilla/Items/IItemDefinition/) underlies an [IItemStack](/Vanilla/Items/IItemStack/).

## パッケージのインポート

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import thaumcraft.aspect.CTAspect;`

## Retrieving such an object

You can retrieve a CTAspect object from a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/) object:

```zenscript
val aspect = <aspect:ignis>.internal;
```

## ZenGetters and ZenSetters

| 名称             | isGetter | isSetter | Type   |
| -------------- | -------- | -------- | ------ |
| chatColo**u**r | ✔        | ✔        | string |
| name           | ✔        |          | string |