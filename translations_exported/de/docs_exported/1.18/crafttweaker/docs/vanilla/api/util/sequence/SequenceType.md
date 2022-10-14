# SequenceType

Represents the type of 'actor' a [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt; acts on and is used to ensure that [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt;s are ticked correctly.

 Some examples are a [Level](/vanilla/api/world/Level) or a [LivingEntity](/vanilla/api/entity/LivingEntity) (which is not yet implemented).

 Mods adding custom sequenceable actors (really anything that can be ticked) should make their own SequenceType and expose it to ZenScript.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.sequence.SequenceType;
```


## Static Properties

| Name                  | Type                                                    | Has Getter | Has Setter | Beschreibung                                                                              |
| --------------------- | ------------------------------------------------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------- |
| CLIENT_THREAD_LEVEL | [SequenceType](/vanilla/api/util/sequence/SequenceType) | true       | false      | The type of the CLIENT_THREAD_LEVEL sequence which is only ticked on the server thread. |
| SERVER_THREAD_LEVEL | [SequenceType](/vanilla/api/util/sequence/SequenceType) | true       | false      | The type of the SERVER_THREAD_LEVEL sequence which is only ticked on the server thread. |

## Methoden

:::group{name=name}

Gets the name of the sequence type.

Returns: The name of the sequence type.  
Return Type: string

```zenscript
// SequenceType.name() as string

SequenceType.SERVER_THREAD_LEVEL.name();
```

:::


## Properties

| Name | Type   | Has Getter | Has Setter | Beschreibung                        |
| ---- | ------ | ---------- | ---------- | ----------------------------------- |
|      | string | true       | false      | Gets the name of the sequence type. |

