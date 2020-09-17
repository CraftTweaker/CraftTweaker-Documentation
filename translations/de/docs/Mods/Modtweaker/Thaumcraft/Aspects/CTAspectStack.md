# CTAspectStack

Ein CTAspectStack ist ein [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) kombiniert mit einem Betrag, der zeigt, wie viele Aspektspunkte der Stapel erhalten wird.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`thaumcraft.aspect.CTAspectStack;`

## Ein solches Objekt wird abgerufen

Sie können ein CTAspectStack Objekt vom [CTAspectStack Bracket Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/) Objekt abrufen:

```zenscript
val Aspekt = <aspect:ignis>;
```

## ZenGetter

| Name    | Type                                                      |
| ------- | --------------------------------------------------------- |
| beträge | int                                                       |
| intern  | [KTAspekt](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Betrag einstellen

```zenscript
//Sie geben beide einen neuen CTAspectStack
val aspect = <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10);
```